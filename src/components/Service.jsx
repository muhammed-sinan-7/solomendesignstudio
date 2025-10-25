import React from "react";

function Service() {
  return (
    <div>
      {/* SERVICES SECTION - Dark Minimalist Layout */}
      <section className="relative bg-black text-whitemd:py-30 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950"></div>

        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="max-w-4xl mb-24">
            <div className="inline-block mb-6">
              <span
                className="text-white/40 text-sm tracking-[0.3em] uppercase font-light"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Services
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
              style={{ fontFamily: "'TASA Explorer', serif" }}
            >
              What I Do
            </h2>
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
          </div>

          {/* Services List - Stacked Layout */}
          <div className="space-y-6">
            {/* Service Item 1 */}
            <div className="group">
              <div className="relative border-t border-white/10 pt-8 pb-8 hover:border-white/30 transition-all duration-500">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span
                      className="text-white/20 text-xl font-bold group-hover:text-white/40 transition-colors duration-300"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      01
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-6">
                    <h3
                      className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      Brand Identity & Visual Design
                    </h3>
                    <p
                      className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "0.3px",
                      }}
                    >
                      Comprehensive brand identity systems including logo
                      design, typography, color palettes, and brand guidelines
                      that establish a strong, cohesive visual presence across
                      all touchpoints.
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="lg:col-span-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Logo Design & Wordmarks
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Expert
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Brand Guidelines & Systems
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Expert
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Visual Identity Systems
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Expert
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Stationery & Collateral
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Advanced
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="group">
              <div className="relative border-t border-white/10 pt-8 pb-8 hover:border-white/30 transition-all duration-500">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span
                      className="text-white/20 text-xl font-bold group-hover:text-white/40 transition-colors duration-300"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      02
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-6">
                    <h3
                      className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      UI/UX Design & Product
                    </h3>
                    <p
                      className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "0.3px",
                      }}
                    >
                      User-centered interface design for mobile and web
                      applications. Creating intuitive, accessible experiences
                      that prioritize usability while maintaining visual
                      excellence and brand consistency.
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="lg:col-span-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Mobile App Design (iOS/Android)
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Expert
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Web Application Interfaces
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Expert
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Design Systems & Components
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Expert
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Prototyping & User Testing
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Advanced
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Service Item 4 */}
            <div className="group">
              <div className="relative border-t border-white/10 pt-8 pb-8 hover:border-white/30 transition-all duration-500">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span
                      className="text-white/20 text-xl font-bold group-hover:text-white/40 transition-colors duration-300"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      03
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-6">
                    <h3
                      className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      Graphic & Visual Design
                    </h3>
                    <p
                      className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "0.3px",
                      }}
                    >
                      Strategic visual content for marketing, social media, and
                      print. Creating compelling graphics that communicate your
                      message effectively and maintain brand consistency across
                      all channels.
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="lg:col-span-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Marketing & Advertising Materials
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Expert
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Social Media Graphics
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Expert
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Presentation Design
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Advanced
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Print & Packaging Design
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Advanced
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Item 5 */}
            <div className="group">
              <div className="relative border-t border-white/10 border-b pt-8 pb-8 hover:border-white/30 transition-all duration-500">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span
                      className="text-white/20 text-xl font-bold group-hover:text-white/40 transition-colors duration-300"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      04
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-6">
                    <h3
                      className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300"
                      style={{ fontFamily: "'TASA Explorer', serif" }}
                    >
                      Creative Strategy & Consulting
                    </h3>
                    <p
                      className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "0.3px",
                      }}
                    >
                      Strategic design thinking and consulting services to help
                      businesses make informed decisions about their visual
                      communication, brand positioning, and digital presence.
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="lg:col-span-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Design Consulting & Audits
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Expert
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Brand Strategy & Positioning
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Advanced
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Creative Direction
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Expert
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          AI-Powered Design Workflows
                        </span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5"></div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Advanced
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 pb-15 pt-12  border-white/5">
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
        </div>
      </section>
    </div>
  );
}

export default Service;
