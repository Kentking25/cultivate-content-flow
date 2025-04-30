
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SpeakingCard = ({ 
  title, 
  description, 
  delay 
}: { 
  title: string; 
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-xl font-bold mb-3 text-chemist-black">{title}</h3>
      <p className="text-chemist-gray">{description}</p>
    </motion.div>
  );
};

const FormatCard = ({ 
  title, 
  icon, 
  delay 
}: { 
  title: string; 
  icon: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-16 h-16 rounded-full bg-chemist-white flex items-center justify-center mb-3 border-2 border-chemist-orange">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="font-bold text-center">{title}</p>
    </motion.div>
  );
};

const SpeakingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="speaking" className="section bg-chemist-white relative" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-3">Book Kent as a Speaker</h2>
          <p className="section-subtitle mx-auto">
            Engaging keynotes and workshops on content strategy, personal branding, and digital marketing
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="/lovable-uploads/158947ca-a144-4cc7-a6d6-dd55ff08c484.png"
              alt="Kent King speaking"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-chemist-black">Speaking Topics</h3>
            
            <div className="space-y-4">
              <SpeakingCard
                title="Content Chemistry 101"
                description="Learn how to apply scientific principles to content creation for predictable growth and engagement."
                delay={0.4}
              />
              
              <SpeakingCard
                title="AI-Powered Storytelling"
                description="Discover how to leverage AI tools while maintaining authentic brand voice and connection."
                delay={0.5}
              />
              
              <SpeakingCard
                title="Scaling Brand Authority Fast"
                description="Strategies to accelerate your personal brand growth and position yourself as a thought leader in your industry."
                delay={0.6}
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-chemist-black text-center">Speaking Formats</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FormatCard title="Keynotes" icon="🎤" delay={0.8} />
            <FormatCard title="Masterclasses" icon="📚" delay={0.9} />
            <FormatCard title="Workshops" icon="🧪" delay={1.0} />
            <FormatCard title="Podcast Guest" icon="🎙️" delay={1.1} />
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contact" className="btn-primary">
              Book Kent as a Speaker
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakingSection;
