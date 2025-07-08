
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

const ContentCohort = () => {
  return <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-20">
        <CohortHeroSection />
        <CohortCurriculumSection />
        <CohortIncludesSection />

        {/* Availability Section */}
        <section className="section bg-chemist-orange">
          <div className="container-content">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Only 8-10 Spots Available (And They Go Fast)</h2>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-8 max-w-md mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4">Next Cohort Starts:</h3>
                <div className="text-3xl font-bold mb-4">August 3rd</div>
                <div className="mb-2"><span className="font-semibold">Spots Remaining:</span> 4</div>
                <div className="text-sm">Application Deadline: January 27th</div>
              </div>

              <p className="text-xl max-w-3xl mx-auto">
                I keep cohorts small on purpose. You need real attention and feedback, not to be lost in a 
                crowd of 100+ people.
              </p>
            </div>
          </div>
        </section>
        
        <CohortTestimonialsSection />
        <CohortCTASection />
        <CohortFAQSection />
      </div>
      
      <Footer />
    </div>;
};
export default ContentCohort;
