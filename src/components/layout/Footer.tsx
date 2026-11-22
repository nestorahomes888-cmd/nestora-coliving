import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Heart, ArrowUp, Star } from 'lucide-react';
import { PROPERTY_DATA } from '../../data/property';
import { getGeneralEnquiryWhatsAppUrl, getSiteVisitWhatsAppUrl, CALL_PHONE_NUMBER, DISPLAY_PHONE_NUMBER } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 text-cream-200 border-t border-charcoal-700 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-gold/5 blur-3xl pointer-events-none" />

      {/* Top CTA Banner */}
      <div className="border-b border-charcoal-700/60 py-12 bg-charcoal-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span>Premium Coliving Experience</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-cream-50 font-semibold">
                Ready to find your ideal home in HSR Layout?
              </h3>
              <p className="text-charcoal-300 text-sm mt-1 max-w-xl">
                Schedule an in-person walkthrough or chat with our team on WhatsApp for instant availability and booking.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={getSiteVisitWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-gold text-charcoal-900 font-semibold text-sm hover:bg-gold-light transition-all shadow-md hover:shadow-gold-glow flex items-center gap-2"
              >
                <span>Schedule a Free Site Visit</span>
              </a>
              <a
                href={`tel:${CALL_PHONE_NUMBER}`}
                className="px-5 py-3 rounded-xl bg-charcoal-800 text-cream-100 font-semibold text-sm hover:bg-charcoal-700 border border-charcoal-600 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call {DISPLAY_PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-charcoal-800 border border-gold/40 flex items-center justify-center text-gold font-serif text-xl font-bold">
                N
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-cream-50">
                  NESTORA
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-gold font-medium">
                  Coliving Premium Space
                </span>
              </div>
            </div>

            <p className="text-charcoal-300 text-sm leading-relaxed pr-4">
              {PROPERTY_DATA.brandStory}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-charcoal-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct Owner Managed • Zero Brokerage • Transparent Pricing</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-cream-50 font-semibold text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-charcoal-300">
              <li>
                <a href="#home" className="hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-gold transition-colors">Rooms & Pricing</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-gold transition-colors">Amenities & Perks</a>
              </li>
              <li>
                <a href="#food" className="hover:text-gold transition-colors">Food & Weekly Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-gold transition-colors">Location & Landmarks</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">Contact & Enquiries</a>
              </li>
            </ul>
          </div>

          {/* Accommodation Options */}
          <div>
            <h4 className="font-serif text-cream-50 font-semibold text-base mb-4 tracking-wide">
              Stay Plans
            </h4>
            <ul className="space-y-2.5 text-sm text-charcoal-300">
              <li>
                <a href="#rooms" className="hover:text-gold transition-colors">Single Sharing (Private)</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-gold transition-colors">Double Sharing (Twin)</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-gold transition-colors">Daily Rental Option</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-gold transition-colors">Weekly Stays</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-gold transition-colors">Long-Term Monthly Stays</a>
              </li>
              <li>
                <a href="#food" className="hover:text-gold transition-colors">4 Meals Plan Included</a>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h4 className="font-serif text-cream-50 font-semibold text-base mb-4 tracking-wide">
              Property Location
            </h4>
            <div className="space-y-3 text-sm text-charcoal-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span className="leading-snug">{PROPERTY_DATA.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${CALL_PHONE_NUMBER}`} className="hover:text-gold transition-colors font-medium">
                  {DISPLAY_PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getGeneralEnquiryWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp: +91 70196 44004
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-xs">{PROPERTY_DATA.workingHours.siteVisit}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <div>
            © {new Date().getFullYear()} Nestora Coliving Premium Space. All rights reserved. HSR Layout, Bengaluru.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for Bengaluru coliving
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-cream-200 transition-colors flex items-center gap-1.5 focus:outline-none"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-gold" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
