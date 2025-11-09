import React, { useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from "framer-motion";

function Service() {
  // Create refs for each service item
  const headerRef = useRef(null);
  const service1Ref = useRef(null);
  const service2Ref = useRef(null);
  const service3Ref = useRef(null);
  const service4Ref = useRef(null);
  const ctaRef = useRef(null);

  // Set once: false to trigger animation every time element enters viewport
  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });
  const service1InView = useInView(service1Ref, { once: false, amount: 0.3 });
  const service2InView = useInView(service2Ref, { once: false, amount: 0.3 });
  const service3InView = useInView(service3Ref, { once: false, amount: 0.3 });
  const service4InView = useInView(service4Ref, { once: false, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.3 });

  // Simple fade up animation - only upward motion
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  // Services data for schema
  const services = [
    {
      name: "Brand Identity & Visual Design",
      description: "Comprehensive brand identity systems including logo design, typography, color palettes, and brand guidelines that establish a strong, cohesive visual presence across all touchpoints.",
      serviceType: "Brand Identity Design",
      offers: [
        "Logo Design & Wordmarks",
        "Brand Guidelines & Systems",
        "Visual Identity Systems",
        "Stationery & Collateral"
      ]
    },
    {
      name: "UI/UX Design & Product",
      description: "User-centered interface design for mobile and web applications. Creating intuitive, accessible experiences that prioritize usability while maintaining visual excellence and brand consistency.",
      serviceType: "UI/UX Design",
      offers: [
        "Mobile App Design (iOS/Android)",
        "Website Interface Design"
      ]
    },
    {
      name: "Graphic & Visual Design",
      description: "Strategic visual content for marketing, social media, and print. Creating compelling graphics that communicate your message effectively and maintain brand consistency across all channels.",
      serviceType: "Graphic Design",
      offers: [
        "Marketing & Advertising Materials",
        "Social Media Graphics",
        "Presentation Design",
        "Print & Packaging Design"
      ]
    },
    {
      name: "Creative Strategy & Consulting",
      description: "Strategic design thinking and consulting services to help businesses make informed decisions about their visual communication, brand positioning, and digital presence.",
      serviceType: "Design Consulting",
      offers: [
        "Design Consulting & Audits",
        "Brand Strategy & Positioning",
        "Creative Direction",
        "AI-Powered Design Workflows"
      ]
    }
  ];

  return (
    <>
      {/* SEO Meta Tags & Service Schema */}
      <Helmet>
        <title>Design Services - Branding, UI/UX & Graphic Design | Solomen Design Studio Dubai</title>
        <meta 
          name="description" 
          content="Professional design services in Dubai: Brand Identity, UI/UX Design, Graphic Design, and Creative Consulting. Transform your business with expert design solutions." 
        />
        <meta 
          name="keywords" 
          content="design services dubai, branding services dubai, UI UX design services, graphic design dubai, logo design services, brand identity dubai, creative consulting" 
        />
        <link rel="canonical" href="https://yourwebsite.com/services" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Professional Design Services - Solomen Design Studio Dubai" />
        <meta property="og:description" content="Brand Identity, UI/UX Design, Graphic Design & Creative Consulting services in Dubai" />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta property="og:type" content="website" />
        
        {/* Service Schema - Multiple Services offered */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "serviceType": service.serviceType,
                "name": service.name,
                "description": service.description,
                "provider": {
                  "@type": "Organization",
                  "name": "Solomen Design Studio",
                  "url": "https://yourwebsite.com",
                  "logo": "https://yourwebsite.com/logo.png",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dubai",
                    "addressCountry": "AE"
                  },
                  "telephone": "+971567576495",
                  "email": "solomendesigns@gmail.com"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Dubai"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": service.name,
                  "itemListElement": service.offers.map((offer, offerIndex) => ({
                    "@type": "OfferCatalog",
                    "name": offer,
                    "position": offerIndex + 1
                  }))
                }
              }
            }))
          })}
        </script>

        {/* ProfessionalService Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Solomen Design Studio",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "description": "Professional graphic design studio offering branding, UI/UX design, graphic design and creative consulting services in Dubai",
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
            "telephone": "+971567576495",
            "email": "solomendesigns@gmail.com",
            "priceRange": "$$",
            "openingHours": "Mo-Fr 09:00-18:00",
            "makesOffer": services.map(service => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.name,
                "description": service.description
              }
            }))
          })}
        </script>
      </Helmet>

      <div>
        {/* SERVICES SECTION - Dark Minimalist Layout */}
        <section 
          className="relative bg-black text-white md:py-20 overflow-hidden" 
          id="services"
          itemScope 
          itemType="https://schema.org/Service"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:24px_24px]" aria-hidden="true"></div>

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" aria-hidden="true"></div>

          <div className="relative z-10 container mx-auto px-6 max-w-7xl">
            {/* Header - Animated */}
            <motion.header
              ref={headerRef}
              variants={fadeUp}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              className="max-w-4xl mb-24"
            >
              <div className="inline-block mb-6">
                <span
                  className="text-white/40 text-sm tracking-[0.3em] uppercase font-light"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  Services
                </span>
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
                style={{ fontFamily: "'TASA Explorer', serif" }}
              >
                What I Do
              </h1>
              <p
                className="text-xl text-white/50 leading-relaxed max-w-2xl"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  letterSpacing: "0.3px",
                }}
              >
                Specialized design services focused on creating impactful digital
                experiences that drive results and elevate brands.
              </p>
            </motion.header>

            {/* Services List - Stacked Layout */}
            <div className="space-y-6">
              {/* Service Item 1 - Animated */}
              <motion.article
                ref={service1Ref}
                variants={fadeUp}
                initial="hidden"
                animate={service1InView ? "visible" : "hidden"}
                className="group"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="relative border-t border-white/10 pt-8 pb-8 hover:border-white/30 transition-all duration-500">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span
                        className="text-white/20 text-xl font-bold group-hover:text-white/40 transition-colors duration-300"
                        style={{ fontFamily: "'TASA Explorer', serif" }}
                        aria-hidden="true"
                      >
                        01
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="lg:col-span-6">
                      <h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300"
                        style={{ fontFamily: "'TASA Explorer', serif" }}
                        itemProp="name"
                      >
                        Brand Identity & Visual Design
                      </h2>
                      <p
                        className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          letterSpacing: "0.3px",
                        }}
                        itemProp="description"
                      >
                        Comprehensive <strong>brand identity</strong> systems including <strong>logo design</strong>, typography, color palettes, and brand guidelines that establish a strong, cohesive visual presence across all touchpoints.
                      </p>
                      <meta itemProp="serviceType" content="Brand Identity Design" />
                      <meta itemProp="provider" content="Solomen Design Studio" />
                    </div>

                    {/* Capabilities - Right Aligned */}
                    <div className="lg:col-span-5">
                      <ul className="space-y-3 text-right" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
                        <li className="py-2 border-b border-white/5">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Logo Design & Wordmarks
                          </span>
                        </li>
                        <li className="py-2 border-b border-white/5">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Brand Guidelines & Systems
                          </span>
                        </li>
                        <li className="py-2 border-b border-white/5">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Visual Identity Systems
                          </span>
                        </li>
                        <li className="py-2">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Stationery & Collateral
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Service Item 2 - Animated */}
              <motion.article
                ref={service2Ref}
                variants={fadeUp}
                initial="hidden"
                animate={service2InView ? "visible" : "hidden"}
                className="group"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="relative border-t border-white/10 pt-8 pb-8 hover:border-white/30 transition-all duration-500">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span
                        className="text-white/20 text-xl font-bold group-hover:text-white/40 transition-colors duration-300"
                        style={{ fontFamily: "'TASA Explorer', serif" }}
                        aria-hidden="true"
                      >
                        02
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="lg:col-span-6">
                      <h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300"
                        style={{ fontFamily: "'TASA Explorer', serif" }}
                        itemProp="name"
                      >
                        UI/UX Design & Product
                      </h2>
                      <p
                        className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          letterSpacing: "0.3px",
                        }}
                        itemProp="description"
                      >
                        User-centered <strong>interface design</strong> for mobile and web applications. Creating intuitive, accessible experiences that prioritize usability while maintaining visual excellence and brand consistency.
                      </p>
                      <meta itemProp="serviceType" content="UI/UX Design" />
                      <meta itemProp="provider" content="Solomen Design Studio" />
                    </div>

                    {/* Capabilities - Right Aligned */}
                    <div className="lg:col-span-5">
                      <ul className="space-y-3 text-right" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
                        <li className="py-2 border-b border-white/5">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Mobile App Design (iOS/Android)
                          </span>
                        </li>
                        <li className="py-2">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Website Interface Design
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Service Item 3 - Animated */}
              <motion.article
                ref={service3Ref}
                variants={fadeUp}
                initial="hidden"
                animate={service3InView ? "visible" : "hidden"}
                className="group"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="relative border-t border-white/10 pt-8 pb-8 hover:border-white/30 transition-all duration-500">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span
                        className="text-white/20 text-xl font-bold group-hover:text-white/40 transition-colors duration-300"
                        style={{ fontFamily: "'TASA Explorer', serif" }}
                        aria-hidden="true"
                      >
                        03
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="lg:col-span-6">
                      <h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300"
                        style={{ fontFamily: "'TASA Explorer', serif" }}
                        itemProp="name"
                      >
                        Graphic & Visual Design
                      </h2>
                      <p
                        className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          letterSpacing: "0.3px",
                        }}
                        itemProp="description"
                      >
                        Strategic visual content for <strong>marketing</strong>, <strong>social media</strong>, and <strong>print</strong>. Creating compelling graphics that communicate your message effectively and maintain brand consistency across all channels.
                      </p>
                      <meta itemProp="serviceType" content="Graphic Design" />
                      <meta itemProp="provider" content="Solomen Design Studio" />
                    </div>

                    {/* Capabilities - Right Aligned */}
                    <div className="lg:col-span-5">
                      <ul className="space-y-3 text-right" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
                        <li className="py-2 border-b border-white/5">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Marketing & Advertising Materials
                          </span>
                        </li>
                        <li className="py-2 border-b border-white/5">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Social Media Graphics
                          </span>
                        </li>
                        <li className="py-2 border-b border-white/5">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Presentation Design
                          </span>
                        </li>
                        <li className="py-2">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Print & Packaging Design
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Service Item 4 - Animated */}
              <motion.article
                ref={service4Ref}
                variants={fadeUp}
                initial="hidden"
                animate={service4InView ? "visible" : "hidden"}
                className="group"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="relative border-t border-white/10 border-b pt-8 pb-8 hover:border-white/30 transition-all duration-500">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span
                        className="text-white/20 text-xl font-bold group-hover:text-white/40 transition-colors duration-300"
                        style={{ fontFamily: "'TASA Explorer', serif" }}
                        aria-hidden="true"
                      >
                        04
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="lg:col-span-6">
                      <h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300"
                        style={{ fontFamily: "'TASA Explorer', serif" }}
                        itemProp="name"
                      >
                        Creative Strategy & Consulting
                      </h2>
                      <p
                        className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          letterSpacing: "0.3px",
                        }}
                        itemProp="description"
                      >
                        Strategic <strong>design thinking</strong> and <strong>consulting services</strong> to help businesses make informed decisions about their visual communication, brand positioning, and digital presence.
                      </p>
                      <meta itemProp="serviceType" content="Design Consulting" />
                      <meta itemProp="provider" content="Solomen Design Studio" />
                    </div>

                    {/* Capabilities - Right Aligned */}
                    <div className="lg:col-span-5">
                      <ul className="space-y-3 text-right" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
                        <li className="py-2 border-b border-white/5">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Design Consulting & Audits
                          </span>
                        </li>
                        <li className="py-2 border-b border-white/5">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Brand Strategy & Positioning
                          </span>
                        </li>
                        <li className="py-2 border-b border-white/5">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            Creative Direction
                          </span>
                        </li>
                        <li className="py-2">
                          <span
                            className="text-white/60 text-sm"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            AI-Powered Design Workflows
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* Bottom CTA - Animated */}
            <motion.footer
              ref={ctaRef}
              variants={fadeUp}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              className="mt-10 pb-15 pt-12 border-white/5"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <p
                    className="text-2xl md:text-3xl text-white/90 mb-3"
                    style={{ fontFamily: "'TASA Explorer', serif" }}
                  >
                    Have a project in mind?
                  </p>
                  <p
                    className="text-white/40"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      letterSpacing: "0.3px",
                    }}
                  >
                    Let's discuss how we can work together to bring your vision to
                    life.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 group"
                  aria-label="Contact Solomen Design Studio to discuss your project"
                >
                  <span
                    className="text-base font-semibold tracking-wider"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    GET IN TOUCH
                  </span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
              </div>
            </motion.footer>
          </div>
        </section>
      </div>
    </>
  );
}

export default Service;
