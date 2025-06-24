
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
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
    "6-week intensive transformation program",
    "Small group coaching (max 10 people)",
    "Weekly 90-minute group calls",
    "Personal content formula creation",
    "Lifetime community access",
    "90-day implementation roadmap"
  ];

  useEffect(() => {
    // Load HoneyBook script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';
    document.head.appendChild(script);

    // Set up HoneyBook configuration
    window._HB_ = window._HB_ || {};
    window._HB_.pid = '674cda08cfb7ec0019542bee';

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
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
                  <div className="text-4xl font-bold text-chemist-orange mb-2">6</div>
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

              <div className="text-sm text-gray-500 mb-12">
                Next cohort starts February 3rd • Only 4 spots remaining
              </div>
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
              
              <div className="space-y-3 mb-8">
                {cohortBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
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
      
      <Footer />
    </div>
  );
};

export default CohortApplication;
