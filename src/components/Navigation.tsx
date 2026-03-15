import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', target: '/#services' },
    { name: 'Speaking', target: '/speaking' },
    { name: 'Agency', target: '/agency' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'py-3 bg-chemist-black/90 backdrop-blur-md border-b border-white/5'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <RouterLink to="/" className="text-white font-bold text-xl tracking-tight">
          Kent King
        </RouterLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <RouterLink
              key={item.name}
              to={item.target}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-300"
            >
              {item.name}
            </RouterLink>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://superprofile.bio/bookings/kentcultivate?sessionId=6896195904f931001305f3a3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-chemist-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300"
          >
            Book 1:1 <ArrowRight className="w-3 h-3" />
          </a>

          <button
            className="text-white focus:outline-none z-50 md:hidden"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-chemist-black/95 backdrop-blur-md border-b border-white/5 py-6 px-6 animate-fade-in md:hidden">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <RouterLink
                key={item.name}
                to={item.target}
                className="text-white/60 hover:text-white font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </RouterLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
