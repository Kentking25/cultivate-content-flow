
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import { LabBackground } from '../components/ChemistryElements';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

const CohortApplication = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cohortBenefits = [
    "Weekly group coaching calls",
    "Your personal content formula",
    "90-day content calendar",
    "Lifetime community access"
  ];

  useEffect(() => {
    // Load HoneyBook script
    const loadHoneyBookScript = () => {
      if (window._HB_) {
        window._HB_.pid = '674cda08cfb7ec0019542bee';
        return;
      }

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';
      
      script.onload = () => {
        window._HB_ = window._HB_ || {};
        window._HB_.pid = '674cda08cfb7ec0019542bee';
      };
      
      document.head.appendChild(script);
    };

    loadHoneyBookScript();
  }, []);

  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-20">
        {/* Application Hero Section */}
        <section className="section bg-gradient-to-br from-orange-50 to-white" ref={ref}>
          <div className="container-content text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Apply for the <span className="text-chemist-orange">Content Chemistry Cohort</span>
              </h1>
              
              <div className="space-y-6 text-lg text-gray-700 mb-12">
                <p>
                  Ready to stop guessing and start converting? Join 8-10 coaches and course creators 
                  who are transforming their content strategy with our proven framework.
                </p>
                
                <p className="font-semibold text-gray-900">
                  Get your personal content formula in 6 weeks – no more staring at blank screens.
                </p>
              </div>

              {/* Cohort Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-chemist-orange mb-2">7</div>
                  <div className="text-gray-600">Weeks of Transformation</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-chemist-orange mb-2">10</div>
                  <div className="text-gray-600">People Maximum</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="section bg-gray-50">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
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

                  <button className="bg-chemist-orange text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-opacity-90 transition-colors w-full">
                    Apply for Your Spot →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Happens After You Apply */}
        <section className="section bg-white">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12">What Happens After You Apply:</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-chemist-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Short application (5 questions, takes 3 minutes max)</h3>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-chemist-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Quick chat to make sure we're a good fit</h3>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-chemist-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Join your cohort and start your transformation</h3>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-chemist-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">7 weeks later, you'll have clarity, confidence, and a system</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Price increasing after 3rd cohort.</strong> Current pricing locked in for accepted applicants.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Availability Section */}
        <section className="section bg-chemist-orange">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
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
            </motion.div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="section bg-white">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200 relative"
            >
              <div className="absolute -top-3 right-6 bg-chemist-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                Application Required
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Content Chemistry Cohort Application</h3>
                <p className="text-gray-600 mb-6">
                  Tell us about your content goals and current challenges. We'll review your application 
                  and schedule a quick chat to ensure this program is the right fit.
                </p>
              </div>

              {/* HoneyBook Form */}
              <div className="hb-p-674cda08cfb7ec0019542bee-3"></div>
              <img 
                height="1" 
                width="1" 
                style={{display:'none'}} 
                src="https://www.honeybook.com/p.png?pid=674cda08cfb7ec0019542bee" 
                alt=""
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CohortApplication;
