
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Beaker, FlaskConical, Atom } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  buttonText, 
  buttonLink, 
  delay,
  isExternalLink = false
}: { 
  title: string; 
  description: string; 
  icon: any;
  buttonText: string;
  buttonLink: string;
  delay: number;
  isExternalLink?: boolean;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      className="bg-white text-chemist-black border border-gray-200 p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:border-chemist-orange"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="mb-6">
        <Icon className="h-12 w-12 text-chemist-orange" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-chemist-black">{title}</h3>
      <p className="text-chemist-gray mb-8 leading-relaxed">{description}</p>
      
      {isExternalLink ? (
        <a 
          href={buttonLink} 
          className="inline-flex items-center font-semibold text-chemist-orange hover:text-chemist-black transition-colors group" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {buttonText} 
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      ) : (
        <Link 
          to={buttonLink} 
          className="inline-flex items-center font-semibold text-chemist-orange hover:text-chemist-black transition-colors group"
        >
          {buttonText}
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-chemist-white text-chemist-black relative" ref={ref}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'linear-gradient(rgba(60, 60, 60, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(60, 60, 60, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>
      
      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-chemist-black">How We Can Help</h2>
        <p className="text-xl md:text-2xl text-chemist-darkgray mb-16 max-w-3xl mx-auto leading-relaxed">
          Strategic services tailored to transform your content marketing and personal brand
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ServiceCard
            title="Personal Brand Accelerator"
            description="Strategic intensives and advisory retainers to fast-track your personal brand growth with proven formulas for content that converts."
            icon={() => <Beaker className="h-12 w-12 text-chemist-orange" />}
            buttonText="Let's Build"
            buttonLink="/contact"
            delay={0}
          />
          
          <ServiceCard
            title="SOS Club"
            description="Join our Content Growth Lab (Free) or upgrade to Success On Social (Paid) for community support and proven content strategies."
            icon={() => <FlaskConical className="h-12 w-12 text-chemist-orange" />}
            buttonText="Join Now"
            buttonLink="https://successonsocial.co"
            delay={0.2}
            isExternalLink={true}
          />
          
          <ServiceCard
            title="Element The Agency"
            description="Full-service content marketing with performance creative, paid ads, organic social, AI integration, and conversion-focused funnels."
            icon={() => <Atom className="h-12 w-12 text-chemist-orange" />}
            buttonText="Let's Work"
            buttonLink="https://elementtheagency.hbportal.co/public/674cde7cf3636d002dbc1d37"
            delay={0.4}
            isExternalLink={true}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
