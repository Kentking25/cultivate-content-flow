import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import { LabBackground } from '../components/ChemistryElements';

const BrandCatalystApplication = () => {
  useEffect(() => {
    // Initialize HoneyBook script
    if (window._HB_) {
      window._HB_.pid = '674cda08cfb7ec0019542bee';
    }
  }, []);

  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-32 pb-20">
        <div className="container-content">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Apply for The Brand Catalyst
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to stop being the best-kept secret in your industry? Let's talk about 
              transforming your content and brand strategy with personalized 1:1 attention.
            </p>
          </div>

          {/* Investment Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-chemist-black text-white rounded-2xl p-8 md:p-12">
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
                  <button className="bg-chemist-orange text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-opacity-90 transition-colors">
                    Apply for The Brand Catalyst →
                  </button>
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

          {/* Availability Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-chemist-orange text-white rounded-2xl p-8 md:p-12 text-center">
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

          {/* HoneyBook Form */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="hb-p-674cda08cfb7ec0019542bee-4"></div>
            <img 
              height="1" 
              width="1" 
              style={{ display: 'none' }} 
              src="https://www.honeybook.com/p.png?pid=674cda08cfb7ec0019542bee" 
              alt=""
            />
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Questions About Working Together
            </h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How is this different from your group program?
                  </h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What does unlimited Voxer access actually mean?
                  </h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    I'm already successful. Why do I need this?
                  </h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Can you guarantee specific results?
                  </h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What if I need more than 90 days?
                  </h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Is this just Instagram strategy?
                  </h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-chemist-orange text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Extremely Limited Spots</h2>
              <p className="text-xl mb-8">
                I only take 5-6 Brand Catalyst clients at a time because of the unlimited Voxer support.
              </p>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-6 max-w-md mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4">Current Availability:</h3>
                <div className="text-4xl font-bold mb-4">2 spots remaining</div>
                <p className="text-lg">Next Start Date: Within 1-2 weeks</p>
              </div>
            </div>
          </div>

          {/* Stop Blending In Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Stop Blending In. Start Standing Out.
            </h2>
            
            <button className="bg-chemist-black text-white px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-gray-800 transition-colors">
              Apply for The Brand Catalyst →
            </button>
            <p className="text-gray-600 mt-6">
              Only 5-6 spots available • Next start: Within 1-2 weeks
            </p>
          </div>
        </div>
      </div>

      {/* HoneyBook Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,b,s,n,i,p,e,t) {
              h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
              t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
              e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
            })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","674cda08cfb7ec0019542bee");
          `
        }}
      />
    </div>
  );
};

export default BrandCatalystApplication;
