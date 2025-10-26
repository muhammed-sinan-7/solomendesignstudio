import React from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/About'
import Experience from './components/Experience'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      <Service/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
