import React from "react";
import About from '../assets/smile.png'

const AboutSection = () => {
  return (
    <section className="relative bg-black text-white py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950"></div>

      {/* Accent Glow - Teal (Top Right) */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-teal-100/8 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Accent Glow - Purple (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px] bg-gray-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Centered Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span
              className="text-white/40 text-xs sm:text-sm tracking-[0.3em] uppercase font-light"
              style={{ fontFamily: "'Raleway', serif" }}
            >
              — About Me —
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4"
            style={{ fontFamily: "'TASA Explorer', sans-serif" }}
          >
            The Story Behind
            <br />
            <span className="italic bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              The Pixels
            </span>
          </h2>
        </div>

        {/* Main Content - Side by Side Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center mb-16 sm:mb-20 md:mb-24">
          
          {/* Left - Large Image/Visual Card - Shows FIRST on mobile */}
          <div className="order-1 lg:order-1">
            <div className="relative group max-w-lg mx-auto lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900">
                <img 
                  src={About} 
                  className="w-full h-full object-cover rounded-2xl grayscale" 
                  alt="About" 
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating Stats Badge - Fixed sizing and positioning */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-2xl sm:text-3xl font-bold text-white"
                          style={{ fontFamily: "'TASA Explorer', serif" }}
                        >
                          9+
                        </p>
                        <p
                          className="text-white/70 text-[0.65rem] sm:text-xs tracking-wider mt-0.5 sm:mt-1"
                          style={{ fontFamily: "'Raleway', serif" }}
                        >
                          YEARS EXPERIENCE
                        </p>
                      </div>
                      <div className="w-[1px] h-10 sm:h-12 bg-white/20"></div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-2xl sm:text-3xl font-bold text-white"
                          style={{ fontFamily: "'TASA Explorer', serif" }}
                        >
                          200+
                        </p>
                        <p
                          className="text-white/70 text-[0.65rem] sm:text-xs tracking-wider mt-0.5 sm:mt-1"
                          style={{ fontFamily: "'Raleway', serif" }}
                        >
                          DIGITAL PRODUCTS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 border-t-2 border-r-2 border-teal-400/30 rounded-tr-3xl pointer-events-none"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 border-b-2 border-l-2 border-purple-400/30 rounded-bl-3xl pointer-events-none"></div>
            </div>
          </div>

          {/* Right - Text Content - Shows SECOND on mobile */}
          <div className="order-2 lg:order-2 space-y-6 sm:space-y-8">
            {/* Opening Statement */}
            <div className="relative">
              <div className="absolute -left-2 sm:-left-4 top-0 text-4xl sm:text-5xl md:text-6xl text-teal-400/20 font-serif">
                "
              </div>
              <p
                className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed pl-6 sm:pl-8 italic"
                style={{ fontFamily: "'Raleway', serif" }}
              >
                Where creativity meets strategy, and pixels become powerful
                stories.
              </p>
            </div>

            {/* Main Bio */}
            <div className="space-y-4 sm:space-y-6">
              <p
                className="text-base sm:text-lg text-white/80 leading-relaxed"
                style={{
                  fontFamily: "'Raleway', serif",
                  letterSpacing: "0.3px",
                }}
              >
                With over 8 years of experience in crafting visually stunning designs, Solomen Design Studio is your one-stop-shop for all your branding needs. From logos that pop to social media graphics that spark conversations, our team of experts excels in bringing your vision to life.
              </p>

              <p
                className="text-base sm:text-lg text-white/70 leading-relaxed"
                style={{
                  fontFamily: "'Raleway', serif",
                  letterSpacing: "0.3px",
                }}
              >
                We breathe life into brands through thoughtful UI design, captivating print collaterals, and packaging that stands out.
              </p>

              <p
                className="text-base sm:text-lg text-white/70 leading-relaxed"
                style={{
                  fontFamily: "'Raleway', serif",
                  letterSpacing: "0.3px",
                }}
              >
                Whether it's a business card that makes a statement or a catalogue that tells a story, our designs are tailored to elevate your business and leave a lasting impression. Let us help you shine brighter - partner with us to illuminate your brand!
              </p>
            </div>

            {/* CTA Link */}
            <div className="pt-2 sm:pt-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-400/30 rounded-full text-white hover:border-teal-400/60 transition-all duration-300 group text-sm sm:text-base"
              >
                <span
                  className="font-semibold tracking-wide"
                  style={{
                    fontFamily: "'Raleway', serif",
                    letterSpacing: "1.5px",
                  }}
                >
                  VIEW MY WORK
                </span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300"
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
      </div>
    </section>
  );
};

export default AboutSection;
