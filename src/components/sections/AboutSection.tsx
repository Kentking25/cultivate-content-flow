
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, BarChart3, Mic, Play, Award } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const stats = [
    { number: "1,247+", label: "Entrepreneurs Coached", icon: Users },
    { number: "312%", label: "Avg. Engagement Increase", icon: BarChart3 },
    { number: "50+", label: "Speaking Events", icon: Mic }
  ];

  const achievements = [
    { 
      icon: Play, 
      title: "Podcast Appearances", 
      description: "Featured on 20+ top marketing podcasts" 
    },
    { 
      icon: Award, 
      title: "Industry Recognition", 
      description: "Award-winning content strategies" 
    },
    { 
      icon: Users, 
      title: "Community Access", 
      description: "Join 1,200+ content creators" 
    }
  ];

  return (
    <section id="about" className="section bg-gradient-to-b from-chemist-black via-chemist-darkgray to-chemist-white relative" ref={ref}>
      <div className="container-content">
        {/* Ready to work section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-300 mb-4">Ready to work with someone who gets it?</p>
          <a href="#contact" className="text-chemist-orange text-lg font-medium hover:underline">
            Learn more about my approach →
          </a>
        </motion.div>

        {/* Updated From Hollywood Sets to Content Strategy section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-gray-600">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              From Hollywood Sets to Content Strategy
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 mb-8">
              <p>
                I've been in front of cameras since I was a kid – major commercials, TV shows, working with brands you definitely know. But here's what most people don't realize: <strong className="text-white">the same principles that make compelling entertainment make compelling content.</strong>
              </p>
              
              <p>
                The Content Chemistry method combines my entertainment industry background with proven marketing psychology. No fluff, no generic advice – just your personalized formula for content that converts.
              </p>
              
              <div className="bg-chemist-orange bg-opacity-20 border-l-4 border-chemist-orange p-4 rounded-r-lg mt-6">
                <p className="text-white italic">
                  "I learned more about attention and storytelling in one day on a Hollywood set than most people learn in years of marketing courses."
                </p>
              </div>
            </div>

            <div className="text-center">
              <RouterLink
                to="/about"
                className="btn-primary inline-block"
              >
                Learn More
              </RouterLink>
            </div>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-sm border border-gray-600">
              <div className="w-16 h-16 bg-chemist-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-chemist-orange" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievements Section - Podcast Appearances Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-chemist-black bg-opacity-90 backdrop-blur-md rounded-2xl p-8 border border-chemist-orange mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-chemist-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-chemist-orange h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
