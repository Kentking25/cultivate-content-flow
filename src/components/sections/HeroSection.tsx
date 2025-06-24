
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FloatingBeaker } from '../ChemistryElements';
import { Check } from 'lucide-react';

// Advanced DNA Helix animation component inspired by the reference image
const DNAHelix = ({ size, delay, top, left }: { size: number, delay: number, top: string, left: string }) => {
  // Number of rungs in the DNA ladder
  const rungs = 12;
  
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.6, 0.8, 0.6], 
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
                className="dna-segment"
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
                className="dna-segment"
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
              className="dna-rung"
              style={{
                top: `${(i / rungs) * 100}%`,
                transform: `rotate(${Math.sin((i / rungs) * Math.PI * 2) * 90}deg)`,
              }}
            />
          ))}
          
          {/* Glow effect */}
          <div className="dna-glow"></div>
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
    <section id="hero" className="section bg-chemist-black text-white relative overflow-hidden" ref={ref}>
      {/* DNA Helix background with different sizes and positions */}
      <DNAHelix size={120} delay={0} top="10%" left="10%" />
      <DNAHelix size={80} delay={1.5} top="60%" left="5%" />
      <DNAHelix size={160} delay={0.5} top="30%" left="75%" />
      <DNAHelix size={100} delay={2} top="70%" left="80%" />
      <DNAHelix size={60} delay={3} top="20%" left="50%" />
      
      {/* Grid background to match reference image */}
      <div className="grid-background"></div>
      
      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Main Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FloatingBeaker className="relative" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Turn Your<br />
              Expertise Into<br />
              <span className="text-chemist-orange">Income-<br />Replacing<br />Content</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
              Get the exact step-by-step system that helped entrepreneurs grow to 90K followers and hit #1 on Amazon. Finally know exactly what to post with a proven game plan.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
              <RouterLink to="/contact" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto text-center">
                FREE Personalized Content Plan →
              </RouterLink>
              <button className="text-white border border-gray-600 px-8 py-4 rounded-md font-medium hover:border-chemist-orange transition-colors text-lg w-full sm:w-auto">
                Book Free Assessment
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-700">
              <div>
                <div className="text-3xl font-bold text-white">90K+</div>
                <div className="text-gray-400">Followers Gained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">#1</div>
                <div className="text-gray-400">Amazon Bestseller</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10x</div>
                <div className="text-gray-400">Engagement Boost</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Method Card */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="bg-chemist-orange rounded-2xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                The Content Chemistry Method
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Industry-specific formulas</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Personal story integration</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Step-by-step game plan</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Proven results system</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
