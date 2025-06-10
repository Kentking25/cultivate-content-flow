
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Atom, TestTube, FlaskConical } from 'lucide-react';
import { FormulaDiagram } from '../ChemistryElements';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative" ref={ref}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/10 to-transparent"></div>
      </div>
      
      <div className="container-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 lg:order-1"
        >
          <h2 className="section-title text-white">
            Meet Kent King,<br />
            <span className="text-transparent bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text">The Content Chemist</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-6">
            Award-winning content strategist, personal brand coach, and founder of SOS Club & Element The Agency.
          </p>
          
          <div className="space-y-6 text-gray-300">
            <p>
              From child actor to DJ to content marketing mastermind, Kent brings a unique perspective to personal branding strategy that blends platform science with fearless creativity.
            </p>
            <p>
              Known for delivering no-fluff advice and data-backed strategies, Kent helps thought leaders, DTC brands, and creators transform their content into conversion machines.
            </p>
            <p>
              His philosophy is simple: effective content marketing isn't about luck—it's about following proven formulas and applying them with your unique perspective.
            </p>
          </div>
          
          <div className="mt-8">
            <Link to="/about" className="btn-primary-dark">Learn More</Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-gray-400 to-gray-600 shadow-2xl">
              <img
                src="/lovable-uploads/ce264413-0c4c-4b15-90a9-0d40672de7af.png"
                alt="Kent King - The Content Chemist"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -top-5 -right-5 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full p-3 shadow-lg">
              <Atom className="h-8 w-8 text-black" />
            </div>
            
            <div className="absolute -bottom-3 -left-3 bg-black rounded-full p-3 shadow-lg border-2 border-gray-500">
              <TestTube className="h-8 w-8 text-gray-400" />
            </div>
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gray-800 rounded-full p-3 shadow-lg border-2 border-gray-400">
              <FlaskConical className="h-8 w-8 text-gray-400" />
            </div>
          </div>
        </motion.div>
      </div>
      
      <FormulaDiagram />
    </section>
  );
};

export default AboutSection;
