
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import { LabBackground } from '../components/ChemistryElements';
import ServicesOfferedSection from '../components/sections/ServicesOfferedSection';
import ThreeWaysSection from '../components/sections/ThreeWaysSection';

const Services = () => {
  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-20">
        <ThreeWaysSection />
        <ServicesOfferedSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
