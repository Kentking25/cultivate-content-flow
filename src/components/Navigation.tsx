
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { cn } from '@/lib/utils';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Nav items for hamburger menu
  const navItems = [
    { 
      name: 'Home', 
      target: '/', 
      isRouter: true 
    },
    { 
      name: 'About', 
      target: '/about', 
      isRouter: true 
    },
    { 
      name: 'Programs', 
      target: '/services', 
      isRouter: true 
    }
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'py-3 bg-chemist-black bg-opacity-90 backdrop-blur-sm shadow-md' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-content flex justify-between items-center">
        <div className="flex items-center">
          <RouterLink to="/">
            <img 
              src="/lovable-uploads/23d3a082-21ba-4964-94c6-d58b0f191609.png" 
              alt="Kent King - Content Chemist Logo" 
              className="h-10 md:h-12"
            />
          </RouterLink>
        </div>
        
        {/* Desktop Navigation - Now shows hamburger and Free Game Plan */}
        <div className="flex items-center gap-4">
          <RouterLink
            to="/assessment"
            className="btn-primary"
          >
            Free Game Plan
          </RouterLink>
          
          {/* Hamburger Menu Button - Now visible on all screen sizes */}
          <button
            className="text-white focus:outline-none z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-chemist-black shadow-md py-4 px-6 animate-fade-in z-40">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              item.isRouter ? (
                <RouterLink
                  key={item.name}
                  to={item.target}
                  className="nav-item font-medium text-white hover:text-chemist-orange py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </RouterLink>
              ) : (
                <Link
                  key={item.name}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  duration={800}
                  className="nav-item font-medium text-white hover:text-chemist-orange cursor-pointer py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
