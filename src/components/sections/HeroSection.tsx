import React from 'react';
import { Star, MessageCircle, ArrowRight, ShieldCheck, Wifi, UtensilsCrossed, Sparkles, MapPin, CheckCircle2, Phone } from 'lucide-react';
import { PROPERTY_DATA } from '../../data/property';
import { getGeneralEnquiryWhatsAppUrl, getSiteVisitWhatsAppUrl, CALL_PHONE_NUMBER } from '../../utils/whatsapp';

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
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-cream-50">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust & Location Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-100 border border-cream-300 text-charcoal-800 text-xs font-medium shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-gold-dark" />
            <span>Sector 1, HSR Layout, Bengaluru</span>
          </div>

          {/* Google Rating Display */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Nestora+Coliving+Premium+Space+HSR+Layout+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-cream-300 hover:border-gold/60 text-charcoal-800 text-xs font-semibold shadow-xs transition-colors group"
            title="View Google Reviews"
          >
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-charcoal-900">{PROPERTY_DATA.googleRating.score}</span>
            <span className="text-charcoal-500">
              ({PROPERTY_DATA.googleRating.totalReviews}+ Google Reviews)
            </span>
          </a>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Zero Brokerage • Move-In Ready</span>
          </div>
        </div>

        {/* Hero Title & Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-gold-dark font-bold font-sans">
                Boutique Hospitality Coliving
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-900 leading-[1.12]">
                Your Space. <br />
                <span className="italic font-normal text-gold-dark">Your Comfort.</span> <br />
                Your Nestora.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl font-normal">
              {PROPERTY_DATA.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#rooms"
                onClick={scrollToRooms}
                className="px-6 py-3.5 rounded-xl bg-charcoal-900 text-cream-50 font-semibold text-sm hover:bg-charcoal-800 transition-all shadow-medium hover:shadow-elevated flex items-center justify-center gap-2 group border border-charcoal-700"
              >
                <span>Explore Rooms & Pricing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold" />
              </a>

              <a
                href={getGeneralEnquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-all shadow-medium hover:shadow-elevated flex items-center justify-center gap-2.5 group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={`tel:${CALL_PHONE_NUMBER}`}
                className="px-4 py-3.5 rounded-xl bg-white text-charcoal-800 font-semibold text-sm hover:bg-cream-100 transition-colors border border-cream-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-dark" />
                <span className="sm:hidden">Call Property Host</span>
                <span className="hidden sm:inline">Call Host</span>
              </a>
            </div>

            {/* Quick Micro-perks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-cream-200/80">
              <div className="flex items-center gap-2 text-xs text-charcoal-700">
                <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0" />
                <span>Single & Double Sharing</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal-700">
                <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0" />
                <span>Daily, Weekly & Monthly</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal-700">
                <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0" />
                <span>4 Homely Meals Included</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold/30 via-cream-300 to-cream-100 rounded-3xl transform -rotate-1 blur-xs" />
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden bg-charcoal-900 border border-cream-200 shadow-elevated">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
                    alt="Nestora Coliving Premium Bedroom in HSR Layout"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-charcoal-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold/40 text-cream-50 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>HSR Layout 1st Sector</span>
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                    <div className="font-serif text-lg font-semibold tracking-wide">
                      Executive Private Sanctuary
                    </div>
                    <div className="text-xs text-cream-200/80 flex items-center justify-between mt-0.5">
                      <span>Ergonomic Desk • Attached Bath • 300 Mbps</span>
                      <span className="text-gold font-medium">Boutique Series</span>
                    </div>
                  </div>
                </div>

                {/* Bottom stats row inside visual */}
                <div className="p-4 bg-charcoal-800 border-t border-charcoal-700 grid grid-cols-3 gap-2 text-center">
                  <div className="border-r border-charcoal-700">
                    <div className="text-gold font-serif text-lg font-bold">100%</div>
                    <div className="text-[11px] text-charcoal-300 uppercase tracking-wider">Furnished</div>
                  </div>
                  <div className="border-r border-charcoal-700">
                    <div className="text-gold font-serif text-lg font-bold">4 Meals</div>
                    <div className="text-[11px] text-charcoal-300 uppercase tracking-wider">Daily Service</div>
                  </div>
                  <div>
                    <div className="text-gold font-serif text-lg font-bold">₹0</div>
                    <div className="text-[11px] text-charcoal-300 uppercase tracking-wider">Brokerage</div>
                  </div>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-cream-300 shadow-medium flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark font-serif font-bold text-sm">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900">4.8 / 5.0 Rated</div>
                  <div className="text-[11px] text-charcoal-500">"Super clean rooms, peaceful WFH atmosphere & great food in HSR."</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Bar below Hero */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-cream-200/80">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-charcoal-500 font-bold">
              The Nestora Living Advantage
            </span>
            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mt-1">
              Thoughtfully Curated For Your Modern Lifestyle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTY_DATA.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-cream-200/90 shadow-soft hover:shadow-medium hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cream-100 border border-cream-200 flex items-center justify-center text-gold-dark group-hover:bg-charcoal-900 group-hover:text-gold transition-colors mb-3.5">
                  <HighlightIcon name={item.icon} />
                </div>
                <h3 className="font-serif text-base font-bold text-charcoal-900 mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HighlightIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5" />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className="w-5 h-5" />;
    case 'Wifi':
      return <Wifi className="w-5 h-5" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5" />;
    default:
      return <ShieldCheck className="w-5 h-5" />;
  }
};
