
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import { LabBackground } from '../components/ChemistryElements';
import CohortHeroSection from '../components/sections/CohortHeroSection';
import CohortCurriculumSection from '../components/sections/CohortCurriculumSection';
import CohortIncludesSection from '../components/sections/CohortIncludesSection';
import CohortTestimonialsSection from '../components/sections/CohortTestimonialsSection';
import CohortCTASection from '../components/sections/CohortCTASection';
import CohortFAQSection from '../components/sections/CohortFAQSection';
import CohortFinalCTASection from '../components/sections/CohortFinalCTASection';

const ContentCohort = () => {
  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-20">
        <CohortHeroSection />
        <CohortCurriculumSection />
        <CohortIncludesSection />
        <CohortTestimonialsSection />
        <CohortCTASection />
        <CohortFAQSection />
        <CohortFinalCTASection />
      </div>
      
      <Footer />
    </div>
  );
};

export default ContentCohort;
