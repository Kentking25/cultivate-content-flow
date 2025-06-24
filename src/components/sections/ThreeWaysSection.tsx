
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Search, Users, TrendingUp } from 'lucide-react';

const ThreeWaysSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section className="section bg-white py-16" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Three Ways to Master Your Content
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting or ready to scale, choose the approach that matches your current needs and timeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Assessment */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-chemist-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Free Assessment</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Not sure where you are? Discover your content gaps & blind spots in 2 mins.
            </p>
          </motion.div>

          {/* Cohort */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-chemist-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Join the Cohort</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Ready to work? 6-week Content Chemistry Cohort with weekly group calls.
            </p>
          </motion.div>

          {/* 1:1 */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-chemist-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">1:1 Coaching</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Personalized Strategy & daily support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThreeWaysSection;
