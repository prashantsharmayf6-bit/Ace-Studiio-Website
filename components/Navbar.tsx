import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { NAV_LINKS, BRAND_NAME, INSTAGRAM_URL } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              <Logo className="w-12 h-12 md:w-14 md:h-14" />
            </div>
            {/* We hide the text on mobile since it's inside the logo, but keep on desktop for branding reinforcement if needed, 
                or we can hide it entirely since the logo has the name. Let's keep a subtle version for desktop. */}
            <span className="hidden lg:block text-xl font-bold tracking-tighter text-white opacity-0 lg:opacity-100 transition-opacity -ml-1">
              {BRAND_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-neon ${
                  location.pathname === link.path ? 'text-brand-neon' : 'text-gray-300'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full hover:opacity-80 transition-opacity"
            >
              <Instagram size={20} className="text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-brand-neon transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-30 bg-brand-dark/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px', height: 'calc(100vh - 80px)' }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-2xl font-bold tracking-wide ${
              location.pathname === link.path ? 'text-brand-neon' : 'text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <a 
          href={INSTAGRAM_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full mt-4"
        >
          <Instagram size={24} />
          <span>Follow Us</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;