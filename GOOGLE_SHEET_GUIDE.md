# Nestora Coliving — Google Sheet Guide for the Owner
> **No Coding Required.** The owner can update photos, food menu, rent prices, and amenities directly from Google Sheets on their smartphone or laptop.

---

### Step 1: Create Your Google Sheet
1. Open [Google Sheets](https://sheets.new) and name the spreadsheet: **`Nestora Website Data`**.
2. At the bottom of the sheet, create **4 tabs** with these exact names:
   * **`Settings`**
   * **`Pricing`**
   * **`Amenities`**
   * **`Gallery`**

---

### Step 2: Fill in the 4 Tabs

#### 📄 Tab 1: `Settings`
Use Row 1 as headers:

| Phone | WhatsApp | Address | MenuPhotoURL | GoogleRating | TotalReviews |
| :--- | :--- | :--- | :--- | :--- | :--- |
| +91 70196 44004 | 917019644004 | 71, 27th Main Rd, 1st Sector, HSR Layout, Bengaluru 560102 | *(Paste Google Drive link of your menu photo here)* | 4.8 | 128 |

> 💡 **For the Food Menu:** Whenever you update the physical weekly menu board in your PG, snap a photo on your phone, upload it to Google Drive, and paste the share link into the `MenuPhotoURL` cell! The website immediately updates with the new photo.

---

#### 📄 Tab 2: `Pricing`
Use Row 1 as headers:

| Room ID | Room Name | Monthly Rent | Daily Rent | Image URL | Badge |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `double-sharing-pg` | 2 Sharing PG Room | 13000 | 1200 | *(Leave blank or paste room photo)* | Best Value • 2 Sharing |
| `single-sharing-private` | Private Single Room | 22000 | 1500 | *(Leave blank or paste room photo)* | 100% Private |

* To change rent: Simply edit the number (e.g. change `13000` to `14000`).

---

#### 📄 Tab 3: `Amenities`
Use Row 1 as headers:

| Name | Description | Category | Badge |
| :--- | :--- | :--- | :--- |
| 4 Homely Meals Everyday | Breakfast, lunch, evening snacks with chai, and dinner | dining | Included with Stay |
| Ultra-Fast 300 Mbps Wi-Fi | Dual-band mesh Wi-Fi covering all bedrooms and lounge | workspace | Enterprise Fiber |
| Daily Housekeeping | Daily room sweeping, mopping and bathroom sanitization | security | Daily Service |
| 3-Tier Biometric Security | Biometric fingerprint entry, 24/7 CCTV & verified warden | security | 24/7 Protected |
| 100% Power Backup | Automatic generator backup for lights, Wi-Fi & sockets | essentials | Zero Downtime |
| Automated Laundry Zone | Washing machines and covered drying balcony | essentials | Self-Service |
| 24/7 Hot Water Geysers | Instant geysers installed in every attached washroom | essentials | Instant Geyser |
| RO Purified Drinking Water | Multi-stage commercial RO water purifiers on all floors | dining | RO Pure |

* To add an amenity (e.g., Gym, Table Tennis, Snooker): Just add a new row at the bottom!

---

#### 📄 Tab 4: `Gallery` (Property Photos)
Use Row 1 as headers:

| Title | Category | Image URL | Caption |
| :--- | :--- | :--- | :--- |
| Building Exterior | exterior | *(Paste photo link)* | Modern building in quiet Sector 1, HSR Layout |
| 2-Sharing Bedroom | bedrooms | *(Paste photo link)* | Twin beds with attached bathroom & study desks |
| Private Single Room | bedrooms | *(Paste photo link)* | Executive private bedroom with work desk |
| Dining Hall | dining | *(Paste photo link)* | Clean, spacious dining hall for 4 daily meals |
| Attached Washroom | bathrooms | *(Paste photo link)* | Modern washroom with 24/7 hot water geyser |
| Common Lounge | common | *(Paste photo link)* | Coworking lounge with high-speed Wi-Fi |

* **Category choices:** `bedrooms`, `bathrooms`, `dining`, `common`, `exterior`.

---

### Step 3: How the Owner Adds Photos from Phone (Google Drive)

1. Upload the photo to **Google Drive**.
2. Tap the 3 dots on the photo → tap **Share** (or Manage access).
3. Under *General access*, change from *Restricted* to **"Anyone with the link"**.
4. Tap **Copy link**.
5. Paste that link directly into the `MenuPhotoURL` or `Image URL` cell in Google Sheets!
6. **The website automatically turns it into a high-speed web image.**

---

### Step 4: Share the Sheet & Connect to Website

1. In your Google Sheet, click the green **Share** button (top-right).
2. Set General Access to: **"Anyone with the link can view"**.
3. Copy your Sheet URL:
   `https://docs.google.com/spreadsheets/d/`**`1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`**`/edit`
4. Copy the long code between `/d/` and `/edit` (that's your **Sheet ID**).
5. Open `src/config/sheetsConfig.ts` in your website and paste the Sheet ID:
   ```ts
   export const SHEETS_CONFIG = {
     sheetId: "YOUR_SHEET_ID_HERE",
   };
   ```
6. Done! The website is now 100% connected to your Google Sheet!
