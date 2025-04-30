
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flask, Beaker, TestTube } from 'lucide-react';

const services = [
  {
    icon: Beaker,
    title: "Audience Research",
    description: "Deep-dive analysis to understand your ideal audience's needs, pain points, and content preferences."
  },
  {
    icon: Flask,
    title: "Brand Positioning & Messaging",
    description: "Craft a unique position in your market with messaging that resonates and differentiates."
  },
  {
    icon: TestTube,
    title: "Content Ideation & Calendars",
    description: "Strategic content planning aligned with your business goals and audience interests."
  },
  {
    icon: Beaker,
    title: "Scriptwriting",
    description: "Compelling scripts that engage viewers and drive them to take action."
  },
  {
    icon: TestTube,
    title: "On-camera Coaching",
    description: "Develop authentic presence and confidence in front of the camera."
  },
  {
    icon: Flask,
    title: "Video Editing",
    description: "Professional editing that enhances your message and matches your brand style."
  },
  {
    icon: TestTube,
    title: "Paid Ad Creative & Copy",
    description: "High-converting ad creative designed specifically for platform algorithms and user behavior."
  },
  {
    icon: Beaker,
    title: "Funnel & Web Builds",
    description: "Strategic digital experiences designed to guide visitors toward conversion."
  },
  {
    icon: Flask,
    title: "Email & SMS Flows",
    description: "Automated sequences that nurture leads and drive consistent sales."
  },
  {
    icon: TestTube,
    title: "AI Prompt Engineering & Custom GPTs",
    description: "Leverage AI to enhance content creation and marketing workflows."
  },
  {
    icon: Beaker,
    title: "Data Dashboards & Reporting",
    description: "Clear visibility into performance metrics that matter for your business."
  }
];

const ServicesLibrarySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services-library" className="section bg-gray-50 relative" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-3">Our Services Library</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive solutions to elevate your content strategy and brand presence
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 1) }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="rounded-full bg-chemist-orange bg-opacity-10 p-3">
                    <service.icon className="h-6 w-6 text-chemist-orange" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-chemist-black">{service.title}</h3>
                  <p className="text-chemist-gray">{service.description}</p>
                </div>
              </div>
              
              {activeService === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  <a href="#contact" className="text-chemist-orange font-medium hover:underline">
                    Inquire about this service →
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="btn-primary">
            Request Custom Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesLibrarySection;
