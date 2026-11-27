/**
 * ============================================================================
 * NESTORA COLIVING — GOOGLE SHEETS CMS CONFIGURATION
 * ============================================================================
 * 
 * The owner can edit:
 * 1. Room Tariffs (2-Sharing PG ₹13,000/mo, Daily ₹1,200/day) & Room Photos
 * 2. Food Menu Photo (Owner snaps photo of weekly menu board & pastes link)
 * 3. Amenities List (Add or remove amenities)
 * 4. Photo Gallery (Paste Google Drive or direct photo links)
 * 5. Contact Info (Phone, WhatsApp, Address)
 * 
 * Paste your Google Sheet ID into `sheetId` below:
 * ============================================================================
 */

export const SHEETS_CONFIG = {
  // Replace with the owner's Google Sheet ID:
  sheetId: "",

  // Tab names in Google Sheet:
  tabs: {
    settings: "Settings",   // Phone, WhatsApp, Address, MenuPhotoURL
    pricing: "Pricing",     // Rooms, monthly rent, daily rent, room photos
    amenities: "Amenities", // List of amenities & descriptions
    gallery: "Gallery"      // Property photos & captions
  },

  // Cache duration in minutes before background refresh
  cacheMinutes: 5,
};
