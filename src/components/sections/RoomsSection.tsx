import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone 
} from 'lucide-react';
import { usePropertyData } from '../../context/PropertyContext';
import { getRoomEnquiryWhatsAppUrl, CALL_PHONE_NUMBER } from '../../utils/whatsapp';

export const RoomsSection: React.FC = () => {
  const { rooms } = usePropertyData();
  const [activePlan, setActivePlan] = useState<'monthly' | 'daily'>('monthly');

  const firstRoom = rooms[0];
  const monthlyDisplay = firstRoom?.monthlyRent?.formatted || '₹13,000';
  const dailyDisplay = firstRoom?.dailyRent?.formatted || '₹1,200';

  return (
    <section id="rooms" className="py-16 sm:py-24 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Transparent Pricing • Direct Owner Lease
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
            Rooms & Rental Plans
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Choose between monthly living or flexible daily stays in HSR Layout Sector 1.
          </p>

          {/* Plan Duration Switcher */}
          <div className="mt-6 inline-flex p-1 rounded-2xl bg-white border border-stone-300 shadow-xs max-w-full">
            <button
              type="button"
              onClick={() => setActivePlan('monthly')}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activePlan === 'monthly'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <span className="hidden sm:inline">Monthly Stay ({monthlyDisplay}/mo)</span>
              <span className="sm:hidden">Monthly ({monthlyDisplay})</span>
            </button>
            <button
              type="button"
              onClick={() => setActivePlan('daily')}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
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

        {/* Room Cards Grid - 100% Updatable from Google Sheet */}
        <div className={`grid grid-cols-1 ${rooms.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 sm:gap-8 items-stretch`}>
          {rooms.map((room) => {
            const pricing = activePlan === 'monthly' ? room.monthlyRent : room.dailyRent;
            const whatsappUrl = getRoomEnquiryWhatsAppUrl(
              room.name, 
              activePlan, 
              `${pricing.formatted} ${pricing.period}`
            );

            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl border border-stone-200 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card hover:shadow-lg"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                    {/* Badge from Column F */}
                    {room.badge && (
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-stone-900/90 text-amber-300 border border-amber-300/30 backdrop-blur-xs">
                          {room.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content - Pure Updatable Data */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      {/* Description from Column A / Description */}
                      {room.description && (
                        <div className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1">
                          {room.description}
                        </div>
                      )}

                      {/* Room Name from Column B */}
                      <h3 className="text-2xl font-extrabold text-stone-900 tracking-tight">
                        {room.name}
                      </h3>
                    </div>

                    {/* Price Callout */}
                    <div className="pt-2 pb-3 border-y border-stone-100 flex items-baseline justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                          {pricing.formatted}
                        </span>
                        <span className="text-xs text-stone-500 font-bold">
                          {pricing.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Book on WhatsApp • {pricing.formatted}</span>
                  </a>

                  <a
                    href={`tel:${CALL_PHONE_NUMBER}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-800 font-bold text-xs border border-stone-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-700" />
                    <span>Call Host</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
