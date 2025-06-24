
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import { LabBackground } from '../components/ChemistryElements';
import ServicesOfferedSection from '../components/sections/ServicesOfferedSection';
import ThreeWaysSection from '../components/sections/ThreeWaysSection';
import ComparisonTableSection from '../components/sections/ComparisonTableSection';
import ServicesCTASection from '../components/sections/ServicesCTASection';

const Services = () => {
  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-20">
        <ThreeWaysSection />
        <ServicesOfferedSection />
        <ComparisonTableSection />
        <ServicesCTASection />
      </div>
    </div>
  );
};

export default Services;
