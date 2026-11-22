import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Compass, 
  Clock, 
  Car, 
  Footprints, 
  ExternalLink,
  Building,
  TreePine,
  Train
} from 'lucide-react';
import { PROPERTY_DATA } from '../../data/property';

export const LocationSection: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Nestora Coliving Premium Space, 71, 27th Main Rd, Phase 3, 4th Cross, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102'
  )}`;

  return (
    <section id="location" className="py-20 lg:py-28 bg-cream-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-cream-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-gold-dark" />
            <span>Prime HSR Layout Sector 1</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight">
            The Perfect Bengaluru Address
          </h2>
          <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
            Strategically located off the famous 27th Main commercial artery. Surrounded by leafy green avenues, third-wave coffee shops, and fitness centers, with swift connectivity to Bellandur tech hubs and Silk Board.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Address & Verified Landmarks (Left) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-cream-200 shadow-soft space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-cream-100 border border-cream-200 flex items-center justify-center text-gold-dark shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                    Official Property Address
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal-900 mt-0.5">
                    {PROPERTY_DATA.name}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed mt-1">
                    {PROPERTY_DATA.address.full}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-cream-200/80">
                <div className="text-xs text-charcoal-500 flex items-start gap-1.5">
                  <span className="font-semibold text-charcoal-700">Landmark:</span>
                  <span>{PROPERTY_DATA.address.landmark}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-charcoal-900 text-cream-50 font-semibold text-xs sm:text-sm hover:bg-charcoal-800 transition-all shadow-sm hover:shadow-medium flex items-center justify-center gap-2 group border border-charcoal-700"
                >
                  <Navigation className="w-4 h-4 text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Verified Nearby Landmarks */}
            <div className="p-6 rounded-3xl bg-white border border-cream-200 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-serif text-lg font-bold text-charcoal-900">
                  Verified Commutes & Landmarks
                </h4>
                <span className="text-xs text-charcoal-500 font-medium">
                  Walking & Driving
                </span>
              </div>

              <div className="space-y-3">
                {PROPERTY_DATA.nearbyLandmarks.map((landmark, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-cream-50/70 border border-cream-200/70 flex items-center justify-between gap-3 hover:bg-cream-100/60 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-charcoal-600 shadow-2xs shrink-0">
                        <LandmarkCategoryIcon category={landmark.category} />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-charcoal-900">
                          {landmark.name}
                        </div>
                        <div className="text-[11px] text-charcoal-500 flex items-center gap-2">
                          {landmark.walkingTime && (
                            <span className="flex items-center gap-1">
                              <Footprints className="w-3 h-3 text-gold-dark" />
                              {landmark.walkingTime}
                            </span>
                          )}
                          {landmark.drivingTime && (
                            <span className="flex items-center gap-1">
                              <Car className="w-3 h-3 text-gold-dark" />
                              {landmark.drivingTime}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-charcoal-700 bg-white px-2.5 py-1 rounded-md border border-cream-200 shrink-0">
                      {landmark.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed (Right) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-elevated bg-white flex flex-col h-[520px]">
              <div className="p-4 bg-cream-50 border-b border-cream-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Google Maps Live Location: Nestora Coliving</span>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gold-dark hover:text-charcoal-900 transition-colors flex items-center gap-1"
                >
                  <span>Open Full Screen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="flex-1 w-full relative bg-cream-200">
                <iframe
                  title="Nestora Coliving Premium Space Google Map"
                  src="https://maps.google.com/maps?q=Nestora+Coliving+Premium+Space,+71,+27th+Main+Rd,+1st+Sector,+HSR+Layout,+Bengaluru,+Karnataka+560102&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LandmarkCategoryIcon: React.FC<{ category: string }> = ({ category }) => {
  switch (category) {
    case 'transit':
      return <Train className="w-4 h-4 text-indigo-600" />;
    case 'tech-hub':
      return <Building className="w-4 h-4 text-blue-600" />;
    case 'nature':
      return <TreePine className="w-4 h-4 text-emerald-600" />;
    default:
      return <Building className="w-4 h-4 text-amber-600" />;
  }
};
