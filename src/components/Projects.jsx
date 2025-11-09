import React, { useState, useRef } from "react";
import { Helmet } from 'react-helmet-async';
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
    { id: 1, title: "Gullich Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/81ec02224813497.6811de0e4a641.jpg", year: "2024", url: "https://www.behance.net/gallery/224813497/GULLICH", description: "Modern logo design for Gullich brand focusing on clean typography and memorable identity" },
    { id: 2, title: "Mum Mum Ice Pops", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/dbf440225494989.681df93429f95.jpg", year: "2024", url: "https://www.behance.net/gallery/225494989/MUM-MUM-ICE-POPS", description: "Playful logo design for ice pops brand with vibrant colors and fun typography" },
    { id: 3, title: "Enza Electric Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/41f210224970769.6814b201edab9.jpg", year: "2023", url: "https://www.behance.net/gallery/224970769/ENZA-ELECTRIC", description: "Professional logo design for electrical company emphasizing reliability and modern technology" },
    { id: 4, title: "Anogha Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/4039ef223959283.680234deb255c.jpg", year: "2023", url: "https://www.behance.net/gallery/223959283/ANOGHA", description: "Elegant logo design for Anogha brand with sophisticated typography and minimalist approach" },
    { id: 5, title: "L Cafe Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/6907bb217717703.67952e4b90750.jpg", year: "2024", url: "https://www.behance.net/gallery/217717703/L-CAFE", description: "Contemporary cafe logo design combining modern aesthetics with warm hospitality appeal" },
    { id: 6, title: "Master Media Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/5419da178037677.64e0f83fd22c2.jpg", year: "2023", url: "https://www.behance.net/gallery/178037677/MASTER-MEDIA", description: "Bold media company logo design featuring strong typography and dynamic visual elements" },
    
    // Brochures
    { id: 7, title: "Inox Glass Interio", category: "brochures", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/40f237141649501.6257bd8883752.jpg", year: "2024", url: "https://www.behance.net/gallery/141649501/INOX-GLASS-INTERIO", description: "Professional brochure design for glass interior company showcasing premium products and services" },
    { id: 8, title: "Brano Holdings", category: "brochures", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/c7a434124984273.610febc7a2df1.jpg", year: "2024", url: "https://www.behance.net/gallery/124984273/BRANO-HOLDINGS", description: "Corporate brochure design for holdings company with elegant layout and professional imagery" },
    { id: 9, title: "Stallone", category: "brochures", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/632aa9209395747.66fea731bd126.jpg", year: "2023", url: "https://www.behance.net/gallery/209395747/STALLONE", description: "Creative brochure design featuring bold typography and impactful visual storytelling" },
    
    // Billboards
    { id: 15, title: "ECH Billboard", category: "billboards", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/d20469225898189.6825018a5db7f.jpg", year: "2024", url: "https://www.behance.net/gallery/225898189/ECH-BILLBOARD", description: "Large-scale billboard design for ECH with eye-catching visuals and clear messaging" },
    { id: 16, title: "Lulu Wedding Launch", category: "billboards", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/162038225898189.6825030315983.jpg", year: "2023", url: "https://www.behance.net/gallery/225898189/LULU-WEDDING", description: "Wedding campaign billboard design with elegant aesthetics and memorable brand presence" },
    
    // UI/UX
    { id: 22, title: "E-commerce App", category: "uiux", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/6735a0184033383.654a76c0d5541.jpg", year: "2024", url: "https://www.behance.net/gallery/184033383/E-COMMERCE-APP", description: "Modern e-commerce mobile app UI/UX design with intuitive navigation and seamless user experience" },
    { id: 23, title: "E-commerce App", category: "uiux", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/4ca9a0184031553.654a710c844b2.jpg", year: "2024", url: "https://www.behance.net/gallery/184031553/E-COMMERCE-APP-2", description: "Sleek e-commerce app interface design focusing on conversion optimization and user engagement" },
    { id: 24, title: "Emi Fresh", category: "uiux", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/9c6bb9184031281.654a70232ecf5.jpg", year: "2023", url: "https://www.behance.net/gallery/184031281/EMI-FRESH", description: "Fresh food delivery app UI design with clean interface and intuitive ordering flow" },
    
    // Business Cards
    { id: 27, title: "Moquade Cards", category: "businesscard", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/785b84217715629.679524664384b.jpg", year: "2024", url: "https://www.behance.net/gallery/217715629/MOQUADE", description: "Premium business card design for Moquade with sophisticated layout and quality finish" },
    { id: 29, title: "Sree Bhadra", category: "businesscard", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/2c56e1178058063.64e18da3c1a82.jpg", year: "2023", url: "https://www.behance.net/gallery/178058063/SREE-BHADRA", description: "Elegant business card design combining traditional values with modern aesthetics" },
    { id: 30, title: "Chemtech", category: "businesscard", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/5dd48d180789649.6511313c63038.jpg", year: "2024", url: "https://www.behance.net/gallery/180789649/CHEMTECH", description: "Professional business card design for chemical technology company with technical precision" },
    
    // Packaging
    { id: 31, title: "Matco", category: "packaging", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/4ebe78225503733.682b649861f80.jpg", year: "2024", url: "https://www.behance.net/gallery/225503733/MATCO", description: "Modern packaging design for Matco with bold graphics and shelf-appeal" },
    { id: 32, title: "Malabar Chef", category: "packaging", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/fb05c9225503733.681e1825142a7.jpg", year: "2024", url: "https://www.behance.net/gallery/225503733/MALABAR-CHEF", description: "Authentic food packaging design celebrating regional cuisine and culinary heritage" },
    { id: 33, title: "Mum Mum", category: "packaging", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/380977225503733.681e182516907.jpg", year: "2023", url: "https://www.behance.net/gallery/225503733/MUM-MUM", description: "Fun and colorful packaging design for children's snack brand with playful elements" },
    { id: 34, title: "Meex", category: "packaging", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/8634c5225503733.681e182517e61.jpg", year: "2024", url: "https://www.behance.net/gallery/225503733/MEEX", description: "Contemporary packaging design with minimalist approach and premium brand positioning" },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      {/* SEO Meta Tags & Schema Markup */}
      <Helmet>
        <title>Portfolio - Featured Design Projects | Solomen Design Studio Dubai</title>
        <meta 
          name="description" 
          content="Explore 150+ creative design projects including logo design, branding, UI/UX, packaging, brochures, and billboards. Professional portfolio by Dubai-based graphic designer." 
        />
        <meta 
          name="keywords" 
          content="design portfolio dubai, logo design portfolio, branding projects, UI UX portfolio, packaging design examples, graphic design work samples" 
        />
        <link rel="canonical" href="https://yourwebsite.com/projects" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Design Portfolio - Creative Projects by Solomen Design Studio" />
        <meta property="og:description" content="Browse through diverse design projects spanning logos, branding, UI/UX, and print media" />
        <meta property="og:url" content="https://yourwebsite.com/projects" />
        <meta property="og:type" content="website" />
        
        {/* CollectionPage Schema with ImageGallery */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Solomen Design Studio Portfolio",
            "description": "Featured creative works including logo design, branding, UI/UX, packaging, brochures, and billboard designs",
            "url": "https://yourwebsite.com/projects",
            "creator": {
              "@type": "Person",
              "name": "Sulaiman Kuttasseri",
              "jobTitle": "Graphic Designer",
              "url": "https://yourwebsite.com"
            },
            "about": "Graphic Design Portfolio",
            "hasPart": filteredProjects.slice(0, 10).map(project => ({
              "@type": "CreativeWork",
              "name": project.title,
              "description": project.description,
              "url": project.url,
              "dateCreated": project.year,
              "creator": {
                "@type": "Person",
                "name": "Sulaiman Kuttasseri"
              },
              "image": {
                "@type": "ImageObject",
                "url": project.image,
                "caption": project.title,
                "contentUrl": project.image
              }
            }))
          })}
        </script>

        {/* ItemList Schema for Projects */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": filteredProjects.slice(0, 10).map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "image": project.image,
                "url": project.url
              }
            }))
          })}
        </script>
      </Helmet>

      <div>
        {/* PROJECTS SECTION */}
        <section 
          className="relative bg-black text-white py-20 overflow-hidden" 
          id="projects"
          itemScope 
          itemType="https://schema.org/CollectionPage"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:24px_24px]" aria-hidden="true"></div>
          
          {/* Gray Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-black to-neutral-900/50" aria-hidden="true"></div>
          
          {/* Subtle Gray Accent */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[150px] pointer-events-none" aria-hidden="true"></div>

          <div className="relative z-10 container mx-auto px-6 max-w-7xl">
            
            {/* Header - Animated */}
            <motion.header 
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
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
                style={{ fontFamily: "'TASA Explorer', serif" }}
                itemProp="name"
              >
                Featured
                <br />
                <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-300 bg-clip-text text-transparent">
                  Creative Works
                </span>
              </h1>
              <p
                className="text-xl text-neutral-400 leading-relaxed"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  letterSpacing: "0.3px",
                }}
                itemProp="description"
              >
                Explore my diverse portfolio spanning <strong>branding</strong>, <strong>digital design</strong>, and <strong>print media</strong>
              </p>
            </motion.header>

            {/* Category Filter Buttons - Animated */}
            <motion.nav 
              ref={filterRef}
              variants={fadeUp}
              initial="hidden"
              animate={filterInView ? "visible" : "hidden"}
              className="mb-12"
              aria-label="Project category filter"
            >
              <div className="flex flex-wrap justify-center gap-3" role="tablist">
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
                    role="tab"
                    aria-selected={activeCategory === category.id}
                    aria-controls="projects-grid"
                    aria-label={`Filter projects by ${category.label}`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </motion.nav>

            {/* Projects Grid with Layout Animation */}
            <motion.div 
              ref={gridRef}
              variants={staggerContainer}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
              id="projects-grid"
              role="tabpanel"
            >
              <AnimatePresence mode="wait">
                {filteredProjects.slice(0, 10).map((project) => (
                  <motion.article
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
                    itemScope
                    itemType="https://schema.org/CreativeWork"
                  >
                    {/* Project Card */}
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block relative overflow-hidden rounded-xl bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-300 cursor-pointer"
                      aria-label={`View ${project.title} project on Behance`}
                      itemProp="url"
                    >
                      {/* Image Container */}
                      <figure 
                        className="relative aspect-square overflow-hidden bg-neutral-900"
                        itemScope
                        itemType="https://schema.org/ImageObject"
                      >
                        <img 
                          src={project.image} 
                          alt={`${project.title} - ${project.category} design project by Solomen Design Studio`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          itemProp="contentUrl"
                        />
                        <meta itemProp="caption" content={project.title} />
                        <meta itemProp="description" content={project.description} />
                        
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span 
                            className="text-white text-xs tracking-wider uppercase"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                          >
                            View Project
                          </span>
                        </div>
                      </figure>

                      {/* Project Info */}
                      <div className="p-3">
                        <h3
                          className="text-sm font-bold text-white group-hover:text-neutral-200 transition-colors duration-300 line-clamp-1"
                          style={{ fontFamily: "'TASA Explorer', serif" }}
                          itemProp="name"
                        >
                          {project.title}
                        </h3>
                        <div className="flex items-center justify-between mt-1">
                          <time
                            dateTime={project.year}
                            className="text-neutral-500 text-xs"
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                            itemProp="dateCreated"
                          >
                            {project.year}
                          </time>
                        </div>
                        <meta itemProp="description" content={project.description} />
                        <meta itemProp="creator" content="Sulaiman Kuttasseri" />
                      </div>
                    </a>
                  </motion.article>
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
            <motion.footer 
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
                aria-label="View complete portfolio on Behance"
              >
                <span
                  className="text-lg font-semibold tracking-wide"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    letterSpacing: "1.5px",
                  }}
                >
                  VIEW ALL WORKS
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
    </>
  );
}

export default Projects;
