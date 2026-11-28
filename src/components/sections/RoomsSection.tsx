import React, { useState } from 'react';
import { 
  Users, 
  Check, 
  MessageCircle, 
  Phone, 
  UtensilsCrossed, 
  Bath, 
  Laptop, 
  DoorClosed, 
  Flame 
} from 'lucide-react';
import { usePropertyData } from '../../context/PropertyContext';
import { getRoomEnquiryWhatsAppUrl, CALL_PHONE_NUMBER } from '../../utils/whatsapp';

export const RoomsSection: React.FC = () => {
  const { rooms, amenities } = usePropertyData();
  const [activePlan, setActivePlan] = useState<'monthly' | 'daily'>('monthly');

  const mealAmenity = amenities.find(a => a.name.toLowerCase().includes('meal') || a.name.toLowerCase().includes('food'));
  const mealName = mealAmenity?.name || 'Homely Meals Everyday';

  const twoSharing = rooms.find(r => r.id === 'double-sharing-pg') || rooms[0];
  const monthlyDisplay = twoSharing?.monthlyRent?.formatted || '₹13,000';
  const dailyDisplay = twoSharing?.dailyRent?.formatted || '₹1,200';

  return (
    <section id="rooms" className="py-16 sm:py-24 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Transparent Pricing • Zero Brokerage
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
            Rooms & Rental Plans
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Direct owner lease in HSR Layout Sector 1. Choose between long-term monthly PG living or flexible daily stays.
          </p>

          {/* Plan Duration Switcher - Mobile Optimized */}
          <div className="mt-6 inline-flex p-1 rounded-2xl bg-white border border-stone-300 shadow-xs max-w-full">
            <button
              type="button"
              onClick={() => setActivePlan('monthly')}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                activePlan === 'monthly'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <span className="hidden sm:inline">Monthly PG ({monthlyDisplay}/mo)</span>
              <span className="sm:hidden">Monthly ({monthlyDisplay})</span>
            </button>
            <button
              type="button"
              onClick={() => setActivePlan('daily')}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                activePlan === 'daily'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <span className="hidden sm:inline">Daily Stay ({dailyDisplay}/day)</span>
              <span className="sm:hidden">Daily ({dailyDisplay})</span>
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {rooms.map((room) => {
            const pricing = activePlan === 'monthly' ? room.monthlyRent : room.dailyRent;
            const isTwoSharing = room.id === 'double-sharing-pg';
            const whatsappUrl = getRoomEnquiryWhatsAppUrl(
              room.name, 
              activePlan, 
              `${pricing.formatted} ${pricing.period}`
            );

            return (
              <div
                key={room.id}
                className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card ${
                  isTwoSharing ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-stone-200'
                }`}
              >
                <div>
                  {/* Room Image */}
                  <div className="relative aspect-[16/10] bg-stone-900 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-stone-900/90 text-white border border-white/20 backdrop-blur-xs">
                        {room.badge}
                      </span>
                    </div>

                    {/* Occupancy Tag */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                      <div className="flex items-center gap-1.5 bg-stone-900/80 px-2.5 py-1 rounded-lg backdrop-blur-xs border border-white/10 text-[11px]">
                        <Users className="w-3 h-3 text-amber-300" />
                        <span>{room.occupancyLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-7 space-y-4 sm:space-y-5">
                    {/* Header & Price Banner */}
                    <div className="pb-3 border-b border-stone-200">
                      <div className="flex flex-col xs:flex-row xs:items-baseline justify-between gap-1">
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                            {room.tagline}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-0.5">
                            {room.name}
                          </h3>
                        </div>

                        {/* Price Callout */}
                        <div className="xs:text-right mt-1 xs:mt-0">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                              {pricing.formatted}
                            </span>
                            <span className="text-xs text-stone-500 font-semibold">
                              {pricing.period}
                            </span>
                          </div>
                          <div className="text-[10px] text-stone-500 mt-0.5">
                            {pricing.subtext}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Inclusions Strip */}
                    <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs font-semibold flex items-center gap-2">
                      <UtensilsCrossed className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Includes: {mealName} + 300 Mbps Wi-Fi</span>
                    </div>

                    {/* In-Room Facilities Grid */}
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                        Room Amenities
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                        <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/80">
                          <Bath className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                          <span className="font-semibold text-stone-800 text-[11px]">Attached Bath</span>
                        </div>
                        <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/80">
                          <Laptop className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                          <span className="font-semibold text-stone-800 text-[11px]">Study Desk</span>
                        </div>
                        <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/80">
                          <DoorClosed className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                          <span className="font-semibold text-stone-800 text-[11px]">Lockable Wardrobe</span>
                        </div>
                        <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/80">
                          <Flame className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                          <span className="font-semibold text-stone-800 text-[11px]">24/7 Geyser</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights Checklist */}
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                        Included Features
                      </div>
                      <div className="space-y-1.5 text-xs text-stone-700">
                        {room.highlights.slice(0, 5).map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span className="leading-tight text-[11px] sm:text-xs">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions - Compact for Mobile */}
                <div className="p-5 sm:p-7 pt-0 space-y-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Book on WhatsApp • {pricing.formatted}</span>
                  </a>

                  <a
                    href={`tel:${CALL_PHONE_NUMBER}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-800 font-bold text-xs border border-stone-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3 h-3 text-stone-700" />
                    <span>Call Host for Immediate Move-in</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Summary Box */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-7 rounded-3xl bg-stone-900 text-white shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
            <div>
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-amber-400">
                Official Tariffs
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
                Nestora HSR Rate Card
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Zero brokerage • Low deposit • Meals included daily
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 border-y md:border-y-0 md:border-x border-stone-800 py-3 md:py-0 md:px-5">
              <div>
                <div className="text-[10px] text-stone-400 uppercase font-semibold">2 Sharing PG (Monthly)</div>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-300 mt-0.5">{monthlyDisplay}</div>
                <div className="text-[10px] text-stone-400">per person with meals</div>
              </div>
              <div>
                <div className="text-[10px] text-stone-400 uppercase font-semibold">Daily Stay (Short-term)</div>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-300 mt-0.5">{dailyDisplay}</div>
                <div className="text-[10px] text-stone-400">per day with meals</div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end justify-center text-xs text-stone-300 space-y-1">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Brokerage (Direct Owner)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Walking distance to 27th Main</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
