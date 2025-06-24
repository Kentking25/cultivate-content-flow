
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import { LabBackground } from '../components/ChemistryElements';
import ServicesOfferedSection from '../components/sections/ServicesOfferedSection';

const Services = () => {
  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-20">
        <ServicesOfferedSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
