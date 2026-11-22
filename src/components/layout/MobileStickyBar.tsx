import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CALL_PHONE_NUMBER, getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${CALL_PHONE_NUMBER}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-stone-100 active:bg-stone-200 text-stone-900 font-bold text-xs border border-stone-300 transition-colors"
        >
          <Phone className="w-4 h-4 text-stone-900" />
          <span>Call Host</span>
        </a>

        <a
          href={getGeneralEnquiryWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
