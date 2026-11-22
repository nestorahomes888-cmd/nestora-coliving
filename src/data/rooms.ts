export type RentalDuration = 'monthly' | 'weekly' | 'daily';

export interface RoomPricePlan {
  amount: string;          // e.g. "₹[Monthly Rate]" or actual price once provided
  period: string;          // e.g. "/ month", "/ week", "/ day"
  deposit: string;         // e.g. "1 Month Security Deposit" or "Zero Deposit Scheme"
  label: string;           // Display tag
  isPlaceholder: boolean;  // Flags if price is currently an editable placeholder
}

export interface RoomType {
  id: string;
  name: string;
  subtitle: string;
  occupancy: string;
  occupancyCount: number;
  bedType: string;
  roomSize: string;
  idealFor: string;
  image: string;
  imageAlt: string;
  galleryImages: string[];
  description: string;
  prices: {
    daily: RoomPricePlan;
    weekly: RoomPricePlan;
    monthly: RoomPricePlan;
  };
  features: string[];
  facilities: {
    name: string;
    description: string;
    icon: string;
  }[];
  popularBadge?: string;
}

/**
 * ===========================================================================
 * NESTORA ROOMS & PRICING CONFIGURATION
 * ---------------------------------------------------------------------------
 * INSTRUCTIONS FOR PROPERTY OWNER:
 * Update the room rental rates below by replacing the placeholder values
 * (e.g., "₹[Daily Rate]", "₹[Weekly Rate]", "₹[Monthly Rate]") with your
 * official tariffs when ready.
 * ===========================================================================
 */
export const ROOMS_DATA: RoomType[] = [
  {
    id: "single-sharing",
    name: "Single Sharing Room",
    subtitle: "Private Executive Sanctuary",
    occupancy: "1 Guest (Private Non-Sharing)",
    occupancyCount: 1,
    bedType: "Queen / Large Single Bed",
    roomSize: "180 - 210 sq.ft.",
    idealFor: "Solo working professionals, founders & creators needing dedicated focus",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nestora Single Sharing Private Room with Workstation and Attached Washroom",
    galleryImages: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An impeccably designed private haven crafted for uninterrupted tranquility and productivity. Features a plush orthopaedic mattress, an ergonomic work-from-home desk with executive seating, expansive floor-to-ceiling wardrobes with private digital lockers, and an en-suite designer washroom with hot water.",
    prices: {
      daily: {
        amount: "₹[Daily Rate]",
        period: "per day",
        deposit: "₹0 Security Deposit",
        label: "Daily Stay",
        isPlaceholder: true
      },
      weekly: {
        amount: "₹[Weekly Rate]",
        period: "per week",
        deposit: "Nominal Security Deposit",
        label: "Weekly Stay",
        isPlaceholder: true
      },
      monthly: {
        amount: "₹[Monthly Rate]",
        period: "per month",
        deposit: "Low Security Deposit",
        label: "Monthly Stay (Best Value)",
        isPlaceholder: true
      }
    },
    popularBadge: "Most Popular for Solo Professionals",
    features: [
      "100% Private Room — No Sharing",
      "Ergonomic Study / Work Desk & Chair",
      "Private Attached Bathroom with 24/7 Geyser",
      "Large Wardrobe with Personal Key Lock",
      "Includes 4 Homely Meals Daily",
      "Daily Housekeeping & Linen Refresh"
    ],
    facilities: [
      { name: "Private Attached Washroom", description: "Modern ceramic fittings with instant 24/7 hot water geyser", icon: "Bath" },
      { name: "Dedicated Workstation", description: "Spacious desk, power sockets & ergonomic chair for WFH", icon: "Laptop" },
      { name: "Ultra-Fast 300 Mbps Wi-Fi", description: "Dedicated mesh access point right inside the room", icon: "Wifi" },
      { name: "Large Wooden Wardrobe", description: "Multi-shelf storage with personal security locker", icon: "DoorClosed" },
      { name: "Orthopedic Mattress", description: "8-inch premium high-density spring mattress with luxury linens", icon: "BedDouble" },
      { name: "100% Power & Lighting Backup", description: "Instant seamless switchover during any city outages", icon: "Zap" },
      { name: "Air Conditioning / Ventilation", description: "Well-ventilated with premium ceiling fan & natural daylight", icon: "Wind" },
      { name: "Daily In-Room Housekeeping", description: "Thorough floor mopping, dusting and trash clearance", icon: "Sparkles" }
    ]
  },
  {
    id: "double-sharing",
    name: "Double Sharing Room",
    subtitle: "Spacious Twin Living Sanctuary",
    occupancy: "2 Guests (Twin Sharing)",
    occupancyCount: 2,
    bedType: "2 Separate Single Beds",
    roomSize: "230 - 260 sq.ft.",
    idealFor: "Colleagues, friends or budget-conscious professionals who appreciate space",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nestora Double Sharing Room with Twin Beds, Separate Workstations and Balcony",
    galleryImages: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Generously proportioned twin sanctuary balancing personal privacy with convivial shared living. Equipped with two separate luxury single beds, individual study workstations, independent dual wardrobes with private locks, and an expansive attached washroom.",
    prices: {
      daily: {
        amount: "₹[Daily Rate]",
        period: "per bed / day",
        deposit: "₹0 Security Deposit",
        label: "Daily Stay",
        isPlaceholder: true
      },
      weekly: {
        amount: "₹[Weekly Rate]",
        period: "per bed / week",
        deposit: "Nominal Security Deposit",
        label: "Weekly Stay",
        isPlaceholder: true
      },
      monthly: {
        amount: "₹[Monthly Rate]",
        period: "per bed / month",
        deposit: "Low Security Deposit",
        label: "Monthly Stay (Best Value)",
        isPlaceholder: true
      }
    },
    popularBadge: "Best Value for Friends & Colleagues",
    features: [
      "Twin Single Beds with Premium Linens",
      "Individual Work Desks for Both Guests",
      "Separate Private Wardrobes with Individual Locks",
      "Spacious Attached Washroom with Geyser",
      "Includes 4 Homely Meals Daily",
      "Daily Room Cleaning & Trash Service"
    ],
    facilities: [
      { name: "Attached Clean Bathroom", description: "Spacious layout with hot water shower & regular sanitization", icon: "Bath" },
      { name: "Dual Individual Study Desks", description: "Independent desks so both roommates can work in quiet comfort", icon: "Laptop" },
      { name: "Dual Independent Wardrobes", description: "Separate dedicated cupboards with independent keys and locks", icon: "DoorClosed" },
      { name: "Dual 300 Mbps Wi-Fi", description: "High bandwidth streaming and uninterrupted Zoom calls", icon: "Wifi" },
      { name: "Twin Orthopedic Beds", description: "Ergonomic pocket spring beds with hypoallergenic pillows", icon: "Bed" },
      { name: "Power Backup", description: "Uninterrupted power for lights, Wi-Fi and charging points", icon: "Zap" },
      { name: "Natural Daylight & Fresh Air", description: "Large windows with privacy blinds and great cross-ventilation", icon: "Sun" },
      { name: "Daily Professional Cleaning", description: "Daily in-room sweeping, mopping and bathroom sanitization", icon: "Sparkles" }
    ]
  }
];
