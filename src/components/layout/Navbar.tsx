import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, ChevronRight } from 'lucide-react';
import { getGeneralEnquiryWhatsAppUrl, CALL_PHONE_NUMBER, DISPLAY_PHONE_NUMBER } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { label: 'Overview', href: '#home' },
    { label: 'Rooms & Tariff', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Food Menu', href: '#food' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-stone-50/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
            : 'bg-stone-50/80 backdrop-blur-sm border-b border-stone-200/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 shrink-0 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-stone-900 flex items-center justify-center text-amber-200 font-serif font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
                N
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg sm:text-xl tracking-wider text-stone-900">
                    NESTORA
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200/60">
                    Coliving
                  </span>
                </div>
                <span className="text-[11px] font-medium text-stone-500 tracking-wide">
                  HSR Layout Sector 1
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-1.5 rounded-lg text-sm font-semibold text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              <a
                href={`tel:${CALL_PHONE_NUMBER}`}
                className="hidden xl:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-stone-800 hover:bg-stone-200/70 border border-stone-300 transition-colors whitespace-nowrap"
                title="Call Host"
              >
                <Phone className="w-3.5 h-3.5 text-stone-900" />
                <span>{DISPLAY_PHONE_NUMBER}</span>
              </a>

              <a
                href={getGeneralEnquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-800 hover:bg-stone-200/60 border border-stone-300 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-stone-950/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-stone-50 shadow-2xl z-50 flex flex-col justify-between overflow-y-auto border-l border-stone-200">
            {/* Header */}
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-200 flex items-center justify-center font-bold text-sm">
                  N
                </div>
                <div>
                  <div className="font-extrabold text-stone-900 text-base">NESTORA COLIVING</div>
                  <div className="text-[10px] text-stone-500 font-medium">HSR Layout, Bengaluru</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-stone-600 hover:bg-stone-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list */}
            <div className="px-4 py-6 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-3 pb-2">
                Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-200/60 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-5 bg-white border-t border-stone-200 space-y-3">
              <div className="text-xs text-stone-600 flex items-center gap-2 font-medium">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Sector 1, HSR Layout, Bengaluru</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${CALL_PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold bg-stone-100 text-stone-900 border border-stone-300 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-900" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getGeneralEnquiryWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
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
