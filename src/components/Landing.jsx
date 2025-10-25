import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className={`fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 transition-transform duration-100 ${isHovering ? 'scale-150' : ''}`}
        style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }}
      />
      {/* <div 
        ref={followerRef}
        className={`fixed w-8 h-8 border border-white rounded-full pointer-events-none z-40 transition-all duration-300 ${isHovering ? 'scale-200 opacity-50' : 'opacity-30'}`}
        style={{ transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)` }}
      /> */}

      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-black bg-opacity-50 backdrop-blur-xl border-b border-gray-900">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="relative group">
            <div className="text-2xl font-bold tracking-wider">SOLOMEN</div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`relative group transition-colors duration-300 ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'hover:text-purple-400'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : ''}`}></div>
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-black bg-opacity-95 backdrop-blur-xl transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
          <div className="px-6 py-4 space-y-4 flex flex-col">
            {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Hero Section with Modern Layout */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl">
          <div className="overflow-hidden mb-6">
            <h1 
              className="text-6xl md:text-8xl font-bold tracking-tight"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                SOLOMEN
              </span>
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h2 
              className="text-4xl md:text-6xl font-light tracking-wider text-gray-400"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
              DESIGN STUDIO
            </h2>
          </div>
          <div className="overflow-hidden mb-12">
            <p 
              className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              Where creativity meets innovation to craft extraordinary digital experiences
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              className="group relative px-12 py-4 overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="relative z-10">VIEW OUR WORK</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button 
              className="px-12 py-4 border border-gray-700 rounded-full font-semibold text-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300 backdrop-blur-sm"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              CONTACT US
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
      
      {/* About Section with Split Layout */}
      <section id="about" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  ABOUT <span className="text-purple-400">US</span>
                </h2>
              </div>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p className="relative pl-8">
                  <span className="absolute left-0 text-purple-500 text-3xl">"</span>
                  Founded in 2010, SOLOMEN DESIGN STUDIO has been at the forefront of innovative design solutions for over a decade.
                </p>
                <p>
                  Our team of creative professionals combines artistic vision with strategic thinking to deliver designs that not only look stunning but also achieve measurable results.
                </p>
                <p>
                  From branding and web design to print and digital media, we approach every project with the same level of dedication and attention to detail.
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">13+</div>
                  <div className="text-sm text-gray-500">YEARS</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">250+</div>
                  <div className="text-sm text-gray-500">PROJECTS</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-sm text-gray-500">AWARDS</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">SDS</div>
                    <div className="text-gray-500">DESIGN EXCELLENCE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section with Modern Cards */}
      <section id="services" className="py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              OUR <span className="text-purple-400">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              We offer comprehensive design solutions tailored to elevate your brand
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'BRANDING', desc: 'Creating distinctive brand identities', icon: '🎨', color: 'from-purple-600 to-purple-800' },
              { title: 'WEB DESIGN', desc: 'Designing intuitive digital experiences', icon: '💻', color: 'from-pink-600 to-pink-800' },
              { title: 'PRINT DESIGN', desc: 'Crafting compelling print materials', icon: '📄', color: 'from-purple-600 to-pink-600' },
              { title: 'UI/UX DESIGN', desc: 'User-centered interface design', icon: '📱', color: 'from-pink-600 to-purple-600' },
              { title: 'MOTION DESIGN', desc: 'Bringing designs to life', icon: '🎬', color: 'from-purple-800 to-pink-800' },
              { title: 'CONSULTING', desc: 'Strategic design guidance', icon: '💡', color: 'from-pink-800 to-purple-800' }
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                <div className="p-8">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-500 mb-6">{service.desc}</p>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <span className="mr-2">Learn More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Section with Modern Grid */}
      <section id="portfolio" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              SELECTED <span className="text-purple-400">WORKS</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Explore our latest projects and creative endeavors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {[
              { title: 'BRAND IDENTITY', category: 'Tech Startup', size: 'col-span-1 row-span-1' },
              { title: 'WEBSITE DESIGN', category: 'Fashion Brand', size: 'col-span-1 row-span-2' },
              { title: 'PRINT CAMPAIGN', category: 'Luxury Hotel', size: 'col-span-1 row-span-1' },
              { title: 'PACKAGING DESIGN', category: 'Organic Products', size: 'col-span-2 row-span-1' },
              { title: 'UI/UX DESIGN', category: 'Mobile App', size: 'col-span-1 row-span-1' },
              { title: 'EDITORIAL DESIGN', category: 'Art Magazine', size: 'col-span-1 row-span-1' }
            ].map((project, index) => (
              <div 
                key={index}
                className={`${project.size} group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.category}</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section with Modern Form */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              GET IN <span className="text-purple-400">TOUCH</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Let's create something extraordinary together
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Start a Conversation</h3>
                <p className="text-gray-400 text-lg">
                  We're always excited to work on new projects. Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: '📧', label: 'EMAIL', value: 'hello@solomendesign.com' },
                  { icon: '📱', label: 'PHONE', value: '+1 (555) 123-4567' },
                  { icon: '📍', label: 'ADDRESS', value: '123 Design Street, Creative City, 10001' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                      <div className="text-lg group-hover:text-purple-400 transition-colors duration-300">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-4 pt-8">
                {['INSTAGRAM', 'BEHANCE', 'DRIBBBLE', 'LINKEDIN'].map((social, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl transform rotate-1"></div>
              <form className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows="5" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300 resize-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modern Footer */}
      <footer className="py-12 px-6 border-t border-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-2">SOLOMEN</div>
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">PRIVACY</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">TERMS</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">SITEMAP</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;