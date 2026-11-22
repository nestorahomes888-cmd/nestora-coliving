export interface GalleryImage {
  id: string;
  title: string;
  category: 'bedrooms' | 'bathrooms' | 'dining' | 'common' | 'exterior';
  categoryLabel: string;
  src: string;
  thumb: string;
  alt: string;
  caption: string;
  dimensions?: string;
  isFeatured?: boolean;
}

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Spaces' },
  { id: 'bedrooms', label: 'Bedrooms' },
  { id: 'bathrooms', label: 'Bathrooms' },
  { id: 'dining', label: 'Dining & Kitchen' },
  { id: 'common', label: 'Lounge & Common' },
  { id: 'exterior', label: 'Exterior & Facade' },
];

/**
 * ===========================================================================
 * NESTORA PROPERTY GALLERY DATA
 * ---------------------------------------------------------------------------
 * INSTRUCTIONS FOR MANAGEMENT:
 * The photos below illustrate the layout, furnishings and ambiance of the space.
 * Replace or append actual photo URLs from your Google Business Profile or local
 * assets directly in this file.
 * ===========================================================================
 */
export const GALLERY_DATA: GalleryImage[] = [
  {
    id: "g-ext-1",
    title: "Building Exterior & Facade",
    category: "exterior",
    categoryLabel: "Exterior",
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    alt: "Nestora Coliving Building Exterior located in HSR Layout Sector 1",
    caption: "Modern multi-storey boutique building situated in quiet residential 1st Sector HSR Layout.",
    isFeatured: true
  },
  {
    id: "g-bed-1",
    title: "Executive Single Sharing Sanctuary",
    category: "bedrooms",
    categoryLabel: "Bedrooms",
    src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80",
    alt: "Single sharing private bedroom with dedicated study workstation and warm lighting",
    caption: "Private room featuring ergonomic work desk, orthopedic mattress and warm boutique tones.",
    isFeatured: true
  },
  {
    id: "g-bed-2",
    title: "Spacious Double Sharing Suite",
    category: "bedrooms",
    categoryLabel: "Bedrooms",
    src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80",
    alt: "Double sharing twin bedroom with two separate single beds and individual closets",
    caption: "Generous twin bedroom with dual study stations, individual wardrobes and large windows.",
    isFeatured: true
  },
  {
    id: "g-din-1",
    title: "Resident Dining & Meal Hall",
    category: "dining",
    categoryLabel: "Dining & Kitchen",
    src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80",
    alt: "Spacious hygienic dining hall with warm wooden tables and hygienic buffet station",
    caption: "Clean, inviting dining hall where residents gather for fresh daily home-style meals.",
    isFeatured: true
  },
  {
    id: "g-bath-1",
    title: "Attached Designer Washroom",
    category: "bathrooms",
    categoryLabel: "Bathrooms",
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    alt: "En-suite bathroom with ceramic wall tiles, hot water geyser and clean shower",
    caption: "Spotless attached washroom equipped with instant geyser and modern chrome fixtures.",
    isFeatured: true
  },
  {
    id: "g-com-1",
    title: "Community Coworking Lounge",
    category: "common",
    categoryLabel: "Lounge & Common",
    src: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=600&q=80",
    alt: "Coworking lounge area with high-speed Wi-Fi, ambient seating and natural sunlight",
    caption: "Dedicated lounge tailored for focused daytime work and casual evening interactions.",
    isFeatured: true
  },
  {
    id: "g-bed-3",
    title: "Workstation & Wardrobe Detail",
    category: "bedrooms",
    categoryLabel: "Bedrooms",
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
    alt: "Ergonomic work desk setup with high-speed fiber internet connection point",
    caption: "Ergonomic workstation designed for productive remote work and uninterrupted video calls.",
  },
  {
    id: "g-bath-2",
    title: "Modern Fixtures & Vanity",
    category: "bathrooms",
    categoryLabel: "Bathrooms",
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80",
    alt: "Modern vanity mirror and washbasin with hot and cold water tap",
    caption: "Well-maintained washroom vanity with deep daily hygiene sanitization.",
  },
  {
    id: "g-din-2",
    title: "Community Kitchenette & RO Station",
    category: "dining",
    categoryLabel: "Dining & Kitchen",
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    alt: "Resident kitchen with refrigerator, microwave and RO water dispenser",
    caption: "Convenient shared pantry with refrigerator, induction plate, and multi-stage RO water.",
  },
  {
    id: "g-com-2",
    title: "Reception & Security Gate",
    category: "common",
    categoryLabel: "Lounge & Common",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    alt: "Secure entrance lobby with biometric access control",
    caption: "Welcoming entrance lobby featuring smart biometric verification and visitor log desk.",
  },
  {
    id: "g-ext-2",
    title: "Covered Parking & Entrance",
    category: "exterior",
    categoryLabel: "Exterior",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    alt: "Safe covered two-wheeler parking area at Nestora",
    caption: "CCTV-monitored ground-level covered parking reserved exclusively for resident two-wheelers.",
  },
  {
    id: "g-com-3",
    title: "Rooftop Sit-Out & Terrace Breeze",
    category: "common",
    categoryLabel: "Lounge & Common",
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
    alt: "Rooftop terrace overlooking greenery in HSR Layout",
    caption: "Tranquil open-air rooftop terrace to unwind, catch sunsets, or read in the evening breeze.",
  }
];
