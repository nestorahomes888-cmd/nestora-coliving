import { SHEETS_CONFIG } from '../config/sheetsConfig';
import { ROOMS_DATA, RoomPlan } from '../data/rooms';
import { GALLERY_DATA, GalleryImage } from '../data/gallery';
import { AMENITIES_DATA, AmenityItem } from '../data/amenities';
import { PROPERTY_DATA, PropertyInfo } from '../data/property';

export const DEFAULT_MENU_PHOTO = "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1400&q=80";

export function normalizeImageUrl(url: string): string {
  if (!url) return '';
  const cleanUrl = url.trim();

  if (cleanUrl.startsWith('/') || cleanUrl.includes('images.unsplash.com')) {
    return cleanUrl;
  }

  const driveFileMatch = cleanUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveFileMatch && driveFileMatch[1]) {
    return `https://drive.google.com/thumbnail?id=${driveFileMatch[1]}&sz=w1600`;
  }

  const driveIdMatch = cleanUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (driveIdMatch && driveIdMatch[1]) {
    return `https://drive.google.com/thumbnail?id=${driveIdMatch[1]}&sz=w1600`;
  }

  return cleanUrl;
}

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
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      row.push(currentVal.trim());
      currentVal = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
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

async function fetchSheetCSV(sheetId: string, sheetName: string): Promise<string[][] | null> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}&_t=${Date.now()}`;
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) return null;
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    return null;
  }
}

export async function fetchLiveContent(): Promise<{
  rooms: RoomPlan[];
  amenities: AmenityItem[];
  gallery: GalleryImage[];
  menuPhotoUrl: string;
  property: PropertyInfo;
  isLive: boolean;
}> {
  const sheetId = SHEETS_CONFIG.sheetId.trim();

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
    // Try primary sheet names and also fallback to Sheet1 for pricing if needed
    let [settingsRows, pricingRows, amenitiesRows, galleryRows] = await Promise.all([
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.settings),
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.pricing),
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.amenities),
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.gallery)
    ]);

    // If "Pricing" tab wasn't found, check "Sheet1"
    if (!pricingRows || pricingRows.length <= 1) {
      const sheet1Rows = await fetchSheetCSV(sheetId, "Sheet1");
      if (sheet1Rows && sheet1Rows.length > 1) {
        pricingRows = sheet1Rows;
      }
    }

    // 1. Process Settings
    let updatedProperty = { ...PROPERTY_DATA };
    let updatedMenuPhoto = DEFAULT_MENU_PHOTO;

    if (settingsRows && settingsRows.length > 1) {
      const dataRows = settingsRows.slice(1);
      dataRows.forEach(row => {
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

    // 2. Process Pricing & Room Photos Dynamically
    let updatedRooms: RoomPlan[] = [];
    if (pricingRows && pricingRows.length > 1) {
      const headers = pricingRows[0].map(h => (h || '').toLowerCase().trim());
      const descColIdx = headers.findIndex(h => h.includes('desc'));

      const dataRows = pricingRows.slice(1).filter(row => row.some(cell => (cell || '').trim().length > 0));
      
      if (dataRows.length > 0) {
        updatedRooms = dataRows.map((row, idx) => {
          const rawColA = (row[0] || '').trim();
          const rawName = (row[1] || '').trim();
          const rawMonthly = (row[2] || '').trim();
          const rawDaily = (row[3] || '').trim();
          const rawImage = normalizeImageUrl(row[4] || '');
          const rawBadge = (row[5] || '').trim();
          const rawDescCol = descColIdx !== -1 ? (row[descColIdx] || '').trim() : '';

          // Determine description:
          // If a description column exists, use that.
          // Otherwise, if Column A has words (like "1BHK FULLY WITH AC"), use Column A!
          let description = rawDescCol;
          if (!description && rawColA) {
            if (rawColA.includes(' ') || rawColA.toUpperCase() === rawColA || rawColA !== rawColA.toLowerCase()) {
              description = rawColA;
            } else {
              description = rawColA.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            }
          }

          // Match template by ID, Name, or fall back by index
          const template = ROOMS_DATA.find(r => 
            (rawColA && (r.id.toLowerCase().includes(rawColA.toLowerCase()) || rawColA.toLowerCase().includes(r.id.toLowerCase()))) ||
            (rawName && (r.name.toLowerCase().includes(rawName.toLowerCase()) || rawName.toLowerCase().includes(r.name.toLowerCase())))
          ) || ROOMS_DATA[idx] || ROOMS_DATA[0];

          const monthlyNum = rawMonthly 
            ? parseInt(rawMonthly.replace(/\D/g, ''), 10) || template.monthlyRent.amount
            : template.monthlyRent.amount;

          const monthlyFormatted = rawMonthly 
            ? (rawMonthly.startsWith('₹') ? rawMonthly : `₹${rawMonthly}`) 
            : template.monthlyRent.formatted;

          const dailyNum = rawDaily 
            ? parseInt(rawDaily.replace(/\D/g, ''), 10) || template.dailyRent.amount 
            : template.dailyRent.amount;

          const dailyFormatted = rawDaily 
            ? (rawDaily.startsWith('₹') ? rawDaily : `₹${rawDaily}`) 
            : template.dailyRent.formatted;

          const roomName = rawName || template.name;
          const roomId = rawColA ? rawColA.toLowerCase().replace(/[^a-z0-9_-]/g, '-') : template.id;

          return {
            ...template,
            id: roomId,
            name: roomName,
            description: description || rawName,
            tagline: description || rawName,
            badge: rawBadge || template.badge,
            occupancy: roomName,
            occupancyLabel: description || roomName,
            image: rawImage || template.image,
            monthlyRent: {
              ...template.monthlyRent,
              amount: monthlyNum,
              formatted: monthlyFormatted
            },
            dailyRent: {
              ...template.dailyRent,
              amount: dailyNum,
              formatted: dailyFormatted
            }
          };
        });
      }
    }

    if (updatedRooms.length === 0) {
      updatedRooms = [...ROOMS_DATA];
    }

    // 3. Process Amenities
    let updatedAmenities = [...AMENITIES_DATA];
    if (amenitiesRows && amenitiesRows.length > 1) {
      const dataRows = amenitiesRows.slice(1);
      const parsedAmenities: AmenityItem[] = [];

      dataRows.forEach((row, idx) => {
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

    // 4. Process Gallery
    let updatedGallery = [...GALLERY_DATA];
    if (galleryRows && galleryRows.length > 1) {
      const dataRows = galleryRows.slice(1);
      const parsedImages: GalleryImage[] = [];

      dataRows.forEach((row, idx) => {
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
