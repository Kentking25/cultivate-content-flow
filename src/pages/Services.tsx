
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import { LabBackground } from '../components/ChemistryElements';
import ContentBlockingSection from '../components/sections/ContentBlockingSection';
import ContentMasterySection from '../components/sections/ContentMasterySection';
import ServicesOfferedSection from '../components/sections/ServicesOfferedSection';
import ServicesCTASection from '../components/sections/ServicesCTASection';

const Services = () => {
  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-20">
        <ContentBlockingSection />
        <ContentMasterySection />
        <ServicesOfferedSection />
        <ServicesCTASection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
