import { SHEETS_CONFIG } from '../config/sheetsConfig';
import { ROOMS_DATA, RoomPlan } from '../data/rooms';
import { GALLERY_DATA, GalleryImage } from '../data/gallery';
import { AMENITIES_DATA, AmenityItem } from '../data/amenities';
import { PROPERTY_DATA, PropertyInfo } from '../data/property';

/**
 * Default fallback weekly menu board photo if owner hasn't added one yet
 */
export const DEFAULT_MENU_PHOTO = "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1400&q=80";

/**
 * Converts Google Drive sharing links into direct high-speed image URLs
 */
export function normalizeImageUrl(url: string): string {
  if (!url) return '';
  const cleanUrl = url.trim();

  // If already a standard image URL or local path
  if (cleanUrl.startsWith('/') || cleanUrl.includes('images.unsplash.com')) {
    return cleanUrl;
  }

  // Handle Google Drive file links
  // e.g. https://drive.google.com/file/d/1A2B3C.../view?usp=sharing
  const driveFileMatch = cleanUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveFileMatch && driveFileMatch[1]) {
    return `https://drive.google.com/thumbnail?id=${driveFileMatch[1]}&sz=w1600`;
  }

  // e.g. https://drive.google.com/open?id=1A2B3C...
  const driveIdMatch = cleanUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (driveIdMatch && driveIdMatch[1]) {
    return `https://drive.google.com/thumbnail?id=${driveIdMatch[1]}&sz=w1600`;
  }

  return cleanUrl;
}

/**
 * Robust CSV parser that correctly handles quoted values with commas & line breaks
 */
function parseCSV(text: string): string[][] {
  const result: string[][] = [];
  let row: string[] = [];
  let currentVal = '';
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentVal += '"';
        i++; // skip escaped quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      row.push(currentVal.trim());
      currentVal = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // skip \r\n
      }
      row.push(currentVal.trim());
      if (row.some(cell => cell.length > 0)) {
        result.push(row);
      }
      row = [];
      currentVal = '';
    } else {
      currentVal += char;
    }
  }

  if (currentVal.length > 0 || row.length > 0) {
    row.push(currentVal.trim());
    if (row.some(cell => cell.length > 0)) {
      result.push(row);
    }
  }

  return result;
}

/**
 * Fetch raw CSV string for a specific sheet tab
 */
async function fetchSheetCSV(sheetId: string, sheetName: string): Promise<string[][] | null> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
    const response = await fetch(url);
    if (!response.ok) return null;
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.warn(`[Google Sheets] Could not fetch tab "${sheetName}":`, error);
    return null;
  }
}

/**
 * Fetch and merge live Google Sheet data with static defaults
 */
