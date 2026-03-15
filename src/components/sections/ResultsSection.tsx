import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const caseStudies = [
  {
    brand: 'Microsoft',
    status: 'COMPLETED',
    title: 'CoPilot AI Launch',
    description: "Selected as the #1 top creative in Microsoft's CoPilot AI launch campaign. Produced content that drove 7M+ total impressions across platforms, outperforming every other creator in the campaign roster.",
    stats: [
      { value: '7M+', label: 'Total Impressions' },
      { value: '#1', label: 'Top Creative in Campaign' },
    ],
    highlight: '7M+',
  },
  {
    brand: 'MNTN',
    status: 'ACTIVE',
    title: 'Ongoing Brand Partnership',
    description: "An ongoing brand partnership built on consistent performance. Kent's content strategy for MNTN has generated 1.4M+ impressions and continues to deliver above-benchmark engagement with every campaign cycle.",
    stats: [
      { value: '1.4M+', label: 'Impressions (Ongoing)' },
      { value: 'Top 5%', label: 'Engagement Rate' },
    ],
    highlight: '1.4M+',
  },
  {
    brand: 'Everyday Dose',
    status: 'COMPLETED',
    title: 'Retail Expansion Campaign',
    description: "Developed the content strategy for Everyday Dose's retail expansion into Sprouts stores nationwide. The campaign bridged digital storytelling with in-store presence, driving awareness at a national scale.",
    stats: [
      { value: 'Sprouts', label: 'Retail Launch' },
      { value: 'Nationwide', label: 'Distribution' },
    ],
    highlight: 'Sprouts',
  },
  {
    brand: 'Olive Gift Co',
    status: 'COMPLETED',
    title: 'ROAS Optimization',
    description: 'Rebuilt the paid media content strategy for Olive Gift Co from the ground up. In just 30 days, the new creative approach increased return on ad spend by 1000% — without increasing the ad budget.',
    stats: [
      { value: '1000%', label: 'ROAS Increase' },
      { value: '1 Month', label: 'Time to Results' },
    ],
    highlight: '1000%',
  },
];

const ResultsSection = () => {
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
          <p className="text-white/30 uppercase tracking-[0.2em] text-xs mb-4">02 — Results</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Work that speaks<br />
            <span className="text-chemist-orange">for itself.</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl">
            From Fortune 500 launches to indie brand breakthroughs — the formula works.
          </p>
        </motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.brand}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <p className="text-white/40 text-sm mb-2">{cs.brand}</p>
              <p className="text-2xl md:text-3xl font-bold text-chemist-orange">{cs.highlight}</p>
              <p className="text-white/50 text-sm mt-1">{cs.stats[0].label}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={`detail-${cs.brand}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{cs.brand}</h3>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  cs.status === 'ACTIVE'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-white/10 text-white/50'
                }`}>
                  {cs.status}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-chemist-orange mb-3">{cs.title}</h4>
              <p className="text-white/50 leading-relaxed mb-6">{cs.description}</p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {cs.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/40 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
