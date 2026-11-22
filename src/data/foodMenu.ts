export interface MealSlot {
  name: string;
  time: string;
  icon: string;
  description: string;
  items: string[];
  specialNote?: string;
}

export interface DayMenu {
  dayName: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  shortDay: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  theme: string;
  meals: {
    breakfast: MealSlot;
    lunch: MealSlot;
    snacks: MealSlot;
    dinner: MealSlot;
  };
}

/**
 * ===========================================================================
 * NESTORA FOOD & DINING MENU CONFIGURATION
 * ---------------------------------------------------------------------------
 * NOTICE FOR MANAGEMENT:
 * The menu schedule below represents the standard healthy 4-meal rotation.
 * You can effortlessly update any dish names, timings or special items directly
 * in this file to reflect your current week's kitchen menu.
 * ===========================================================================
 */
export const FOOD_FEATURES = [
  {
    title: "Homely & Hygienic",
    description: "Cooked fresh everyday in a spotless commercial kitchen with farm-fresh vegetables and premium spices.",
    icon: "Soup"
  },
  {
    title: "4 Balanced Meals",
    description: "Wholesome breakfast, fulfilling lunch, refreshing evening snacks with ginger chai, and light comforting dinner.",
    icon: "Salad"
  },
  {
    title: "RO Purified Water",
    description: "100% pure multi-stage RO water used for all cooking, drinking, and utensil sanitization.",
    icon: "ShieldAlert"
  },
  {
    title: "South & North Flavors",
    description: "A well-balanced rotation of South Indian classics and hearty North Indian curries and fresh rotis.",
    icon: "Flame"
  }
];

export const MEAL_TIMINGS = {
  breakfast: "7:30 AM – 10:00 AM",
  lunch: "12:30 PM – 2:30 PM",
  snacks: "5:00 PM – 6:30 PM",
  dinner: "7:30 PM – 10:00 PM"
};

