
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BrandCatalystCTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Stop Blending In. Start Standing Out.
          </h2>

          <div className="mt-12">
            <a
              href="https://elementtheagency.hbportal.co/public/685b1f5a594f9a0025716888"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chemist-black text-white px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-gray-800 transition-colors inline-block"
            >
              Apply for The Brand Catalyst →
            </a>
            <p className="text-gray-600 mt-6">
              Only 5-6 spots available • Next start: Within 1-2 weeks
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCatalystCTASection;
