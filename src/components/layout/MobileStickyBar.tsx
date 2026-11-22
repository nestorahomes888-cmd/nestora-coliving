import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CALL_PHONE_NUMBER } from '../../utils/whatsapp';
import { getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream-50/95 backdrop-blur-md border-t border-cream-300 shadow-elevated px-3 py-2.5 safe-area-bottom">
      <div className="grid grid-cols-2 gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${CALL_PHONE_NUMBER}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white text-charcoal-900 font-semibold text-xs border border-cream-300 shadow-sm active:bg-cream-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-gold-dark" />
          <span>Call Host</span>
        </a>

        {/* WhatsApp Enquiry Button */}
        <a
          href={getGeneralEnquiryWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-charcoal-900 text-cream-50 font-semibold text-xs shadow-md active:bg-charcoal-800 transition-all border border-charcoal-700"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp Enquiry</span>
        </a>
      </div>
    </div>
  );
};
