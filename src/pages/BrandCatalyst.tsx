
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import { LabBackground } from '../components/ChemistryElements';
import BrandCatalystHeroSection from '../components/sections/BrandCatalystHeroSection';
import BrandCatalystProcessSection from '../components/sections/BrandCatalystProcessSection';
import BrandCatalystIncludesSection from '../components/sections/BrandCatalystIncludesSection';
import BrandCatalystQualificationSection from '../components/sections/BrandCatalystQualificationSection';
import BrandCatalystTestimonialsSection from '../components/sections/BrandCatalystTestimonialsSection';
import BrandCatalystFAQSection from '../components/sections/BrandCatalystFAQSection';
import BrandCatalystCTASection from '../components/sections/BrandCatalystCTASection';

const BrandCatalyst = () => {
  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-20">
        <BrandCatalystHeroSection />
        <BrandCatalystProcessSection />
        <BrandCatalystIncludesSection />
        
        {/* Investment Section */}
        <section className="section bg-chemist-black text-white">
          <div className="container-content">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Your Investment in Becoming THE Authority
              </h2>
              
              <div className="bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-6">90-Day Brand Catalyst</h3>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-medium text-gray-400 line-through mb-2">$4,997</div>
                  <div className="text-5xl md:text-6xl font-bold text-chemist-orange mb-2">$3,457</div>
                  <div className="text-gray-300">or 3 payments of $1,197</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">90 days of intensive 1:1 work</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Daily Voxer access (M-F)</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">12 personal strategy sessions</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">6 months implementation support</span>
                  </div>
                </div>

                <div className="text-center">
                  <a 
                    href="https://elementtheagency.hbportal.co/public/685b1f5a594f9a0025716888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-chemist-orange text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-opacity-90 transition-colors inline-block"
                  >
                    Apply for The Brand Catalyst →
                  </a>
                </div>
              </div>

              <div className="mt-8 text-center max-w-3xl mx-auto">
                <h4 className="text-xl font-semibold mb-4">Why This Investment Makes Sense</h4>
                <p className="text-gray-300 mb-4">
                  Think about it: You're probably spending $2,997 on random courses, software, and ads over 
                  6 months anyway. This consolidates everything into working directly with someone who's 
                  actually built authority from scratch.
                </p>
                <p className="text-chemist-orange">
                  Plus: Most of my 1:1 clients see ROI within the 90 days through better positioning, higher 
                  prices, or new opportunities that come from being visible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Availability Section */}
        <section className="section bg-chemist-orange text-white">
          <div className="container-content">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Extremely Limited Spots</h2>
              <p className="text-xl mb-8">
                I only take 5-6 Brand Catalyst clients at a time because of the unlimited Voxer support.
              </p>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-6 max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-4">Current Availability:</h3>
                <div className="text-4xl font-bold mb-4">2 spots remaining</div>
                <p className="text-lg">Next Start Date: Within 1-2 weeks</p>
              </div>
            </div>
          </div>
        </section>
        
        <BrandCatalystQualificationSection />
        <BrandCatalystTestimonialsSection />
        <BrandCatalystFAQSection />
        <BrandCatalystCTASection />
      </div>
      
      <Footer />
    </div>
  );
};

export default BrandCatalyst;
