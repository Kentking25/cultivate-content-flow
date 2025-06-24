
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import MethodSection from '../components/sections/MethodSection';
import ContentOptionsSection from '../components/sections/ContentOptionsSection';
import AboutSection from '../components/sections/AboutSection';
import SocialProofSection from '../components/sections/SocialProofSection';
import ResourcesSection from '../components/sections/ResourcesSection';
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
        <ProblemSection />
        <MethodSection />
        <ContentOptionsSection />
        <AboutSection />
        <SocialProofSection />
        <ResourcesSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
