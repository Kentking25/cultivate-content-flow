
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, MessageCircle, DollarSign, Lock } from 'lucide-react';
import ScrollSection from '../ScrollSection';

const ProblemSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: Lock,
      title: "You've tried the Guru's and Experts",
      description: "The courses you bought, videos you watched, and templates you downloaded are too generic and dont match your brand"
    },
    {
      icon: AlertTriangle,
      title: "Posting Without Strategy",
      description: "You're creating content but have no idea if it will actually work or connect with your audience."
    },
    {
      icon: MessageCircle,
      title: "Shouting Into the Void",
      description: "Your posts get minimal engagement while you watch others in your industry succeed."
    },
    {
      icon: DollarSign,
      title: "No Clear ROI",
      description: "You're spending time on content but can't see how it translates to actual income."
    }
  ];

  return (
    <ScrollSection id="problems" bgColor="bg-gray-50">
      <div ref={ref} className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16">
            <p className="text-xl md:text-2xl font-script italic text-chemist-orange mb-4">
              Let me guess...
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              You've had success in your career but struggling with content{' '}
              <span className="text-chemist-orange font-bold italic">
                (and its costing you opportunities)
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-chemist-orange rounded-full flex items-center justify-center mb-4 mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-2xl md:text-3xl">
            <span className="font-script italic text-chemist-orange">The result?</span>{' '}
            <span className="text-gray-900">
              You're basically the best-kept secret in your industry, while somebody with less skills is gaining more visibility
            </span>
          </p>
        </motion.div>
      </div>
    </ScrollSection>
  );
};

export default ProblemSection;
