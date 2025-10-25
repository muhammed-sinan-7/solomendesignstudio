import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Minus } from 'lucide-react';

export default function SolomenLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(false);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (cursorRef.current && cursorDotRef.current) {
      cursorRef.current.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
      cursorDotRef.current.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
    }
  }, [mousePosition]);

  return (
    <div className="bg-black text-white min-h-screen relative cursor-none" 
         onMouseEnter={() => document.body.style.cursor = 'none'}
         onMouseLeave={() => document.body.style.cursor = 'auto'}>
      
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className={`fixed w-10 h-10 border-2 rounded-full pointer-events-none z-50 -ml-5 -mt-5 transition-all duration-300 ease-out ${hoveredElement ? 'border-white scale-150 bg-white/10' : 'border-zinc-600'}`}
        style={{ left: 0, top: 0 }}
      />
      <div 
        ref={cursorDotRef}
        className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-50 -ml-0.75 -mt-0.75 transition-transform duration-75"
        style={{ left: 0, top: 0 }}
      />

      {/* Side Navigation */}
      <nav className="fixed left-0 top-0 h-screen flex items-center z-40 pl-16">
        <div className="flex flex-col gap-12 text-sm font-light">
          <a href="#home" className="rotate-180 hover:text-white transition-colors" style={{ writingMode: 'vertical-rl' }}>HOME</a>
          <a href="#projects" className="rotate-180 hover:text-white transition-colors text-zinc-600" style={{ writingMode: 'vertical-rl' }}>PROJECTS</a>
          <a href="#about" className="rotate-180 hover:text-white transition-colors text-zinc-600" style={{ writingMode: 'vertical-rl' }}>ABOUT</a>
          <a href="#contact" className="rotate-180 hover:text-white transition-colors text-zinc-600" style={{ writingMode: 'vertical-rl' }}>CONTACT</a>
        </div>
      </nav>

      {/* Top Bar */}
      <div className="fixed top-0 right-0 left-32 z-40 flex justify-end items-center px-16 py-12">
        <div className="flex items-center gap-16">
          <div className="text-xs tracking-widest text-zinc-600">SCROLL TO EXPLORE</div>
          <div className="w-px h-12 bg-zinc-800"></div>
          <div className="text-xs tracking-widest text-zinc-600">MUMBAI / INDIA</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pl-32 pr-16 relative">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            {/* Left Column - Logo Area */}
            <div className="col-span-5 relative">
              <div className="relative aspect-square max-w-lg">
                {/* Coordinates */}
                <div className="absolute -top-12 left-0 text-xs text-zinc-800 font-mono">40.7128° N</div>
                <div className="absolute -bottom-12 right-0 text-xs text-zinc-800 font-mono">74.0060° W</div>
                
                {/* Main Logo Frame */}
                <div className="relative w-full h-full border border-zinc-900">
                  {/* Inner Frame */}
                  <div className="absolute inset-8 border border-zinc-800">
                    {/* Logo Container */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-950 to-black">
                      {/* Replace with your logo */}
                      <div className="text-center">
                        <div className="text-8xl font-bold mb-2 text-white tracking-tighter">S</div>
                        <div className="text-xs tracking-[0.5em] text-zinc-700">IDENTITY</div>
                      </div>
                    </div>
                    
                    {/* Corner Details */}
                    <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-zinc-600"></div>
                    <div className="absolute -top-px -right-px w-8 h-8 border-t border-r border-zinc-600"></div>
                    <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l border-zinc-600"></div>
                    <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-zinc-600"></div>
                  </div>
                  
                  {/* Measurement Lines */}
                  <div className="absolute top-0 left-1/2 w-px h-4 bg-zinc-800 -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-px h-4 bg-zinc-800 -translate-x-1/2"></div>
                  <div className="absolute left-0 top-1/2 h-px w-4 bg-zinc-800 -translate-y-1/2"></div>
                  <div className="absolute right-0 top-1/2 h-px w-4 bg-zinc-800 -translate-y-1/2"></div>
                </div>
                
                {/* Index Number */}
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs text-zinc-900 font-mono rotate-90">001/004</div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="col-span-7 space-y-12">
              {/* Main Heading */}
              <div>
                <div className="overflow-hidden mb-4">
                  <h1 className="text-9xl font-bold leading-none tracking-tighter">
                    SOLOMEN
                  </h1>
                </div>
                <div className="flex items-center gap-8">
                  <Minus className="w-16 h-px text-white" strokeWidth={1} />
                  <div className="text-2xl tracking-[0.3em] font-light text-zinc-500">
                    DESIGN STUDIO
                  </div>
                </div>
              </div>

              {/* Description Grid */}
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="space-y-4">
                  <div className="text-xs tracking-widest text-zinc-700 mb-4">PHILOSOPHY</div>
                  <p className="text-base text-zinc-400 leading-relaxed font-light">
                    We believe design is not decoration—it's the bridge between intention and experience. Every line, every space has purpose.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-xs tracking-widest text-zinc-700 mb-4">APPROACH</div>
                  <p className="text-base text-zinc-400 leading-relaxed font-light">
                    Through strategic thinking and meticulous craft, we transform complexity into clarity, creating identities that endure.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <button 
                  className="group relative px-12 py-6 border border-white text-sm tracking-widest font-light overflow-hidden hover:text-black transition-colors duration-500"
                  onMouseEnter={() => setHoveredElement(true)}
                  onMouseLeave={() => setHoveredElement(false)}
                >
                  <span className="relative z-10 flex items-center gap-4">
                    VIEW SELECTED WORK
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="min-h-screen pl-32 pr-16 py-32 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="text-xs tracking-widest text-zinc-700 mb-8">EXPERTISE</div>
            <h2 className="text-6xl font-bold tracking-tight">What We Craft</h2>
          </div>

          <div className="space-y-px">
            {[
              { num: '01', title: 'Brand Identity', scope: 'Visual Systems · Guidelines · Strategy' },
              { num: '02', title: 'Digital Design', scope: 'Interfaces · Experiences · Interactions' },
              { num: '03', title: 'Art Direction', scope: 'Concepts · Photography · Motion' },
              { num: '04', title: 'Print & Editorial', scope: 'Publications · Packaging · Collateral' }
            ].map((item) => (
              <div 
                key={item.num}
                className="group border-b border-zinc-900 py-12 hover:bg-zinc-950 transition-colors duration-300"
                onMouseEnter={() => setHoveredElement(true)}
                onMouseLeave={() => setHoveredElement(false)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-16">
                    <span className="text-xs text-zinc-700 font-mono w-12">{item.num}</span>
                    <h3 className="text-4xl font-bold group-hover:translate-x-4 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="text-sm text-zinc-600 font-light">{item.scope}</span>
                    <ArrowUpRight className="w-6 h-6 text-zinc-800 group-hover:text-white group-hover:rotate-45 transition-all duration-300" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 pl-32 pr-16 py-16">
        <div className="max-w-7xl mx-auto flex justify-between items-end">
          <div className="space-y-4">
            <div className="text-xs tracking-widest text-zinc-700">LET'S CREATE SOMETHING</div>
            <div className="text-4xl font-bold">REMARKABLE</div>
          </div>
          <div className="text-right space-y-2">
            <div className="text-xs text-zinc-700 font-mono">© 2025 SOLOMEN DESIGN STUDIO</div>
            <div className="text-xs text-zinc-800">ALL RIGHTS RESERVED</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

