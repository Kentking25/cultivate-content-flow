
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Target, Calendar, Video, Zap, Users, TrendingUp } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const CohortCurriculumSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const weeks = [
    {
      week: 1,
      title: "Find Your Story (The One That Actually Sells)",
      description: "You have a story that connects with your ideal clients – we just need to find the right angle. No generic 'I help people' statements. Your unique background is your competitive advantage.",
      icon: Book,
      features: [
        "Discover your 5-7 unique story angles",
        "Create your signature origin story",
        "Identify what makes you memorable",
        "Find the experiences that resonate with clients"
      ]
    },
    {
      week: 2,
      title: "The Content Formulas That Actually Work",
      description: "Stop copying what everyone else is doing. Learn the psychology behind posts that make people stop scrolling and think 'I need to work with this person.'",
      icon: Target,
      features: [
        "Master the 7 content archetypes that convert",
        "Create your content formula template",
        "Understand scroll-stopping psychology",
        "Learn the science of viral content"
      ]
    },
    {
      week: 3,
      title: "Your 90-Day Content Calendar (No More Panic Posting)",
      description: "Map out three months of content so you never stare at a blank screen again. Plus, learn how to turn one piece of content into a week's worth of posts.",
      icon: Calendar,
      features: [
        "Build your complete 90-day calendar",
        "Master content multiplication techniques",
        "Create 30+ ready-to-post ideas",
        "Develop your posting rhythm"
      ]
    },
    {
      week: 4,
      title: "Looking Good on Camera (Even If You Hate Being on Camera)",
      description: "Video grows faster, but you don't have to be a natural. Simple tricks to look confident and authentic, even if you're secretly terrified.",
      icon: Video,
      features: [
        "Camera confidence techniques",
        "How to be authentic on video",
        "Simple lighting and setup hacks",
        "Editing tricks for beginners"
      ]
    },
    {
      week: 5,
      title: "Let AI Do the Heavy Lifting",
      description: "Use AI tools to research content ideas and optimize posts without losing your authentic voice. Work smarter, not harder.",
      icon: Zap,
      features: [
        "Set up your AI content assistant",
        "Optimize posts for engagement",
        "Generate endless content ideas",
        "Maintain authenticity with AI"
      ]
    },
    {
      week: 6,
      title: "Turn Followers Into Paying Clients",
      description: "The real goal isn't followers – it's revenue. Learn how to naturally weave your offers into content that converts lurkers into buyers.",
      icon: Users,
      features: [
        "Create content that sells naturally",
        "Master the art of soft selling",
        "Build your conversion content library",
        "Track what actually drives revenue"
      ]
    },
    {
      week: 7,
      title: "Your Content Strategy Presentation",
      description: "Present your personalized strategy to the group for feedback. Leave with a clear roadmap and accountability partners.",
      icon: TrendingUp,
      features: [
        "Present your complete strategy",
        "Get group feedback and refinement",
        "Create accountability partnerships",
        "Launch with confidence"
      ]
    }
  ];

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Stop Guessing and Start Converting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your complete 7-week content transformation journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {weeks.map((week, index) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-chemist-orange bg-opacity-20 rounded-full flex items-center justify-center">
                    <week.icon className="h-8 w-8 text-chemist-orange" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-chemist-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Week {week.week}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{week.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg">{week.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {week.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CohortCurriculumSection;
