
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const BrandCatalystHeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="bg-chemist-black text-white py-20 md:py-32" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Stop Being the Best-Kept Secret
            <span className="text-chemist-orange block">in Your Industry</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Work directly with me for 90 days to completely rebuild your content and brand 
            strategy. No more wondering if anyone actually knows you exist - it's time to become 
            THE person they think of when they need what you offer.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-8 h-8 bg-chemist-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <p className="text-chemist-orange text-xl font-medium italic">
              Like a cheat-code for your content
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-chemist-orange mb-2">90</div>
              <div className="text-gray-300">Days Intensive</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-chemist-orange mb-2">12</div>
              <div className="text-gray-300">Strategy Sessions</div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-chemist-orange mb-2">Daily</div>
              <div className="text-gray-300">Voxer Access</div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-chemist-orange mb-2">5-6</div>
              <div className="text-gray-300">People Only</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <Link
              to="/services/brand-catalyst/apply"
              className="btn-primary text-xl px-8 py-4 inline-block"
            >
              Apply for The Brand Catalyst →
            </Link>
            <p className="text-gray-400 mt-4">
              Only 5-6 people at a time • Start within 1-2 weeks of acceptance
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCatalystHeroSection;
