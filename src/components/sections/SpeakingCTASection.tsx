import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const SpeakingCTASection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-chemist-black py-24 border-t border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/story-speaker.webp"
                alt="Kent speaking"
                className="w-full h-80 md:h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/30 uppercase tracking-[0.2em] text-xs mb-4">On Stage</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              High energy.<br />
              <span className="text-chemist-orange">No fluff.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Kent delivers actionable strategies that audiences actually remember and use. Perfect for marketing conferences, business events, and virtual summits. 50+ speaking engagements and counting.
            </p>
            <a
              href="/speaking"
              className="bg-chemist-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300"
            >
              Book Kent to Speak <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingCTASection;
