
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ResourcesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="resources" className="section bg-gray-50 relative" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-3">Resources & Insights</h2>
          <p className="section-subtitle mx-auto">
            Access valuable content and stay updated with the latest in content marketing
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* YouTube Videos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-chemist-black">Latest YouTube Videos</h3>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Placeholder for YouTube embed */}
                <div className="flex items-center justify-center h-64 bg-gray-200">
                  <p className="text-chemist-gray">YouTube videos will appear here</p>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2 text-chemist-black">Content Chemistry: The Formula for Viral Content</h4>
                <p className="text-chemist-gray mb-4">Learn the science behind creating content that resonates and spreads organically.</p>
                <a 
                  href="https://youtube.com/@kentcultivate" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-chemist-orange font-medium hover:underline"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-chemist-black">Join The Lab Newsletter</h3>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-chemist-gray mb-6">
                Get weekly insights, exclusive formulas, and behind-the-scenes content strategies delivered straight to your inbox.
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                  <p className="font-medium">Thank you for subscribing!</p>
                  <p className="text-sm mt-1">Check your inbox for a confirmation email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-chemist-darkgray mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chemist-orange"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing...
                      </>
                    ) : (
                      'Subscribe to Newsletter'
                    )}
                  </button>
                  
                  <p className="text-xs text-chemist-gray mt-3 text-center">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              )}
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-lg mb-4 text-chemist-black">Free Download</h4>
                <a 
                  href="#"
                  className="block bg-chemist-black rounded-md p-4 text-white text-center hover:bg-opacity-90 transition-colors"
                >
                  Download: Content Chemistry Starter Guide
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
