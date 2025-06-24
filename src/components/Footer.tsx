
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const socialLinks = [
    { name: 'Twitter', url: 'https://x.com/kentcultivate', icon: Twitter },
    { name: 'Instagram', url: 'https://instagram.com/kentcultivate', icon: Instagram },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/kent-king-64164b1b9', icon: Linkedin },
    { name: 'YouTube', url: 'https://youtube.com/@kentcultivate', icon: Youtube },
  ];

  return (
    <footer className="bg-chemist-darkgray text-white py-16" ref={ref}>
      <div className="container-content">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's apply Content Chemistry to your personal brand and start building authority that generates real opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/assessment" className="btn-primary text-lg px-8 py-4">
              Take Free Assessment →
            </Link>
            <Link to="/services" className="text-white border border-gray-600 px-8 py-4 rounded-md font-medium hover:border-chemist-orange transition-colors text-lg">
              View Programs →
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 border-t border-gray-700"
        >
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/23d3a082-21ba-4964-94c6-d58b0f191609.png" 
                alt="Kent King - Content Chemist Logo" 
                className="h-12"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-xs">
              Transforming personal brands with data-driven content formulas that convert followers into customers.
            </p>
            <p className="text-chemist-orange font-medium">Like a cheat-code for your content.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Kent</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Programs</Link></li>
              <li><a href="https://successonsocial.co" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">SOS Club</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  title={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
              <a 
                href="https://tiktok.com/@kentcultivate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="TikTok"
              >
                <div className="w-6 h-6 flex items-center justify-center font-bold text-lg">
                  T
                </div>
              </a>
            </div>
            <div>
              <a 
                href="https://elementtheagency.hbportal.co/public/674cde7cf3636d002dbc1d37" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-chemist-orange hover:text-white transition-colors"
              >
                Element The Agency →
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Kent King. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 mr-6">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
