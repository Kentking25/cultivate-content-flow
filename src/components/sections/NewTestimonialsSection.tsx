import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Kent's content strategy completely transformed my business. I went from posting randomly to having a clear, systematic approach that actually converts.",
    author: 'Sarah M.',
    role: 'Business Coach',
    result: '312% Engagement Increase',
  },
  {
    text: 'Working with Kent was a game-changer. My engagement increased by 300% and I finally built the personal brand I always wanted.',
    author: 'Lisa T.',
    role: 'Consultant',
    result: 'Personal Brand Overhaul',
  },
  {
    text: "The Content Chemistry Method gave me the exact framework I needed. No more guessing what to post — I have a proven system that works.",
    author: 'Mike C.',
    role: 'Course Creator',
    result: 'Consistent Content System',
  },
];

const outcomes = [
  { value: '657% sales increase', brand: 'Olive Gift Co', detail: 'Without raising ad budget' },
  { value: '#1 Amazon', brand: 'Marie Daniels', detail: 'Book launch without a large following' },
  { value: '+1000% ROAS', brand: 'Olive Gift Co', detail: 'In just 1 month — without increasing ad spend' },
];

const NewTestimonialsSection = () => {
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
          <p className="text-white/30 uppercase tracking-[0.2em] text-xs mb-4">04 — Social Proof</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Results that<br />
            <span className="text-chemist-orange">speak for themselves.</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <Quote className="w-8 h-8 text-chemist-orange mb-4" />
              <p className="text-white/70 leading-relaxed mb-6">{t.text}</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold">{t.author}</p>
                <p className="text-white/40 text-sm">{t.role}</p>
                <p className="text-chemist-orange text-sm font-medium mt-2">{t.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/30 uppercase tracking-[0.2em] text-xs mb-6">Client Outcomes</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <p className="text-2xl font-bold text-chemist-orange mb-2">{o.value}</p>
                <p className="text-white font-medium text-sm">{o.brand}</p>
                <p className="text-white/40 text-sm mt-1">{o.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewTestimonialsSection;
