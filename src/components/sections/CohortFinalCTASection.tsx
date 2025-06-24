
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CohortFinalCTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="bg-chemist-orange py-20" ref={ref}>
      <div className="container-content text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Take the first step toward content clarity and business growth.
          </p>
          
          <Link
            to="/contact"
            className="bg-white text-chemist-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 text-xl mb-8"
          >
            Start with Free Assessment →
          </Link>
          
          <p className="text-white text-lg">
            Join 500+ coaches and course creators who've found their content formula
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CohortFinalCTASection;
