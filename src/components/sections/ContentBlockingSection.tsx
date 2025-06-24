
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ContentBlockingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
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

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-block mb-4"
            >
              Get My Content Formula Assessment →
            </Link>
            
            <div className="text-gray-600">
              Already know you need help? <a href="#programs" className="text-chemist-orange hover:underline">View Programs →</a>
            </div>
            
            <div className="text-sm text-gray-500 mt-6">
              Join 500+ coaches who've discovered their content formula
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentBlockingSection;
