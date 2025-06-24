import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Search, Users, TrendingUp } from 'lucide-react';
const ThreeWaysSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  return <section className="section bg-white" ref={ref}>
      <div className="container-content">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three Ways to Start
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the approach that matches your current needs and timeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Assessment */}
          <motion.div className="bg-gray-50 rounded-2xl p-8 text-center" initial={{
          opacity: 0,
          y: 30
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }}>
            <div className="w-16 h-16 bg-chemist-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Start with Assessment</h3>
            <p className="text-gray-600 mb-6">
              Not sure where you are? Take our 2-minute Content Chemistry Assessment to discover your specific blind spots.
            </p>
            
            
          </motion.div>

          {/* Cohort */}
          <motion.div className="bg-gray-50 rounded-2xl p-8 text-center" initial={{
          opacity: 0,
          y: 30
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <div className="w-16 h-16 bg-chemist-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Cohort</h3>
            <p className="text-gray-600 mb-6">
              Ready to work with others? Join our 7-week Content Chemistry Cohort with weekly group calls.
            </p>
            
            
          </motion.div>

          {/* 1:1 */}
          <motion.div className="bg-gray-50 rounded-2xl p-8 text-center" initial={{
          opacity: 0,
          y: 30
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            <div className="w-16 h-16 bg-chemist-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Go 1:1</h3>
            <p className="text-gray-600 mb-6">
              Need personalized attention? The Brand Catalyst offers 90 days of intensive 1:1 work.
            </p>
            
            
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ThreeWaysSection;