import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Maximize2, 
  X, 
  MessageCircle 
} from 'lucide-react';
import { usePropertyData } from '../../context/PropertyContext';
import { getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const FoodSection: React.FC = () => {
  const { menuPhotoUrl } = usePropertyData();
  const [photoZoomOpen, setPhotoZoomOpen] = useState(false);

  return (
    <section id="food" className="py-16 sm:py-24 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Freshly Cooked Homely Food
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
            Weekly Food Menu
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Updated regularly by our kitchen team. Tap the photo below to zoom in and view the full menu schedule.
          </p>
        </div>

        {/* Pure Mobile-First Photo Menu Card */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div 
            onClick={() => setPhotoZoomOpen(true)}
            className="relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-300/90 shadow-card cursor-pointer group"
          >
            <div className="aspect-[4/3] sm:aspect-[16/10] relative overflow-hidden bg-stone-950">
              <img
                src={menuPhotoUrl}
                alt="Nestora Coliving Weekly Food Menu Photo"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />

              {/* Top Badges */}
              <div className="absolute top-3.5 left-3.5 bg-stone-900/90 backdrop-blur-xs px-3 py-1.5 rounded-xl text-white text-[11px] font-bold border border-white/10 flex items-center gap-1.5">
                <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
                <span>Weekly Menu Photo</span>
              </div>

              {/* Tap to Enlarge Button */}
              <div className="absolute top-3.5 right-3.5 bg-white/95 hover:bg-white text-stone-900 text-xs font-extrabold px-3.5 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 transition-all">
                <Maximize2 className="w-3.5 h-3.5 text-stone-900" />
                <span>Tap to Enlarge</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white flex items-center justify-between text-xs">
                <div>
                  <div className="font-extrabold text-sm sm:text-base">Kitchen Menu Board</div>
                  <div className="text-[11px] text-stone-300">Tap to view high-resolution photo</div>
                </div>
                <span className="bg-amber-500/90 text-stone-950 px-3 py-1 rounded-lg font-extrabold text-[11px]">
                  Click to Zoom
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action below Photo */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <p className="text-xs text-stone-500 italic text-center sm:text-left">
              * Photo is updated whenever the kitchen menu board changes.
            </p>
            <a
              href={getGeneralEnquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask Food Questions on WhatsApp</span>
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
                Weekly Food Menu Photo
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

          {/* Central Zoomable Photo */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center my-3 overflow-auto"
          >
            <img
              src={menuPhotoUrl}
              alt="Nestora Coliving Weekly Menu Full-Screen"
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
          </div>

          {/* Modal Footer */}
          <div className="text-center text-xs text-stone-400 pb-2">
            Pinch or zoom on your phone screen to read all items clearly. Tap anywhere to close.
          </div>
        </div>
      )}
    </section>
  );
};
