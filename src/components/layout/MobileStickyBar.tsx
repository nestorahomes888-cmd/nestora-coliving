import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { usePropertyData } from '../../context/PropertyContext';
import { CALL_PHONE_NUMBER, getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const MobileStickyBar: React.FC = () => {
  const { rooms } = usePropertyData();
  const room1 = rooms[0];
  const room2 = rooms[1];
  const rate1 = room1?.monthlyRent?.formatted || '₹13,000';
  const name1 = room1?.name || '2-Share';
  const rate2 = room2?.monthlyRent?.formatted || room1?.dailyRent?.formatted || '₹1,200';
  const name2 = room2?.name || 'Daily';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-2xl">
      {/* Micro-rates ticker */}
      <div className="flex items-center justify-between text-[10px] font-bold text-stone-600 px-1 pb-1.5 overflow-x-auto no-scrollbar">
        <span className="text-amber-800 shrink-0">{name1}: <strong className="text-stone-900">{rate1}/mo</strong></span>
        <span className="text-stone-300">•</span>
        <span className="text-amber-800 shrink-0">{name2}: <strong className="text-stone-900">{rate2}{room2 ? '/mo' : '/day'}</strong></span>
        <span className="text-stone-300">•</span>
        <span className="text-emerald-700 shrink-0">Meals Included</span>
      </div>

      {/* Touch Buttons */}
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${CALL_PHONE_NUMBER}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-100 active:bg-stone-200 text-stone-900 font-extrabold text-xs border border-stone-300 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-stone-900" />
          <span>Call Host</span>
        </a>

        <a
          href={getGeneralEnquiryWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-xs shadow-xs transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-white" />
          <span>WhatsApp Booking</span>
        </a>
      </div>
    </div>
  );
};
