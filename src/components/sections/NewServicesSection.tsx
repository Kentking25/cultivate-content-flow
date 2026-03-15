import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    number: '#01',
    badge: 'MOST POPULAR',
    title: '1:1 Strategy Call',
    subtitle: 'Brand Clarity Session',
    description: 'A personalized deep dive into your content strategy, brand positioning, and audience growth. Walk away with a clear formula — not generic advice.',
    cta: 'Book Your Call →',
    url: 'https://superprofile.bio/bookings/kentcultivate?sessionId=6896195904f931001305f3a3',
    external: true,
  },
  {
    number: '#02',
    badge: '90-DAY PROGRAM',
    title: 'Content Chemistry Cohort',
    subtitle: 'Group Coaching',
    description: 'Your 90-day content clarity blueprint. Discover your unique story angles, get your personalized content formula, and master the psychology behind content that converts. Max 10 people.',
    cta: 'Learn More →',
    url: 'https://contentclinic.live/',
    external: true,
  },
  {
    number: '#03',
    badge: 'AGENCY',
    title: 'Element Creative Agency',
    subtitle: 'End-to-End Marketing',
    description: 'Full-service creative production — from strategy and concept development to final execution across all platforms. We engineer campaigns that convert.',
    cta: 'Apply to Work Together →',
    url: '/agency',
    external: false,
  },
  {
    number: '#04',
    badge: 'SPEAKING',
    title: 'Speaking & Keynotes',
    subtitle: 'Conferences, Podcasts & Events',
    description: "High-energy, actionable presentations on Content Chemistry, AI-Powered Storytelling, and Scaling Brand Authority. No fluff — just frameworks that work.",
    cta: 'Book Kent to Speak →',
    url: '/speaking',
    external: false,
  },
];

const NewServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="bg-chemist-black py-24 border-t border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-white/30 uppercase tracking-[0.2em] text-xs mb-4">03 — What I Offer</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Let's cultivate<br />
            <span className="text-chemist-orange">something great.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-chemist-orange/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-chemist-orange font-mono text-sm">{service.number}</span>
                <span className="text-xs uppercase tracking-wider text-white/40 bg-white/5 px-3 py-1 rounded-full">
                  {service.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-chemist-orange text-sm font-medium mb-4">{service.subtitle}</p>
              <p className="text-white/50 leading-relaxed mb-8">{service.description}</p>

              {service.external ? (
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-chemist-orange font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <a
                  href={service.url}
                  className="inline-flex items-center gap-2 text-chemist-orange font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;
