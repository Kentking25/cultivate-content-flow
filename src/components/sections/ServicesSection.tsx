
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
      className="card-service-dark bg-gradient-to-br from-gray-800 to-gray-900 text-white border border-gray-600"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="service-icon">
        <Icon />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      {isExternalLink ? (
        <a href={buttonLink} className="inline-block font-medium text-gray-400 hover:text-gray-200 transition-colors hover:underline" target="_blank" rel="noopener noreferrer">
          {buttonText} →
        </a>
      ) : (
        <Link to={buttonLink} className="inline-block font-medium text-gray-400 hover:text-gray-200 transition-colors hover:underline">
          {buttonText} →
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
    <section id="services" className="section bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative" ref={ref}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>
      
      <motion.div
        className="container-content text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title mb-3 text-white">How We Can Help</h2>
        <p className="section-subtitle mx-auto text-gray-300">
          Strategic services tailored to transform your content marketing and personal brand
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ServiceCard
            title="Personal Brand Accelerator"
            description="Strategic intensives and advisory retainers to fast-track your personal brand growth with proven formulas for content that converts."
            icon={() => <Beaker className="h-10 w-10 text-gray-400" />}
            buttonText="Let's Build"
            buttonLink="/contact"
            delay={0}
          />
          
          <ServiceCard
            title="SOS Club"
            description="Join our Content Growth Lab (Free) or upgrade to Success On Social (Paid) for community support and proven content strategies."
            icon={() => <FlaskConical className="h-10 w-10 text-gray-400" />}
            buttonText="Join Now"
            buttonLink="https://successonsocial.co"
            delay={0.2}
            isExternalLink={true}
          />
          
          <ServiceCard
            title="Element The Agency"
            description="Full-service content marketing with performance creative, paid ads, organic social, AI integration, and conversion-focused funnels."
            icon={() => <Atom className="h-10 w-10 text-gray-400" />}
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
