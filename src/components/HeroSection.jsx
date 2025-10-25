import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-40 min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-950"></div>
      
      {/* Noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }}></div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        {/* Main Content Grid - Asymmetric Bento Layout */}
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* Large Text Block - Takes 7 columns */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              {/* Eyebrow text */}
              <div className="inline-block">
                <span 
                  className="text-white/60 text-sm tracking-[0.3em] uppercase font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Visual Storyteller
                </span>
              </div>

              {/* Main Headline */}
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Crafting
                <br />
                <span className="italic text-white/90">Creative</span>
                <br />
                Experiences
              </h1>

              {/* Subheadline */}
              <p 
                className="text-xl md:text-2xl text-white/70 max-w-xl leading-relaxed pt-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.3px' }}
              >
                Transforming bold ideas into visual masterpieces. Where imagination meets precision design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <span className="relative z-10" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '1.5px' }}>
                  VIEW PORTFOLIO
                </span>
                <div className="absolute inset-0 bg-white/90 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-sm backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                <span style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '1.5px' }}>
                  GET IN TOUCH
                </span>
              </button>
            </div>
          </div>

          {/* Bento Grid Cards - Takes 5 columns */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4 auto-rows-[140px]">
            
            {/* Card 1 - Stats */}
            <div className="col-span-1 row-span-1 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group">
              <div>
                <p className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>150+</p>
                <p className="text-white/60 text-sm mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Projects Completed</p>
              </div>
            </div>

            {/* Card 2 - Large Image */}
            <div className="col-span-1 row-span-2 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white/90 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '1px' }}>BRANDING</p>
              </div>
              {/* Placeholder for image */}
              <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                <span className="text-white/20 text-6xl">✦</span>
              </div>
            </div>

            {/* Card 3 - Experience */}
            <div className="col-span-1 row-span-1 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
              <div>
                <p className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>8+</p>
                <p className="text-white/60 text-sm mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Years Experience</p>
              </div>
            </div>

            {/* Card 4 - Awards */}
            <div className="col-span-2 row-span-1 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg p-6 flex items-center justify-between hover:border-white/20 transition-all duration-300 group">
              <div>
                <p className="text-white/90 font-semibold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Award-Winning Design</p>
                <p className="text-white/50 text-sm mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Recognized for creative excellence</p>
              </div>
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">✨</div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs tracking-widest" style={{ fontFamily: "'Cormorant Garamond', serif" }}>SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
