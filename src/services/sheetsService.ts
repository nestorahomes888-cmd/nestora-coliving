import { SHEETS_CONFIG } from '../config/sheetsConfig';
import { ROOMS_DATA, RoomPlan } from '../data/rooms';
import { GALLERY_DATA, GalleryImage } from '../data/gallery';
import { WEEKLY_MENU_DATA, DayMenu, MEAL_TIMINGS } from '../data/foodMenu';
import { PROPERTY_DATA, PropertyInfo } from '../data/property';

/**
 * Converts standard Google Drive share links into direct viewable image URLs
 */
export function normalizeImageUrl(url: string): string {
  if (!url) return '';
  const cleanUrl = url.trim();

  // If already standard http/https image or local path
  if (cleanUrl.startsWith('/') || cleanUrl.includes('images.unsplash.com')) {
    return cleanUrl;
  }

  // Handle Google Drive file links
  // e.g. https://drive.google.com/file/d/1A2B3C.../view
  // or https://drive.google.com/open?id=1A2B3C...
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
  gallery: GalleryImage[];
  menu: DayMenu[];
  property: PropertyInfo;
  isLive: boolean;
}> {
  const sheetId = SHEETS_CONFIG.sheetId.trim();

  // If no sheet ID configured yet, return defaults immediately
  if (!sheetId) {
    return {
      rooms: ROOMS_DATA,
      gallery: GALLERY_DATA,
      menu: WEEKLY_MENU_DATA,
      property: PROPERTY_DATA,
      isLive: false
    };
  }

  try {
    // Fetch all tabs in parallel
    const [pricingRows, galleryRows, menuRows, contactRows] = await Promise.all([
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.pricing),
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.gallery),
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.menu),
      fetchSheetCSV(sheetId, SHEETS_CONFIG.tabs.contact)
    ]);

    // 1. Process Pricing / Rooms
    let updatedRooms = [...ROOMS_DATA];
    if (pricingRows && pricingRows.length > 1) {
      const dataRows = pricingRows.slice(1); // skip header row
      dataRows.forEach(row => {
        // Expected columns: [ID, Name, MonthlyRent, DailyRent, ImageURL, Badge]
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

    // 2. Process Gallery Photos
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
            title: title || `Nestora Coliving Photo ${idx + 1}`,
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

    // 3. Process Weekly Menu
    let updatedMenu = [...WEEKLY_MENU_DATA];
    if (menuRows && menuRows.length > 1) {
      const dataRows = menuRows.slice(1);
      dataRows.forEach(row => {
        // Expected columns: [Day, Breakfast, Lunch, Snacks, Dinner, Theme]
        const dayStr = (row[0] || '').toLowerCase().trim();
        const breakfastItems = row[1]?.split(';').map(s => s.trim()).filter(Boolean) || [];
        const lunchItems = row[2]?.split(';').map(s => s.trim()).filter(Boolean) || [];
        const snacksItems = row[3]?.split(';').map(s => s.trim()).filter(Boolean) || [];
        const dinnerItems = row[4]?.split(';').map(s => s.trim()).filter(Boolean) || [];
        const theme = row[5]?.trim();

        const matchIdx = updatedMenu.findIndex(m => m.dayName.toLowerCase().startsWith(dayStr.slice(0, 3)));
        if (matchIdx !== -1) {
          if (theme) updatedMenu[matchIdx].theme = theme;
          if (breakfastItems.length > 0) updatedMenu[matchIdx].meals.breakfast.items = breakfastItems;
          if (lunchItems.length > 0) updatedMenu[matchIdx].meals.lunch.items = lunchItems;
          if (snacksItems.length > 0) updatedMenu[matchIdx].meals.snacks.items = snacksItems;
          if (dinnerItems.length > 0) updatedMenu[matchIdx].meals.dinner.items = dinnerItems;
        }
      });
    }

    // 4. Process Property / Contact Info
    let updatedProperty = { ...PROPERTY_DATA };
    if (contactRows && contactRows.length > 1) {
      const dataRows = contactRows.slice(1);
      dataRows.forEach(row => {
        // Expected columns: [Phone, WhatsApp, FullAddress, GoogleRating, TotalReviews]
        const phone = row[0]?.trim();
        const whatsapp = row[1]?.trim();
        const address = row[2]?.trim();
        const rating = parseFloat(row[3]);
        const reviews = parseInt(row[4], 10);

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
        if (!isNaN(rating)) {
          updatedProperty.googleRating.score = rating;
        }
        if (!isNaN(reviews)) {
          updatedProperty.googleRating.totalReviews = reviews;
        }
      });
    }

    return {
      rooms: updatedRooms,
      gallery: updatedGallery,
      menu: updatedMenu,
      property: updatedProperty,
      isLive: true
    };
  } catch (error) {
    console.error("[Google Sheets] Live sync encountered an error. Falling back to local data:", error);
    return {
      rooms: ROOMS_DATA,
      gallery: GALLERY_DATA,
      menu: WEEKLY_MENU_DATA,
      property: PROPERTY_DATA,
      isLive: false
    };
  }
}
