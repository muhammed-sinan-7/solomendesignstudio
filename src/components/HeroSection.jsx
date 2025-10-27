import React, { useEffect } from 'react';
import Logo from '../assets/SDS-Logo-To-Bottom.png';


const HeroSection = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes appear {
        from {
          opacity: 0;
          scale: 0.8;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          scale: 1;
          transform: translateY(0);
        }
      }


      .animate-on-scroll {
        animation: appear linear;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;
        will-change: transform, opacity;
        backface-visibility: hidden;
        transform: translateZ(0);
      }
      
      /* GPU Acceleration for smooth 60fps */
      .gpu-boost {
        transform: translateZ(0);
        will-change: transform;
      }
    `;
    document.head.appendChild(style);


    return () => {
      document.head.removeChild(style);
    };
  }, []);


  // Scroll handler function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <section className="relative bg-black text-white overflow-hidden gpu-boost" style={{
      minHeight: '100vh',
      paddingTop: '8rem',
      display: 'flex',
      flexDirection: 'column'
    }} id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-950 gpu-boost"></div>
      <div className="absolute inset-0 opacity-[0.015] gpu-boost" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }}></div>


      <div className="relative z-10 container mx-auto flex-1 flex items-center gpu-boost" style={{
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '1rem',
        paddingBottom: '2rem',
        maxWidth: '90rem'
      }}>
        <div
          className="grid grid-cols-12 w-full animate-on-scroll"
          style={{
            gap: '1.25rem',
            maxWidth: '80rem',
            margin: '0 auto'
          }}
        >
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center gpu-boost" style={{ gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div className="inline-block animate-on-scroll">
                <span
                  className="text-white/60 tracking-[0.3em] uppercase font-light"
                  style={{
                    fontFamily: "'TASA Explorer', serif",
                    fontSize: '0.875rem'
                  }}
                >
                  Visual Storyteller
                </span>
              </div>


              <h1
                className="font-bold tracking-tight gpu-boost"
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


              <p
                className="text-white/70 leading-relaxed"
                style={{
                  fontFamily: "'Raleway', serif",
                  letterSpacing: '0.3px',
                  fontSize: 'clamp(1rem, 1.4vw, 1.375rem)',
                  maxWidth: '36rem',
                  paddingTop: '0.75rem'
                }}
              >
                Transforming bold ideas into visual masterpieces. Where imagination meets precision design.
              </p>
            </div>


            {/* CTA Buttons with navigation */}
            <div
              className="flex flex-wrap"
              style={{
                gap: '1rem',
                paddingTop: '1rem'
              }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="relative text-black font-semibold rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer gpu-boost"
                style={{
                  padding: '0.875rem 1.75rem',
                  fontSize: '0.875rem',
                  backgroundColor: 'white'
                }}
              >
                <span className="relative z-10" style={{ fontFamily: "'TASA Explorer', serif", letterSpacing: '1.5px' }}>
                  VIEW PORTFOLIO
                </span>
              </button>


              <button
                onClick={() => scrollToSection('contact')}
                className="border border-white/30 text-white font-semibold rounded-sm backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 cursor-pointer gpu-boost"
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


          {/* Bento Grid Cards */}
          <div
            className="hidden lg:grid lg:col-span-5 grid-cols-2 gpu-boost"
            style={{
              gap: '1rem',
              gridAutoRows: 'minmax(8.25rem, auto)',
              alignContent: 'center'
            }}
          >
            <div
              className="col-span-1 row-span-1 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg flex flex-col justify-between hover:border-white/20 transition-all duration-300 group animate-on-scroll gpu-boost"
              style={{ padding: '1.25rem' }}
            >
              <div>
                <p
                  className="font-bold"
                  style={{
                    fontFamily: "'TASA Explorer', serif",
                    fontSize: '2.25rem'
                  }}
                >
                  150+
                </p>
                <p
                  className="text-white/60"
                  style={{
                    fontFamily: "'TASA Explorer', serif",
                    fontSize: '0.8125rem',
                    marginTop: '0.375rem'
                  }}
                >
                  Projects Completed
                </p>
              </div>
            </div>


            <div className="col-span-1 row-span-2 overflow-hidden hover:border-white/20 transition-all duration-300 group relative animate-on-scroll gpu-boost">
              <div className="absolute inset-0 from-black/80 via-black/20 to-transparent z-10 gpu-boost"></div>
              <img src={Logo} className='w-55 gpu-boost' alt="Logo" loading="eager" />
              <div className="w-full h-full flex items-center justify-center"></div>
            </div>


            <div
              className="col-span-1 row-span-1 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg flex flex-col justify-between hover:border-white/20 transition-all duration-300 animate-on-scroll gpu-boost"
              style={{ padding: '1.25rem' }}
            >
              <div>
                <p
                  className="font-bold"
                  style={{
                    fontFamily: "'TASA Explorer', serif",
                    fontSize: '2.25rem'
                  }}
                >
                  9+
                </p>
                <p
                  className="text-white/60"
                  style={{
                    fontFamily: "'TASA Explorer', serif",
                    fontSize: '0.8125rem',
                    marginTop: '0.375rem'
                  }}
                >
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce gpu-boost"
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


      <div
        className="absolute top-1/4 bg-white/5 rounded-full blur-[100px] pointer-events-none gpu-boost"
        style={{
          right: '2.5rem',
          width: '18rem',
          height: '18rem'
        }}
      ></div>
      <div
        className="absolute bottom-1/4 bg-white/[0.03] rounded-full blur-[120px] pointer-events-none gpu-boost"
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
