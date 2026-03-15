import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import NewHeroSection from '../components/sections/NewHeroSection';
import MarqueeSection from '../components/sections/MarqueeSection';
import StatsAndLogosSection from '../components/sections/StatsAndLogosSection';
import StorySection from '../components/sections/StorySection';
import ResultsSection from '../components/sections/ResultsSection';
import NewServicesSection from '../components/sections/NewServicesSection';
import SpeakingCTASection from '../components/sections/SpeakingCTASection';
import ClientRosterSection from '../components/sections/ClientRosterSection';
import NewTestimonialsSection from '../components/sections/NewTestimonialsSection';
import ContactFormSection from '../components/sections/ContactFormSection';

const Index = () => {
  useEffect(() => {
    document.title = "Kent King – Content Chemist & Brand Growth Strategist";
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="bg-chemist-black min-h-screen">
      <Navigation />
      <NewHeroSection />
      <MarqueeSection />
      <StatsAndLogosSection />
      <StorySection />
      <ResultsSection />
      <NewServicesSection />
      <SpeakingCTASection />
      <ClientRosterSection />
      <NewTestimonialsSection />
      <ContactFormSection />
    </div>
  );
};

export default Index;
