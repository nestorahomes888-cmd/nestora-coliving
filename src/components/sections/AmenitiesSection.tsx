import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Wifi, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Shirt, 
  Flame, 
  Droplets, 
  Coffee, 
  Refrigerator, 
  Bike, 
  MoveVertical,
  Check
} from 'lucide-react';
import { AMENITIES_DATA, AMENITIES_CATEGORIES } from '../../data/amenities';
import { getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const AmenitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredAmenities = activeCategory === 'all'
    ? AMENITIES_DATA
    : AMENITIES_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="amenities" className="py-16 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Included with Every Stay
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
            Thoughtfully Curated Amenities
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Everything you need for productive, comfortable coliving in Bengaluru. All amenities are covered under your rent with zero extra bills.
          </p>

          {/* Swipeable Filter Pills on Mobile */}
          <div className="mt-6 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-1 sm:justify-center">
            {AMENITIES_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all shrink-0 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Amenities Cards Grid - 2 cols on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {filteredAmenities.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-amber-800">
                    <AmenityIcon name={item.icon} />
                  </div>
                  {item.badge && (
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-stone-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                <Check className="w-3 h-3" />
                <span>Zero surcharge • All inclusive</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Friendly Callout Banner */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-7 rounded-3xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-extrabold text-amber-950">
              Looking for a hassle-free PG in HSR Layout?
            </h4>
            <p className="text-xs text-amber-900/80">
              Move in with your laptop and suitcase. We take care of food, Wi-Fi, power backup, and housekeeping.
            </p>
          </div>
          <a
            href={getGeneralEnquiryWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white font-bold text-xs sm:text-sm text-center whitespace-nowrap shadow-xs"
          >
            Schedule a Visit Today
          </a>
        </div>
      </div>
    </section>
  );
};

const AmenityIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'UtensilsCrossed':
      return <UtensilsCrossed className="w-5 h-5" />;
    case 'Wifi':
      return <Wifi className="w-5 h-5" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5" />;
    case 'Zap':
      return <Zap className="w-5 h-5" />;
    case 'Shirt':
      return <Shirt className="w-5 h-5" />;
    case 'Flame':
      return <Flame className="w-5 h-5" />;
    case 'Droplets':
      return <Droplets className="w-5 h-5" />;
    case 'Coffee':
      return <Coffee className="w-5 h-5" />;
    case 'Refrigerator':
      return <Refrigerator className="w-5 h-5" />;
    case 'Bike':
      return <Bike className="w-5 h-5" />;
    case 'MoveVertical':
      return <MoveVertical className="w-5 h-5" />;
    default:
      return <Sparkles className="w-5 h-5" />;
  }
};
