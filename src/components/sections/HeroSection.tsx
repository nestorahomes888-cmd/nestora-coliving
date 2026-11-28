import React, { useState } from 'react';
import { 
  Star, 
  MessageCircle, 
  Phone, 
  MapPin, 
  ArrowRight, 
  UtensilsCrossed, 
  Wifi, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { usePropertyData } from '../../context/PropertyContext';
import { getRoomEnquiryWhatsAppUrl, CALL_PHONE_NUMBER } from '../../utils/whatsapp';

export const HeroSection: React.FC = () => {
  const { property, rooms, amenities, isLive } = usePropertyData();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'daily'>('monthly');

  const mealAmenity = amenities.find(a => a.name.toLowerCase().includes('meal') || a.name.toLowerCase().includes('food'));
  const mealCount = mealAmenity ? (mealAmenity.name.match(/\d+/) ? `${mealAmenity.name.match(/\d+/)![0]} Meals` : 'Meals Included') : 'Meals Included';
  const mealBadge = mealAmenity?.badge || 'Meals Included';

  const twoSharing = rooms.find(r => r.id === 'double-sharing-pg') || rooms[0];
  const monthlyFormatted = twoSharing?.monthlyRent?.formatted || '₹13,000';
  const dailyFormatted = twoSharing?.dailyRent?.formatted || '₹1,200';
  const heroImage = twoSharing?.image || 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80';

  const scrollToRooms = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#rooms');
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const heroWhatsAppUrl = selectedPlan === 'monthly'
    ? getRoomEnquiryWhatsAppUrl(twoSharing?.name || '2 Sharing PG Room', 'monthly', `${monthlyFormatted} / month`)
    : getRoomEnquiryWhatsAppUrl(twoSharing?.name || 'Daily Flexible Stay', 'daily', `${dailyFormatted} / day`);

  return (
    <section id="home" className="relative pt-20 pb-12 sm:pt-28 sm:pb-20 overflow-hidden bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/90 text-stone-800 text-[11px] sm:text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>HSR Layout Sector 1</span>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Nestora+Coliving+Premium+Space+HSR+Layout+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-800 text-[11px] sm:text-xs font-semibold shadow-2xs"
          >
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-extrabold text-stone-900">{property.googleRating.score}</span>
            <span className="text-stone-500 hidden xs:inline">({property.googleRating.totalReviews}+ Reviews)</span>
          </a>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Zero Brokerage</span>
          </div>

          {isLive && (
            <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>Live Synced</span>
            </div>
          )}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Headlines, Interactive Calculator & CTAs */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-800">
                Boutique Coliving • HSR Layout
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
                Your Space. <br />
                <span className="font-serif italic font-normal text-amber-700">Your Comfort.</span> <br />
                Your Nestora.
              </h1>
            </div>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl font-normal">
              Premium unisex coliving space in HSR Layout Sector 1. Clean twin & private rooms with freshly prepared home-cooked food, 300 Mbps Wi-Fi, daily housekeeping, and 24/7 security.
            </p>

            {/* Dynamic Mobile-First Rent Calculator Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-stone-500">
                  Select Living Plan
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Food Included
                </span>
              </div>

              {/* Toggle Switch */}
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-stone-100 border border-stone-200">
                <button
                  type="button"
                  onClick={() => setSelectedPlan('monthly')}
                  className={`py-2 px-2 text-center rounded-lg text-xs font-extrabold transition-all ${
                    selectedPlan === 'monthly'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  2-Sharing Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPlan('daily')}
                  className={`py-2 px-2 text-center rounded-lg text-xs font-extrabold transition-all ${
                    selectedPlan === 'daily'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  Daily Stay (Short-term)
                </button>
              </div>

              {/* Dynamic Price Display */}
              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                      {selectedPlan === 'monthly' ? monthlyFormatted : dailyFormatted}
                    </span>
                    <span className="text-xs text-stone-500 font-semibold">
                      {selectedPlan === 'monthly' ? '/ month per person' : '/ day per person'}
                    </span>
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    {selectedPlan === 'monthly' 
                      ? 'Includes Homely Food & Utilities • Zero Brokerage' 
                      : 'Includes food & Wi-Fi • Zero lock-in period'}
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Book on WhatsApp ({selectedPlan === 'monthly' ? monthlyFormatted : dailyFormatted})</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="#rooms"
                    onClick={scrollToRooms}
                    className="py-3 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Rooms</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`tel:${CALL_PHONE_NUMBER}`}
                    className="py-3 px-3 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-900 font-bold text-xs border border-stone-300 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-800" />
                    <span>Call Host</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                <div className="text-xs sm:text-sm font-extrabold text-stone-900">Food</div>
                <div className="text-[10px] text-stone-500">Included</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                <div className="text-xs sm:text-sm font-extrabold text-stone-900">300 Mbps</div>
                <div className="text-[10px] text-stone-500">Fast Wi-Fi</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                <div className="text-xs sm:text-sm font-extrabold text-stone-900">₹0</div>
                <div className="text-[10px] text-stone-500">Brokerage</div>
              </div>
            </div>
          </div>

          {/* Right: Visual Property Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-stone-900 shadow-xl border border-stone-200">
              <div className="aspect-[16/11] relative overflow-hidden">
                <img
                  src={heroImage}
                  alt="Nestora Coliving 2 Sharing Room HSR Layout"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-3.5 left-3.5 bg-stone-900/90 backdrop-blur-xs px-3 py-1 rounded-lg text-white text-[11px] font-bold border border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>27th Main Rd, HSR Sector 1</span>
                </div>

                {/* Tariff Tag */}
                <div className="absolute top-3.5 right-3.5 bg-emerald-600 px-3 py-1 rounded-lg text-white text-xs font-extrabold shadow-sm">
                  {monthlyFormatted} / mo
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <div className="text-base sm:text-lg font-extrabold text-white">
                    2 Sharing PG & Daily Stays
                  </div>
                  <div className="text-[11px] text-stone-300 flex items-center gap-2 mt-0.5">
                    <span>Attached Bathroom</span>
                    <span>•</span>
                    <span>Study Desks</span>
                    <span>•</span>
                    <span>Balcony</span>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Bar */}
              <div className="p-3 bg-stone-900 border-t border-stone-800 grid grid-cols-3 gap-1 text-center text-white">
                <div>
                  <div className="text-amber-400 font-extrabold text-sm sm:text-base">{monthlyFormatted}</div>
                  <div className="text-[9px] text-stone-400 uppercase tracking-wider">Monthly PG</div>
                </div>
                <div className="border-x border-stone-800">
                  <div className="text-amber-400 font-extrabold text-sm sm:text-base">{dailyFormatted}</div>
                  <div className="text-[9px] text-stone-400 uppercase tracking-wider">Daily Stay</div>
                </div>
                <div>
                  <div className="text-amber-400 font-extrabold text-sm sm:text-base">Food</div>
                  <div className="text-[9px] text-stone-400 uppercase tracking-wider">Included</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-stone-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <UtensilsCrossed className="w-5 h-5 text-amber-700 mb-2" />
              <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm">Homely Food</h4>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                Nutritious home-style meals cooked fresh everyday.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <Wifi className="w-5 h-5 text-blue-700 mb-2" />
              <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm">300 Mbps Wi-Fi</h4>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                High-speed dual-band fiber for seamless WFH.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <Sparkles className="w-5 h-5 text-emerald-700 mb-2" />
              <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm">Housekeeping</h4>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                Daily room sweeping, mopping & bathroom sanitization.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-stone-900 mb-2" />
              <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm">3-Tier Security</h4>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                Biometric entry, 24/7 CCTV & on-site warden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
