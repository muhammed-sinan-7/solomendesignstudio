import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/SDS-Logo-To-Right.png';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];


  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div
          className={`max-w-7xl mx-auto transition-all duration-300 relative overflow-hidden ${
            scrolled
              ? 'bg-white/10 backdrop-blur-xl border-white/20'
              : 'bg-white/5 backdrop-blur-lg border-white/10'
          } rounded-full border`}
          style={{
            boxShadow: scrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.4)'
              : '0 4px 16px rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* Shine/Reflection Animation */}
          <motion.div
            className="absolute inset-0 w-[200%] h-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 55%, transparent 100%)',
              transform: 'skewX(-20deg)',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
          />

          {/* Subtle Inner Glow */}
          <div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 70%)'
            }}
          />

          <div className="relative flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              <img
                src={Logo}
                className="w-20 sm:w-24 md:w-28 brightness-0 invert"
                alt="Solomen Design Studio"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative text-white/80 hover:text-white font-medium transition-colors duration-200 px-4 lg:px-5 py-2 text-sm lg:text-base overflow-hidden cursor-pointer"
                  style={{
                    fontFamily: "'TASA Explorer', serif",
                    letterSpacing: '0.5px'
                  }}
                >
                  {item}

                  {/* Animated underline on hover */}
                  {hoveredItem === item && (
                    <>
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                      {/* Shine effect on hover */}
                      <motion.span
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        }}
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 0.6,
                          ease: 'easeInOut',
                        }}
                      />
                    </>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-white"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="w-full h-0.5 bg-white"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-white"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-24 left-4 right-4 z-50 md:hidden"
          >
            <div
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)' }}
            >
              {/* Shine animation in mobile menu */}
              <motion.div
                className="absolute inset-0 w-[200%] h-full"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 48%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 52%, transparent 100%)',
                  transform: 'skewX(-20deg)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: 'easeInOut',
                }}
              />

              <div className="relative flex flex-col p-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className="text-white/80 hover:text-white hover:bg-white/10 font-medium transition-all duration-200 py-3 px-4 rounded-lg text-base cursor-pointer"
                    style={{
                      fontFamily: "'TASA Explorer', serif",
                      letterSpacing: '0.5px'
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navbar;
