import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { HeroSection } from './components/sections/HeroSection';
import { RoomsSection } from './components/sections/RoomsSection';
import { AmenitiesSection } from './components/sections/AmenitiesSection';
import { FoodSection } from './components/sections/FoodSection';
import { GallerySection } from './components/sections/GallerySection';
import { LocationSection } from './components/sections/LocationSection';
import { ContactSection } from './components/sections/ContactSection';

export function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-stone-900 pb-28 md:pb-0 overflow-x-hidden">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Home / Hero Section */}
        <HeroSection />

        {/* 2. Rooms & Pricing Section */}
        <RoomsSection />

        {/* 3. Amenities Section */}
        <AmenitiesSection />

        {/* 4. Food & Weekly Menu Section */}
        <FoodSection />

        {/* 5. Responsive Gallery & Lightbox Section */}
        <GallerySection />

        {/* 6. Location & Landmarks Section */}
        <LocationSection />

        {/* 7. Contact & WhatsApp Enquiry Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Enquiry & Call Bar */}
      <MobileStickyBar />
    </div>
  );
}

export default App;
