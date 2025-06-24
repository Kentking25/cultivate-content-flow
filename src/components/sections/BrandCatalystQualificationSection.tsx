
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, X } from 'lucide-react';

const BrandCatalystQualificationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const readyItems = [
    "You already make good money from your business (this is not for beginners)",
    "You are a coach, consultant, or course creator with a proven offer",
    "You are tired of being invisible despite having great expertise",
    "You have tried group programs but need personalized attention",
    "You want direct access to someone who has done this before",
    "You are ready to invest in becoming known as the go-to person in your space",
    "You value quality over quantity - you want fewer, better clients",
    "You are committed to 90 days of intensive implementation"
  ];

  const notReadyItems = [
    "You are just starting out (try the cohort first)",
    "You want someone to do everything for you",
    "You are not willing to be consistent for 90 days",
    "You are looking for cheap solutions"
  ];

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Brand Catalyst Is Perfect If...
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* You Are Ready */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">You Are Ready for This Level:</h3>
            </div>
            <div className="space-y-4">
              {readyItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* You Are Not Ready */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <X className="h-8 w-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-800">You Are Not Ready If:</h3>
            </div>
            <div className="space-y-4">
              {notReadyItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandCatalystQualificationSection;
