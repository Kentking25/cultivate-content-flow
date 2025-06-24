
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, BarChart3, Mic, Play, Award } from 'lucide-react';

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

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              From Hollywood Sets to Content Strategy
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 mb-8">
              <p>
                I started as a kid actor, appearing in major productions like Losing Isaiah alongside Halle Berry, plus commercials for Reebok, Sprite with Nas, and print campaigns for Scholastic and Hasbro. That's where I first fell in love with how media works and what makes content stick.
              </p>
              
              <p>
                Then I became a DJ and event producer (yeah, I know - weird career path, right?). But here's what all those experiences taught me: there's actually a science to getting people's attention and keeping it.
              </p>
              
              <p>
                Content isn't random. The stuff that works follows specific patterns.
              </p>
              
              <p>
                Today, I run Element The Agency and created something I call Content Chemistry. It's basically the perfect mix of understanding how platforms work, what makes people tick, and being bold enough to try new things.
              </p>
              
              <p>
                My clients? They've seen some pretty amazing results. Olive Gift Co saw a 657% sales increase without raising their ad budget. Marie Daniels landed her book at #1 on Amazon without having a huge following. Briwoo gained 90,000 followers in 6 months and landed brand deals worth tens of thousands.
              </p>
              
              <p>
                When I'm not helping people build their authority, you'll probably find me mixing music, playing with new AI tools, or mentoring the next generation of marketers on how this all works.
              </p>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-chemist-orange shadow-xl">
                <img
                  src="/lovable-uploads/ce264413-0c4c-4b15-90a9-0d40672de7af.png"
                  alt="Kent King - The Content Chemist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

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
