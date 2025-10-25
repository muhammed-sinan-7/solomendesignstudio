import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          scrolled
            ? 'bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/10'
            : 'bg-white/5 backdrop-blur-lg shadow-lg shadow-black/5'
        } rounded-full border border-white/20`}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold text-white tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              LOGO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#home"
              className="text-white/95 hover:text-white font-medium transition-all duration-300 relative group text-base"
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.5px' }}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/80 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-white/95 hover:text-white font-medium transition-all duration-300 relative group text-base"
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.5px' }}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/80 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="text-white/95 hover:text-white font-medium transition-all duration-300 relative group text-base"
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.5px' }}
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/80 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-white/95 hover:text-white font-medium transition-all duration-300 relative group text-base"
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.5px' }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/80 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="px-7 py-2.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '1px' }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
