
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
      className="absolute opacity-20"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1], 
        scale: [1, 1.05, 1],
      }}
      transition={{ 
        duration: 8,
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
            duration: 20,
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
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden" ref={ref}>
      {/* DNA Helix background elements */}
      <DNAHelix size={100} delay={0} top="10%" left="5%" />
      <DNAHelix size={80} delay={1.5} top="70%" left="10%" />
      <DNAHelix size={120} delay={0.5} top="20%" left="85%" />
      <DNAHelix size={90} delay={2} top="60%" left="80%" />
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/10 to-transparent"></div>
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            The{' '}
            <span className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Content Chemist
            </span>
          </h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Distilling platform science, behavioral psychology, and fearless creativity into{' '}
            <span className="text-white font-medium">repeatable formulas</span>
          </motion.p>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Like a cheat-code for your content.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <RouterLink 
              to="/contact" 
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:from-gray-500 hover:to-gray-600 hover:scale-105 duration-300 shadow-lg"
            >
              Let's Work Together
            </RouterLink>
            <a 
              href="https://successonsocial.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-transparent text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-gray-800 hover:text-white hover:scale-105 duration-300 border-2 border-gray-500"
            >
              Join SOS Club
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={800}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </Link>
    </section>
  );
};

export default HeroSection;
