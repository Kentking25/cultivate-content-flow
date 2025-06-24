
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MessageCircle, Video, Book, Target, Zap } from 'lucide-react';

const CohortIncludesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const includes = [
    {
      icon: Users,
      title: "Small Group Coaching",
      description: "Weekly 90-minute calls with max 10 people for real attention"
    },
    {
      icon: MessageCircle,
      title: "Private Community",
      description: "Slack access for questions and support between calls"
    },
    {
      icon: Video,
      title: "All Recordings",
      description: "Lifetime access to every call recording"
    },
    {
      icon: Book,
      title: "Template Library",
      description: "Customized templates for your industry and style"
    },
    {
      icon: Zap,
      title: "Psychology Playbook",
      description: "The science behind content that converts"
    },
    {
      icon: Target,
      title: "Revenue Guide",
      description: "UGC, brand deals, and monetization strategies"
    }
  ];

  return (
    <section className="bg-gray-50 py-20" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What's Included
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need, nothing you don't
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {includes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8 text-chemist-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Lifetime Community Access */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Plus: Lifetime Community Access
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with your cohort forever. Continue getting feedback, celebrate wins, and 
            maintain accountability long after the program ends.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CohortIncludesSection;
