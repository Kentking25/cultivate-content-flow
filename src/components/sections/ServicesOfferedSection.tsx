
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, TrendingUp, CheckCircle, Clock } from 'lucide-react';

const ServicesOfferedSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cohortFeatures = [
    "Small group (max 10 people)",
    "Weekly 90-minute coaching calls",
    "Personal content formula creation",
    "Lifetime community access",
    "90-day implementation roadmap"
  ];

  return (
    <section id="programs" className="section bg-gray-50" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Go Deeper?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the program that matches your needs and timeline.
          </p>
        </motion.div>

        {/* Program Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            <button className="px-6 py-3 bg-chemist-orange text-white rounded-md font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Content Chemistry Cohort
            </button>
            <button className="px-6 py-3 text-gray-600 font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              The Brand Catalyst
            </button>
          </div>
        </motion.div>

        {/* Program Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Content Chemistry Cohort</h3>
              <p className="text-lg text-gray-600 mb-6">Transform with a supportive group</p>
              
              <p className="text-gray-700 max-w-2xl mx-auto">
                7-week intensive program with weekly calls, personalized formulas, and lifetime community access.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-chemist-orange">⚡</span>
                <h4 className="text-lg font-bold text-gray-900">Key Features</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cohortFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Details */}
            <div className="border-t border-gray-200 pt-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-chemist-orange" />
                <h4 className="text-lg font-bold text-gray-900">Program Details</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Duration</div>
                  <div className="font-semibold text-gray-900">7 weeks + lifetime access</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600 mb-1">Format</div>
                  <div className="font-semibold text-gray-900">Small group coaching</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="#contact"
                className="btn-primary text-lg px-8 py-4 inline-block mb-4"
              >
                Learn More →
              </a>
              
              <div className="text-sm text-gray-600">
                See full program details • Investment discussed during application
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOfferedSection;
