import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/About';
import Experience from './components/Experience';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <HelmetProvider>
      <div>
        <Navbar />
        
        <main>
          <section id="home" aria-label="Home section">
            <HeroSection />
          </section>
          
          <section id="about" aria-label="About section">
            <AboutSection />
          </section>
          
          <section id="services" aria-label="Services section">
            <Service />
          </section>
          
          <section id="experience" aria-label="Experience section">
            <Experience />
          </section>
          
          <section id="projects" aria-label="Projects section">
            <Projects />
          </section>
          
          <section id="contact" aria-label="Contact section">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
