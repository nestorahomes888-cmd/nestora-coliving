import React, { useState } from 'react';
import { 
  Users, 
  Maximize2, 
  Check, 
  MessageCircle, 
  Calendar, 
  Sparkles, 
  ShieldAlert, 
  Info,
  ChevronRight,
  Bed,
  Bath,
  Wifi,
  Laptop,
  DoorClosed,
  Zap,
  Wind,
  Sun
} from 'lucide-react';
import { ROOMS_DATA, RentalDuration, RoomType } from '../../data/rooms';
import { getRoomEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const RoomsSection: React.FC = () => {
  // Global or per-card duration selection
  const [selectedDuration, setSelectedDuration] = useState<RentalDuration>('monthly');

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-cream-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-cream-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Living Spaces & Flexible Stays</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight">
            Rooms Crafted for Rest & Focus
          </h2>
          <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
            Choose between private single occupancy or spacious twin sharing. Every room is meticulously equipped with an attached private washroom, dedicated workstation, high-speed Wi-Fi, and 4 daily meals.
          </p>

          {/* Duration Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-cream-200/90 border border-cream-300 shadow-inner">
            <button
              type="button"
              onClick={() => setSelectedDuration('monthly')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedDuration === 'monthly'
                  ? 'bg-charcoal-900 text-cream-50 shadow-sm'
                  : 'text-charcoal-700 hover:text-charcoal-900'
              }`}
            >
              Monthly Stay (Best Value)
            </button>
            <button
              type="button"
              onClick={() => setSelectedDuration('weekly')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedDuration === 'weekly'
                  ? 'bg-charcoal-900 text-cream-50 shadow-sm'
                  : 'text-charcoal-700 hover:text-charcoal-900'
              }`}
            >
              Weekly Stay
            </button>
            <button
              type="button"
              onClick={() => setSelectedDuration('daily')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedDuration === 'daily'
                  ? 'bg-charcoal-900 text-cream-50 shadow-sm'
                  : 'text-charcoal-700 hover:text-charcoal-900'
              }`}
            >
              Daily Stay
            </button>
          </div>

          {/* Pricing Placeholder Notice banner for clarity */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-charcoal-500 bg-white/70 py-1.5 px-4 rounded-full border border-cream-200 max-w-lg mx-auto">
            <Info className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Tariff placeholders shown below • Easily updated in <code className="bg-cream-200 px-1 py-0.5 rounded text-[11px]">src/data/rooms.ts</code></span>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {ROOMS_DATA.map((room) => {
            const activePlan = room.prices[selectedDuration];
            const whatsappUrl = getRoomEnquiryWhatsAppUrl(room.name, selectedDuration);

            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl border border-cream-200/90 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
                  <img
                    src={room.image}
                    alt={room.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-black/20" />

                  {/* Badge */}
                  {room.popularBadge && (
                    <div className="absolute top-4 left-4 bg-charcoal-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/40 text-gold text-xs font-semibold tracking-wide shadow-sm">
                      {room.popularBadge}
                    </div>
                  )}

                  {/* Room Meta Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-2 bg-charcoal-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <Users className="w-3.5 h-3.5 text-gold" />
                      <span className="font-medium">{room.occupancy}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-charcoal-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <Maximize2 className="w-3.5 h-3.5 text-gold" />
                      <span>{room.roomSize}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gold-dark font-bold">
                        {room.subtitle}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-charcoal-900 mt-0.5">
                        {room.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Pricing Box */}
                    <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-medium text-charcoal-500">
                          {activePlan.label} Tariff
                        </div>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 tracking-tight">
                            {activePlan.amount}
                          </span>
                          <span className="text-xs text-charcoal-500 font-medium">
                            {activePlan.period}
                          </span>
                        </div>
                        <div className="text-[11px] text-emerald-700 font-medium mt-0.5 flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          <span>Includes 4 Meals, Wi-Fi & Housekeeping</span>
                        </div>
                      </div>

                      <div className="text-right sm:text-right">
                        <span className="inline-block text-[11px] font-medium px-2.5 py-1 rounded-md bg-white border border-cream-300 text-charcoal-700">
                          {activePlan.deposit}
                        </span>
                      </div>
                    </div>

                    {/* Key Features Checkmarks */}
                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2.5">
                        Highlights Included
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-700">
                        {room.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Room Specific Facilities Grid */}
                    <div className="pt-3 border-t border-cream-200">
                      <div className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2.5">
                        Room Amenities
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {room.facilities.slice(0, 4).map((fac, idx) => (
                          <div
                            key={idx}
                            className="p-2 rounded-xl bg-cream-50/80 border border-cream-200/60 text-center"
                            title={fac.description}
                          >
                            <div className="w-7 h-7 mx-auto rounded-lg bg-white flex items-center justify-center text-gold-dark mb-1 shadow-2xs">
                              <RoomFacilityIcon name={fac.icon} />
                            </div>
                            <div className="text-[11px] font-semibold text-charcoal-800 line-clamp-1">
                              {fac.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-6 border-t border-cream-200 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-charcoal-900 text-cream-50 font-semibold text-xs sm:text-sm hover:bg-charcoal-800 transition-all shadow-md hover:shadow-elevated flex items-center justify-center gap-2 group border border-charcoal-700"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <a
                      href={`tel:+917019644004`}
                      className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-white text-charcoal-800 font-semibold text-xs sm:text-sm hover:bg-cream-100 transition-colors border border-cream-300 flex items-center justify-center gap-2"
                    >
                      <span>Call for Tariff</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const RoomFacilityIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'Bath':
      return <Bath className="w-4 h-4" />;
    case 'Laptop':
      return <Laptop className="w-4 h-4" />;
    case 'Wifi':
      return <Wifi className="w-4 h-4" />;
    case 'DoorClosed':
      return <DoorClosed className="w-4 h-4" />;
    case 'BedDouble':
    case 'Bed':
      return <Bed className="w-4 h-4" />;
    case 'Zap':
      return <Zap className="w-4 h-4" />;
    case 'Wind':
      return <Wind className="w-4 h-4" />;
    case 'Sun':
      return <Sun className="w-4 h-4" />;
    default:
      return <Check className="w-4 h-4" />;
  }
};
