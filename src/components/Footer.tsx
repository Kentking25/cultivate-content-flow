
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
    <footer className="bg-chemist-black text-white py-12" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
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
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><Link to="/about#speaking" className="text-gray-400 hover:text-white transition-colors">Speaking</Link></li>
              <li><a href="/#sos-club" className="text-gray-400 hover:text-white transition-colors">SOS Club</a></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
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
