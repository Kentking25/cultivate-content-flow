
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollSection from '../ScrollSection';

const ProblemSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const problems = [
    {
      emoji: "😤",
      title: "Posting Without Strategy",
      description: "You're creating content but have no idea if it will actually work or connect with your audience."
    },
    {
      emoji: "📢",
      title: "Shouting Into the Void",
      description: "Your posts get minimal engagement while you watch others in your industry succeed."
    },
    {
      emoji: "💸",
      title: "No Clear ROI",
      description: "You're spending time on content but can't see how it translates to actual income."
    },
    {
      emoji: "🔒",
      title: "Trapped in Your Current Income",
      description: "You want the freedom that comes with content-driven income but don't know how to get there."
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
            <p className="text-2xl md:text-3xl font-script italic text-chemist-orange mb-4">
              Let me guess...
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              You've had success in your career but struggling with content (and its costing you opportunities)
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{problem.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};

export default ProblemSection;
