export type RentalDuration = 'monthly' | 'daily';

export interface RoomPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  occupancy: string;
  occupancyLabel: string;
  image: string;
  monthlyRent: {
    amount: number;
    formatted: string;
    period: string;
    subtext: string;
  };
  dailyRent: {
    amount: number;
    formatted: string;
    period: string;
    subtext: string;
  };
  highlights: string[];
  inclusions: string[];
  idealFor: string;
}

export const ROOMS_DATA: RoomPlan[] = [
  {
    id: "double-sharing-pg",
    name: "2 Sharing PG Room",
    tagline: "Most Popular Monthly Coliving Plan",
    badge: "Best Value • 2 Sharing",
    occupancy: "2 Sharing",
    occupancyLabel: "Twin Bedded Suite (Shared with 1 Roommate)",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    monthlyRent: {
      amount: 13000,
      formatted: "₹13,000",
      period: "/ month per person",
      subtext: "All-inclusive PG monthly rent • Includes all 4 meals daily"
    },
    dailyRent: {
      amount: 1200,
      formatted: "₹1,200",
      period: "/ day",
      subtext: "Flexible daily stay • Zero lock-in • Ideal for short visits"
    },
    highlights: [
      "Twin luxury single beds with orthopedic mattresses",
      "Attached clean washroom with 24/7 instant hot water geyser",
      "Individual work desks & ergonomic study chairs for both",
      "Separate private wooden wardrobes with secure individual locks",
      "4 Homely Meals Everyday (Breakfast, Lunch, Snacks, Dinner)",
      "Ultra-Fast 300 Mbps Wi-Fi with dedicated room coverage",
      "Daily in-room housekeeping & periodic deep cleaning",
      "100% Uninterrupted Power Backup (Inverter + Generator)"
    ],
    inclusions: [
      "4 Meals Daily Included",
      "High-Speed Wi-Fi",
      "Daily Cleaning",
      "Geyser Hot Water",
      "Washing Machine",
      "RO Drinking Water",
      "Zero Brokerage"
    ],
    idealFor: "Working professionals, software engineers, interns & students looking for premium yet affordable living in HSR Layout."
  },
  {
    id: "single-sharing-private",
    name: "Private Single Room",
    tagline: "Exclusive Non-Sharing Sanctuary",
    badge: "100% Private",
    occupancy: "Private Single",
    occupancyLabel: "Single Occupancy (Zero Sharing)",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    monthlyRent: {
      amount: 22000,
      formatted: "₹22,000",
      period: "/ month",
      subtext: "All-inclusive private room • Includes all 4 meals daily"
    },
    dailyRent: {
      amount: 1500,
      formatted: "₹1,500",
      period: "/ day",
      subtext: "Exclusive private stay • Zero sharing • High comfort"
    },
    highlights: [
      "Private bedroom with Queen / Large bed & luxury linens",
      "Dedicated executive work-from-home desk & office chair",
      "Private attached designer washroom with hot water",
      "Large floor-to-ceiling wardrobe with personal digital locker",
      "4 Homely Meals Everyday (Breakfast, Lunch, Snacks, Dinner)",
      "Ultra-Fast 300 Mbps Wi-Fi with zero dead spots",
      "Daily room cleaning, linen change & sanitization",
      "100% Power backup & silent generator"
    ],
    inclusions: [
      "4 Meals Daily Included",
      "High-Speed Wi-Fi",
      "Daily Cleaning",
      "Private Bathroom",
      "Washing Machine",
      "RO Drinking Water",
      "Zero Brokerage"
    ],
    idealFor: "Founders, senior engineers, creators & professionals who require complete privacy and focused productivity."
  }
];

export const TARIFF_SUMMARY = {
  twoSharingMonthly: "₹13,000",
  twoSharingDaily: "₹1,200",
  singleMonthly: "₹22,000",
  singleDaily: "₹1,500",
  deposit: "Nominal Security Deposit • Zero Brokerage",
  foodIncluded: "4 meals included daily (Breakfast, Lunch, Evening Snacks & Dinner)",
  utilitiesIncluded: "Wi-Fi, Electricity, Housekeeping & Water included"
};
