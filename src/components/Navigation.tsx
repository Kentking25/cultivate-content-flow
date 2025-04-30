
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems = [
    { name: 'Home', target: 'hero' },
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Clients', target: 'social-proof' },
    { name: 'Speaking', target: 'speaking' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'py-3 bg-white bg-opacity-90 backdrop-blur-sm shadow-md' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-content flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/4479fb21-0d03-4e7f-9d64-7679a32f6f93.png" 
            alt="Kent King - Content Chemist Logo" 
            className="h-10 md:h-12"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.target}
              spy={true}
              smooth={true}
              duration={800}
              className="nav-item font-medium"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="btn-primary"
          >
            Book Kent
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-chemist-black focus:outline-none"
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.target}
                spy={true}
                smooth={true}
                duration={800}
                className="nav-item font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="btn-primary text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Kent
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