export async function fetchLiveContent(): Promise<{
  rooms: RoomPlan[];
  amenities: AmenityItem[];
  gallery: GalleryImage[];
  menuPhotoUrl: string;
  property: PropertyInfo;
  isLive: boolean;
}> {
  const sheetId = SHEETS_CONFIG.sheetId.trim();

  // If no sheet ID configured yet, return built-in defaults immediately
  if (!sheetId) {
    return {
      rooms: ROOMS_DATA,
      amenities: AMENITIES_DATA,
      gallery: GALLERY_DATA,
      menuPhotoUrl: DEFAULT_MENU_PHOTO,
      property: PROPERTY_DATA,
      isLive: false
    };
  }

  try {
    // Fetch all tabs in parallel
    const [settingsRows, pricingRows, amenitiesRows, galleryRows] = await Promise.all([
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.settings),
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.pricing),
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.amenities),
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.gallery)
    ]);

    // 1. Process Settings / Contact / Menu Photo
    let updatedProperty = { ...PROPERTY_DATA };
    let updatedMenuPhoto = DEFAULT_MENU_PHOTO;

    if (settingsRows && settingsRows.length > 1) {
      const dataRows = settingsRows.slice(1);
      dataRows.forEach(row => {
        // Expected columns: [Phone, WhatsApp, Address, MenuPhotoURL, GoogleRating, TotalReviews]
        const phone = row[0]?.trim();
        const whatsapp = row[1]?.trim();
        const address = row[2]?.trim();
        const menuPhoto = normalizeImageUrl(row[3] || '');
        const rating = parseFloat(row[4]);
        const reviews = parseInt(row[5], 10);

        if (phone) {
          updatedProperty.phoneDisplay = phone;
          updatedProperty.phone = phone.replace(/\D/g, '');
        }
        if (whatsapp) {
          updatedProperty.whatsappNumber = whatsapp.replace(/\D/g, '');
        }
        if (address) {
          updatedProperty.address.full = address;
        }
        if (menuPhoto) {
          updatedMenuPhoto = menuPhoto;
        }
        if (!isNaN(rating)) {
          updatedProperty.googleRating.score = rating;
        }
        if (!isNaN(reviews)) {
          updatedProperty.googleRating.totalReviews = reviews;
        }
      });
    }

    // 2. Process Pricing & Room Photos
    let updatedRooms = [...ROOMS_DATA];
    if (pricingRows && pricingRows.length > 1) {
      const dataRows = pricingRows.slice(1);
      dataRows.forEach(row => {
        // Expected columns: [RoomID, RoomName, MonthlyRent, DailyRent, ImageURL, Badge]
        const id = (row[0] || '').toLowerCase().trim();
        const monthly = row[2]?.trim();
        const daily = row[3]?.trim();
        const image = normalizeImageUrl(row[4] || '');
        const badge = row[5]?.trim();

        const matchIdx = updatedRooms.findIndex(r => 
          r.id.toLowerCase().includes(id) || id.includes(r.id.toLowerCase())
        );

        if (matchIdx !== -1) {
          if (monthly) {
            const num = parseInt(monthly.replace(/\D/g, ''), 10) || updatedRooms[matchIdx].monthlyRent.amount;
            updatedRooms[matchIdx] = {
              ...updatedRooms[matchIdx],
              monthlyRent: {
                ...updatedRooms[matchIdx].monthlyRent,
                amount: num,
                formatted: monthly.startsWith('₹') ? monthly : `₹${monthly}`
              }
            };
          }
          if (daily) {
            const num = parseInt(daily.replace(/\D/g, ''), 10) || updatedRooms[matchIdx].dailyRent.amount;
            updatedRooms[matchIdx] = {
              ...updatedRooms[matchIdx],
              dailyRent: {
                ...updatedRooms[matchIdx].dailyRent,
                amount: num,
                formatted: daily.startsWith('₹') ? daily : `₹${daily}`
              }
            };
          }
          if (image) {
            updatedRooms[matchIdx] = {
              ...updatedRooms[matchIdx],
              image
            };
          }
          if (badge) {
            updatedRooms[matchIdx] = {
              ...updatedRooms[matchIdx],
              badge
            };
          }
        }
      });
    }

    // 3. Process Amenities
    let updatedAmenities = [...AMENITIES_DATA];
    if (amenitiesRows && amenitiesRows.length > 1) {
      const dataRows = amenitiesRows.slice(1);
      const parsedAmenities: AmenityItem[] = [];

      dataRows.forEach((row, idx) => {
        // Expected columns: [Name, Description, Category, Badge]
        const name = row[0]?.trim();
        const description = row[1]?.trim() || '';
        const category = (row[2]?.toLowerCase().trim() || 'essentials') as AmenityItem['category'];
        const badge = row[3]?.trim();

        if (name) {
          parsedAmenities.push({
            id: `sheet-amenity-${idx}`,
            name,
            description,
            category: ['essentials', 'dining', 'workspace', 'security', 'lifestyle'].includes(category)
              ? category
              : 'essentials',
            icon: guessIcon(name),
            badge
          });
        }
      });

      if (parsedAmenities.length > 0) {
        updatedAmenities = parsedAmenities;
      }
    }

    // 4. Process Gallery Photos
    let updatedGallery = [...GALLERY_DATA];
    if (galleryRows && galleryRows.length > 1) {
      const dataRows = galleryRows.slice(1);
      const parsedImages: GalleryImage[] = [];

      dataRows.forEach((row, idx) => {
        // Expected columns: [Title, Category, ImageURL, Caption]
        const title = row[0]?.trim();
        const category = (row[1]?.toLowerCase().trim() || 'common') as GalleryImage['category'];
        const src = normalizeImageUrl(row[2] || '');
        const caption = row[3]?.trim() || '';

        if (src) {
          parsedImages.push({
            id: `sheet-img-${idx}`,
            title: title || `Nestora Property Space ${idx + 1}`,
            category: ['bedrooms', 'bathrooms', 'dining', 'common', 'exterior'].includes(category) 
              ? category 
              : 'common',
            categoryLabel: category.charAt(0).toUpperCase() + category.slice(1),
            src,
            thumb: src,
            alt: title || 'Nestora Coliving Space HSR Layout',
            caption
          });
        }
      });

      if (parsedImages.length > 0) {
        updatedGallery = parsedImages;
      }
    }

    return {
      rooms: updatedRooms,
      amenities: updatedAmenities,
      gallery: updatedGallery,
      menuPhotoUrl: updatedMenuPhoto,
      property: updatedProperty,
      isLive: true
    };
  } catch (error) {
    console.error("[Google Sheets] Live sync error. Using local fallbacks:", error);
    return {
      rooms: ROOMS_DATA,
      amenities: AMENITIES_DATA,
      gallery: GALLERY_DATA,
      menuPhotoUrl: DEFAULT_MENU_PHOTO,
      property: PROPERTY_DATA,
      isLive: false
    };
  }
}

/**
 * Helper to select an icon based on amenity name
 */
function guessIcon(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes('meal') || lower.includes('food') || lower.includes('dining')) return 'UtensilsCrossed';
  if (lower.includes('wi-fi') || lower.includes('wifi') || lower.includes('internet')) return 'Wifi';
  if (lower.includes('security') || lower.includes('cctv') || lower.includes('biometric')) return 'ShieldCheck';
  if (lower.includes('clean') || lower.includes('housekeep') || lower.includes('maid')) return 'Sparkles';
  if (lower.includes('power') || lower.includes('generator') || lower.includes('backup')) return 'Zap';
  if (lower.includes('laundry') || lower.includes('washing')) return 'Shirt';
  if (lower.includes('water') || lower.includes('geyser') || lower.includes('hot')) return 'Flame';
  if (lower.includes('ro') || lower.includes('drink') || lower.includes('purifi')) return 'Droplets';
  if (lower.includes('lounge') || lower.includes('sofa') || lower.includes('relax')) return 'Coffee';
  if (lower.includes('fridge') || lower.includes('refrigerat')) return 'Refrigerator';
  if (lower.includes('bike') || lower.includes('parking') || lower.includes('vehicle')) return 'Bike';
  if (lower.includes('lift') || lower.includes('elevator')) return 'MoveVertical';
  return 'Sparkles';
}
