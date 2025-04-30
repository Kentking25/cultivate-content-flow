
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import SocialProofSection from '../components/sections/SocialProofSection';
import ServicesLibrarySection from '../components/sections/ServicesLibrarySection';
import SpeakingSection from '../components/sections/SpeakingSection';
import ResourcesSection from '../components/sections/ResourcesSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';
import { LabBackground } from '../components/ChemistryElements';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Show a welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to The Content Chemist",
        description: "Explore Kent's personal brand strategy services and content formulas.",
        duration: 5000,
      });
    }, 1500);
  }, [toast]);
  
  useEffect(() => {
    // Update page metadata
    document.title = "Kent King – Content Chemist & Brand Growth Strategist";
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="snap-container">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SocialProofSection />
        <ServicesLibrarySection />
        <SpeakingSection />
        <ResourcesSection />
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
