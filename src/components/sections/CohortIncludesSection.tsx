
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MessageCircle, Video, Book, Target, Zap, Star } from 'lucide-react';

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
          className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-200 mb-8"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Plus: Lifetime Community Access
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with your cohort forever. Continue getting feedback, celebrate wins, and 
            maintain accountability long after the program ends.
          </p>
        </motion.div>

        {/* Limited Time Bonus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-chemist-orange to-orange-600 rounded-2xl p-12 text-center shadow-lg border-4 border-yellow-400 relative overflow-hidden"
        >
          <div className="absolute top-4 right-4">
            <div className="bg-yellow-400 text-chemist-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <Star className="h-4 w-4" />
              LIMITED TIME
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-6">
            🎁 Exclusive Bonus for This Cohort
          </h3>
          <p className="text-xl text-white mb-6 max-w-3xl mx-auto">
            We'll personally build out your high-converting landing page AND lead magnet 
            (up to $2,500 value) - only available for February 2025 cohort members.
          </p>
          <p className="text-lg text-orange-100">
            This bonus disappears after this round - we're only doing this for our first 10 members to ensure quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CohortIncludesSection;
