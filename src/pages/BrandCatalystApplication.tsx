
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import { LabBackground } from '../components/ChemistryElements';

const BrandCatalystApplication = () => {
  useEffect(() => {
    // Initialize HoneyBook script
    if (window._HB_) {
      window._HB_.pid = '674cda08cfb7ec0019542bee';
    }
  }, []);

  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-32 pb-20">
        <div className="container-content">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Apply for The Brand Catalyst
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to stop being the best-kept secret in your industry? Let's talk about 
              transforming your content and brand strategy with personalized 1:1 attention.
            </p>
          </div>

          {/* HoneyBook Form */}
          <div className="max-w-4xl mx-auto">
            <div className="hb-p-674cda08cfb7ec0019542bee-4"></div>
            <img 
              height="1" 
              width="1" 
              style={{ display: 'none' }} 
              src="https://www.honeybook.com/p.png?pid=674cda08cfb7ec0019542bee" 
              alt=""
            />
          </div>
        </div>
      </div>
      
      <Footer />

      {/* HoneyBook Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,b,s,n,i,p,e,t) {
              h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
              t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
              e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
            })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","674cda08cfb7ec0019542bee");
          `
        }}
      />
    </div>
  );
};

export default BrandCatalystApplication;
