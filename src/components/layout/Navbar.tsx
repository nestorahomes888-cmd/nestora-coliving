import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { PROPERTY_DATA } from '../../data/property';
import { getGeneralEnquiryWhatsAppUrl, CALL_PHONE_NUMBER, DISPLAY_PHONE_NUMBER } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Rooms & Pricing', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Food & Menu', href: '#food' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-soft border-b border-cream-200/80 py-3.5'
            : 'bg-cream-50/80 backdrop-blur-sm border-b border-cream-200/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-gold/40 flex items-center justify-center text-gold transition-transform group-hover:scale-105 shadow-sm">
                <span className="font-serif text-xl font-bold tracking-tight">N</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-charcoal-900">
                    NESTORA
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-gold/15 text-charcoal-800 font-semibold border border-gold/30">
                    Premium
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-charcoal-500 font-medium">
                  Coliving Space • HSR Layout
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-charcoal-700 hover:text-charcoal-900 transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${CALL_PHONE_NUMBER}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-charcoal-800 hover:bg-cream-200 transition-colors border border-cream-300"
                title="Call Nestora Team"
              >
                <Phone className="w-4 h-4 text-gold-dark" />
                <span className="hidden md:inline">{DISPLAY_PHONE_NUMBER}</span>
                <span className="md:hidden">Call</span>
              </a>

              <a
                href={getGeneralEnquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-charcoal-900 text-cream-50 hover:bg-charcoal-800 transition-all shadow-sm hover:shadow-medium border border-charcoal-700 group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-charcoal-800 hover:bg-cream-200 transition-colors border border-cream-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-cream-50 shadow-2xl z-50 flex flex-col justify-between overflow-y-auto border-l border-cream-300">
            {/* Header */}
            <div className="p-5 border-b border-cream-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-charcoal-900 text-gold flex items-center justify-center font-serif font-bold text-lg">
                  N
                </div>
                <div>
                  <div className="font-serif font-bold text-charcoal-900 tracking-wide text-lg">
                    NESTORA
                  </div>
                  <div className="text-[10px] tracking-wider uppercase text-charcoal-500">
                    HSR Layout, Bengaluru
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-charcoal-700 hover:bg-cream-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="px-5 py-6 space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 px-3 pb-2">
                Explore Property
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium text-charcoal-800 hover:bg-cream-200/80 transition-colors group"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-charcoal-400 group-hover:text-gold transition-colors" />
                </a>
              ))}
            </div>

            {/* Bottom Actions & Info */}
            <div className="p-5 bg-cream-100 border-t border-cream-200 space-y-3">
              <div className="text-xs text-charcoal-600 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                <span>Sector 1, HSR Layout, Bengaluru</span>
              </div>
              <div className="text-xs text-charcoal-600 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                <span>Visit Hours: 9:00 AM – 8:30 PM</span>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${CALL_PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold bg-white text-charcoal-900 border border-cream-300 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-dark" />
                  <span>Direct Call</span>
                </a>

                <a
                  href={getGeneralEnquiryWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold bg-charcoal-900 text-cream-50 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
