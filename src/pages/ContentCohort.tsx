
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
import { CheckCircle } from 'lucide-react';

const ContentCohort = () => {
  const cohortBenefits = [
    "Weekly group coaching calls",
    "Your personal content formula",
    "90-day content calendar",
    "Lifetime community access"
  ];

  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-20">
        <CohortHeroSection />
        <CohortCurriculumSection />
        <CohortIncludesSection />
        
        {/* Investment Section */}
        <section className="section bg-gray-50">
          <div className="container-content">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Investment in Content Clarity</h2>
                
                <div className="my-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Content Chemistry Cohort</h3>
                  <p className="text-gray-600 mb-6">7 weeks of transformation + lifetime community access</p>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-medium text-gray-400 line-through mb-2">$2,750</div>
                    <div className="text-4xl font-bold text-chemist-orange mb-2">$1,250</div>
                    <div className="text-gray-600">or 3 payments of $450</div>
                  </div>

                  <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                    {cohortBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="https://elementtheagency.hbportal.co/public/685b14d4594f9a001f716ba6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-chemist-orange text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-opacity-90 transition-colors w-full inline-block"
                  >
                    Apply for Your Spot →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Availability Section */}
        <section className="section bg-chemist-orange">
          <div className="container-content">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Only 8-10 Spots Available (And They Go Fast)</h2>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-8 max-w-md mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4">Next Cohort Starts:</h3>
                <div className="text-3xl font-bold mb-4">February 3rd</div>
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
    </div>
  );
};

export default ContentCohort;
