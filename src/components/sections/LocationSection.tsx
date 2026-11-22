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
    <section id="location" className="py-20 lg:py-28 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Strategic Bengaluru Hub
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mt-1.5">
            Located in HSR Layout Sector 1
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
            Situated right off 27th Main Road. Walk to top cafes, supermarkets, Cult.fit and gyms, with rapid road access to Silk Board and Bellandur Outer Ring Road.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Address & Verified Landmarks (Left) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    Official Property Address
                  </div>
                  <h3 className="text-lg font-extrabold text-stone-900 mt-0.5">
                    {PROPERTY_DATA.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {PROPERTY_DATA.address.full}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 text-xs text-stone-500">
                <strong className="text-stone-800">Landmark:</strong> Just off 27th Main Road, near Sector 1 / Sector 4 commercial belt.
              </div>

              <div className="pt-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Verified Nearby Landmarks */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs">
              <div className="flex items-center justify-between mb-3.5">
                <h4 className="text-sm font-extrabold text-stone-900">
                  Verified Commutes & Landmarks
                </h4>
                <span className="text-[11px] text-stone-500">
                  Real transit times
                </span>
              </div>

              <div className="space-y-2">
                {PROPERTY_DATA.nearbyLandmarks.map((landmark, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-3"
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
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-card bg-white flex flex-col h-[480px]">
              <div className="p-3.5 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Nestora Coliving Google Maps Live Location</span>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-stone-900 hover:text-amber-700 transition-colors flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex-1 w-full bg-stone-100">
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
      return <Train className="w-3.5 h-3.5 text-indigo-600" />;
    case 'tech-hub':
      return <Building className="w-3.5 h-3.5 text-blue-600" />;
    case 'nature':
      return <TreePine className="w-3.5 h-3.5 text-emerald-600" />;
    default:
      return <Building className="w-3.5 h-3.5 text-amber-600" />;
  }
};
