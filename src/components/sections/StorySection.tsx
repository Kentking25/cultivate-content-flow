import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phases = [
  {
    tag: 'Actor',
    title: 'From the Big Screen',
    image: '/images/story-actor.png',
    text: "It started on a movie set. As a kid actor, I appeared in Losing Isaiah alongside Halle Berry and shot commercials for Reebok and Sprite with Nas. That's where I first understood the power of media — how a single frame can make you feel something, buy something, believe something.",
    subtext: "I wasn't just watching — I was learning. The formula for attention is the same everywhere.",
  },
  {
    tag: 'DJ',
    title: 'Building a 6-Figure Brand',
    image: '/images/story-dj.jpg',
    text: 'I became a DJ and event producer — and built a multi-6-figure brand from scratch. Toured nationally and internationally. Appeared on Hot97. Dropped out of college my senior year to pursue it full time.',
    subtext: 'Not because I was reckless — because I understood the formula. Audience + energy + consistency = a brand that sustains itself.',
  },
  {
    tag: 'Marketer',
    title: 'The Pandemic Pivot — 10x Growth',
    image: '/images/story-marketer.png',
    text: "When the world shut down, the events industry evaporated overnight. Most people panicked. I pivoted. I took everything I knew about live audiences and translated it to digital — and my following grew 10x.",
    subtext: "That's when I realized: the formula isn't platform-specific. It's human. Attention, connection, conversion — it works everywhere.",
    stats: [
      { value: '10x', label: 'Follower Growth' },
      { value: '2020', label: 'Pivot Year' },
      { value: '100%', label: 'Digital Shift' },
    ],
  },
  {
    tag: 'Entrepreneur',
    title: 'Element Creative Agency & The Content Chemist',
    image: '/images/story-entrepreneur.webp',
    text: "Today I run Element Creative Agency and engineer campaigns that convert audiences into communities and communities into customers. From the Microsoft CoPilot launch to directing retail expansion campaigns — I don't just create content. I architect experiences.",
    subtext: 'I also created the Content Chemistry Method — a framework for building a personal brand that converts without chasing trends. Now I teach it through 1:1 calls, the Content Clinic cohort, and keynote stages.',
  },
  {
    tag: 'Speaker',
    title: 'On Stage — High Energy. No Fluff.',
    image: '/images/story-speaker.webp',
    text: '50+ speaking engagements across conferences, summits, podcasts, and corporate events. I bring the same energy to a stage that I brought to the DJ booth — because the formula is the same. Give the audience something they can use, make them feel it, and leave them wanting more.',
    subtext: 'Topics: Content Chemistry, AI-Powered Storytelling, From Audience to Community, The Creator Economy.',
    stats: [
      { value: '50+', label: 'Engagements' },
      { value: '100K+', label: 'Audience Reached' },
      { value: '4', label: 'Signature Topics' },
    ],
  },
];

const StoryPhase = ({ phase, index }: { phase: typeof phases[0]; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="mb-24 last:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}
      >
        {/* Image */}
        <div className={`${!isEven ? 'lg:order-2' : ''}`}>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={phase.image}
              alt={phase.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chemist-black/60 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className={`${!isEven ? 'lg:order-1' : ''}`}>
          <span className="inline-block bg-chemist-orange/20 text-chemist-orange px-3 py-1 rounded-full text-sm font-medium mb-4">
            {phase.tag}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{phase.title}</h3>
          <p className="text-white/70 text-lg leading-relaxed mb-4">{phase.text}</p>
          <p className="text-white/50 italic">{phase.subtext}</p>

          {phase.stats && (
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
              {phase.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-chemist-orange">{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const StorySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="story" className="bg-chemist-black py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-white/30 uppercase tracking-[0.2em] text-xs mb-4">The Story</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            From the Big Screen<br />
            <span className="text-chemist-orange">to Bold Strategy.</span>
          </h2>
        </motion.div>

        {phases.map((phase, i) => (
          <StoryPhase key={phase.tag} phase={phase} index={i} />
        ))}

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16"
        >
          <a
            href="https://superprofile.bio/bookings/kentcultivate?sessionId=6896195904f931001305f3a3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-chemist-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all"
          >
            Book 1:1 Call →
          </a>
          <a
            href="/agency"
            className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Work With My Agency
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
