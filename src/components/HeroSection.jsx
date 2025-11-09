import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
    <>
      {/* Homepage SEO Meta Tags & Schema */}
      <Helmet>
        <title>Solomen Design Studio - Professional Graphic Designer in Dubai | Branding & UI/UX</title>
        <meta 
          name="description" 
          content="Award-winning graphic designer in Dubai with 9+ years experience. Specializing in branding, UI/UX design, logo design, and digital media. 150+ projects completed." 
        />
        <meta 
          name="keywords" 
          content="graphic designer dubai, branding designer dubai, UI UX designer, logo designer dubai, solomen design studio, visual designer dubai, creative designer" 
        />
        <link rel="canonical" href="https://yourwebsite.com" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Solomen Design Studio - Professional Graphic Designer Dubai" />
        <meta property="og:description" content="Crafting creative experiences through branding, UI/UX design, and visual storytelling. 9+ years | 150+ projects" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solomen Design Studio - Graphic Designer Dubai" />
        <meta name="twitter:description" content="Professional branding and UI/UX design services in Dubai" />
        <meta name="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
        
        {/* WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Solomen Design Studio - Home",
            "description": "Professional graphic designer specializing in branding, UI/UX design, and visual storytelling in Dubai",
            "url": "https://yourwebsite.com",
            "mainEntity": {
              "@type": "Person",
              "name": "Sulaiman Kuttasseri",
              "alternateName": "Solomen Design Studio",
              "url": "https://yourwebsite.com",
              "image": "https://yourwebsite.com/profile.jpg",
              "jobTitle": "Graphic Designer",
              "description": "Visual storyteller and graphic designer with 9+ years of experience crafting creative experiences",
              "worksFor": {
                "@type": "Organization",
                "name": "Exi Sharks",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Dubai",
                  "addressCountry": "AE"
                }
              },
              "knowsAbout": [
                "Graphic Design",
                "Branding",
                "UI/UX Design",
                "Logo Design",
                "Visual Design",
                "Digital Media",
                "Print Design"
              ],
              "sameAs": [
                "https://www.behance.net/SULAIMANKUTTASSERI",
                "https://www.linkedin.com/in/sulaiman-kuttasseri/",
                "https://www.instagram.com/sulaiman_kuttasseri/",
                "https://www.facebook.com/solomendesignstudio"
              ]
            }
          })}
        </script>

        {/* ProfessionalService Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Solomen Design Studio",
            "image": "https://yourwebsite.com/logo.png",
            "description": "Professional graphic design services including branding, UI/UX design, logo design, and digital media in Dubai",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.2048",
              "longitude": "55.2708"
            },
            "url": "https://yourwebsite.com",
            "telephone": "+971567576495",
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          })}
        </script>
      </Helmet>

      <section 
        className="relative bg-black text-white overflow-hidden gpu-boost" 
        style={{
          minHeight: '100vh',
          paddingTop: '8rem',
          display: 'flex',
          flexDirection: 'column'
        }} 
        id="home"
        itemScope
        itemType="https://schema.org/WebPageElement"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-950 gpu-boost" aria-hidden="true"></div>
        <div className="absolute inset-0 opacity-[0.015] gpu-boost" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }} aria-hidden="true"></div>

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
            <header className="col-span-12 lg:col-span-7 flex flex-col justify-center gpu-boost" style={{ gap: '1.5rem', alignItems: 'flex-start' }}>
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
                  Transforming bold ideas into <strong>visual masterpieces</strong>. Where imagination meets precision <strong>design</strong>.
                </p>
              </div>

              {/* CTA Buttons with navigation */}
              <nav 
                className="flex flex-wrap"
                style={{
                  gap: '1rem',
                  paddingTop: '1rem'
                }}
                aria-label="Primary actions"
              >
                <button
                  onClick={() => scrollToSection('projects')}
                  className="relative text-black font-semibold rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer gpu-boost"
                  style={{
                    padding: '0.875rem 1.75rem',
                    fontSize: '0.875rem',
                    backgroundColor: 'white'
                  }}
                  aria-label="View portfolio of design projects"
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
                  aria-label="Contact Solomen Design Studio"
                >
                  <span style={{ fontFamily: "'TASA Explorer', serif", letterSpacing: '1.5px' }}>
                    GET IN TOUCH
                  </span>
                </button>
              </nav>
            </header>

            {/* Bento Grid Cards */}
            <aside
              className="hidden lg:grid lg:col-span-5 grid-cols-2 gpu-boost"
              style={{
                gap: '1rem',
                gridAutoRows: 'minmax(8.25rem, auto)',
                alignContent: 'center'
              }}
              aria-label="Portfolio statistics"
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
                    aria-label="150 plus projects completed"
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

              <figure className="col-span-1 row-span-2 overflow-hidden hover:border-white/20 transition-all duration-300 group relative animate-on-scroll gpu-boost">
                <div className="absolute inset-0 from-black/80 via-black/20 to-transparent z-10 gpu-boost" aria-hidden="true"></div>
                <img 
                  src={Logo} 
                  className='w-55 gpu-boost' 
                  alt="Solomen Design Studio logo - Professional graphic design services in Dubai" 
                  loading="eager"
                  width="220"
                  height="220"
                />
                <div className="w-full h-full flex items-center justify-center"></div>
              </figure>

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
                    aria-label="9 plus years experience"
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
            </aside>
          </div>
        </div>

        <div
          className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce gpu-boost"
          style={{
            bottom: '2rem',
            gap: '0.5rem'
          }}
          aria-label="Scroll down indicator"
          role="presentation"
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
            aria-hidden="true"
          ></div>
        </div>

        <div
          className="absolute top-1/4 bg-white/5 rounded-full blur-[100px] pointer-events-none gpu-boost"
          style={{
            right: '2.5rem',
            width: '18rem',
            height: '18rem'
          }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-1/4 bg-white/[0.03] rounded-full blur-[120px] pointer-events-none gpu-boost"
          style={{
            left: '2.5rem',
            width: '24rem',
            height: '24rem'
          }}
          aria-hidden="true"
        ></div>
      </section>
    </>
  );
};

export default HeroSection;
