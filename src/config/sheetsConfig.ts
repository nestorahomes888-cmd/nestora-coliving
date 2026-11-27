/**
 * ============================================================================
 * NESTORA COLIVING — GOOGLE SHEETS CMS CONFIGURATION
 * ============================================================================
 * 
 * Connected to the user's active Google Sheet:
 * https://docs.google.com/spreadsheets/d/1H_Hd_ucZ0XVAeAKTRTlCWobXq7guhxY4KoBlnpQ9qf4/edit?usp=sharing
 * ============================================================================
 */

export const SHEETS_CONFIG = {
  // Connected Sheet ID from user's Google Sheet:
  sheetId: "1H_Hd_ucZ0XVAeAKTRTlCWobXq7guhxY4KoBlnpQ9qf4",

  // Tab names in Google Sheet:
  tabs: {
    settings: "Settings",   // Phone, WhatsApp, Address, MenuPhotoURL, GoogleRating, TotalReviews
    pricing: "Pricing",     // Rooms, monthly rent, daily rent, room photos, badges
    amenities: "Amenities", // List of amenities & descriptions
    gallery: "Gallery"      // Property photos & captions
  },

  // Cache duration in minutes before background refresh
  cacheMinutes: 5,
};
