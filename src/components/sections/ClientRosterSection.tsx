import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const clients = [
  { initials: 'TK', handle: '@trapkaraoke', niche: 'Live Events & Entertainment', followers: '649K', bio: 'Concert Tour. Spiritual enlightenment starts here ✨' },
  { initials: 'TI', handle: '@teriijeoma', niche: 'Stock Trading Educator', followers: '168K', bio: 'Helping ambitious people generate income from stocks.' },
  { initials: 'AA', handle: '@adeyemiadeyosoye', niche: "Men's Mindset & Business", followers: '234K', bio: 'The Radical Path for The Ambitious 1% Man.' },
  { initials: 'JK', handle: '@coachkav', niche: 'High-Performance Coach', followers: '113K', bio: 'Olympic coach of 23 years, 47 world champions.' },
  { initials: 'BB', handle: '@benniebates', niche: 'Artist', followers: '105K', bio: 'Artist. hope it was all worth it.' },
  { initials: 'PB', handle: '@pajamabillionaire', niche: 'Entrepreneur & Lifestyle', followers: '76.7K', bio: 'Building wealth in my pajamas.' },
  { initials: 'NM', handle: '@lashesonfleek_', niche: 'Beauty Educator', followers: '75K', bio: 'LASH QUEEN & EDUCATOR 🤍 Los Angeles / Glendale Ca' },
  { initials: 'MB', handle: '@markwboswell', niche: 'Weight Loss Coach', followers: '14.2K', bio: 'Online Weight loss Coach. fruitarian 🦍' },
];

const ClientRosterSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-chemist-black py-24 border-t border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-white/30 uppercase tracking-[0.2em] text-xs mb-4">Client Roster</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Brands & Creators<br />
            <span className="text-chemist-orange">who trusted the formula.</span>
          </h2>
          <p className="text-white/50 mt-4">
            From 14.2K to 649K followers — the Content Chemistry formula works at every level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.handle}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-chemist-orange/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-chemist-orange/20 flex items-center justify-center text-chemist-orange font-bold text-sm">
                  {client.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{client.handle}</p>
                  <p className="text-white/40 text-xs">{client.niche}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white/30 text-xs">Followers</span>
                <span className="text-chemist-orange font-bold">{client.followers}</span>
              </div>
              <p className="text-white/40 text-sm">{client.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientRosterSection;
