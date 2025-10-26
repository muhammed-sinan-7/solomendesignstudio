import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Refs for scroll animations
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  // Trigger animations every time (once: false)
  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });
  const filterInView = useInView(filterRef, { once: false, amount: 0.5 });
  const gridInView = useInView(gridRef, { once: false, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.3 });

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "logos", label: "Logos" },
    { id: "brochures", label: "Brochures" },
    { id: "billboards", label: "Billboards" },
    { id: "uiux", label: "UI/UX" },
    { id: "businesscard", label: "Business Cards" },
    { id: "packaging", label: "Packaging" },
  ];

  const projects = [
    // Logos
    { id: 1, title: "Gullich Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/81ec02224813497.6811de0e4a641.jpg", year: "2024", url: "https://www.behance.net/gallery/224813497/GULLICH" },
    { id: 2, title: "Mum Mum Ice Pops", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/dbf440225494989.681df93429f95.jpg", year: "2024", url: "https://www.behance.net/gallery/225494989/MUM-MUM-ICE-POPS" },
    { id: 3, title: "Enza Electric Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/41f210224970769.6814b201edab9.jpg", year: "2023", url: "https://www.behance.net/gallery/224970769/ENZA-ELECTRIC" },
    { id: 4, title: "Anogha Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/4039ef223959283.680234deb255c.jpg", year: "2023", url: "https://www.behance.net/gallery/223959283/ANOGHA" },
    { id: 5, title: "L Cafe Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/6907bb217717703.67952e4b90750.jpg", year: "2024", url: "https://www.behance.net/gallery/217717703/L-CAFE" },
    { id: 6, title: "Master Media Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/5419da178037677.64e0f83fd22c2.jpg", year: "2023", url: "https://www.behance.net/gallery/178037677/MASTER-MEDIA" },
    
    // Brochures
    { id: 7, title: "Inox Glass Interio", category: "brochures", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/40f237141649501.6257bd8883752.jpg", year: "2024", url: "https://www.behance.net/gallery/141649501/INOX-GLASS-INTERIO" },
    { id: 8, title: "Brano Holdings", category: "brochures", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/c7a434124984273.610febc7a2df1.jpg", year: "2024", url: "https://www.behance.net/gallery/124984273/BRANO-HOLDINGS" },
    { id: 9, title: "Stallone", category: "brochures", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/632aa9209395747.66fea731bd126.jpg", year: "2023", url: "https://www.behance.net/gallery/209395747/STALLONE" },
    
    // Billboards
    { id: 15, title: "ECH Billboard", category: "billboards", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/d20469225898189.6825018a5db7f.jpg", year: "2024", url: "https://www.behance.net/gallery/225898189/ECH-BILLBOARD" },
    { id: 16, title: "Lulu Wedding Launch", category: "billboards", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/162038225898189.6825030315983.jpg", year: "2023", url: "https://www.behance.net/gallery/225898189/LULU-WEDDING" },
    
    // UI/UX
    { id: 22, title: "E-commerce App", category: "uiux", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/6735a0184033383.654a76c0d5541.jpg", year: "2024", url: "https://www.behance.net/gallery/184033383/E-COMMERCE-APP" },
    { id: 23, title: "E-commerce App", category: "uiux", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/4ca9a0184031553.654a710c844b2.jpg", year: "2024", url: "https://www.behance.net/gallery/184031553/E-COMMERCE-APP-2" },
    { id: 24, title: "Emi Fresh", category: "uiux", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/9c6bb9184031281.654a70232ecf5.jpg", year: "2023", url: "https://www.behance.net/gallery/184031281/EMI-FRESH" },
    
    // Business Cards
    { id: 27, title: "Moquade Cards", category: "businesscard", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/785b84217715629.679524664384b.jpg", year: "2024", url: "https://www.behance.net/gallery/217715629/MOQUADE" },
    { id: 29, title: "Sree Bhadra", category: "businesscard", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/2c56e1178058063.64e18da3c1a82.jpg", year: "2023", url: "https://www.behance.net/gallery/178058063/SREE-BHADRA" },
    { id: 30, title: "Chemtech", category: "businesscard", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/5dd48d180789649.6511313c63038.jpg", year: "2024", url: "https://www.behance.net/gallery/180789649/CHEMTECH" },
    
    // Packaging
    { id: 31, title: "Matco", category: "packaging", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/4ebe78225503733.682b649861f80.jpg", year: "2024", url: "https://www.behance.net/gallery/225503733/MATCO" },
    { id: 32, title: "Malabar Chef", category: "packaging", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/fb05c9225503733.681e1825142a7.jpg", year: "2024", url: "https://www.behance.net/gallery/225503733/MALABAR-CHEF" },
    { id: 33, title: "Mum Mum", category: "packaging", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/380977225503733.681e182516907.jpg", year: "2023", url: "https://www.behance.net/gallery/225503733/MUM-MUM" },
    { id: 34, title: "Meex", category: "packaging", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/8634c5225503733.681e182517e61.jpg", year: "2024", url: "https://www.behance.net/gallery/225503733/MEEX" },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      {/* PROJECTS SECTION */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Gray Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-black to-neutral-900/50"></div>
        
        {/* Subtle Gray Accent */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          
          {/* Header - Animated */}
          <motion.div 
            ref={headerRef}
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block mb-6">
              <span
                className="text-neutral-400 text-sm tracking-[0.3em] uppercase font-light"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                — Portfolio —
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
              style={{ fontFamily: "'TASA Explorer', serif" }}
            >
              Featured
              <br />
              <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-300 bg-clip-text text-transparent">
                Creative Works
              </span>
            </h2>
            <p
              className="text-xl text-neutral-400 leading-relaxed"
              style={{
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: "0.3px",
              }}
            >
              Explore my diverse portfolio spanning branding, digital design, and print media
            </p>
          </motion.div>

          {/* Category Filter Buttons - Animated */}
          <motion.div 
            ref={filterRef}
            variants={fadeUp}
            initial="hidden"
            animate={filterInView ? "visible" : "hidden"}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-white text-black"
                      : "bg-neutral-900/50 text-neutral-400 border border-neutral-800/50 hover:border-neutral-700/50 hover:text-neutral-300"
                  }`}
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid with Layout Animation */}
          <motion.div 
            ref={gridRef}
            variants={staggerContainer}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.slice(0, 10).map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    layout: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }
                  }}
                  className="group relative"
                >
                  {/* Project Card */}
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-xl bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-300 cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-neutral-900">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span 
                          className="text-white text-xs tracking-wider uppercase"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          View Project
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-3">
                      <h3
                        className="text-sm font-bold text-white group-hover:text-neutral-200 transition-colors duration-300 line-clamp-1"
                        style={{ fontFamily: "'TASA Explorer', serif" }}
                      >
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between mt-1">
                        <span
                          className="text-neutral-500 text-xs"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p
                className="text-neutral-500 text-lg"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                No projects found in this category
              </p>
            </div>
          )}

          {/* Bottom CTA - Animated */}
          <motion.div 
            ref={ctaRef}
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="text-center mt-20 pt-12 border-t border-neutral-800/50"
          >
            <p
              className="text-xl text-neutral-400 mb-6"
              style={{
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: "0.3px",
              }}
            >
              Want to see more work or discuss a project?
            </p>
            <a
              href="https://www.behance.net/SULAIMANKUTTASSERI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-neutral-800 to-neutral-700 border-2 border-neutral-700 rounded-full text-white hover:border-neutral-600 hover:scale-105 transition-all duration-300 group"
            >
              <span
                className="text-lg font-semibold tracking-wide"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  letterSpacing: "1.5px",
                }}
              >
                View My All Works
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
          </motion.div>

        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default Projects;
