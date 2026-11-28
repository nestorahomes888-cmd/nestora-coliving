import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Clock, 
  Check, 
  Maximize2, 
  X, 
  MessageCircle,
  Sun,
  Utensils,
  Coffee,
  Moon,
  Sparkles
} from 'lucide-react';
import { usePropertyData } from '../../context/PropertyContext';
import { getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const FoodSection: React.FC = () => {
  const { menuPhotoUrl, amenities } = usePropertyData();
  const [photoZoomOpen, setPhotoZoomOpen] = useState(false);

  const mealAmenity = amenities.find(a => a.name.toLowerCase().includes('meal') || a.name.toLowerCase().includes('food'));
  const mealHeading = mealAmenity?.name || 'Homely Meals Everyday';

  const mealSlots = [
    {
      name: 'Breakfast',
      time: '7:30 AM – 10:00 AM',
      icon: Sun,
      color: 'bg-amber-100 text-amber-900',
      description: 'Idli Vada, Masala Dosa, Aloo Paratha, Poha, Filter Coffee & Tea'
    },
    {
      name: 'Lunch',
      time: '12:30 PM – 2:30 PM',
      icon: Utensils,
      color: 'bg-orange-100 text-orange-900',
      description: 'Steamed Rice, Fresh Phulkas, Dal Tadka/Makhani, Seasonal Veg, Curd, Salad'
    },
    {
      name: 'Evening Snacks',
      time: '5:00 PM – 6:30 PM',
      icon: Coffee,
      color: 'bg-rose-100 text-rose-900',
      description: 'Hot Pakodas, Samosas, Cutlets with Ginger Adrak Cutting Chai'
    },
    {
      name: 'Dinner',
      time: '7:30 PM – 10:00 PM',
      icon: Moon,
      color: 'bg-indigo-100 text-indigo-900',
      description: 'Soft Butter Rotis, Paneer/Veg Special, Dal Fry, Jeera Rice, Sweet'
    }
  ];

  return (
    <section id="food" className="py-16 sm:py-24 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Included in All Stays
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
            {mealHeading}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Homestyle South & North Indian food cooked fresh in our hygienic kitchen using 100% RO purified water.
          </p>
        </div>

        {/* Main Food Content Grid: Photo Board + Meal Timings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Owner Menu Board Photo (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-amber-800" />
                <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                  Weekly Menu Board
                </h3>
              </div>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Updated Weekly
              </span>
            </div>

            {/* Photo Card with Click-to-Zoom */}
            <div 
              onClick={() => setPhotoZoomOpen(true)}
              className="relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-300/80 shadow-card cursor-pointer group"
            >
              <div className="aspect-[16/11] sm:aspect-[16/10] relative overflow-hidden bg-stone-950">
                <img
                  src={menuPhotoUrl}
                  alt="Nestora Coliving Weekly Food Menu"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-xs px-3 py-1 rounded-xl text-white text-[11px] font-bold border border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Official Kitchen Schedule</span>
                </div>

                {/* Zoom Pill Button */}
                <div className="absolute top-3 right-3 bg-white/90 hover:bg-white text-stone-900 text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1.5 transition-all">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Tap to Enlarge</span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                  <div>
                    <div className="font-extrabold text-sm sm:text-base">Weekly Meal Schedule</div>
                    <div className="text-[11px] text-stone-300">Tap to inspect Monday through Sunday meals</div>
                  </div>
                  <span className="hidden sm:inline-block bg-emerald-600 px-2.5 py-1 rounded-lg font-bold text-[11px]">
                    Unlimited Servings
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-stone-500 italic text-center sm:text-left">
              * The owner updates the physical menu board photo regularly. Click to zoom in and read every dish clearly.
            </p>
          </div>

          {/* Right Column: 4 Daily Meal Timings & Standards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
              Daily Meal Timings
            </h3>

            <div className="space-y-2.5">
              {mealSlots.map((slot, idx) => {
                const IconComponent = slot.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold ${slot.color}`}>
                          <IconComponent className="w-4 h-4" />
                        </span>
                        <h4 className="font-extrabold text-stone-900 text-sm">
                          {slot.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-stone-500">
                        <Clock className="w-3 h-3 text-amber-800" />
                        <span>{slot.time}</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 pl-9 leading-relaxed">
                      {slot.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Hygiene & Food Perks Card */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
              <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Dining Standards</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-800 font-medium pt-1">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% RO Purified Water</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Separate Veg Cooking</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Unlimited Servings</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Hot Masala Chai Daily</span>
                </div>
              </div>
            </div>

            {/* Dietary Inquiry */}
            <a
              href={getGeneralEnquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask About Food Preferences on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Full-Screen Menu Photo Lightbox Modal */}
      {photoZoomOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fade-in">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-400">
                Nestora Weekly Food Menu Board
              </span>
            </div>

            <button
              type="button"
              onClick={() => setPhotoZoomOpen(false)}
              className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Zoomable Photo */}
          <div className="relative flex-1 flex items-center justify-center my-3 overflow-auto">
            <img
              src={menuPhotoUrl}
              alt="Nestora Coliving Weekly Menu Full-Screen"
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
          </div>

          {/* Modal Footer */}
          <div className="text-center text-xs text-stone-400 pb-2">
            Pinch or zoom on your phone screen to read all details. Tap Close or background to exit.
          </div>
        </div>
      )}
    </section>
  );
};
