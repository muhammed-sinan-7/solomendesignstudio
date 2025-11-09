import React from "react";
import { Helmet } from 'react-helmet-async';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Organization Schema in Footer */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Solomen Design Studio",
            "alternateName": "Sulaiman Kuttasseri Design",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "description": "Professional graphic design studio specializing in branding, UI/UX design, and digital media in Dubai",
            "email": "solomendesigns@gmail.com",
            "telephone": "+971567576495",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            },
            "sameAs": [
              "https://www.behance.net/SULAIMANKUTTASSERI",
              "https://www.linkedin.com/in/sulaiman-kuttasseri/",
              "https://www.instagram.com/sulaiman_kuttasseri/",
              "https://www.facebook.com/solomendesignstudio"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971567576495",
              "contactType": "customer service",
              "email": "solomendesigns@gmail.com",
              "availableLanguage": ["English", "Arabic"],
              "areaServed": "AE"
            },
            "founder": {
              "@type": "Person",
              "name": "Sulaiman Kuttasseri",
              "jobTitle": "Graphic Designer",
              "url": "https://yourwebsite.com"
            }
          })}
        </script>

        {/* WebSite Schema with Sitelinks Search */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Solomen Design Studio",
            "alternateName": "Sulaiman Kuttasseri Portfolio",
            "url": "https://yourwebsite.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://yourwebsite.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <footer 
        className="relative bg-black text-white overflow-hidden"
        itemScope 
        itemType="https://schema.org/WPFooter"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:24px_24px]" aria-hidden="true"></div>
        
        {/* Gray Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" aria-hidden="true"></div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-6 max-w-7xl py-16 md:py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              
              {/* Brand Column */}
              <div className="lg:col-span-2" itemScope itemType="https://schema.org/Organization">
                <h3
                  className="text-3xl md:text-4xl font-bold mb-4 text-white"
                  style={{ fontFamily: "'TASA Explorer', serif" }}
                  itemProp="name"
                >
                  Solomen Design Studio
                </h3>
                <p
                  className="text-neutral-400 leading-relaxed mb-6 max-w-md"
                  style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: "0.3px" }}
                  itemProp="description"
                >
                  A passionate <strong>graphic designer</strong> crafting meaningful visual experiences across <strong>branding</strong>, <strong>digital design</strong>, and <strong>print media</strong> in Dubai.
                </p>
                
                {/* Social Links */}
                <nav aria-label="Social media links">
                  <p className="sr-only">Follow us on social media</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.behance.net/SULAIMANKUTTASSERI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Visit Solomen Design Studio on Behance"
                      itemProp="sameAs"
                    >
                      <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 20.3h6.03c.5-.674.76-1.483.76-2.412 0-1.46-.673-2.483-2.02-3.07-.675-.29-1.427-.438-2.252-.438H16.94v5.92zm0-8.69h2.53c.674 0 1.24-.12 1.7-.36.46-.24.69-.757.69-1.553 0-.805-.21-1.35-.63-1.64-.42-.29-.98-.436-1.68-.436h-2.61v3.99zm-9.26 5.61c.75 0 1.36-.18 1.83-.54.47-.36.7-.896.7-1.61 0-.73-.24-1.25-.72-1.57-.48-.32-1.05-.48-1.71-.48H3.24v4.2h4.44v-.01zm.39-5.88c.68 0 1.22-.13 1.63-.39.41-.26.62-.74.62-1.44 0-.71-.23-1.17-.69-1.4-.46-.23-1-.346-1.62-.346H3.24v3.576h4.83zm8.1-6.642h4.97v1.02h-4.97v-1.02z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sulaiman-kuttasseri/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Visit Solomen Design Studio on LinkedIn"
                      itemProp="sameAs"
                    >
                      <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/sulaiman_kuttasseri/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Visit Solomen Design Studio on Instagram"
                      itemProp="sameAs"
                    >
                      <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    
                    <a
                      href="https://www.facebook.com/solomendesignstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Visit Solomen Design Studio on Facebook"
                      itemProp="sameAs"
                    >
                      <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </nav>
              </div>

              {/* Quick Links */}
              <nav aria-label="Footer navigation">
                <h4
                  className="text-white font-bold text-lg mb-4"
                  style={{ fontFamily: "'TASA Explorer', serif" }}
                >
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#about"
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Contact Info */}
              <address className="not-italic" itemScope itemType="https://schema.org/ContactPoint">
                <h4
                  className="text-white font-bold text-lg mb-4"
                  style={{ fontFamily: "'TASA Explorer', serif" }}
                >
                  Get In Touch
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:solomendesigns@gmail.com"
                      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-start gap-2"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                      itemProp="email"
                      aria-label="Email Solomen Design Studio"
                    >
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>solomendesigns@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+971567576495"
                      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-start gap-2"
                      style={{ fontFamily: "'TASA Explorer', sans-serif" }}
                      itemProp="telephone"
                      aria-label="Call Solomen Design Studio"
                    >
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+971 567576495</span>
                    </a>
                  </li>
                  <li className="text-neutral-400 text-sm flex items-start gap-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span itemProp="areaServed">Dubai, UAE</span>
                  </li>
                </ul>
              </address>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-800/50">
            <div className="container mx-auto px-6 max-w-7xl py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p
                  className="text-neutral-500 text-sm text-center md:text-left"
                  style={{ fontFamily: "'TASA Explorer', sans-serif" }}
                >
                  © {currentYear} <span itemProp="copyrightHolder">Solomen Design Studio</span>. All rights reserved. Designed & Developed with passion.
                </p>
                <nav aria-label="Legal links">
                  <div className="flex gap-6">
                    <a
                      href="/privacy"
                      className="text-neutral-500 hover:text-white transition-colors text-sm"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="/terms"
                      className="text-neutral-500 hover:text-white transition-colors text-sm"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Terms of Service
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
