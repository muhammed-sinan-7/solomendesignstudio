import React from "react";

function Experience() {
  return (
    <div>
      {/* EXPERIENCE SECTION - Professional Career Timeline */}
      <section className="relative bg-black text-white py-32 md:py-40 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Gray Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-black to-neutral-900/50"></div>
        
        {/* Subtle Gray Accent - Top */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[150px] pointer-events-none"></div>
        
        {/* Subtle Gray Accent - Bottom */}
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neutral-700/20 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <div className="inline-block mb-6">
              <span
                className="text-neutral-400 text-sm tracking-[0.3em] uppercase font-light"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                — Professional Journey —
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
              style={{ fontFamily: "'TASA Explorer', serif" }}
            >
              A Decade of
              <br />
              <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-300 bg-clip-text text-transparent">
                Design Excellence
              </span>
            </h2>
            <p
              className="text-xl text-neutral-400 leading-relaxed"
              style={{
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: "0.3px",
              }}
            >
              From branding to digital interfaces, my journey spans diverse design disciplines across multiple organizations, creating impactful visual solutions.
            </p>
          </div>

          {/* Timeline Grid with Cards */}
          <div className="relative">
            {/* Vertical Timeline Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neutral-800/50 via-neutral-700/50 to-neutral-800/50"></div>

            <div className="space-y-16 lg:space-y-24">
              
              {/* Timeline Item 1 - Right Side */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right lg:pr-12">
                  <div className="inline-block lg:float-right">
                    <span
                      className="text-neutral-500 text-sm tracking-[0.2em] uppercase font-light mb-2 block"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      2015 - 2016
                    </span>
                    <h3
                      className="text-3xl md:text-4xl font-bold mb-3 text-white"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      Graphic Designer
                    </h3>
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
                      Launched my professional career focusing on brand identity and print design. Developed foundational skills in logo design, business cards, and marketing materials.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-12">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-neutral-800/30 to-neutral-700/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 hover:border-neutral-700/50 transition-all duration-300">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Branding</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Logo Design</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Business Cards</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Print Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 - Left Side */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2 lg:pl-12">
                  <span
                    className="text-neutral-500 text-sm tracking-[0.2em] uppercase font-light mb-2 block"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    2016 - 2018
                  </span>
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-3 text-white"
                    style={{ fontFamily: "'TASA Explorer', serif" }}
                  >
                    Graphic Designer
                  </h3>
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
                    Expanded expertise into advertising and social media design. Created compelling brochures, flyers, and catalogue designs for diverse clients across various industries.
                  </p>
                </div>
                <div className="lg:order-1 lg:pr-12 lg:flex lg:justify-end">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-neutral-700/30 to-neutral-800/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
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
                </div>
              </div>

              {/* Timeline Item 3 - Right Side */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right lg:pr-12">
                  <div className="inline-block lg:float-right">
                    <span
                      className="text-neutral-500 text-sm tracking-[0.2em] uppercase font-light mb-2 block"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      2018 - 2020
                    </span>
                    <h3
                      className="text-3xl md:text-4xl font-bold mb-3 text-white"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      Graphic Designer
                    </h3>
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
                      Transitioned into digital product design. Specialized in UI/UX design for web and mobile applications while continuing to deliver packaging and print collateral projects.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-12">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-neutral-800/30 to-neutral-700/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 hover:border-neutral-700/50 transition-all duration-300">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>UI/UX Design</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Packaging</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Print Collaterals</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Web Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 - Left Side */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2 lg:pl-12">
                  <span
                    className="text-neutral-500 text-sm tracking-[0.2em] uppercase font-light mb-2 block"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    2020 - 2025
                  </span>
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-3 text-white"
                    style={{ fontFamily: "'TASA Explorer', serif" }}
                  >
                    Graphic Designer
                  </h3>
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
                    Expanded internationally, working with UAE-based clients. Delivered comprehensive design solutions across branding, digital media, and photography for diverse markets.
                  </p>
                </div>
                <div className="lg:order-1 lg:pr-12 lg:flex lg:justify-end">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-neutral-700/30 to-neutral-800/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 hover:border-neutral-700/50 transition-all duration-300">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Branding</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Digital Media</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Photography</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Social Media</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 5 - Right Side (Current) */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right lg:pr-12">
                  <div className="inline-block lg:float-right">
                    <span
                      className="text-neutral-500 text-sm tracking-[0.2em] uppercase font-light mb-2 block"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      2025 - Present
                    </span>
                    <h3
                      className="text-3xl md:text-4xl font-bold mb-3 text-white"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      Graphic Designer
                    </h3>
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
                      Currently creating cutting-edge design solutions in Dubai. Bringing together years of expertise across all design disciplines to deliver exceptional results for international clients.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-12">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-neutral-800/30 to-neutral-700/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 hover:border-neutral-700/50 transition-all duration-300">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Full Spectrum</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Creative Direction</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Brand Strategy</span>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>International Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Skills Overview Section */}
          <div className="mt-24 pt-12 border-t border-neutral-800/50">
            <h3 
              className="text-2xl md:text-3xl font-bold mb-8 text-white text-center"
              style={{ fontFamily: "'TASA Explorer', serif" }}
            >
              Design Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
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

        </div>
      </section>
    </div>
  );
}

export default Experience;
