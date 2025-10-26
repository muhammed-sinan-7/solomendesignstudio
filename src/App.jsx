import React from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/About'
import Experience from './components/Experience'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
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
    </div>
  )
}

export default App
