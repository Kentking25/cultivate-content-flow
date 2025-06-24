
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Check } from 'lucide-react';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  
  return (
    <section id="hero" className="section bg-chemist-black text-white relative overflow-hidden" ref={ref}>
      {/* Simple grid background to match reference image */}
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
              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="/lovable-uploads/23d3a082-21ba-4964-94c6-d58b0f191609.png" 
                  alt="Kent King - Content Chemist Logo" 
                  className="h-12 w-auto md:h-16"
                />
              </motion.div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Turn Your<br />
              Expertise Into<br />
              <span className="text-chemist-orange">Income-<br />Replacing<br />Content</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">Get your personalized content formula that generates business results (not just vanity metrics). Built for successful entrepreneurs tired of generic templates and cultural disconnects.</p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
              <RouterLink to="/assessment" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto text-center">
                FREE Personalized Content Plan →
              </RouterLink>
              <RouterLink to="/services" className="text-white border border-gray-600 px-8 py-4 rounded-md font-medium hover:border-chemist-orange transition-colors text-lg w-full sm:w-auto text-center">
                Find Your Program
              </RouterLink>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-700">
              <div>
                <div className="text-3xl font-bold text-white">90M+</div>
                <div className="text-gray-400">Organic Views Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">+150</div>
                <div className="text-gray-400">Industries Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10x</div>
                <div className="text-gray-400">Average Engagement Boost</div>
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
      <Link to="about" spy={true} smooth={true} duration={800} className="scroll-indicator text-chemist-orange">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </Link>
    </section>
  );
};

export default HeroSection;
