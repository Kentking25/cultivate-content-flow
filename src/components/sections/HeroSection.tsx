
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FloatingBeaker } from '../ChemistryElements';

// Advanced DNA Helix animation component with dark theme
const DNAHelix = ({ size, delay, top, left }: { size: number, delay: number, top: string, left: string }) => {
  const rungs = 12;
  
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3], 
        scale: [1, 1.05, 1],
      }}
      transition={{ 
        duration: 10,
        delay,
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <div className="dna-container" style={{ width: size, height: size * 2 }}>
        <motion.div 
          className="dna-helix"
          animate={{ rotateY: [0, 360] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Left strand */}
          <div className="dna-strand dna-strand-left">
            {Array(rungs).fill(0).map((_, i) => (
              <div 
                key={`left-${i}`}
                className="dna-segment-dark"
                style={{
                  top: `${(i / rungs) * 100}%`,
                  left: `${Math.sin((i / rungs) * Math.PI * 2) * 50 + 50}%`,
                }}
              />
            ))}
          </div>
          
          {/* Right strand */}
          <div className="dna-strand dna-strand-right">
            {Array(rungs).fill(0).map((_, i) => (
              <div 
                key={`right-${i}`}
                className="dna-segment-dark"
                style={{
                  top: `${(i / rungs) * 100}%`,
                  left: `${Math.sin(((i / rungs) * Math.PI * 2) + Math.PI) * 50 + 50}%`,
                }}
              />
            ))}
          </div>
          
          {/* Connecting rungs */}
          {Array(rungs).fill(0).map((_, i) => (
            <div 
              key={`rung-${i}`}
              className="dna-rung-dark"
              style={{
                top: `${(i / rungs) * 100}%`,
                transform: `rotate(${Math.sin((i / rungs) * Math.PI * 2) * 90}deg)`,
              }}
            />
          ))}
          
          {/* Glow effect */}
          <div className="dna-glow-dark"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="hero" className="section bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden" ref={ref}>
      {/* DNA Helix background with different sizes and positions */}
      <DNAHelix size={120} delay={0} top="10%" left="10%" />
      <DNAHelix size={80} delay={1.5} top="60%" left="5%" />
      <DNAHelix size={160} delay={0.5} top="30%" left="75%" />
      <DNAHelix size={100} delay={2} top="70%" left="80%" />
      <DNAHelix size={60} delay={3} top="20%" left="50%" />
      
      {/* Dark grid background */}
      <div className="dark-grid-background"></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      
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
            The <span className="text-transparent bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text">Content Chemist</span>
          </h1>
          
          <motion.p 
            className="hero-subtitle mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Distilling platform science, behavioral psychology, and fearless creativity into repeatable formulas.
            <span className="block mt-2 text-transparent bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text font-medium">Like a cheat-code for your content.</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <RouterLink to="/contact" className="btn-primary-dark">Let's Work</RouterLink>
            <a href="https://successonsocial.co" target="_blank" rel="noopener noreferrer" className="btn-secondary-dark">Join SOS Club</a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={800}
        className="scroll-indicator text-gray-400"
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
