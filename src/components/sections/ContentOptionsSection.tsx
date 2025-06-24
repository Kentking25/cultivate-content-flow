import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, TrendingUp, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollSection from '../ScrollSection';

const ContentOptionsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cohortFeatures = [
    "Discover your unique story angles that connect with your ideal clients",
    "Get your personalized content formula (not generic templates)",
    "Master the psychology behind content that converts browsers into buyers",
    "90-day implementation roadmap with weekly group coaching calls",
    "Small cohort (max 10 people) for individual attention"
  ];

  const catalystFeatures = [
    "Complete personal brand audit and strategy session",
    "Custom content framework designed for your specific industry",
    "Done-with-you content creation and optimization",
    "Direct access for real-time feedback and adjustments",
    "6-month implementation support with unlimited revisions"
  ];

  return (
    <ScrollSection id="content-options" bgColor="bg-chemist-black">
      <div ref={ref} className="text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Two Ways to Finally Get Clear on What Content Actually Converts
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stop throwing content at the wall. Start with your personal chemistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Content Chemistry Cohort */}
          <motion.div
            className="bg-chemist-darkgray p-8 rounded-2xl border border-gray-700 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-chemist-orange text-white px-4 py-2 rounded-full text-sm font-medium">
                Most Popular Choice
              </span>
            </div>
            
            <div className="w-16 h-16 bg-chemist-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
              <Users className="h-8 w-8 text-chemist-orange" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Content Chemistry Cohort</h3>
            <p className="text-gray-300 mb-6">Your 90-Day Content Clarity Blueprint</p>
            
            <div className="space-y-4 mb-8">
              {cohortFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-left">{feature}</p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-400 text-sm mb-6 italic">
              Application required - pricing discussed during consultation
            </p>
            
            <Link 
              to="/services/content-cohort/apply"
              className="w-full bg-chemist-orange hover:bg-opacity-90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] inline-block text-center"
            >
              Apply for Cohort →
            </Link>
          </motion.div>

          {/* The Brand Catalyst */}
          <motion.div
            className="bg-chemist-darkgray p-8 rounded-2xl border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6 mt-8">
              <span className="text-gray-400 text-sm font-medium">Comprehensive</span>
            </div>
            
            <div className="w-16 h-16 bg-gray-600 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-gray-400" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">The Brand Catalyst</h3>
            <p className="text-gray-300 mb-6">1:1 Content Strategy & Personal Brand Overhaul</p>
            
            <div className="space-y-4 mb-8">
              {catalystFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-left">{feature}</p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-400 text-sm mb-6 italic">
              Application required - pricing discussed during consultation
            </p>
            
            <Link 
              to="/services/brand-catalyst/apply"
              className="w-full bg-gray-600 hover:bg-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] inline-block text-center"
            >
              Apply for Brand Catalyst →
            </Link>
          </motion.div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default ContentOptionsSection;
