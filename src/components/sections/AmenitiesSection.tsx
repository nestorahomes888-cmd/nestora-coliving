import React, { useState } from 'react';
import { 
  Sparkles, 
  UtensilsCrossed, 
  Wifi, 
  ShieldCheck, 
  Zap, 
  Shirt, 
  Flame, 
  Droplets, 
  Coffee, 
  Refrigerator, 
  Bike, 
  MoveVertical,
  CheckCircle2
} from 'lucide-react';
import { AMENITIES_DATA, AMENITIES_CATEGORIES, AmenityItem } from '../../data/amenities';
import { getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const AmenitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredAmenities = activeCategory === 'all'
    ? AMENITIES_DATA
    : AMENITIES_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="amenities" className="py-20 lg:py-28 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-cream-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Comprehensive Facilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight">
            Designed for Modern Living & Ultimate Peace of Mind
          </h2>
          <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
            Everything you need for an effortless, hotel-grade coliving stay in Bengaluru. No utility hassles, no hidden bills—just move in with your suitcase.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {AMENITIES_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-charcoal-900 text-cream-50 shadow-sm'
                    : 'bg-white text-charcoal-700 border border-cream-300 hover:bg-cream-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAmenities.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-cream-200 shadow-soft hover:shadow-medium hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cream-100 border border-cream-300/80 flex items-center justify-center text-gold-dark group-hover:bg-charcoal-900 group-hover:text-gold transition-colors duration-300 shadow-2xs">
                    <AmenityIcon name={item.icon} />
                  </div>

                  {item.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gold/15 text-charcoal-800 border border-gold/30">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-cream-100 flex items-center gap-1.5 text-xs text-charcoal-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero extra utility surcharge</span>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Callout Card */}
        <div className="mt-16 p-8 rounded-3xl bg-charcoal-900 text-cream-100 border border-charcoal-700 shadow-elevated relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">
                Transparent All-Inclusive Living
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                What does your Nestora stay cover?
              </h3>
              <p className="text-sm text-charcoal-300 leading-relaxed max-w-2xl">
                Unlike traditional apartment rentals or generic PGs where electricity, Wi-Fi, water, food and housekeeping create constant unexpected expenses, Nestora simplifies everything into one transparent monthly package.
              </p>
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-cream-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span>4 Daily Meals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span>High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span>Daily Housekeeping</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span>Power & Hot Water</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <a
                href={getGeneralEnquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gold text-charcoal-900 font-semibold text-sm hover:bg-gold-light transition-all shadow-md hover:shadow-gold-glow text-center"
              >
                Ask About Availability
              </a>
              <span className="text-[11px] text-charcoal-400 mt-2">
                Instant response from owner team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AmenityIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'UtensilsCrossed':
      return <UtensilsCrossed className="w-6 h-6" />;
    case 'Wifi':
      return <Wifi className="w-6 h-6" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6" />;
    case 'Zap':
      return <Zap className="w-6 h-6" />;
    case 'Shirt':
      return <Shirt className="w-6 h-6" />;
    case 'Flame':
      return <Flame className="w-6 h-6" />;
    case 'Droplets':
      return <Droplets className="w-6 h-6" />;
    case 'Coffee':
      return <Coffee className="w-6 h-6" />;
    case 'Refrigerator':
      return <Refrigerator className="w-6 h-6" />;
    case 'Bike':
      return <Bike className="w-6 h-6" />;
    case 'MoveVertical':
      return <MoveVertical className="w-6 h-6" />;
    default:
      return <Sparkles className="w-6 h-6" />;
  }
};
