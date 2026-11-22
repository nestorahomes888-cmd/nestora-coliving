import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-20 md:bottom-8 right-5 z-40">
      <a
        href={getGeneralEnquiryWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 group focus:outline-none"
        aria-label="Direct WhatsApp Enquiry"
      >
        {/* Subtle Ping */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 pointer-events-none" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-6 transition-transform" />
        {/* Online Indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
      </a>
    </div>
  );
};
