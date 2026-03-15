import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Instagram } from 'lucide-react';

const ContactFormSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    window.location.href = `mailto:kent@kentcultivate.com?subject=Inquiry from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="bg-chemist-black py-24 border-t border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/30 uppercase tracking-[0.2em] text-xs mb-4">05 — Get in Touch</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's cultivate<br />
              <span className="text-chemist-orange">something great.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-12">
              Whether you're looking for a strategic content partner, a creative director, or a keynote speaker who brings both cultural relevance and proven results — I'd love to hear about your vision.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-white/30 uppercase text-xs tracking-wider mb-2">Email</p>
                <a href="mailto:kent@kentcultivate.com" className="text-white hover:text-chemist-orange transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  kent@kentcultivate.com
                </a>
              </div>
              <div>
                <p className="text-white/30 uppercase text-xs tracking-wider mb-2">Instagram</p>
                <a href="https://instagram.com/kentcultivate" target="_blank" rel="noopener noreferrer" className="text-white hover:text-chemist-orange transition-colors flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  @KentCultivate
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-white/50 text-sm mb-2 block">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-chemist-orange transition-colors"
                />
              </div>
              <div>
                <label className="text-white/50 text-sm mb-2 block">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-chemist-orange transition-colors"
                />
              </div>
              <div>
                <label className="text-white/50 text-sm mb-2 block">Company / Brand</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-chemist-orange transition-colors"
                />
              </div>
              <div>
                <label className="text-white/50 text-sm mb-2 block">I'm Interested In *</label>
                <select
                  required
                  value={formData.interest}
                  onChange={e => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-chemist-orange transition-colors"
                >
                  <option value="" className="bg-chemist-black">Select an option</option>
                  <option value="speaking" className="bg-chemist-black">Speaking Engagement</option>
                  <option value="agency" className="bg-chemist-black">Agency Partnership</option>
                  <option value="consulting" className="bg-chemist-black">Brand Consulting</option>
                  <option value="content" className="bg-chemist-black">Content Creation</option>
                  <option value="other" className="bg-chemist-black">Something Else</option>
                </select>
              </div>
              <div>
                <label className="text-white/50 text-sm mb-2 block">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-chemist-orange transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-chemist-orange hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Send Inquiry →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
