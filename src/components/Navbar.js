import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const history = useHistory();

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom navigation handler to ensure proper routing
  const handleNavigation = (path, e) => {
    e.preventDefault();
    history.push(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-bold relative overflow-hidden shine-text-nav group"
            onClick={(e) => handleNavigation('/', e)}
          >
            Safezone Tech
            <div className="shine-effect"></div>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-3">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/booking', label: 'Book Now' },
              { path: '/news', label: 'News' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="relative px-5 py-2.5 text-white font-bold text-lg hover:text-white group transition-all duration-300 rounded-lg hover:bg-white/10"
                onClick={(e) => handleNavigation(item.path, e)}
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
            <Link 
              to="/booking" 
              className="ml-6 px-8 py-2.5 bg-white/15 text-white font-bold text-lg rounded-full hover:bg-white/25 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 shadow-lg hover:shadow-white/20"
              onClick={(e) => handleNavigation('/booking', e)}
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-4 space-y-2 backdrop-blur-md">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/booking', label: 'Book Now' },
              { path: '/news', label: 'News' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                onClick={(e) => handleNavigation(item.path, e)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link 
                to="/booking" 
                className="block w-full px-6 py-3 text-center bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                onClick={(e) => handleNavigation('/booking', e)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 