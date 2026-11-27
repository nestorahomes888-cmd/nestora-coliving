import React, { createContext, useContext, useState, useEffect } from 'react';
import { RoomPlan, ROOMS_DATA } from '../data/rooms';
import { GalleryImage, GALLERY_DATA } from '../data/gallery';
import { AmenityItem, AMENITIES_DATA } from '../data/amenities';
import { PropertyInfo, PROPERTY_DATA } from '../data/property';
import { fetchLiveContent, DEFAULT_MENU_PHOTO } from '../services/sheetsService';
import { SHEETS_CONFIG } from '../config/sheetsConfig';

interface PropertyContextType {
  rooms: RoomPlan[];
  amenities: AmenityItem[];
  gallery: GalleryImage[];
  menuPhotoUrl: string;
  property: PropertyInfo;
  isLive: boolean;
  isLoading: boolean;
  refreshLiveContent: () => Promise<void>;
}

const PropertyContext = createContext<PropertyContextType>({
  rooms: ROOMS_DATA,
  amenities: AMENITIES_DATA,
  gallery: GALLERY_DATA,
  menuPhotoUrl: DEFAULT_MENU_PHOTO,
  property: PROPERTY_DATA,
  isLive: false,
  isLoading: false,
  refreshLiveContent: async () => {},
});

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rooms, setRooms] = useState<RoomPlan[]>(ROOMS_DATA);
  const [amenities, setAmenities] = useState<AmenityItem[]>(AMENITIES_DATA);
  const [gallery, setGallery] = useState<GalleryImage[]>(GALLERY_DATA);
  const [menuPhotoUrl, setMenuPhotoUrl] = useState<string>(DEFAULT_MENU_PHOTO);
  const [property, setProperty] = useState<PropertyInfo>(PROPERTY_DATA);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadData = async () => {
    if (!SHEETS_CONFIG.sheetId.trim()) return;

    setIsLoading(true);
    try {
      const data = await fetchLiveContent();
      setRooms(data.rooms);
      setAmenities(data.amenities);
      setGallery(data.gallery);
      setMenuPhotoUrl(data.menuPhotoUrl);
      setProperty(data.property);
      setIsLive(data.isLive);
    } catch (e) {
      console.warn('Could not sync with Google Sheets, using offline defaults:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <PropertyContext.Provider
      value={{
        rooms,
        amenities,
        gallery,
        menuPhotoUrl,
        property,
        isLive,
        isLoading,
        refreshLiveContent: loadData,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyData = () => useContext(PropertyContext);
