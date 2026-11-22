import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  Info,
  Layers,
  MapPin
} from 'lucide-react';
import { GALLERY_DATA, GALLERY_CATEGORIES, GalleryImage } from '../../data/gallery';

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

  // Keyboard navigation for Lightbox
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

  // Prevent background scroll when lightbox is open
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
    <section id="gallery" className="py-20 lg:py-28 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-cream-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-gold-dark" />
            <span>Property Visuals</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight">
            Explore the Spaces of Nestora
          </h2>
          <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
            Take a visual tour through our private single bedrooms, shared twin rooms, hygienic dining hall, spotless washrooms, and relaxing common lounge.
          </p>

          {/* Owner note / transparency notice */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-charcoal-500 bg-white py-1.5 px-4 rounded-full border border-cream-200 max-w-lg mx-auto">
            <Info className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Official property photos can be managed in <code className="bg-cream-200 px-1 py-0.5 rounded text-[11px]">src/data/gallery.ts</code></span>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-charcoal-900 text-cream-50 shadow-sm'
                    : 'bg-white text-charcoal-700 border border-cream-300 hover:bg-cream-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-charcoal-900 cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={image.thumb}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Tag */}
              <div className="absolute top-3.5 left-3.5 bg-charcoal-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-gold border border-gold/30">
                {image.categoryLabel}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <h4 className="font-serif text-base font-semibold tracking-wide">
                  {image.title}
                </h4>
                <p className="text-xs text-cream-200/80 line-clamp-1 mt-0.5">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Interactive Lightbox Viewer */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-charcoal-900/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gold/20 text-gold border border-gold/30">
                {filteredImages[lightboxIndex].categoryLabel}
              </span>
              <span className="text-xs text-charcoal-400 font-mono">
                {lightboxIndex + 1} of {filteredImages.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Central Image & Navigation */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Prev Button */}
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-charcoal-900/80 hover:bg-gold text-white hover:text-charcoal-900 border border-white/20 transition-all focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Image */}
            <div className="max-h-full max-w-5xl flex flex-col items-center justify-center px-4">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-h-[70vh] sm:max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-charcoal-900/80 hover:bg-gold text-white hover:text-charcoal-900 border border-white/20 transition-all focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div className="bg-charcoal-800/80 border border-white/10 rounded-2xl p-4 max-w-3xl mx-auto w-full text-center text-white">
            <h3 className="font-serif text-lg font-semibold text-cream-50">
              {filteredImages[lightboxIndex].title}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-300 mt-1 max-w-xl mx-auto">
              {filteredImages[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
