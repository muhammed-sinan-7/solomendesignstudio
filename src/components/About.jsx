import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative bg-black text-white py-32 md:py-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950"></div>
      
      {/* Accent Glow - Teal (Top Right) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/8 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Accent Glow - Purple (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        
        {/* Centered Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span 
              className="text-teal-400 text-sm tracking-[0.3em] uppercase font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              — About Me —
            </span>
          </div>
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Story Behind
            <br />
            <span className="italic bg-gradient-to-right from-teal-400 to-purple-400 bg-clip-text text-transparent">
              The Pixels
            </span>
          </h2>
        </div>

        {/* Main Content - Side by Side Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          
          {/* Left - Large Image/Visual Card */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10">
                {/* Placeholder - Replace with your image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-8xl">🎨</div>
                    <p className="text-white/40 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Your Portrait Here
                    </p>
                  </div>
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Floating Stats Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>9+</p>
                        <p className="text-white/70 text-xs tracking-wider mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>YEARS EXPERIENCE</p>
                      </div>
                      <div className="w-[1px] h-12 bg-white/20"></div>
                      <div>
                        <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>200+</p>
                        <p className="text-white/70 text-xs tracking-wider mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>DIGITAL PRODUCTS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-teal-400/30 rounded-tr-3xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-purple-400/30 rounded-bl-3xl pointer-events-none"></div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Opening Statement */}
            <div className="relative">
              <div className="absolute -left-4 top-0 text-6xl text-teal-400/20 font-serif">"</div>
              <p 
                className="text-2xl md:text-3xl text-white/90 leading-relaxed pl-8 italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Where creativity meets strategy, and pixels become powerful stories.
              </p>
            </div>

            {/* Main Bio */}
            <div className="space-y-6">
              <p 
                className="text-lg text-white/80 leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.3px' }}
              >
                I'm a <span className="text-teal-400 font-semibold">creative problem-solver</span> who transforms complex ideas into stunning visual experiences. With nearly a decade immersed in the world of digital design, I've mastered the delicate balance between <span className="text-purple-400 font-semibold">innovation and intuition</span>.
              </p>

              <p 
                className="text-lg text-white/70 leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.3px' }}
              >
                From <span className="text-white/90 font-medium">mobile applications</span> to <span className="text-white/90 font-medium">web platforms</span>, I've crafted over 200 digital products that don't just exist—they <span className="italic">resonate</span>, they <span className="italic">inspire</span>, and they <span className="italic">convert</span>.
              </p>

              <p 
                className="text-lg text-white/70 leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.3px' }}
              >
                My approach is simple: <span className="text-white/90 font-medium">listen deeply, design boldly, deliver flawlessly</span>. Every project is an opportunity to push boundaries and create something extraordinary.
              </p>
            </div>

            {/* CTA Link */}
            <div className="pt-4">
              <a 
                href="#work" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-400/30 rounded-full text-white hover:border-teal-400/60 transition-all duration-300 group"
              >
                <span 
                  className="font-semibold tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '1.5px' }}
                >
                  VIEW MY WORK
                </span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Expertise Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/5">
          
          {/* Expertise 1 */}
          <div className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-teal-400/30 transition-all duration-300 text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl group-hover:bg-teal-500/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">✦</div>
              <h3 
                className="text-xl font-semibold mb-3 text-white/95"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Brand Identity
              </h3>
              <p 
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Crafting memorable visual identities that resonate and elevate brands to new heights.
              </p>
            </div>
          </div>

          {/* Expertise 2 */}
          <div className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-purple-400/30 transition-all duration-300 text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">◈</div>
              <h3 
                className="text-xl font-semibold mb-3 text-white/95"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                UI/UX Design
              </h3>
              <p 
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Designing intuitive interfaces where beauty meets seamless functionality.
              </p>
            </div>
          </div>

          {/* Expertise 3 */}
          <div className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-teal-400/30 transition-all duration-300 text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl group-hover:bg-teal-500/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">◆</div>
              <h3 
                className="text-xl font-semibold mb-3 text-white/95"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Digital Products
              </h3>
              <p 
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Building end-to-end experiences from concept to launch across all platforms.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
