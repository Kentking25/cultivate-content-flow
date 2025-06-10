
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
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-chemist-white to-gray-50 text-chemist-black relative" ref={ref}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-chemist-gray/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chemist-black mb-6">
            Meet Kent King,<br />
            <span className="text-chemist-orange">The Content Chemist</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-chemist-darkgray mb-8 leading-relaxed">
            Award-winning content strategist, personal brand coach, and founder of SOS Club & Element The Agency.
          </p>
          
          <div className="space-y-6 text-lg text-chemist-gray leading-relaxed">
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
          
          <div className="mt-10">
            <Link 
              to="/about" 
              className="bg-chemist-orange hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 duration-300 shadow-lg inline-block"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-chemist-orange shadow-2xl">
              <img
                src="/lovable-uploads/ce264413-0c4c-4b15-90a9-0d40672de7af.png"
                alt="Kent King - The Content Chemist"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -top-6 -right-6 bg-chemist-orange rounded-full p-4 shadow-xl">
              <Atom className="h-10 w-10 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-chemist-black rounded-full p-4 shadow-xl border-2 border-chemist-orange">
              <TestTube className="h-10 w-10 text-white" />
            </div>
            
            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-chemist-white rounded-full p-4 shadow-xl border-2 border-chemist-black">
              <FlaskConical className="h-10 w-10 text-chemist-black" />
            </div>
          </div>
        </motion.div>
      </div>
      
      <FormulaDiagram />
    </section>
  );
};

export default AboutSection;
