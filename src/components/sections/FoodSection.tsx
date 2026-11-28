import React, { useState } from 'react';
import { 
  Maximize2, 
  X, 
  MessageCircle,
  Sparkles 
} from 'lucide-react';
import { usePropertyData } from '../../context/PropertyContext';
import { getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const FoodSection: React.FC = () => {
  const { menuPhotoUrl } = usePropertyData();
  const [photoZoomOpen, setPhotoZoomOpen] = useState(false);

  return (
    <section id="food" className="py-16 sm:py-24 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Freshly Cooked Homely Food
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
            Weekly Food Menu
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Updated regularly by our kitchen team. Tap the photo below to zoom in full-screen.
          </p>
        </div>

        {/* Mobile Portrait Photo Container - Completely Uncropped */}
        <div className="max-w-md mx-auto space-y-4">
          <div 
            onClick={() => setPhotoZoomOpen(true)}
            className="relative rounded-3xl overflow-hidden bg-white border-2 border-stone-300 shadow-xl cursor-pointer group transition-all hover:border-amber-400 hover:shadow-2xl"
          >
            {/* Top Bar on the photo card */}
            <div className="bg-stone-900 text-white px-4 py-2.5 flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-1.5 text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Weekly Menu Photo</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-300 group-hover:text-white transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Tap to Enlarge</span>
              </div>
            </div>

            {/* Normal Mobile Portrait Photo - 100% Uncropped Natural Ratio */}
            <div className="relative bg-stone-950 flex items-center justify-center p-1 sm:p-2">
              <img
                src={menuPhotoUrl}
                alt="Nestora Coliving Weekly Food Menu Photo"
                className="w-full h-auto max-h-[80vh] object-contain block rounded-2xl group-hover:scale-101 transition-transform duration-300"
              />
            </div>

            {/* Bottom helper pill */}
            <div className="bg-stone-50 border-t border-stone-200 px-4 py-2 text-center text-xs text-stone-600 font-semibold flex items-center justify-center gap-1.5">
              <span>🔍 Tap anywhere on photo to open full-screen zoom</span>
            </div>
          </div>

          {/* WhatsApp CTA Button */}
          <div className="pt-2 text-center">
            <a
              href={getGeneralEnquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white font-bold text-xs shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask About Food Preferences on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Full-Screen Menu Photo Lightbox Modal */}
      {photoZoomOpen && (
        <div 
          onClick={() => setPhotoZoomOpen(false)}
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fade-in cursor-zoom-out"
        >
          {/* Top Bar */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="flex items-center justify-between text-white border-b border-stone-800 pb-3"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-400">
                Weekly Food Menu Photo • Full Size
              </span>
            </div>

            <button
              type="button"
              onClick={() => setPhotoZoomOpen(false)}
              className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Zoomable Photo - 100% Uncropped */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center my-2 overflow-auto"
          >
            <img
              src={menuPhotoUrl}
              alt="Nestora Coliving Weekly Menu Full-Screen"
              className="max-h-[88vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
          </div>

          {/* Modal Footer */}
          <div className="text-center text-xs text-stone-400 pb-1">
            Pinch or zoom on your phone screen to read all details clearly. Tap anywhere to close.
          </div>
        </div>
      )}
    </section>
  );
};
