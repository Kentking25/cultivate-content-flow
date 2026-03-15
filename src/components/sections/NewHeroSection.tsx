import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const roleBadges = [
  { label: 'Creative Director', position: 'top-[15%] left-[3%] md:left-[5%]' },
  { label: 'Content Marketer', position: 'top-[12%] right-[3%] md:right-[5%]' },
  { label: 'Speaker', position: 'bottom-[38%] left-[3%] md:left-[5%]' },
  { label: 'Strategist', position: 'bottom-[32%] right-[3%] md:right-[5%]' },
];

const NewHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden bg-chemist-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/kent-hero.webp"
          alt="Kent King"
          className="w-full h-full object-cover object-top"
        />
        {/* Orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/60 via-orange-800/30 to-chemist-black/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-chemist-black via-transparent to-transparent" />
      </div>

      {/* Floating Role Badges */}
      {roleBadges.map((badge, i) => (
        <motion.div
          key={badge.label}
          className={`absolute ${badge.position} z-10 hidden sm:block`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
        >
          <div className="flex items-center gap-2 bg-chemist-black/70 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-white">
            <span className="w-2 h-2 rounded-full bg-chemist-orange" />
            {badge.label}
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center pb-16 md:pb-24 px-6">
        <motion.p
          className="text-chemist-orange uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The Content Chemist
        </motion.p>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Kent King.
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="/speaking"
            className="bg-chemist-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
          >
            Book Me to Speak <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#story"
            className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            My Story
          </a>
        </motion.div>

        <motion.div
          className="text-white/50 uppercase tracking-[0.3em] text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SCROLL
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHeroSection;
