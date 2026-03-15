import { motion } from 'framer-motion';

const MarqueeSection = () => {
  const text = "Great content isn't posted — it's cultivated. Every brand has a story worth telling. My job is to find the formula that makes yours impossible to ignore. ";

  return (
    <section className="bg-chemist-black py-8 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-0 text-lg md:text-xl text-white/40 font-medium"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="inline-block px-4">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
