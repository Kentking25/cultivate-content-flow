
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import { LabBackground } from '../components/ChemistryElements';
import BrandCatalystHeroSection from '../components/sections/BrandCatalystHeroSection';
import BrandCatalystProcessSection from '../components/sections/BrandCatalystProcessSection';
import BrandCatalystIncludesSection from '../components/sections/BrandCatalystIncludesSection';
import BrandCatalystQualificationSection from '../components/sections/BrandCatalystQualificationSection';
import BrandCatalystTestimonialsSection from '../components/sections/BrandCatalystTestimonialsSection';
import BrandCatalystFAQSection from '../components/sections/BrandCatalystFAQSection';
import BrandCatalystCTASection from '../components/sections/BrandCatalystCTASection';

const BrandCatalyst = () => {
  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-20">
        <BrandCatalystHeroSection />
        <BrandCatalystProcessSection />
        <BrandCatalystIncludesSection />
        <BrandCatalystQualificationSection />
        <BrandCatalystTestimonialsSection />
        <BrandCatalystFAQSection />
        <BrandCatalystCTASection />
      </div>
      
      <Footer />
    </div>
  );
};

export default BrandCatalyst;
