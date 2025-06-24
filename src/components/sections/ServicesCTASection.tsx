
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ServicesCTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="bg-chemist-orange py-20" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Stop Guessing and Start Growing?
          </h2>
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
            Choose the path that fits your needs and timeline.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Quick Start */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Start</h3>
              <p className="text-white/90 mb-6">Get instant clarity on your content gaps</p>
              <Link
                to="/assessment"
                className="bg-white text-chemist-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
              >
                Take Free Assessment
              </Link>
            </div>

            {/* Join Others */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Join Others</h3>
              <p className="text-white/90 mb-6">Transform with a supportive cohort</p>
              <Link
                to="/services/content-cohort"
                className="bg-white text-chemist-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
              >
                Apply for Cohort
              </Link>
            </div>

            {/* Go Deep */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Go Deep</h3>
              <p className="text-white/90 mb-6">Get personalized 1:1 attention</p>
              <Link
                to="/services/brand-catalyst"
                className="bg-white text-chemist-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
              >
                Apply for 1:1
              </Link>
            </div>
          </div>

          <p className="text-white/80 mt-12">
            Not sure which is right? Start with the free assessment for personalized recommendations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTASection;