export const WEEKLY_MENU_DATA: DayMenu[] = [
  {
    dayName: "Monday",
    shortDay: "Mon",
    theme: "Fresh Week Kickoff",
    meals: {
      breakfast: {
        name: "Breakfast",
        time: MEAL_TIMINGS.breakfast,
        icon: "Sun",
        description: "Energizing warm South Indian breakfast",
        items: ["Fluffy Steamed Idli & Crispy Medu Vada", "Coconut Chutney & Piping Hot Tomato Chutney", "Homestyle Drumstick Sambar", "Filter Coffee / Masala Chai"]
      },
      lunch: {
        name: "Lunch",
        time: MEAL_TIMINGS.lunch,
        icon: "Utensils",
        description: "Balanced traditional midday meal",
        items: ["Steamed Sona Masoori Rice", "Tadka Dal Makhani / Yellow Moong Dal", "Fresh Seasonal Mixed Veg Curry", "Warm Phulkas (Rotis)", "Fresh Curd & Crispy Papad", "Green Salad"]
      },
      snacks: {
        name: "Evening Snacks",
        time: MEAL_TIMINGS.snacks,
        icon: "Coffee",
        description: "Post-work refresher",
        items: ["Crispy Onion & Palak Pakodas", "Mint Chutney", "Adrak (Ginger) Cutting Chai / Green Tea"]
      },
      dinner: {
        name: "Dinner",
        time: MEAL_TIMINGS.dinner,
        icon: "Moon",
        description: "Comforting wholesome dinner",
        items: ["Soft Butter Phulkas", "Aloo Gobi Matar Masala", "Jeera Rice & Dal Tadka", "Fresh Curd / Butter Milk", "Sweet Vermicelli Kheer"]
      }
    }
  },
  {
    dayName: "Tuesday",
    shortDay: "Tue",
    theme: "Flavors of Malnad",
    meals: {
      breakfast: {
        name: "Breakfast",
        time: MEAL_TIMINGS.breakfast,
        icon: "Sun",
        description: "Classic aromatic breakfast",
        items: ["Karnataka Style Masala Dosa / Plain Ghee Roast", "Spicy Potato Masala & Peanut Chutney", "Udupi Sambar", "Hot Filter Coffee / Ginger Tea"]
      },
      lunch: {
        name: "Lunch",
        time: MEAL_TIMINGS.lunch,
        icon: "Utensils",
        description: "Nutritious wholesome lunch",
        items: ["Fragrant Steamed Rice", "Punjabi Rajma Masala Curry", "Bhindi Do Pyaza (Okra stir-fry)", "Soft Tawa Rotis with Ghee", "Beaten Curd & Mixed Pickle", "Cucumber Tomato Salad"]
      },
      snacks: {
        name: "Evening Snacks",
        time: MEAL_TIMINGS.snacks,
        icon: "Coffee",
        description: "Light evening bite",
        items: ["Vegetable Bread Roll / Cutlet", "Sweet Chilli Dip", "Hot Elaichi (Cardamom) Chai & Coffee"]
      },
      dinner: {
        name: "Dinner",
        time: MEAL_TIMINGS.dinner,
        icon: "Moon",
        description: "Delightful regional dinner",
        items: ["Authentic Bisi Bele Bath with Boondi", "Tawa Phulkas with Paneer Bhurji", "Tangy Tomato Rasam & Steamed Rice", "Curd Rice with Pomegranate", "Roasted Papad"]
      }
    }
  },
  {
    dayName: "Wednesday",
    shortDay: "Wed",
    theme: "Midweek Energy",
    meals: {
      breakfast: {
        name: "Breakfast",
        time: MEAL_TIMINGS.breakfast,
        icon: "Sun",
        description: "Light and healthy start",
        items: ["Indori Poha with Roasted Peanuts & Sev", "Boiled Sprouts Salad", "Green Coriander Chutney", "Fresh Masala Chai / Filter Coffee"]
      },
      lunch: {
        name: "Lunch",
        time: MEAL_TIMINGS.lunch,
        icon: "Utensils",
        description: "Power-packed executive lunch",
        items: ["Steamed Basmati Rice", "Creamy Chana Masala (Chole)", "Fresh Methi Aloo", "Warm Tawa Phulkas", "Tadka Boondi Raita", "Assorted Papad & Pickles"]
      },
      snacks: {
        name: "Evening Snacks",
        time: MEAL_TIMINGS.snacks,
        icon: "Coffee",
        description: "Crunchy snack pairing",
        items: ["Samosa with Sweet Tamarind & Green Chutney", "Hot Masala Chai / Black Coffee"]
      },
      dinner: {
        name: "Dinner",
        time: MEAL_TIMINGS.dinner,
        icon: "Moon",
        description: "Rich Punjabi dinner",
        items: ["Soft Butter Rotis", "Kadai Paneer in Rich Gravy", "Dal Fry & Peas Pulao", "Fresh Onion Salad & Lemon", "Gulab Jamun (1 pc)"]
      }
    }
  },
  {
    dayName: "Thursday",
    shortDay: "Thu",
    theme: "Homestyle Nourishment",
    meals: {
      breakfast: {
        name: "Breakfast",
        time: MEAL_TIMINGS.breakfast,
        icon: "Sun",
        description: "Aromatic grains",
        items: ["Fluffy Vegetable Upma & Kesari Bath (Chow Chow Bath)", "Coconut Chutney", "Udupi Special Sambar", "Fresh Filter Coffee / Chai"]
      },
      lunch: {
        name: "Lunch",
        time: MEAL_TIMINGS.lunch,
        icon: "Utensils",
        description: "Homestyle comfort feast",
        items: ["Steamed White Rice", "Dal Palak (Spinach Lentil Curry)", "Baingan Bharta / Aloo Capsicum", "Whole Wheat Phulkas", "Homestyle Curd & Salted Chillies", "Fresh Salad"]
      },
      snacks: {
        name: "Evening Snacks",
        time: MEAL_TIMINGS.snacks,
        icon: "Coffee",
        description: "Chai time favorite",
        items: ["Sweet Corn Chaat with Butter & Lemon", "Crispy Masala Chai & Instant Coffee"]
      },
      dinner: {
        name: "Dinner",
        time: MEAL_TIMINGS.dinner,
        icon: "Moon",
        description: "Soothing dinner",
        items: ["Warm Tawa Rotis", "Egg Curry / Malai Kofta (Veg Option)", "Jeera Rice & Yellow Moong Dal", "Fresh Plain Curd", "Carrot Halwa / Sweet Treat"]
      }
    }
  },
  {
    dayName: "Friday",
    shortDay: "Fri",
    theme: "Weekend Warmup",
    meals: {
      breakfast: {
        name: "Breakfast",
        time: MEAL_TIMINGS.breakfast,
        icon: "Sun",
        description: "Rich layered breakfast",
        items: ["Hot Aloo Parathas with Dollop of Butter", "Fresh Curd & Mixed Mango Pickle", "Mint Coriander Chutney", "Ginger Cardamom Tea / Coffee"]
      },
      lunch: {
        name: "Lunch",
        time: MEAL_TIMINGS.lunch,
        icon: "Utensils",
        description: "Flavorful Friday lunch",
        items: ["Fragrant Ghee Rice", "Paneer Butter Masala", "Dal Panchratna", "Fresh Phulkas", "Crispy Masala Papad", "Beetroot & Cucumber Salad"]
      },
      snacks: {
        name: "Evening Snacks",
        time: MEAL_TIMINGS.snacks,
        icon: "Coffee",
        description: "Comfort street bite",
        items: ["Pav Bhaji / Bun Maska", "Extra Lemon & Chopped Onions", "Hot Cutting Chai"]
      },
      dinner: {
        name: "Dinner",
        time: MEAL_TIMINGS.dinner,
        icon: "Moon",
        description: "Special weekend eve spread",
        items: ["Hyderabadi Veg / Egg Dum Biryani", "Mirchi Ka Salan & Onion Raita", "Tawa Phulkas with Dal Tadka", "Gulab Jamun / Ice Cream"]
      }
    }
  },
  {
    dayName: "Saturday",
    shortDay: "Sat",
    theme: "Comfort Weekend",
    meals: {
      breakfast: {
        name: "Breakfast",
        time: MEAL_TIMINGS.breakfast,
        icon: "Sun",
        description: "Hearty weekend brunch special",
        items: ["Crispy Poori with Potato Sagu (Aloo Masala)", "Bombay Halwa / Sooji Halwa", "Hot Tea & South Indian Filter Coffee"]
      },
      lunch: {
        name: "Lunch",
        time: MEAL_TIMINGS.lunch,
        icon: "Utensils",
        description: "Relaxed Saturday lunch",
        items: ["Steamed Rice", "Authentic Sambar & Mysore Pepper Rasam", "Cabbage Chana Dal Poriyal", "Soft Rotis with Ghee", "Thick Curd & Roasted Appalam", "Salad"]
      },
      snacks: {
        name: "Evening Snacks",
        time: MEAL_TIMINGS.snacks,
        icon: "Coffee",
        description: "Crunchy evening bite",
        items: ["Crispy Mirchi Bajji / Veg Cutlet", "Spicy Garlic Chutney", "Strong Filter Coffee & Masala Tea"]
      },
      dinner: {
        name: "Dinner",
        time: MEAL_TIMINGS.dinner,
        icon: "Moon",
        description: "Weekend evening special",
        items: ["Tawa Butter Naan / Phulkas", "Mutter Mushroom / Shahi Paneer", "Veg Pulao with Dal Makhani", "Tossed Green Salad", "Sweet Delight"]
      }
    }
  },
  {
    dayName: "Sunday",
    shortDay: "Sun",
    theme: "Sunday Grand Feast",
    meals: {
      breakfast: {
        name: "Breakfast",
        time: MEAL_TIMINGS.breakfast,
        icon: "Sun",
        description: "Lazy Sunday indulgence",
        items: ["Soft Set Dosa with Vegetable Kurma & Chutney", "Crispy Mysore Vada", "Hot Filter Coffee & Tea"]
      },
      lunch: {
        name: "Lunch",
        time: MEAL_TIMINGS.lunch,
        icon: "Utensils",
        description: "Sunday grand festive spread",
        items: ["Special Hyderabadi Dum Biryani / Veg Biryani", "Creamy Mirchi Ka Salan", "Cucumber Onion Raita", "Paneer Tikka Masala & Warm Phulkas", "Papad & Sweets (Gulab Jamun / Payasam)"]
      },
      snacks: {
        name: "Evening Snacks",
        time: MEAL_TIMINGS.snacks,
        icon: "Coffee",
        description: "Sweet & savory recharge",
        items: ["Crispy Banana Fritters / Biscuits & Rusk", "Hot Masala Ginger Chai"]
      },
      dinner: {
        name: "Dinner",
        time: MEAL_TIMINGS.dinner,
        icon: "Moon",
        description: "Light soothing close to the week",
        items: ["Soft Phulkas", "Dal Tadka & Steamed Jeera Rice", "Aloo Jeera Dry Curry", "Soothing Curd Rice", "Fresh Fruit Salad"]
      }
    }
  }
];
