/**
 * ============================================================================
 * NESTORA COLIVING — GOOGLE SHEETS CMS CONFIGURATION
 * ============================================================================
 * 
 * Connected to the user's active Google Sheet:
 * https://docs.google.com/spreadsheets/d/1DuUf_Nr6YcBtnOg31yfx3OZVcw5mqORdsfVFFav8lM/edit
 * ============================================================================
 */

export const SHEETS_CONFIG = {
  // Connected Sheet ID from user's Google Sheet:
  sheetId: "1DuUf_Nr6YcBtnOg31yfx3OZVcw5mqORdsfVFFav8lM",

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
