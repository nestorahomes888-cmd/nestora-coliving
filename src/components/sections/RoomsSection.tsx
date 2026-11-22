import React, { useState } from 'react';
import { 
  Users, 
  Check, 
  MessageCircle, 
  Phone, 
  UtensilsCrossed, 
  Wifi, 
  Sparkles, 
  ShieldCheck, 
  Bath, 
  Laptop, 
  DoorClosed, 
  Flame 
} from 'lucide-react';
import { ROOMS_DATA } from '../../data/rooms';
import { getRoomEnquiryWhatsAppUrl, CALL_PHONE_NUMBER } from '../../utils/whatsapp';

export const RoomsSection: React.FC = () => {
  const [activePlan, setActivePlan] = useState<'monthly' | 'daily'>('monthly');

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Transparent Pricing • Zero Brokerage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mt-1.5">
            Rooms & Rental Plans
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
            Direct owner lease with all-inclusive pricing. Whether you need a long-term monthly PG stay or a flexible daily stay in HSR Layout, everything is covered.
          </p>

          {/* Plan Duration Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-stone-300 shadow-xs">
            <button
              type="button"
              onClick={() => setActivePlan('monthly')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePlan === 'monthly'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              Monthly PG Plans (from ₹13,000/mo)
            </button>
            <button
              type="button"
              onClick={() => setActivePlan('daily')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePlan === 'daily'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              Daily Stays (from ₹1,200/day)
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {ROOMS_DATA.map((room) => {
            const pricing = activePlan === 'monthly' ? room.monthlyRent : room.dailyRent;
            const isTwoSharing = room.id === 'double-sharing-pg';
            const whatsappUrl = getRoomEnquiryWhatsAppUrl(room.name, activePlan, `${pricing.formatted} ${pricing.period}`);

            return (
              <div
                key={room.id}
                className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card hover:shadow-elevated ${
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
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-stone-900/90 text-white border border-white/20 backdrop-blur-xs">
                        {room.badge}
                      </span>
                    </div>

                    {/* Occupancy Tag */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                      <div className="flex items-center gap-1.5 bg-stone-900/80 px-3 py-1.5 rounded-lg backdrop-blur-xs border border-white/10">
                        <Users className="w-3.5 h-3.5 text-amber-300" />
                        <span>{room.occupancyLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Header & Price Banner */}
                    <div className="pb-4 border-b border-stone-200">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                            {room.tagline}
                          </div>
                          <h3 className="text-2xl font-extrabold text-stone-900 mt-0.5">
                            {room.name}
                          </h3>
                        </div>

                        {/* Price Callout */}
                        <div className="sm:text-right">
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                              {pricing.formatted}
                            </span>
                            <span className="text-xs text-stone-500 font-semibold">
                              {pricing.period}
                            </span>
                          </div>
                          <div className="text-[11px] text-stone-500 mt-0.5">
                            {pricing.subtext}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* All-Inclusive Strip */}
                    <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs font-semibold flex items-center gap-2">
                      <UtensilsCrossed className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Includes: 4 Meals Daily (Breakfast, Lunch, Snacks & Dinner) + Wi-Fi</span>
                    </div>

                    {/* In-Room Facilities Grid */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                        Room Amenities
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                        <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                          <Bath className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                          <span className="font-semibold text-stone-800">Attached Bath</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                          <Laptop className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                          <span className="font-semibold text-stone-800">Study Desk</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                          <DoorClosed className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                          <span className="font-semibold text-stone-800">Lockable Closet</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                          <Flame className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                          <span className="font-semibold text-stone-800">24/7 Geyser</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights Checklist */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                        What's Included
                      </div>
                      <div className="space-y-2 text-xs text-stone-700">
                        {room.highlights.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                            <span className="leading-tight">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 sm:p-8 pt-0 space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Book {room.name} ({pricing.formatted}) on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${CALL_PHONE_NUMBER}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-800 font-bold text-xs border border-stone-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-700" />
                    <span>Call Host for Immediate Move-in</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Summary Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-stone-900 text-white shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
                Summary of Tariffs
              </span>
              <h3 className="text-xl font-extrabold text-white mt-1">
                Nestora HSR Rate Card
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Clear tariffs with no hidden maintenance fees or surprise utility bills.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y md:border-y-0 md:border-x border-stone-800 py-4 md:py-0 md:px-6">
              <div>
                <div className="text-[11px] text-stone-400 uppercase font-semibold">2 Sharing PG (Monthly)</div>
                <div className="text-2xl font-extrabold text-amber-300 mt-0.5">₹13,000</div>
                <div className="text-[10px] text-stone-400">per person with 4 meals</div>
              </div>
              <div>
                <div className="text-[11px] text-stone-400 uppercase font-semibold">Daily Stay (Short-term)</div>
                <div className="text-2xl font-extrabold text-amber-300 mt-0.5">₹1,200</div>
                <div className="text-[10px] text-stone-400">per day with meals</div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end justify-center">
              <div className="text-xs text-stone-300 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero Brokerage (Direct Owner)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Low Security Deposit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Walking distance to 27th Main</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
