import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, 
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
    <section id="gallery" className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Property Photography
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mt-1.5">
            Take a Visual Tour of Nestora
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
            Bedrooms, attached modern washrooms, dining hall, community lounge, and building exterior in Sector 1, HSR Layout.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold text-amber-300">
                {image.categoryLabel}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="font-extrabold text-sm sm:text-base">
                  {image.title}
                </h4>
                <p className="text-[11px] text-stone-300 line-clamp-1 mt-0.5">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6">
          <div className="flex items-center justify-between text-white border-b border-stone-800 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400">
                {filteredImages[lightboxIndex].categoryLabel}
              </span>
              <span className="text-xs text-stone-400">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center my-4">
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-stone-900/80 hover:bg-amber-500 text-white hover:text-stone-950 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-h-full max-w-4xl flex items-center justify-center px-4">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-h-[70vh] sm:max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-stone-900/80 hover:bg-amber-500 text-white hover:text-stone-950 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-3 max-w-2xl mx-auto w-full text-center text-white">
            <h3 className="font-bold text-sm text-stone-100">
              {filteredImages[lightboxIndex].title}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {filteredImages[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
