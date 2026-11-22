import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 flex flex-col items-end">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mb-2 bg-charcoal-900 text-cream-100 text-xs px-3.5 py-2 rounded-xl shadow-elevated border border-charcoal-700 animate-fade-in max-w-xs">
          <span>👋 Have questions about Nestora? <strong>Chat with us!</strong></span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-charcoal-400 hover:text-cream-50 ml-1 p-0.5 rounded"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getGeneralEnquiryWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-elevated hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 group relative focus:outline-none focus:ring-4 focus:ring-emerald-300/50"
        aria-label="Direct WhatsApp Enquiry"
      >
        {/* Pulsing halo */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 group-hover:rotate-6 transition-transform" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
      </a>
    </div>
  );
};
