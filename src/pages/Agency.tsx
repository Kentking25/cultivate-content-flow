import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Agency = () => {
  return (
    <div className="bg-chemist-black min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-chemist-orange uppercase tracking-[0.2em] text-sm mb-4">Element Creative Agency</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              We engineer campaigns<br />
              <span className="text-chemist-orange">that convert.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Full-service creative production — from strategy and concept development to final execution across all platforms. We don't just create content. We architect experiences.
            </p>
            <a
              href="https://superprofile.bio/bookings/kentcultivate?sessionId=6896195904f931001305f3a3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chemist-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all"
            >
              Apply to Work Together <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              { title: 'Strategy', desc: 'Brand positioning, content strategy, and audience analysis.' },
              { title: 'Creative Production', desc: 'Video, photography, graphics, and campaign creative.' },
              { title: 'Campaign Management', desc: 'End-to-end execution across all digital platforms.' },
            ].map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/50">{s.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Notable Campaign</h2>
            <p className="text-chemist-orange text-xl font-semibold mb-4">Microsoft CoPilot AI Launch</p>
            <p className="text-white/50 max-w-2xl mx-auto mb-6">
              Selected as the #1 top creative. Produced content that drove 7M+ total impressions across platforms, outperforming every other creator in the campaign.
            </p>
            <div className="flex justify-center gap-12">
              <div>
                <div className="text-3xl font-bold text-chemist-orange">7M+</div>
                <div className="text-white/40 text-sm">Impressions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-chemist-orange">#1</div>
                <div className="text-white/40 text-sm">Top Creative</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Agency;
