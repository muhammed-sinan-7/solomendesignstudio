import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Logo from '../assets/SDS-Logo-To-Right.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            // Update URL hash without scrolling
            if (window.location.hash !== `#${section}`) {
              window.history.replaceState(null, null, `#${section}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Updated handleLinkClick to change URL
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Update URL with hash
    window.history.pushState(null, null, `#${targetId}`);
    
    // Scroll to section
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Update active section
    setActiveSection(targetId);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* BreadcrumbList Schema for Navigation */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": navItems.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.label,
              "item": `https://yourwebsite.com#${item.id}`
            }))
          })}
        </script>
      </Helmet>

      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4" role="banner">
        <nav 
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
          aria-label="Main navigation"
          role="navigation"
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
            aria-hidden="true"
          />

          {/* Subtle Inner Glow */}
          <div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 70%)'
            }}
            aria-hidden="true"
          />

          <div className="relative flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => handleLinkClick(e, 'home')}
              aria-label="Solomen Design Studio - Go to homepage"
            >
              <img
                src={Logo}
                className="w-20 sm:w-24 md:w-28 brightness-0 invert"
                alt="Solomen Design Studio logo - Professional graphic designer in Dubai"
                width="112"
                height="40"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-1 lg:space-x-2" role="menubar">
              {navItems.map((item) => (
                <li key={item.id} role="none">
                  <motion.a
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative font-medium transition-colors duration-200 px-4 lg:px-5 py-2 text-sm lg:text-base overflow-hidden cursor-pointer inline-block ${
                      activeSection === item.id ? 'text-white' : 'text-white/80 hover:text-white'
                    }`}
                    style={{
                      fontFamily: "'TASA Explorer', serif",
                      letterSpacing: '0.5px'
                    }}
                    role="menuitem"
                    aria-label={`Navigate to ${item.label} section`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}

                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                        aria-hidden="true"
                      />
                    )}

                    {/* Animated underline on hover */}
                    {hoveredItem === item.label && activeSection !== item.id && (
                      <>
                        <motion.span
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/50"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30
                          }}
                          aria-hidden="true"
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
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-white"
                  aria-hidden="true"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="w-full h-0.5 bg-white"
                  aria-hidden="true"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-white"
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

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
            aria-hidden="true"
          />

          {/* Menu Panel with Glassmorphism */}
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-24 left-4 right-4 z-50 md:hidden"
            aria-label="Mobile navigation"
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
                aria-hidden="true"
              />

              <ul className="relative flex flex-col p-4" role="menu">
                {navItems.map((item, index) => (
                  <li key={item.id} role="none">
                    <motion.a
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      className={`font-medium transition-all duration-200 py-3 px-4 rounded-lg text-base cursor-pointer block ${
                        activeSection === item.id 
                          ? 'text-white bg-white/10' 
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                      style={{
                        fontFamily: "'TASA Explorer', serif",
                        letterSpacing: '0.5px'
                      }}
                      role="menuitem"
                      aria-label={`Navigate to ${item.label} section`}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>
        </>
      )}
    </>
  );
};

export default Navbar;
