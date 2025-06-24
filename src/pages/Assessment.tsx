
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import { LabBackground } from '../components/ChemistryElements';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

const Assessment = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const assessmentFeatures = [
    "2-minute assessment",
    "Personalized content gap analysis", 
    "Custom roadmap based on your results",
    "Instant insights delivered",
    "No email required to start"
  ];

  useEffect(() => {
    // Load Fillout script
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-20">
        {/* Assessment Hero Section */}
        <section className="section bg-gray-50" ref={ref}>
          <div className="container-content text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Find Out What's <span className="text-chemist-orange">Actually Blocking</span> Your Content Growth
              </h1>
              
              <div className="space-y-6 text-lg text-gray-700 mb-12">
                <p>
                  Most coaches and course creators know they should be consistent on Instagram. The problem isn't motivation – it's clarity.
                </p>
                
                <p className="font-semibold text-gray-900">
                  You don't need another generic content calendar. You need YOUR specific formula.
                </p>
                
                <p>
                  Take our 2-minute Content Chemistry Assessment to discover your unique content blind spots and get a personalized roadmap.
                </p>
              </div>

              {/* Assessment Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-chemist-orange mb-2">2min</div>
                  <div className="text-gray-600">Quick Assessment</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-chemist-orange mb-2">100%</div>
                  <div className="text-gray-600">Personalized</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-chemist-orange mb-2">Free</div>
                  <div className="text-gray-600">No Credit Card</div>
                </motion.div>
              </div>

              <div className="text-sm text-gray-500 mb-12">
                Join 500+ coaches who've discovered their content formula
              </div>
            </motion.div>
          </div>
        </section>

        {/* Assessment Form Section */}
        <section className="section bg-white">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200 relative"
            >
              <div className="absolute -top-3 right-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                FREE
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Content Chemistry Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Get personalized insights about your content strategy in just 2 minutes. Perfect for understanding where you are and what you need.
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                {assessmentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Fillout Form */}
              <div 
                style={{width:'100%', height:'500px'}} 
                data-fillout-id="uhqB6kVA2Rus" 
                data-fillout-embed-type="standard" 
                data-fillout-inherit-parameters 
                data-fillout-dynamic-resize
              ></div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Assessment;
