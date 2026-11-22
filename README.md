# Nestora Coliving Premium Space — Official Frontend Website

A beautiful, high-performance, fully responsive frontend website for **Nestora Coliving Premium Space**, situated in Sector 1, HSR Layout, Bengaluru.

Designed with a boutique hospitality aesthetic inspired by modern luxury boutique hotels: warm neutrals (cream, charcoal, gold, taupe), elegant typography, room pricing switcher, 4-meal daily menu schedule, full-screen interactive gallery lightbox, Google Maps integration, and automated WhatsApp booking enquiry flows.

---

## 🌟 Key Features

- **Boutique Hospitality Design**: Clean typography (Playfair Display & Plus Jakarta Sans), warm cream backgrounds (`#FAF8F5`), charcoal contrasts, and warm gold accents.
- **Rooms & Pricing Switcher**:
  - Separate cards for **Single Sharing** (Private Executive Sanctuary) and **Double Sharing** (Twin Living).
  - Interactive pricing toggle: **Daily Stay**, **Weekly Stay**, **Monthly Stay (Best Value)**.
  - Clearly identifiable editable placeholders for owner configuration.
  - Pre-formatted WhatsApp enquiry links including room type and chosen duration.
- **Homely 4-Meal Dining Schedule**:
  - 4 meal slots: Breakfast, Lunch, Evening Snacks with Chai, Dinner.
  - Interactive day-of-the-week selector (Monday to Sunday) with an automatic "Today" badge.
  - Centralized `src/data/foodMenu.ts` file for effortless weekly updates.
- **12 Comprehensive Amenities**:
  - Categorized filters (All, Comfort, Food, Work, Safety, Living).
  - High-speed 300 Mbps Wi-Fi, 3-tier biometric security, daily housekeeping, 100% power backup, RO drinking water, automatic laundry, elevator.
- **Interactive Lightbox Photo Gallery**:
  - Filter tabs: Bedrooms, Bathrooms, Dining, Common Areas, Exterior.
  - Full-screen lightbox viewer with Next/Previous navigation, keyboard shortcuts (`Esc`, `←`, `→`), and image counter.
  - Transparent documentation for dropping in official Google Business Profile images in `src/data/gallery.ts`.
- **Location & Verified Landmarks**:
  - Full address: 71, 27th Main Road, Phase 3, 4th Cross, 1st Sector, HSR Layout, Bengaluru – 560102.
  - Responsive Google Maps embed iframe + Get Directions link.
  - Verified nearby landmarks (27th Main High Street, BDA Complex, Agara Lake, Silk Board Metro, Bellandur / Ecospace tech parks).
- **Direct WhatsApp & Phone Integration**:
  - WhatsApp Business: `+91 70196 44004` (`wa.me/917019644004`)
  - Direct Phone: `+91 70196 44004` (`tel:+917019644004`)
  - Contact enquiry form with instant WhatsApp dispatch & copy fallback.
- **Mobile-First Experience**:
  - Sticky mobile bottom bar with quick Call & WhatsApp buttons.
  - Floating WhatsApp action button with tooltip.
  - Slide-in responsive navigation drawer.
  - Zero horizontal overflow on any screen size.
- **Production & SEO Ready**:
  - Open Graph / Twitter meta tags, JSON-LD Schema.org LodgingBusiness markup.
  - `sitemap.xml`, `robots.txt`, `manifest.json`, and `_headers` for Cloudflare Pages.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Hosting**: Cloudflare Pages (Free Tier)

---

## 📁 Project Structure

```
├── public/
│   ├── _headers            # Cloudflare Pages security & caching headers
│   ├── favicon.svg         # Custom boutique monogram favicon
│   ├── manifest.json       # PWA web manifest
│   ├── robots.txt          # Search engine crawler instructions
│   └── sitemap.xml         # XML Sitemap
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Sticky navigation & mobile drawer
│   │   │   ├── Footer.tsx            # Luxury footer with quick links
│   │   │   ├── MobileStickyBar.tsx   # Fixed bottom bar for phones
│   │   │   └── FloatingWhatsApp.tsx  # Floating quick chat action
│   │   └── sections/
│   │       ├── HeroSection.tsx       # Hero, ratings & property highlights
│   │       ├── RoomsSection.tsx      # Single/Double cards & duration switch
│   │       ├── AmenitiesSection.tsx  # 12 categorized amenities
│   │       ├── FoodSection.tsx       # 4-meal weekly menu (Mon–Sun)
│   │       ├── GallerySection.tsx    # Filtered gallery & lightbox modal
│   │       ├── LocationSection.tsx   # Address, landmarks & Google Map
│   │       └── ContactSection.tsx    # Phone, WhatsApp & enquiry form
│   ├── data/
│   │   ├── property.ts      # Core property details, address & contacts
│   │   ├── rooms.ts         # Room cards, descriptions & pricing plans
│   │   ├── amenities.ts     # Amenity items & categories
│   │   ├── foodMenu.ts      # Mon-Sun 4-meal daily menu items
│   │   └── gallery.ts       # Photo URLs, captions & categories
│   ├── utils/
│   │   └── whatsapp.ts      # WhatsApp link generator & call helpers
│   ├── App.tsx              # Main application root
│   ├── main.tsx             # React entry point
│   └── index.css            # Tailwind & boutique styling
├── DEPLOYMENT.md            # Detailed Cloudflare Pages deploy instructions
├── index.html               # Semantic HTML, SEO & Schema.org markup
├── tailwind.config.js       # Color palette & font definitions
└── vite.config.ts           # Build optimization & chunk splitting
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production assets
npm run build

# 4. Preview production build
npm run preview
```

---

## 🚢 Deployment

See [DEPLOYMENT.md](file:///Users/abhishekholagundi/Desktop/NESTORA%20HOMES/DEPLOYMENT.md) for step-by-step instructions on connecting your GitHub repository to Cloudflare Pages for automatic deployments and linking your custom domain.
