import React from 'react';
import { Star, MessageCircle, ArrowRight, Phone, MapPin, Check, ShieldCheck, UtensilsCrossed, Wifi, Sparkles } from 'lucide-react';
import { PROPERTY_DATA } from '../../data/property';
import { getGeneralEnquiryWhatsAppUrl, CALL_PHONE_NUMBER, DISPLAY_PHONE_NUMBER } from '../../utils/whatsapp';

export const HeroSection: React.FC = () => {
  const scrollToRooms = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#rooms');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/80 text-stone-800 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Sector 1, HSR Layout, Bengaluru</span>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Nestora+Coliving+Premium+Space+HSR+Layout+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 hover:border-amber-400 text-stone-800 text-xs font-semibold shadow-2xs transition-colors"
          >
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-stone-900">{PROPERTY_DATA.googleRating.score}</span>
            <span className="text-stone-500">({PROPERTY_DATA.googleRating.totalReviews}+ Google Reviews)</span>
          </a>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Zero Brokerage • Move-In Ready</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Callouts */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
                Premium Coliving & PG Space
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
                Your Space. <br />
                <span className="font-serif italic font-normal text-amber-700">Your Comfort.</span> <br />
                Your Nestora.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl">
              Experience thoughtfully designed boutique living in HSR Layout Sector 1. Clean, spacious rooms, 4 homely home-cooked meals everyday, high-speed fiber Wi-Fi, and 24/7 security.
            </p>

            {/* Clear Pricing Highlight Pill */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-sm max-w-xl">
              <div className="grid grid-cols-2 gap-4 divide-x divide-stone-200">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                    2-Sharing PG Plan
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                      ₹13,000
                    </span>
                    <span className="text-xs text-stone-500 font-medium">/ month</span>
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold mt-1">
                    ✓ Includes all 4 meals daily
                  </div>
                </div>

                <div className="pl-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                    Daily Flexible Stay
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                      ₹1,200
                    </span>
                    <span className="text-xs text-stone-500 font-medium">/ day</span>
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold mt-1">
                    ✓ Zero lock-in • Short stays
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#rooms"
                onClick={scrollToRooms}
                className="px-6 py-3.5 rounded-xl bg-stone-900 text-white font-bold text-sm hover:bg-stone-800 transition-all shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>View Rooms & Rates</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={getGeneralEnquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Booking</span>
              </a>

              <a
                href={`tel:${CALL_PHONE_NUMBER}`}
                className="px-4 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-bold text-sm border border-stone-300 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-stone-900" />
                <span>Call Host</span>
              </a>
            </div>

            {/* Inclusions Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs font-medium text-stone-700">
                <Check className="w-4 h-4 text-amber-700 shrink-0 stroke-[2.5]" />
                <span>4 Homely Meals Everyday</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-stone-700">
                <Check className="w-4 h-4 text-amber-700 shrink-0 stroke-[2.5]" />
                <span>Ultra-Fast 300 Mbps Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-stone-700">
                <Check className="w-4 h-4 text-amber-700 shrink-0 stroke-[2.5]" />
                <span>Daily Housekeeping & Hot Water</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Large Showcase Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-stone-900 shadow-xl border border-stone-200">
              <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
                  alt="Nestora Coliving 2-Sharing Room in HSR Layout"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 bg-stone-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white text-xs font-bold border border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>27th Main Rd, HSR Sector 1</span>
                </div>

                {/* Tariff Tag */}
                <div className="absolute top-4 right-4 bg-emerald-600 px-3 py-1.5 rounded-xl text-white text-xs font-extrabold shadow-sm">
                  ₹13,000 / month
                </div>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-extrabold text-lg sm:text-xl text-white">
                    2 Sharing PG & Daily Stays
                  </h3>
                  <p className="text-xs text-stone-300 mt-1">
                    Attached Washroom • Geyser • Study Desks • Balcony • Lockers
                  </p>
                </div>
              </div>

              {/* Bottom Feature Strip */}
              <div className="p-4 bg-stone-900 border-t border-stone-800 grid grid-cols-3 gap-2 text-center text-white">
                <div>
                  <div className="text-amber-400 font-extrabold text-base">₹13,000</div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-wider">Monthly 2-Share</div>
                </div>
                <div className="border-x border-stone-800">
                  <div className="text-amber-400 font-extrabold text-base">₹1,200</div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-wider">Daily Stay</div>
                </div>
                <div>
                  <div className="text-amber-400 font-extrabold text-base">4 Meals</div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-wider">Included Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Row */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-stone-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-3">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-stone-900 text-sm">4 Homely Meals Daily</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Breakfast, lunch, evening snacks & tea, plus dinner cooked fresh with RO water.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold mb-3">
                <Wifi className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-stone-900 text-sm">300 Mbps Fiber Wi-Fi</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Dedicated dual-band mesh network across all rooms for seamless WFH and video calls.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-stone-900 text-sm">Daily Housekeeping</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Regular room sweeping, mopping, trash clearing, and deep bathroom sanitization.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-stone-900 text-sm">3-Tier Security</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Smart biometric entry, 24/7 CCTV surveillance, and on-site verified warden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
