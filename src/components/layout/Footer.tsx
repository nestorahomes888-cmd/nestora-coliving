import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ArrowUp, Check } from 'lucide-react';
import { usePropertyData } from '../../context/PropertyContext';
import { getGeneralEnquiryWhatsAppUrl, getSiteVisitWhatsAppUrl, CALL_PHONE_NUMBER, DISPLAY_PHONE_NUMBER } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const { property, rooms } = usePropertyData();
  const room1 = rooms[0];
  const rate1 = room1?.monthlyRent?.formatted || '₹13,000';
  const name1 = room1?.name || '2-Sharing PG';
  const dailyRate = room1?.dailyRent?.formatted || '₹1,200';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Top CTA Banner */}
      <div className="border-b border-stone-800 py-10 bg-stone-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                Direct Owner Lease • Zero Brokerage
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Looking for a room in HSR Layout Sector 1?
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-xl">
                {name1} at {rate1}/month or Daily Stays at {dailyRate}/day. Walk in today for an in-person tour.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={getSiteVisitWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs sm:text-sm transition-all shadow-xs"
              >
                Schedule Site Visit
              </a>
              <a
                href={`tel:${CALL_PHONE_NUMBER}`}
                className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-extrabold text-xs sm:text-sm border border-stone-700 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {DISPLAY_PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-stone-950 flex items-center justify-center font-bold text-sm">
                N
              </div>
              <span className="font-extrabold text-lg text-white tracking-wide">
                NESTORA COLIVING
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Boutique coliving and premium PG accommodation in Sector 1, HSR Layout, Bengaluru. High-speed Wi-Fi, homely meals, and daily housekeeping.
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 pt-1">
              <Check className="w-3.5 h-3.5" />
              <span>Zero Brokerage • Move-In Ready</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#home" className="hover:text-amber-300 transition-colors">Overview</a></li>
              <li><a href="#rooms" className="hover:text-amber-300 transition-colors">Rooms & Tariff</a></li>
              <li><a href="#amenities" className="hover:text-amber-300 transition-colors">Amenities & Perks</a></li>
              <li><a href="#food" className="hover:text-amber-300 transition-colors">Food Menu</a></li>
              <li><a href="#gallery" className="hover:text-amber-300 transition-colors">Photo Gallery</a></li>
              <li><a href="#location" className="hover:text-amber-300 transition-colors">Location & Commutes</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact Management</a></li>
            </ul>
          </div>

          {/* Tariffs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              Tariffs & Plans
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              {rooms.map(r => (
                <li key={r.id}>
                  <span className="text-white font-bold">{r.name}:</span> {r.monthlyRent.formatted} / month
                </li>
              ))}
              <li><span className="text-white font-bold">Daily Stay:</span> {rooms[0]?.dailyRent.formatted || '₹1,200'} / day</li>
              <li><span className="text-amber-400">✓ Homely Meals Everyday</span></li>
              <li><span className="text-amber-400">✓ 300 Mbps Wi-Fi & Housekeeping</span></li>
              <li><span className="text-amber-400">✓ 100% Power Backup</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              Contact & Address
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{property.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${property.phone}`} className="hover:text-amber-300">
                  {property.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={getGeneralEnquiryWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
                  WhatsApp: +{property.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{property.workingHours.siteVisit}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-850 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Nestora Coliving Premium Space. Sector 1, HSR Layout, Bengaluru.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
