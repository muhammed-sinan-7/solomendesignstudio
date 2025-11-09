import React, { useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from "framer-motion";

function Experience() {
  // Create refs for each timeline item
  const headerRef = useRef(null);
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);
  const item4Ref = useRef(null);
  const item5Ref = useRef(null);
  const skillsRef = useRef(null);
  const ctaRef = useRef(null);

  // Trigger animations every time (once: false)
  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });
  const item1InView = useInView(item1Ref, { once: false, amount: 0.3 });
  const item2InView = useInView(item2Ref, { once: false, amount: 0.3 });
  const item3InView = useInView(item3Ref, { once: false, amount: 0.3 });
  const item4InView = useInView(item4Ref, { once: false, amount: 0.3 });
  const item5InView = useInView(item5Ref, { once: false, amount: 0.3 });
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.5 });

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div>
      {/* SEO Meta Tags & Structured Data */}
      <Helmet>
        <title>Professional Experience - 10+ Years Graphic Design Journey | Solomen Design Studio</title>
        <meta 
          name="description" 
          content="Explore 10+ years of professional graphic design experience across branding, UI/UX, and digital media. From Concetto Design to Exi Sharks Dubai - comprehensive portfolio journey." 
        />
        <meta 
          name="keywords" 
          content="graphic designer experience, professional journey, design career dubai, branding portfolio, UI UX designer career, work history design, graphic design expertise" 
        />
        <link rel="canonical" href="https://yourwebsite.com/experience" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="10+ Years Graphic Design Experience - Solomen Design Studio" />
        <meta property="og:description" content="Professional design journey spanning branding, UI/UX, and digital media across multiple organizations" />
        <meta property="og:url" content="https://yourwebsite.com/experience" />
        <meta property="og:type" content="profile" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Professional Experience - Solomen Design Studio" />
        <meta name="twitter:description" content="10+ years of graphic design excellence from India to Dubai" />
        
        {/* Person Schema with Work History */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sulaiman Kuttasseri",
            "jobTitle": "Graphic Designer",
            "url": "https://yourwebsite.com",
            "sameAs": [
              "https://www.behance.net/SULAIMANKUTTASSERI",
              "https://www.linkedin.com/in/sulaiman-kuttasseri/",
              "https://www.instagram.com/sulaiman_kuttasseri/"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Exi Sharks",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "UAE"
              }
            },
            "hasOccupation": [
              {
                "@type": "Occupation",
                "name": "Graphic Designer",
                "occupationLocation": {
                  "@type": "City",
                  "name": "Dubai"
                },
                "skills": "Branding, UI/UX Design, Logo Design, Social Media Design, Print Design, Packaging Design, Photography"
              }
            ],
            "alumniOf": [
              {
                "@type": "OrganizationRole",
                "roleName": "Graphic Designer",
                "startDate": "2025",
                "organization": {
                  "@type": "Organization",
                  "name": "Exi Sharks",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dubai",
                    "addressCountry": "AE"
                  }
                },
                "description": "Creating cutting-edge design solutions across branding, creative direction, and international projects"
              },
              {
                "@type": "OrganizationRole",
                "roleName": "Graphic Designer",
                "startDate": "2020",
                "endDate": "2025",
                "organization": {
                  "@type": "Organization",
                  "name": "ECH DIGITAL",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "AE"
                  }
                },
                "description": "Delivered comprehensive design solutions across branding, digital media, and photography for UAE-based clients"
              },
              {
                "@type": "OrganizationRole",
                "roleName": "Graphic Designer",
                "startDate": "2018",
                "endDate": "2020",
                "organization": {
                  "@type": "Organization",
                  "name": "Deline Technologies Pvt Ltd",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Kakkanchery",
                    "addressCountry": "IN"
                  }
                },
                "description": "Specialized in UI/UX design for web and mobile applications, packaging, and print collateral projects"
              },
              {
                "@type": "OrganizationRole",
                "roleName": "Graphic Designer",
                "startDate": "2016",
                "endDate": "2018",
                "organization": {
                  "@type": "Organization",
                  "name": "Shadow Advertising",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Manjeri",
                    "addressCountry": "IN"
                  }
                },
                "description": "Created advertising campaigns, social media designs, brochures, flyers, and catalogues for diverse industries"
              },
              {
                "@type": "OrganizationRole",
                "roleName": "Graphic Designer",
                "startDate": "2015",
                "endDate": "2016",
                "organization": {
                  "@type": "Organization",
                  "name": "Concetto Design Co"
                },
                "description": "Developed foundational skills in brand identity, logo design, business cards, and print design"
              }
            ],
            "knowsAbout": [
              "Branding",
              "Social Media Design",
              "UI/UX Design",
              "Logo Design",
              "Brochure Design",
              "Catalogue Design",
              "Business Card Design",
              "Packaging Design",
              "Print Collaterals",
              "Photography",
              "Digital Media",
              "Creative Direction",
              "Brand Strategy"
            ]
          })}
        </script>

        {/* ProfilePage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "dateCreated": "2025-11-09",
            "dateModified": "2025-11-09",
            "mainEntity": {
              "@type": "Person",
              "name": "Sulaiman Kuttasseri",
              "alternateName": "Solomen Design Studio",
              "description": "Professional graphic designer with 10+ years of experience in branding, UI/UX design, and digital media",
              "jobTitle": "Graphic Designer",
              "worksFor": {
                "@type": "Organization",
                "name": "Exi Sharks"
              }
            }
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://yourwebsite.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Experience",
                "item": "https://yourwebsite.com/experience"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* EXPERIENCE SECTION - Professional Career Timeline */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Gray Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-black to-neutral-900/50"></div>
        
        {/* Subtle Gray Accent - Top */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[150px] pointer-events-none"></div>
        
        {/* Subtle Gray Accent - Bottom */}
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neutral-700/20 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          
          {/* Header - Animated - Semantic HTML */}
          <motion.header 
            ref={headerRef}
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="max-w-3xl mb-20"
          >
            <div className="inline-block mb-6">
              <span
                className="text-neutral-400 text-sm tracking-[0.3em] uppercase font-light"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                — Professional Journey —
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
              style={{ fontFamily: "'TASA Explorer', serif" }}
            >
              A Decade of
              <br />
              <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-300 bg-clip-text text-transparent">
                Design Excellence
              </span>
            </h1>
            <p
              className="text-xl text-neutral-400 leading-relaxed"
              style={{
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: "0.3px",
              }}
            >
              From branding to digital interfaces, my journey spans diverse design disciplines across multiple organizations, creating impactful visual solutions.
            </p>
          </motion.header>

          {/* Timeline Grid with Cards */}
          <article className="relative">
            {/* Vertical Timeline Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neutral-800/50 via-neutral-700/50 to-neutral-800/50" aria-hidden="true"></div>

            <div className="space-y-16 lg:space-y-24">
              
              {/* Timeline Item 1 - Right Side */}
              <motion.section 
                ref={item1Ref}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <motion.div 
                  variants={slideInLeft}
                  initial="hidden"
                  animate={item1InView ? "visible" : "hidden"}
                  className="lg:text-right lg:pr-12"
                >
                  <div className="inline-block lg:float-right">
                    <time
                      dateTime="2015/2016"
                      className="text-neutral-500 text-sm tracking-[0.2em] uppercase font-light mb-2 block"
                      style={{ fontFamily: "'TASA Explorer', sans-serif" }}
                    >
                      2015 - 2016
                    </time>
                    <h2
                      className="text-3xl md:text-4xl font-bold mb-3 text-white"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      Graphic Designer
                    </h2>
                    <p
                      className="text-neutral-300 text-lg mb-4 font-medium"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Concetto Design Co
                    </p>
                    <p
                      className="text-neutral-400 leading-relaxed max-w-md text-base"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "0.3px",
                      }}
                    >
                      Launched my professional career focusing on <strong>brand identity</strong> and <strong>print design</strong>. Developed foundational skills in logo design, business cards, and marketing materials.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={slideInRight}
                  initial="hidden"
                  animate={item1InView ? "visible" : "hidden"}
                  className="lg:pl-12"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-neutral-800/30 to-neutral-700/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" aria-hidden="true"></div>
                    <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 hover:border-neutral-700/50 transition-all duration-300">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Branding</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Logo Design</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Business Cards</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Print Design</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.section>

              {/* Timeline Item 2 - Left Side */}
              <motion.section 
                ref={item2Ref}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <motion.div 
                  variants={slideInLeft}
                  initial="hidden"
                  animate={item2InView ? "visible" : "hidden"}
                  className="lg:order-1 lg:pr-12 lg:flex lg:justify-end"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-neutral-700/30 to-neutral-800/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" aria-hidden="true"></div>
                    <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 hover:border-neutral-700/50 transition-all duration-300">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Social Media</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Brochures</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Flyers</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Catalogues</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Advertising</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  variants={slideInRight}
                  initial="hidden"
                  animate={item2InView ? "visible" : "hidden"}
                  className="lg:order-2 lg:pl-12"
                >
                  <time
                    dateTime="2016/2018"
                    className="text-neutral-500 text-sm tracking-[0.2em] uppercase font-light mb-2 block"
                    style={{ fontFamily: "'TASA Explorer', sans-serif" }}
                  >
                    2016 - 2018
                  </time>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-white"
                    style={{ fontFamily: "'TASA Explorer', serif" }}
                  >
                    Graphic Designer
                  </h2>
                  <p
                    className="text-neutral-300 text-lg mb-4 font-medium"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Shadow Advertising, Manjeri
                  </p>
                  <p
                    className="text-neutral-400 leading-relaxed max-w-md text-base"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      letterSpacing: "0.3px",
                    }}
                  >
                    Expanded expertise into <strong>advertising</strong> and <strong>social media design</strong>. Created compelling brochures, flyers, and catalogue designs for diverse clients across various industries.
                  </p>
                </motion.div>
              </motion.section>

              {/* Timeline Item 3 - Right Side */}
              <motion.section 
                ref={item3Ref}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <motion.div 
                  variants={slideInLeft}
                  initial="hidden"
                  animate={item3InView ? "visible" : "hidden"}
                  className="lg:text-right lg:pr-12"
                >
                  <div className="inline-block lg:float-right">
                    <time
                      dateTime="2018/2020"
                      className="text-neutral-500 text-sm tracking-[0.2em] uppercase font-light mb-2 block"
                      style={{ fontFamily: "'TASA Explorer', sans-serif" }}
                    >
                      2018 - 2020
                    </time>
                    <h2
                      className="text-3xl md:text-4xl font-bold mb-3 text-white"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      Graphic Designer
                    </h2>
                    <p
                      className="text-neutral-300 text-lg mb-4 font-medium"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Deline Technologies Pvt Ltd, Kakkanchery
                    </p>
                    <p
                      className="text-neutral-400 leading-relaxed max-w-md text-base"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "0.3px",
                      }}
                    >
                      Transitioned into <strong>digital product design</strong>. Specialized in <strong>UI/UX design</strong> for web and mobile applications while continuing to deliver packaging and print collateral projects.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={slideInRight}
                  initial="hidden"
                  animate={item3InView ? "visible" : "hidden"}
                  className="lg:pl-12"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-neutral-800/30 to-neutral-700/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" aria-hidden="true"></div>
                    <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 hover:border-neutral-700/50 transition-all duration-300">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>UI/UX Design</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Packaging</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Print Collaterals</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Web Design</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.section>

              {/* Timeline Item 4 - Left Side */}
              <motion.section 
                ref={item4Ref}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <motion.div 
                  variants={slideInLeft}
                  initial="hidden"
                  animate={item4InView ? "visible" : "hidden"}
                  className="lg:order-1 lg:pr-12 lg:flex lg:justify-end"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-neutral-700/30 to-neutral-800/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" aria-hidden="true"></div>
                    <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 hover:border-neutral-700/50 transition-all duration-300">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Branding</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Digital Media</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Photography</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Social Media</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  variants={slideInRight}
                  initial="hidden"
                  animate={item4InView ? "visible" : "hidden"}
                  className="lg:order-2 lg:pl-12"
                >
                  <time
                    dateTime="2020/2025"
                    className="text-neutral-500 text-sm tracking-[0.2em] uppercase font-light mb-2 block"
                    style={{ fontFamily: "'TASA Explorer', sans-serif" }}
                  >
                    2020 - 2025
                  </time>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-white"
                    style={{ fontFamily: "'TASA Explorer', serif" }}
                  >
                    Graphic Designer
                  </h2>
                  <p
                    className="text-neutral-300 text-lg mb-4 font-medium"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    ECH DIGITAL, UAE
                  </p>
                  <p
                    className="text-neutral-400 leading-relaxed max-w-md text-base"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      letterSpacing: "0.3px",
                    }}
                  >
                    Expanded internationally, working with <strong>UAE-based clients</strong>. Delivered comprehensive design solutions across branding, digital media, and photography for diverse markets.
                  </p>
                </motion.div>
              </motion.section>

              {/* Timeline Item 5 - Right Side (Current) */}
              <motion.section 
                ref={item5Ref}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <motion.div 
                  variants={slideInLeft}
                  initial="hidden"
                  animate={item5InView ? "visible" : "hidden"}
                  className="lg:text-right lg:pr-12"
                >
                  <div className="inline-block lg:float-right">
                    <time
                      dateTime="2025"
                      className="text-neutral-500 text-sm tracking-[0.2em] uppercase font-light mb-2 block"
                      style={{ fontFamily: "'TASA Explorer', sans-serif" }}
                    >
                      2025 - Present
                    </time>
                    <h2
                      className="text-3xl md:text-4xl font-bold mb-3 text-white"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      Graphic Designer
                    </h2>
                    <p
                      className="text-neutral-300 text-lg mb-4 font-medium"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Exi Sharks, Dubai
                    </p>
                    <p
                      className="text-neutral-400 leading-relaxed max-w-md text-base"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "0.3px",
                      }}
                    >
                      Currently creating cutting-edge design solutions in <strong>Dubai</strong>. Bringing together years of expertise across all design disciplines to deliver exceptional results for international clients.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={slideInRight}
                  initial="hidden"
                  animate={item5InView ? "visible" : "hidden"}
                  className="lg:pl-12"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-neutral-800/30 to-neutral-700/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" aria-hidden="true"></div>
                    <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 hover:border-neutral-700/50 transition-all duration-300">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Full Spectrum</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Creative Direction</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Brand Strategy</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>International Projects</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.section>

            </div>
          </article>

          {/* Skills Overview Section - Animated */}
          <motion.aside 
            ref={skillsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="mt-24 pt-12 border-t border-neutral-800/50"
          >
            <motion.h2 
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold mb-8 text-white text-center"
              style={{ fontFamily: "'TASA Explorer', serif" }}
            >
              Design Expertise
            </motion.h2>
            <motion.div 
              variants={fadeUp}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-lg p-4 text-center hover:border-neutral-700/50 transition-all duration-300">
                <p className="text-neutral-300 text-sm font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Branding</p>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-lg p-4 text-center hover:border-neutral-700/50 transition-all duration-300">
                <p className="text-neutral-300 text-sm font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Social Media Design</p>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-lg p-4 text-center hover:border-neutral-700/50 transition-all duration-300">
                <p className="text-neutral-300 text-sm font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>UI/UX Design</p>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-lg p-4 text-center hover:border-neutral-700/50 transition-all duration-300">
                <p className="text-neutral-300 text-sm font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Logo Design</p>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-lg p-4 text-center hover:border-neutral-700/50 transition-all duration-300">
                <p className="text-neutral-300 text-sm font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Brochures & Flyers</p>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-lg p-4 text-center hover:border-neutral-700/50 transition-all duration-300">
                <p className="text-neutral-300 text-sm font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Catalogue Design</p>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-lg p-4 text-center hover:border-neutral-700/50 transition-all duration-300">
                <p className="text-neutral-300 text-sm font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Business Cards</p>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-lg p-4 text-center hover:border-neutral-700/50 transition-all duration-300">
                <p className="text-neutral-300 text-sm font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Packaging Design</p>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-lg p-4 text-center hover:border-neutral-700/50 transition-all duration-300">
                <p className="text-neutral-300 text-sm font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Print Collaterals</p>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-lg p-4 text-center hover:border-neutral-700/50 transition-all duration-300">
                <p className="text-neutral-300 text-sm font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Photography</p>
              </div>
            </motion.div>
          </motion.aside>

          {/* Bottom CTA - Animated */}
          <motion.footer 
            ref={ctaRef}
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="text-center mt-16"
          >
            <p
              className="text-xl text-neutral-400 mb-6"
              style={{
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: "0.3px",
              }}
            >
              Let's create something extraordinary together
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-neutral-800 to-neutral-700 border-2 border-neutral-700 rounded-full text-white hover:border-neutral-600 hover:scale-105 transition-all duration-300 group"
              aria-label="Contact Solomen Design Studio"
            >
              <span
                className="text-lg font-semibold tracking-wide"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  letterSpacing: "1.5px",
                }}
              >
                GET IN TOUCH
              </span>
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.footer>

        </div>
      </section>
    </div>
  );
}

export default Experience;
