
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { FloatingBeaker, Bubble } from '../ChemistryElements';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="hero" className="section bg-chemist-black text-white relative overflow-hidden" ref={ref}>
      {/* Animated bubbles background */}
      <Bubble size={100} delay={0} top="20%" left="10%" />
      <Bubble size={60} delay={0.5} top="60%" left="5%" />
      <Bubble size={80} delay={1} top="70%" left="80%" />
      <Bubble size={120} delay={1.5} top="30%" left="85%" />
      <Bubble size={40} delay={2} top="10%" left="50%" />
      
      <div className="container-content flex flex-col items-center justify-center relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center mb-6">
            <FloatingBeaker className="relative" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
            The <span className="text-chemist-orange">Content Chemist</span>
          </h1>
          
          <motion.p 
            className="hero-subtitle mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Distilling platform science, behavioral psychology, and fearless creativity into repeatable formulas.
            <span className="block mt-2 text-chemist-orange font-medium">Like a cheat-code for your content.</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a href="#contact" className="btn-primary">Let's Work</a>
            <a href="#sos-club" className="btn-secondary">Join SOS Club</a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={800}
        className="scroll-indicator text-chemist-orange"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </Link>
    </section>
  );
};

export default HeroSection;
