import React from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/About'
import Experience from './components/Experience'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
// In your App.js or main component
function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
        {/* About content */}
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="projects">
        {/* Projects content */}
        <Projects/>
      </section>
      <section id="experience">
        {/* Projects content */}
        <Experience/>
      </section>
      <section id="contact">
        <Contact/>
        {/* Contact content */}
      </section>
      <section id="footer">
        <Footer/>
        {/* Contact content */}
      </section>
    </div>
  );
}


export default App
