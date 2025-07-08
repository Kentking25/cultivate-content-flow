
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

        {/* Availability Section */}
        <section className="section bg-chemist-orange text-white">
          <div className="container-content">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Extremely Limited Spots</h2>
              <p className="text-xl mb-8">
                I only take 5-6 Brand Catalyst clients at a time because of the unlimited Voxer support.
              </p>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-6 max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-4">Current Availability:</h3>
                <div className="text-4xl font-bold mb-4">2 spots remaining</div>
                <p className="text-lg">Next Start Date: Within 1-2 weeks</p>
              </div>
            </div>
          </div>
        </section>
        
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
