
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Zap } from 'lucide-react';
import ScrollSection from '../ScrollSection';

const MethodSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const methods = [
    {
      icon: Target,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Industry-Specific Formulas",
      description: "We don't use one-size-fits-all templates. Every formula is customized to your specific industry and audience while following universal principles that work."
    },
    {
      icon: Users,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Personal Story Integration",
      description: "We help you discover and contextualize your unique story to your desired results. Your experiences become your competitive advantage."
    },
    {
      icon: Zap,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Step-by-Step Execution",
      description: "No more guessing. You'll know exactly what to post, when to post it, and how to measure success. It's like having a GPS for your content strategy."
    }
  ];

  return (
    <ScrollSection id="method" bgColor="bg-white">
      <div ref={ref} className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Content Chemistry Method
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unlike generic content advice, our system is built around your specific 
            industry and personal story. Here's how we transform your expertise into 
            income-replacing content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {methods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`w-16 h-16 ${method.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`h-8 w-8 ${method.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ScrollSection>
  );
};

export default MethodSection;
