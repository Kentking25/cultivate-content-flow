import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '200K+', label: 'Total Followers' },
  { value: '90M+', label: 'Monthly Impressions' },
  { value: '30+', label: 'Brand Partnerships' },
  { value: '7M+', label: 'Campaign Impressions' },
];

const brands = [
  { name: 'Microsoft', src: '/images/brands/microsoft.png' },
  { name: 'Dr. Squatch', src: '/images/brands/dr-squatch.png' },
  { name: 'Printify', src: '/images/brands/printify.png' },
  { name: 'Zeffy', src: '/images/brands/zeffy.png' },
  { name: 'Kajabi', src: '/images/brands/kajabi.png' },
  { name: 'Skillz', src: '/images/brands/skillz.png' },
  { name: 'inBeat', src: '/images/brands/inbeat.png' },
  { name: 'Reebok', src: '/images/brands/reebok.png' },
  { name: 'Sprite', src: '/images/brands/sprite.png' },
  { name: 'CRWN Mag', src: '/images/brands/crwn.png' },
  { name: 'Magfast', src: '/images/brands/magfast.png' },
  { name: 'MNTN', src: '/images/brands/mntn.png' },
  { name: 'Everyday Dose', src: '/images/brands/everydaydose.png' },
  { name: 'Honda', src: '/images/brands/honda.png' },
  { name: 'BET', src: '/images/brands/bet.png' },
  { name: 'Fujifilm', src: '/images/brands/fujifilm.png' },
];

const StatsAndLogosSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-chemist-black py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/50 text-sm uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-white/30 uppercase tracking-[0.2em] text-xs text-center mb-6">Trusted By</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            Great content should be cultivated — not forced.
          </h3>
          <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
            These brands trusted the formula. The results speak for themselves.
          </p>
        </motion.div>

        {/* Brand Logos Marquee */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <div key={`${brand.name}-${i}`} className="flex-shrink-0">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-8 md:h-10 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndLogosSection;
