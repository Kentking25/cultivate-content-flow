
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import ContactSection from '../components/sections/ContactSection';
import { Atom, FlaskConical, TestTube } from 'lucide-react';

const SpeakingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const speakingTopics = [
    {
      title: "Content Chemistry 101",
      description: "Learn the fundamental formulas behind high-converting content across platforms"
    },
    {
      title: "AI-Powered Storytelling",
      description: "Leverage AI tools to amplify your brand narrative without losing authenticity"
    },
    {
      title: "Scaling Brand Authority Fast",
      description: "Strategic systems to accelerate personal brand growth and business impact"
    }
  ];

  const formatOptions = [
    {
      title: "Keynotes",
      description: "Energetic, tactical presentations for conferences and events"
    },
    {
      title: "Masterclasses",
      description: "Deep-dive workshops with actionable frameworks and templates"
    },
    {
      title: "Podcasts",
      description: "Engaging conversations about content strategy and personal branding"
    },
    {
      title: "Workshops",
      description: "Hands-on sessions with direct application and feedback"
    }
  ];

  return (
    <section id="speaking" className="py-20 bg-chemist-black text-white" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-white text-center">Book Kent as a Speaker</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Kent delivers actionable strategies with high energy and no fluff. Perfect for marketing conferences, business events, and virtual summits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-chemist-orange">Speaking Topics</h3>
              <div className="space-y-6">
                {speakingTopics.map((topic, index) => (
                  <div key={index} className="border-l-4 border-chemist-orange pl-4">
                    <h4 className="text-xl font-bold mb-2 text-white">{topic.title}</h4>
                    <p className="text-gray-300">{topic.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-chemist-orange">Format Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formatOptions.map((format, index) => (
                  <div key={index} className="bg-chemist-darkgray bg-opacity-50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-1 text-white">{format.title}</h4>
                    <p className="text-sm text-gray-300">{format.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="#contact" className="btn-primary">Book Kent for Your Event</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FullBioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="full-bio" className="py-20 bg-gradient-to-b from-chemist-black to-chemist-darkgray text-white" ref={ref}>
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="section-title text-white">
              The Story Behind<br />
              <span className="text-chemist-orange">The Content Chemist</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 mt-6">
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
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center relative"
          >
            <div className="relative">
              <div className="w-full max-w-md rounded-2xl overflow-hidden border-4 border-chemist-orange">
                <img
                  src="/lovable-uploads/ce264413-0c4c-4b15-90a9-0d40672de7af.png"
                  alt="Kent King - The Content Chemist"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -top-5 -right-5 bg-chemist-orange rounded-full p-3 shadow-lg">
                <Atom className="h-8 w-8 text-chemist-black" />
              </div>
              
              <div className="absolute -bottom-3 -left-3 bg-chemist-black rounded-full p-3 shadow-lg border border-chemist-orange">
                <TestTube className="h-8 w-8 text-chemist-orange" />
              </div>
              
              <div className="absolute top-1/3 -left-8 transform -translate-y-1/2 bg-chemist-darkgray rounded-full p-3 shadow-lg border-2 border-chemist-orange">
                <FlaskConical className="h-8 w-8 text-chemist-orange" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  useEffect(() => {
    document.title = "About Kent King – Content Chemist & Personal Brand Strategist";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-chemist-black min-h-screen text-white">
      <ScrollProgress />
      <Navigation />
      
      <div className="pt-24">
        <FullBioSection />
        <SpeakingSection />
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
