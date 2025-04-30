
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/kentcultivate' },
    { name: 'Instagram', url: 'https://instagram.com/kentcultivate' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/kentcultivate' },
    { name: 'YouTube', url: 'https://youtube.com/@kentcultivate' },
    { name: 'TikTok', url: 'https://tiktok.com/@kentcultivate' },
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
                src="/lovable-uploads/4479fb21-0d03-4e7f-9d64-7679a32f6f93.png" 
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
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Kent</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#speaking" className="text-gray-400 hover:text-white transition-colors">Speaking</a></li>
              <li><a href="#sos-club" className="text-gray-400 hover:text-white transition-colors">SOS Club</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a 
                href="https://elementmarketing.com" 
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
