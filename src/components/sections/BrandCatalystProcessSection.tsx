
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MessageCircle, Target, CheckCircle } from 'lucide-react';

const BrandCatalystProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            90 Days of Complete Brand Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's exactly how we'll work together
          </p>
        </motion.div>

        {/* Process Cards */}
        <div className="space-y-12 mb-16">
          {/* Personal Strategy Sessions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-chemist-black rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Your Personal Strategy Sessions (12 Total)
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  We'll alternate between longer strategy sessions and shorter check-ins:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">90-minute deep dives when we're building strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">60-minute focused sessions for implementation and tweaks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">All calls recorded so you can revisit everything</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Daily Voxer Access */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-chemist-black rounded-2xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Daily Voxer Access (Monday-Friday)
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  This is the game-changer. Send me voice messages throughout your day:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Kent, should I post this or does it sound too salesy?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">I'm stuck on my bio - can you help?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">This opportunity came up - should I take it?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">I typically respond within 2-4 hours (sometimes faster if I'm online)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What We'll Build */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-chemist-black rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  What We'll Build Together
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Your complete brand transformation toolkit:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Your Complete Brand Strategy - Who you are, what you stand for, why people should care</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Custom Content System - Your personal formula for posts that actually work</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Lead Magnet & Landing Page Strategy - Turn followers into email subscribers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Revenue-Generating Content Plan - Content that naturally leads to sales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Crisis Management Plan - What to do when things go wrong online</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">90-Day Implementation Roadmap - Clear next steps after our time together</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandCatalystProcessSection;
