/**
 * ============================================================================
 * NESTORA COLIVING — GOOGLE SHEETS LIVE CMS CONFIGURATION
 * ============================================================================
 * 
 * HOW TO CONNECT YOUR GOOGLE SHEET:
 * 1. Create a Google Sheet (using the template columns provided in the guide).
 * 2. Click "Share" (top-right of your sheet) -> change General access to
 *    "Anyone with the link can view".
 * 3. Copy the Sheet ID from the URL:
 *    https://docs.google.com/spreadsheets/d/PASTE_THIS_ID_HERE/edit
 * 4. Paste that ID below into `GOOGLE_SHEET_ID`.
 * 
 * If left blank, the website automatically uses the built-in fallback data
 * in `src/data/`, so the website NEVER breaks.
 * ============================================================================
 */

export const SHEETS_CONFIG = {
  // Replace with your Google Sheet ID when ready:
  sheetId: "",
  
  // Tab names in your Google Sheet (must match exactly)
  tabs: {
    pricing: "Pricing",
    gallery: "Gallery",
    menu: "Menu",
    contact: "Contact"
  },

  // Cache duration in minutes before refetching fresh data (saves bandwidth)
  cacheMinutes: 5,
};
