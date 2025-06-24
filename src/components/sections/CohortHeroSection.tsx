
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CohortHeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-20 lg:py-32" ref={ref}>
      <div className="container-content text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Finally Know What to Post
          </h1>
          <p className="text-2xl md:text-3xl text-chemist-orange font-semibold mb-8">
            (Without the Daily Guessing Game)
          </p>
          
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Join 8-10 coaches and course creators who are tired of posting into the void. Get your 
            personal content formula in 7 weeks – no more staring at blank screens wondering 
            "what should I say today?"
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="text-chemist-orange text-2xl">⚡</span>
            <p className="text-xl text-chemist-orange font-semibold italic">
              Like a cheat-code for your content
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-chemist-orange mb-2">7</div>
              <div className="text-gray-700 font-medium">Weeks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chemist-orange mb-2">8-10</div>
              <div className="text-gray-700 font-medium">People Max</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chemist-orange mb-2">90</div>
              <div className="text-gray-700 font-medium">Day Calendar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chemist-orange mb-2">∞</div>
              <div className="text-gray-700 font-medium">Lifetime Access</div>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              to="/services/content-cohort/apply"
              className="btn-primary text-xl px-8 py-4 inline-block"
            >
              Apply for Your Spot →
            </Link>
            
            <p className="text-gray-600">
              Next cohort starts February 3rd • Only 4 spots remaining
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CohortHeroSection;
