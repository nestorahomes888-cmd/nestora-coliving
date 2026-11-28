export interface AmenityItem {
  id: string;
  name: string;
  category: 'essentials' | 'dining' | 'workspace' | 'security' | 'lifestyle';
  description: string;
  icon: string;
  badge?: string;
}

export const AMENITIES_CATEGORIES = [
  { id: 'all', label: 'All Amenities' },
  { id: 'essentials', label: 'Comfort & Essentials' },
  { id: 'dining', label: 'Food & Nutrition' },
  { id: 'workspace', label: 'Work & Connectivity' },
  { id: 'security', label: 'Safety & Hygiene' },
  { id: 'lifestyle', label: 'Community & Living' },
];

export const AMENITIES_DATA: AmenityItem[] = [
  {
    id: "homely-meals",
    name: "Homely Food Everyday",
    category: "dining",
    description: "Nutritious and freshly prepared South & North Indian home-cooked food made with farm-fresh produce.",
    icon: "UtensilsCrossed",
    badge: "Included with Stay"
  },
  {
    id: "high-speed-wifi",
    name: "Ultra-Fast 300+ Mbps Wi-Fi",
    category: "workspace",
    description: "Enterprise-grade dual band mesh Wi-Fi across every bedroom, dining hall, and common lounge with zero dead spots for effortless work.",
    icon: "Wifi",
    badge: "Enterprise Fiber"
  },
  {
    id: "housekeeping",
    name: "Daily In-Room Housekeeping",
    category: "security",
    description: "Professional cleaning staff provides daily room sweeping, mopping, trash disposal, and periodic deep sanitization of bathrooms.",
    icon: "Sparkles",
    badge: "Daily Service"
  },
  {
    id: "biometric-security",
    name: "3-Tier Biometric Security & CCTV",
    category: "security",
    description: "Smart biometric fingerprint/card access, 24/7 high-definition CCTV surveillance across all corridors and verified security warden.",
    icon: "ShieldCheck",
    badge: "24/7 Protected"
  },
  {
    id: "power-backup",
    name: "100% Uninterrupted Power Backup",
    category: "essentials",
    description: "Heavy-duty automatic inverter and silent generator backup covering all lighting, room sockets, and Wi-Fi networks.",
    icon: "Zap",
    badge: "Zero Downtime"
  },
  {
    id: "laundry",
    name: "Automated Laundry & Ironing Zone",
    category: "essentials",
    description: "Modern top-load and front-load washing machines, well-ventilated covered drying balcony, and dedicated steam ironing station.",
    icon: "Shirt",
    badge: "Self-Service"
  },
  {
    id: "hot-water",
    name: "24/7 Instant Hot Water Geysers",
    category: "essentials",
    description: "Independent instant geysers installed in every attached washroom providing uninterrupted hot water anytime of day or night.",
    icon: "Flame"
  },
  {
    id: "ro-water",
    name: "Multi-Stage RO Drinking Water",
    category: "dining",
    description: "Commercial multi-stage RO + UV water purifiers with hot and cold water dispensers accessible on every residential floor.",
    icon: "Droplets"
  },
  {
    id: "community-lounge",
    name: "Chic Community & Coworking Lounge",
    category: "lifestyle",
    description: "A relaxed ambient shared lounge equipped with ergonomic work tables, plush sofas, smart screen, and quiet zones for creators.",
    icon: "Coffee",
    badge: "Community Hub"
  },
  {
    id: "kitchen-appliances",
    name: "Shared Refrigerator & Microwave",
    category: "dining",
    description: "Large commercial refrigerators and induction cookers available in the dining lounge for midnight snacks or personal treats.",
    icon: "Refrigerator"
  },
  {
    id: "two-wheeler-parking",
    name: "Covered Two-Wheeler Parking",
    category: "lifestyle",
    description: "Secure, weather-protected basement/ground parking space dedicated for resident two-wheelers with round-the-clock camera monitoring.",
    icon: "Bike"
  },
  {
    id: "lift-elevator",
    name: "High-Speed Passenger Lift",
    category: "essentials",
    description: "Smooth modern elevator providing quick and effortless access from the entrance floor to all residential levels and terrace.",
    icon: "MoveVertical"
  }
];
