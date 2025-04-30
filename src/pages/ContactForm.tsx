
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Atom, TestTube } from 'lucide-react';

const ContactForm = () => {
  useEffect(() => {
    document.title = "Contact - The Content Chemist";
    
    // HoneyBook script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(h,b,s,n,i,p,e,t) {
        h._HB_ = h._HB_ || {};h._HB_.pid = i;;;
        t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
        e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
      })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","674cda08cfb7ec0019542bee");
    `;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-chemist-black">
      <Navigation />
      
      <div className="container-content pt-32 pb-20">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's <span className="text-chemist-orange">Build</span> Together
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Fill out the form below to get started on your content chemistry journey.
            </p>
          </div>
          
          <div className="bg-chemist-darkgray rounded-lg p-6 md:p-10 shadow-2xl border border-chemist-orange border-opacity-20 relative overflow-hidden">
            {/* Chemistry element decorations */}
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <Atom className="w-32 h-32 text-chemist-orange" />
            </div>
            <div className="absolute bottom-0 left-0 opacity-10 transform -translate-x-1/4 translate-y-1/4">
              <TestTube className="w-32 h-32 text-chemist-orange" />
            </div>
            
            {/* HoneyBook Form */}
            <div className="relative z-10">
              <div className="hb-p-674cda08cfb7ec0019542bee-2"></div>
              <img height="1" width="1" style={{display: 'none'}} src="https://www.honeybook.com/p.png?pid=674cda08cfb7ec0019542bee" alt="" />
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactForm;
