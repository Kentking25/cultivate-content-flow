import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { CheckCircle, X } from 'lucide-react';
const CohortCTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const perfect = ["You're a coach or selling courses/info products", "Your business is your main focus, but you're also probably managing a family", "You're posting but getting crickets – low engagement, slow growth", "You've tried free advice and generic templates but nothing felt authentic", "You know your business would grow if you had more eyeballs and attention", "You're drowning in 'what should I create' and need clarity", "You consume content in the evenings when you finally have a minute to breathe", "You want a systematic approach, not another motivational pep talk"];
  const canPromise = ["A clear, personalized content strategy", "Weekly group coaching with real feedback", "Templates and frameworks customized for your business", "A supportive group of people in similar situations", "Lifetime access to everything we create together"];
  const cantPromise = ["You'll go viral overnight", "You'll gain 10K followers in a week", "It'll work if you don't implement", "Success without consistent effort"];
  return <section className="bg-chemist-black py-20" ref={ref}>
      <div className="container-content">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Content Clarity Starts in 7 Weeks
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            No more staring at blank screens. No more copying what everyone else is doing. No more posting and praying.
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Just a clear, personalized system for creating content that builds authority and grows your business.
          </p>
          
          <div className="space-y-4 mb-8">
            <Link to="/services/content-cohort/apply" className="bg-chemist-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 inline-block text-xl">
              Apply for Content Chemistry Cohort →
            </Link>
            
            <p className="text-gray-400">Next cohort starts August 3rd • Only 4 spots left</p>
          </div>
        </motion.div>

        {/* This Cohort Is Perfect If */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            This Cohort Is Perfect If...
          </h3>
          
          <div className="bg-gray-900 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              You're Nodding Yes to These:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {perfect.map((item, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>)}
            </div>
          </div>
        </motion.div>

        {/* What I Can/Can't Promise */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Let's Be Honest About What This Takes
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What I Can Promise */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-green-400 mb-6">What I Can Promise:</h4>
              <div className="space-y-4">
                {canPromise.map((item, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>)}
              </div>
            </div>

            {/* What I Can't Promise */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-red-400 mb-6">What I Can't Promise:</h4>
              <div className="space-y-4">
                {cantPromise.map((item, index) => <div key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Real Talk */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-center">
          <div className="bg-chemist-orange rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-white text-lg font-medium">
              <strong>The Real Talk:</strong> If you show up, implement what we teach, and stop making 
              excuses, you'll finally have clarity on what to post and why it works. That's when 
              the real growth starts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CohortCTASection;