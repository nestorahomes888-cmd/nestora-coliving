import React, { createContext, useContext, useState, useEffect } from 'react';
import { RoomPlan, ROOMS_DATA } from '../data/rooms';
import { GalleryImage, GALLERY_DATA } from '../data/gallery';
import { DayMenu, WEEKLY_MENU_DATA } from '../data/foodMenu';
import { PropertyInfo, PROPERTY_DATA } from '../data/property';
import { fetchLiveContent } from '../services/sheetsService';
import { SHEETS_CONFIG } from '../config/sheetsConfig';

interface PropertyContextType {
  rooms: RoomPlan[];
  gallery: GalleryImage[];
  menu: DayMenu[];
  property: PropertyInfo;
  isLive: boolean;
  isLoading: boolean;
  refreshLiveContent: () => Promise<void>;
}

const PropertyContext = createContext<PropertyContextType>({
  rooms: ROOMS_DATA,
  gallery: GALLERY_DATA,
  menu: WEEKLY_MENU_DATA,
  property: PROPERTY_DATA,
  isLive: false,
  isLoading: false,
  refreshLiveContent: async () => {},
});

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rooms, setRooms] = useState<RoomPlan[]>(ROOMS_DATA);
  const [gallery, setGallery] = useState<GalleryImage[]>(GALLERY_DATA);
  const [menu, setMenu] = useState<DayMenu[]>(WEEKLY_MENU_DATA);
  const [property, setProperty] = useState<PropertyInfo>(PROPERTY_DATA);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadData = async () => {
    if (!SHEETS_CONFIG.sheetId.trim()) return;

    setIsLoading(true);
    try {
      const data = await fetchLiveContent();
      setRooms(data.rooms);
      setGallery(data.gallery);
      setMenu(data.menu);
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
        gallery,
        menu,
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
