import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FloatingBeaker } from '../ChemistryElements';
import { Check } from 'lucide-react';

// DNA Helix image component
const DNAHelixImage = ({ size, delay, top, left }: { size: number, delay: number, top: string, left: string }) => {
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.6, 0.8, 0.6], 
        scale: [1, 1.05, 1],
        rotate: [0, 360]
      }}
      transition={{ 
        opacity: { duration: 10, delay, repeat: Infinity, repeatType: "loop" },
        scale: { duration: 10, delay, repeat: Infinity, repeatType: "loop" },
        rotate: { duration: 15, repeat: Infinity, ease: "linear" }
      }}
    >
      <img 
        src="/lovable-uploads/98e50451-66bd-45a2-9971-8f50ef236fd4.png" 
        alt="DNA Helix" 
        style={{ 
          width: size, 
          height: size * 2,
          filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.3))'
        }}
        className="object-contain"
      />
    </motion.div>
  );
};

// Floating DNA strands
const FloatingDNAStrand = ({ size, delay, top, left }: { size: number, delay: number, top: string, left: string }) => {
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ 
        opacity: [0.4, 0.7, 0.4],
        x: [0, 50, 0],
        y: [0, -30, 0],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        duration: 20,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <img 
        src="/lovable-uploads/5714c194-95ae-4daf-9120-dff6e5dab884.png" 
        alt="DNA Strand" 
        style={{ 
          width: size, 
          height: size,
          filter: 'drop-shadow(0 0 15px rgba(255, 107, 53, 0.4))'
        }}
        className="object-contain"
      />
    </motion.div>
  );
};

// Simple DNA helix with subtle motion
const SimpleDNAHelix = ({ size, delay, top, left }: { size: number, delay: number, top: string, left: string }) => {
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        scale: [0.8, 1.1, 0.8],
        rotate: [0, -180, 0]
      }}
      transition={{ 
        duration: 25,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <img 
        src="/lovable-uploads/0735f14c-2795-4b29-8998-d184180edbb4.png" 
        alt="Simple DNA" 
        style={{ 
          width: size, 
          height: size,
          filter: 'drop-shadow(0 0 10px rgba(255, 167, 38, 0.3))'
        }}
        className="object-contain"
      />
    </motion.div>
  );
};

// Atomic structure with orbital motion
const AtomicStructure = ({ size, delay, top, left }: { size: number, delay: number, top: string, left: string }) => {
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.2, 1],
        rotate: [0, 360]
      }}
      transition={{ 
        duration: 18,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <img 
        src="/lovable-uploads/7080f906-9ee3-42ab-a001-a35286dd6ed8.png" 
        alt="Atomic Structure" 
        style={{ 
          width: size, 
          height: size,
          filter: 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.2))'
        }}
        className="object-contain"
      />
    </motion.div>
  );
};

// Energy atom with pulsing effect
const EnergyAtom = ({ size, delay, top, left }: { size: number, delay: number, top: string, left: string }) => {
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.6, 1, 0.6],
        scale: [0.9, 1.3, 0.9],
        rotate: [0, 270, 0]
      }}
      transition={{ 
        duration: 12,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    >
      <img 
        src="/lovable-uploads/d6b1b4ee-caf6-4c16-9001-01601057b8dd.png" 
        alt="Energy Atom" 
        style={{ 
          width: size, 
          height: size,
          filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.4))'
        }}
        className="object-contain"
      />
    </motion.div>
  );
};

// Wave pattern with flowing motion
const WavePattern = ({ size, delay, top, left }: { size: number, delay: number, top: string, left: string }) => {
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: [0.4, 0.8, 0.4],
        y: [0, -20, 0],
        x: [0, 30, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        duration: 22,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <img 
        src="/lovable-uploads/4ad040b9-7f4d-4ded-b655-91698f26245a.png" 
        alt="Wave Pattern" 
        style={{ 
          width: size, 
          height: size,
          filter: 'drop-shadow(0 0 20px rgba(255, 193, 7, 0.3))'
        }}
        className="object-contain"
      />
    </motion.div>
  );
};

// Complex molecular structure
const MolecularStructure = ({ size, delay, top, left }: { size: number, delay: number, top: string, left: string }) => {
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ opacity: 0, rotate: 45 }}
      animate={{ 
        opacity: [0.3, 0.7, 0.3],
        rotate: [45, 405, 45],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{ 
        duration: 30,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <img 
        src="/lovable-uploads/c93ebb2f-117b-43b2-baef-00f2e4ac7e66.png" 
        alt="Molecular Structure" 
        style={{ 
          width: size, 
          height: size,
          filter: 'drop-shadow(0 0 25px rgba(220, 38, 127, 0.3))'
        }}
        className="object-contain"
      />
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
      {/* Original DNA Helix background */}
      <DNAHelixImage size={120} delay={0} top="10%" left="10%" />
      <DNAHelixImage size={80} delay={1.5} top="60%" left="5%" />
      <DNAHelixImage size={160} delay={0.5} top="30%" left="75%" />
      <DNAHelixImage size={100} delay={2} top="70%" left="80%" />
      <DNAHelixImage size={60} delay={3} top="20%" left="50%" />
      
      {/* New floating elements with varied animations */}
      <FloatingDNAStrand size={140} delay={0.8} top="15%" left="85%" />
      <FloatingDNAStrand size={90} delay={2.5} top="65%" left="15%" />
      
      <SimpleDNAHelix size={70} delay={1.2} top="45%" left="3%" />
      <SimpleDNAHelix size={110} delay={3.5} top="25%" left="90%" />
      
      <AtomicStructure size={100} delay={0.3} top="5%" left="45%" />
      <AtomicStructure size={80} delay={2.8} top="75%" left="60%" />
      
      <EnergyAtom size={90} delay={1.8} top="35%" left="20%" />
      <EnergyAtom size={120} delay={0.7} top="55%" left="85%" />
      
      <WavePattern size={200} delay={1.0} top="40%" left="65%" />
      <WavePattern size={150} delay={3.2} top="80%" left="25%" />
      
      <MolecularStructure size={110} delay={2.2} top="8%" left="65%" />
      <MolecularStructure size={85} delay={1.6} top="85%" left="45%" />
      
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
