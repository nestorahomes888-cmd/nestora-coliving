import React from 'react';
import { 
  MapPin, 
  Navigation, 
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
    <section id="location" className="py-16 sm:py-24 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Strategic Bengaluru Hub
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
            Located in HSR Layout Sector 1
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Situated just off 27th Main Road. Walk to cafes, supermarkets, Cult.fit, and enjoy swift connectivity to Silk Board and Bellandur.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Address & Verified Landmarks (Left) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    Official Property Address
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-stone-900 mt-0.5">
                    {PROPERTY_DATA.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {PROPERTY_DATA.address.full}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 text-xs text-stone-500">
                <strong className="text-stone-800">Landmark:</strong> Just off 27th Main commercial belt, minutes to Silk Board & Agara Lake.
              </div>

              <div className="pt-1">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Verified Nearby Landmarks */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs sm:text-sm font-extrabold text-stone-900">
                  Verified Commutes & Landmarks
                </h4>
                <span className="text-[10px] text-stone-500">
                  Real travel times
                </span>
              </div>

              <div className="space-y-2">
                {PROPERTY_DATA.nearbyLandmarks.map((landmark, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-stone-700 shadow-2xs shrink-0">
                        <LandmarkCategoryIcon category={landmark.category} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-stone-900">
                          {landmark.name}
                        </div>
                        <div className="text-[10px] text-stone-500 flex items-center gap-2">
                          {landmark.walkingTime && (
                            <span className="flex items-center gap-1">
                              <Footprints className="w-3 h-3 text-amber-700" />
                              {landmark.walkingTime}
                            </span>
                          )}
                          {landmark.drivingTime && (
                            <span className="flex items-center gap-1">
                              <Car className="w-3 h-3 text-amber-700" />
                              {landmark.drivingTime}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-extrabold text-stone-800 bg-white px-2 py-0.5 rounded border border-stone-200 shrink-0">
                      {landmark.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed (Right) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-card bg-white flex flex-col">
              <div className="p-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Google Maps Live Location</span>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-stone-900 hover:text-amber-700 transition-colors flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Iframe height for mobile */}
              <div className="h-[280px] sm:h-[400px] lg:h-[480px] w-full bg-stone-100">
                <iframe
                  title="Nestora Coliving Google Map"
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
      return <Train className="w-3.5 h-3.5 text-indigo-600" />;
    case 'tech-hub':
      return <Building className="w-3.5 h-3.5 text-blue-600" />;
    case 'nature':
      return <TreePine className="w-3.5 h-3.5 text-emerald-600" />;
    default:
      return <Building className="w-3.5 h-3.5 text-amber-600" />;
  }
};
