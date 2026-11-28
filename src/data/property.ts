export interface PropertyInfo {
  name: string;
  tagline: string;
  subheadline: string;
  brandStory: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
    landmark: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  googleRating: {
    score: number;
    totalReviews: number;
    platform: string;
    verified: boolean;
  };
  highlights: {
    label: string;
    description: string;
    icon: string;
  }[];
  nearbyLandmarks: {
    name: string;
    category: 'transit' | 'tech-hub' | 'lifestyle' | 'nature';
    distance: string;
    walkingTime?: string;
    drivingTime?: string;
  }[];
  workingHours: {
    siteVisit: string;
    support: string;
  };
}

export const PROPERTY_DATA: PropertyInfo = {
  name: "Nestora Coliving Premium Space",
  tagline: "Your Space. Your Comfort. Your Nestora.",
  subheadline: "A boutique luxury coliving sanctuary nestled in the vibrant heart of HSR Layout, Bengaluru. Thoughtfully crafted for ambitious professionals seeking tranquility, refined community, and effortless modern living.",
  brandStory: "At Nestora, we believe where you live shapes how you thrive. We have reimagined coliving as a boutique hospitality experience—blending warm neutral aesthetics, handcrafted comforts, wholesome daily dining, and seamless modern connectivity in HSR Layout's most desirable enclave.",
  phone: "+917019644004",
  phoneDisplay: "+91 70196 44004",
  whatsappNumber: "917019644004",
  address: {
    line1: "No. 71, 27th Main Road",
    line2: "Phase 3, 4th Cross, 1st Sector",
    area: "HSR Layout",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560102",
    full: "No. 71, 27th Main Road, Phase 3, 4th Cross, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
    landmark: "Just off 27th Main Road commercial corridor, minutes from Silk Board & Agara Lake"
  },
  coordinates: {
    lat: 12.90625,
    lng: 77.65139
  },
  googleRating: {
    score: 4.8,
    totalReviews: 128,
    platform: "Google Business Profile",
    verified: true
  },
  highlights: [
    {
      label: "Zero Brokerage",
      description: "Direct owner lease with minimal deposit and crystal-clear transparent terms.",
      icon: "ShieldCheck"
    },
    {
      label: "Homely Food Daily",
      description: "Hygienically prepared nutritious breakfast, lunch, high-tea snacks & dinner.",
      icon: "UtensilsCrossed"
    },
    {
      label: "Ultra-Fast Wi-Fi (300+ Mbps)",
      description: "Dual-band enterprise fiber mesh designed for seamless work-from-home.",
      icon: "Wifi"
    },
    {
      label: "Daily Professional Housekeeping",
      description: "Spotless daily room tidying and periodic deep sanitization protocols.",
      icon: "Sparkles"
    },
    {
      label: "3-Tier Biometric Security",
      description: "Biometric entry, 24/7 CCTV surveillance and verified security personnel.",
      icon: "Lock"
    },
    {
      label: "100% Power Backup",
      description: "Continuous dual-inverter generator backup ensuring 0 work disruptions.",
      icon: "Zap"
    }
  ],
  nearbyLandmarks: [
    {
      name: "27th Main Road High Street",
      category: "lifestyle",
      distance: "200 m",
      walkingTime: "2 mins walk",
      drivingTime: "1 min"
    },
    {
      name: "HSR BDA Complex & Market",
      category: "lifestyle",
      distance: "1.4 km",
      walkingTime: "15 mins walk",
      drivingTime: "4 mins"
    },
    {
      name: "Agara Lake & Jogging Track",
      category: "nature",
      distance: "1.8 km",
      walkingTime: "18 mins walk",
      drivingTime: "5 mins"
    },
    {
      name: "Central Silk Board Metro & Junction",
      category: "transit",
      distance: "2.5 km",
      drivingTime: "7 mins"
    },
    {
      name: "Bellandur / Outer Ring Road Tech Parks",
      category: "tech-hub",
      distance: "3.8 km",
      drivingTime: "12 mins"
    },
    {
      name: "Ecospace & Prestige Tech Park Corridor",
      category: "tech-hub",
      distance: "5.2 km",
      drivingTime: "15 mins"
    }
  ],
  workingHours: {
    siteVisit: "9:00 AM – 8:30 PM (All 7 Days)",
    support: "24/7 Resident Support"
  }
};
