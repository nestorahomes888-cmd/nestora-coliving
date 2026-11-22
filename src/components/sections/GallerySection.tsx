import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2 
} from 'lucide-react';
import { GALLERY_DATA, GALLERY_CATEGORIES } from '../../data/gallery';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Property Photography
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
            Visual Tour of Nestora
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Bedrooms, attached modern washrooms, dining hall, lounge, and building exterior in Sector 1, HSR Layout.
          </p>

          {/* Swipeable Filter Pills on Mobile */}
          <div className="mt-6 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-1 sm:justify-center">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all shrink-0 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 cursor-pointer shadow-2xs hover:shadow-card transition-all aspect-[4/3]"
            >
              <img
                src={image.thumb}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Category Tag */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-stone-900/80 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold text-amber-300">
                {image.categoryLabel}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                <h4 className="font-extrabold text-xs sm:text-base line-clamp-1">
                  {image.title}
                </h4>
                <p className="text-[10px] text-stone-300 line-clamp-1 mt-0.5 hidden sm:block">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6">
          <div className="flex items-center justify-between text-white border-b border-stone-800 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">
                {filteredImages[lightboxIndex].categoryLabel}
              </span>
              <span className="text-xs text-stone-400">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-1.5 sm:p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center my-2 sm:my-4">
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-1 sm:left-4 z-10 p-2.5 sm:p-3 rounded-full bg-stone-900/80 hover:bg-amber-500 text-white hover:text-stone-950 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="max-h-full max-w-4xl flex items-center justify-center px-2">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-h-[65vh] sm:max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-1 sm:right-4 z-10 p-2.5 sm:p-3 rounded-full bg-stone-900/80 hover:bg-amber-500 text-white hover:text-stone-950 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-2.5 sm:p-3 max-w-xl mx-auto w-full text-center text-white">
            <h3 className="font-bold text-xs sm:text-sm text-stone-100">
              {filteredImages[lightboxIndex].title}
            </h3>
            <p className="text-[11px] text-stone-400 mt-0.5">
              {filteredImages[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
