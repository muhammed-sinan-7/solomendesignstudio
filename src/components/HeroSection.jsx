import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden" style={{ 
      minHeight: '100vh',
      paddingTop: '8rem',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-950"></div>
      
      {/* Noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }}></div>

      <div className="relative z-10 container mx-auto flex-1 flex items-center" style={{ 
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '1rem',
        paddingBottom: '2rem',
        maxWidth: '90rem'
      }}>
        {/* Main Content Grid - Asymmetric Bento Layout */}
        <div className="grid grid-cols-12 w-full" style={{ 
          gap: '1.25rem',
          maxWidth: '80rem',
          margin: '0 auto'
        }}>
          
          {/* Large Text Block - Takes 7 columns */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center" style={{ gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {/* Eyebrow text */}
              <div className="inline-block">
                <span 
                  className="text-white/60 tracking-[0.3em] uppercase font-light"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.875rem'
                  }}
                >
                  Visual Storyteller
                </span>
              </div>

              {/* Main Headline */}
              <h1 
                className="font-bold tracking-tight"
                style={{ 
                  fontFamily: "'TASA Explorer', sans-serif",
                  fontSize: 'clamp(3.5rem, 5.5vw, 5.5rem)',
                  lineHeight: '0.99'
                }}
              >
                Crafting
                <br />
                <span className="italic text-white/90">Creative</span>
                <br />
                Experiences
              </h1>

              {/* Subheadline */}
              <p 
                className="text-white/70 leading-relaxed"
                style={{ 
                  fontFamily: "'TASA Explorer', serif", 
                  letterSpacing: '0.3px',
                  fontSize: 'clamp(1rem, 1.4vw, 1.375rem)',
                  maxWidth: '36rem',
                  paddingTop: '0.75rem'
                }}
              >
                Transforming bold ideas into visual masterpieces. Where imagination meets precision design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap" style={{ 
              gap: '1rem',
              paddingTop: '1rem'
            }}>
              <button 
                className="group relative bg-white text-black font-semibold rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  padding: '0.875rem 1.75rem',
                  fontSize: '0.875rem'
                }}
              >
                <span className="relative z-10" style={{ fontFamily: "'TASA Explorer', serif", letterSpacing: '1.5px' }}>
                  VIEW PORTFOLIO
                </span>
                <div className="absolute inset-0 bg-white/90 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button 
                className="border border-white/30 text-white font-semibold rounded-sm backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                style={{
                  padding: '0.875rem 1.75rem',
                  fontSize: '0.875rem'
                }}
              >
                <span style={{ fontFamily: "'TASA Explorer', serif", letterSpacing: '1.5px' }}>
                  GET IN TOUCH
                </span>
              </button>
            </div>
          </div>

          {/* Bento Grid Cards - Takes 5 columns */}
          <div 
            className="col-span-12 lg:col-span-5 grid grid-cols-2" 
            style={{ 
              gap: '1rem',
              gridAutoRows: 'minmax(8.25rem, auto)',
              alignContent: 'center'
            }}
          >
            
            {/* Card 1 - Stats */}
            <div 
              className="col-span-1 row-span-1 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
              style={{ padding: '1.25rem' }}
            >
              <div>
                <p 
                  className="font-bold" 
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2.25rem'
                  }}
                >
                  150+
                </p>
                <p 
                  className="text-white/60" 
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.8125rem',
                    marginTop: '0.375rem'
                  }}
                >
                  Projects Completed
                </p>
              </div>
            </div>

            {/* Card 2 - Large Image */}
            <div className="col-span-1 row-span-2 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <div 
                className="absolute z-20" 
                style={{ 
                  bottom: '1rem', 
                  left: '1rem' 
                }}
              >
                <p 
                  className="text-white/90 font-semibold" 
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif", 
                    letterSpacing: '1px',
                    fontSize: '0.9375rem'
                  }}
                >
                  BRANDING
                </p>
              </div>
              {/* Placeholder for image */}
              <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                <span 
                  className="text-white/20" 
                  style={{ fontSize: '3.5rem' }}
                >
                  ✦
                </span>
              </div>
            </div>

            {/* Card 3 - Experience */}
            <div 
              className="col-span-1 row-span-1 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg flex flex-col justify-between hover:border-white/20 transition-all duration-300"
              style={{ padding: '1.25rem' }}
            >
              <div>
                <p 
                  className="font-bold" 
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2.25rem'
                  }}
                >
                  8+
                </p>
                <p 
                  className="text-white/60" 
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.8125rem',
                    marginTop: '0.375rem'
                  }}
                >
                  Years Experience
                </p>
              </div>
            </div>

            {/* Card 4 - Awards */}
            <div 
              className="col-span-2 row-span-1 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-between hover:border-white/20 transition-all duration-300 group"
              style={{ padding: '1.25rem' }}
            >
              <div>
                <p 
                  className="text-white/90 font-semibold" 
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.0625rem'
                  }}
                >
                  Award-Winning Design
                </p>
                <p 
                  className="text-white/50" 
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.8125rem',
                    marginTop: '0.25rem'
                  }}
                >
                  Recognized for creative excellence
                </p>
              </div>
              <div 
                className="group-hover:scale-110 transition-transform duration-300"
                style={{ fontSize: '1.75rem' }}
              >
                ✨
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        style={{ 
          bottom: '2rem',
          gap: '0.5rem'
        }}
      >
        <span 
          className="text-white/40 tracking-widest" 
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '0.6875rem'
          }}
        >
          SCROLL
        </span>
        <div 
          className="w-[1px] bg-gradient-to-b from-white/40 to-transparent"
          style={{ height: '2.75rem' }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div 
        className="absolute top-1/4 bg-white/5 rounded-full blur-[100px] pointer-events-none"
        style={{
          right: '2.5rem',
          width: '18rem',
          height: '18rem'
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"
        style={{
          left: '2.5rem',
          width: '24rem',
          height: '24rem'
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
