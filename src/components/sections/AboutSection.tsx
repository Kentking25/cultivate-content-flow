
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mic, Award, Users } from 'lucide-react';
import { FormulaDiagram } from '../ChemistryElements';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const stats = [
    { number: "20+", label: "Podcast Appearances", sublabel: "Featured on 20+ top marketing podcasts", icon: Mic },
    { number: "Award-winning", label: "Industry Recognition", sublabel: "Award-winning content strategies", icon: Award },
    { number: "1,200+", label: "Community Access", sublabel: "Join 1,200+ content creators", icon: Users }
  ];

  return (
    <section id="about" className="section bg-gradient-to-b from-chemist-white to-gray-50 relative" ref={ref}>
      <div className="container-content">
        {/* Ready to work section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-700 mb-4">Ready to work with someone who gets it?</p>
          <a href="#contact" className="text-chemist-orange text-lg font-medium hover:underline">
            Learn more about my approach →
          </a>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-chemist-black mb-8">
              From Hollywood Sets to Content Strategy
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 mb-8">
              <p>
                I've been in front of cameras since I was a kid – major commercials, TV shows, working with brands you 
                definitely know. But here's what most people don't realize: <span className="font-semibold text-chemist-black">the same principles that make compelling 
                entertainment make compelling content.</span>
              </p>
              
              <p>
                The Content Chemistry method combines my entertainment industry background with proven marketing 
                psychology. No fluff, no generic advice – just your personalized formula for content that converts.
              </p>
            </div>
            
            {/* Quote */}
            <div className="bg-gray-100 border-l-4 border-chemist-orange p-6 mb-8">
              <p className="text-gray-700 italic">
                "I learned more about attention and storytelling in one day on a Hollywood set than most people learn in years of marketing courses."
              </p>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-chemist-orange shadow-xl">
                <img
                  src="/lovable-uploads/ce264413-0c4c-4b15-90a9-0d40672de7af.png"
                  alt="Kent King - The Content Chemist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-chemist-black rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-chemist-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-chemist-orange" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <FormulaDiagram />
    </section>
  );
};

export default AboutSection;
