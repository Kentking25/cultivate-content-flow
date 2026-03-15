import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, Users, Lightbulb, Zap } from 'lucide-react';

const topics = [
  { icon: Mic, title: 'Content Chemistry', description: 'The science behind content that converts — frameworks, not guesswork.' },
  { icon: Lightbulb, title: 'AI-Powered Storytelling', description: 'How to leverage AI tools without losing your authentic voice.' },
  { icon: Users, title: 'From Audience to Community', description: 'Building loyal communities that drive revenue, not just followers.' },
  { icon: Zap, title: 'The Creator Economy', description: 'Monetizing your expertise and building sustainable creator businesses.' },
];

const Speaking = () => {
  return (
    <div className="bg-chemist-black min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-chemist-orange uppercase tracking-[0.2em] text-sm mb-4">Speaking & Keynotes</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                High energy.<br />
                <span className="text-chemist-orange">No fluff.</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                50+ speaking engagements across conferences, summits, podcasts, and corporate events. I bring actionable strategies that audiences actually remember and use.
              </p>
              <a
                href="https://superprofile.bio/bookings/kentcultivate?sessionId=6896195904f931001305f3a3"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-chemist-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all"
              >
                Book Kent to Speak <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/images/story-speaker.webp" alt="Kent speaking" className="rounded-2xl w-full h-[500px] object-cover" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Signature Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((topic) => (
                <div key={topic.title} className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <topic.icon className="w-8 h-8 text-chemist-orange mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
                  <p className="text-white/50">{topic.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-bold text-chemist-orange">50+</div>
              <div className="text-white/40 text-sm mt-1">Engagements</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-chemist-orange">100K+</div>
              <div className="text-white/40 text-sm mt-1">Audience Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-chemist-orange">4</div>
              <div className="text-white/40 text-sm mt-1">Signature Topics</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speaking;
