import React, { useState } from "react";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "logos", label: "Logos" },
    { id: "brochures", label: "Brochures" },
    { id: "flyers", label: "Flyers" },
    { id: "billboards", label: "Billboards" },
    { id: "catalogue", label: "Catalogues" },
    { id: "uiux", label: "UI/UX" },
    { id: "businesscard", label: "Business Cards" },
    { id: "packaging", label: "Packaging" },
  ];

  const projects = [
    // Logos
    { id: 1, title: "Gullich Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/81ec02224813497.6811de0e4a641.jpg", year: "2024" },
    { id: 2, title: "Mum Mum Ice Pops", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/dbf440225494989.681df93429f95.jpg", year: "2024" },
    { id: 3, title: "Enza Electric Logo", category: "logos", image: "	https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/41f210224970769.6814b201edab9.jpg", year: "2023" },
    { id: 4, title: "Anogha Logo", category: "logos", image: "	https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/4039ef223959283.680234deb255c.jpg", year: "2023" },
    { id: 5, title: "L Cafe Logo", category: "logos", image: "	https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/6907bb217717703.67952e4b90750.jpg", year: "2024" },
    { id: 6, title: "Master Media Logo", category: "logos", image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/5419da178037677.64e0f83fd22c2.jpg", year: "2023" },
    
    // Brochures
    { id: 7, title: "Corporate Brochure", category: "brochures", image: "/projects/brochure1.jpg", year: "2024" },
    { id: 8, title: "Product Catalogue", category: "brochures", image: "/projects/brochure2.jpg", year: "2024" },
    { id: 9, title: "Healthcare Brochure", category: "brochures", image: "/projects/brochure3.jpg", year: "2023" },
    { id: 10, title: "Travel Brochure", category: "brochures", image: "/projects/brochure4.jpg", year: "2024" },
    
    // Flyers
    { id: 11, title: "Event Promotion", category: "flyers", image: "/projects/flyer1.jpg", year: "2024" },
    { id: 12, title: "Sale Campaign", category: "flyers", image: "/projects/flyer2.jpg", year: "2024" },
    { id: 13, title: "Restaurant Menu", category: "flyers", image: "/projects/flyer3.jpg", year: "2023" },
    { id: 14, title: "Gym Membership", category: "flyers", image: "/projects/flyer4.jpg", year: "2024" },
    
    // Billboards
    { id: 15, title: "Highway Billboard", category: "billboards", image: "/projects/billboard1.jpg", year: "2024" },
    { id: 16, title: "Product Launch", category: "billboards", image: "/projects/billboard2.jpg", year: "2023" },
    { id: 17, title: "Brand Campaign", category: "billboards", image: "/projects/billboard3.jpg", year: "2024" },
    
    // Catalogues
    { id: 18, title: "Fashion Collection", category: "catalogue", image: "/projects/catalogue1.jpg", year: "2024" },
    { id: 19, title: "Furniture Catalogue", category: "catalogue", image: "/projects/catalogue2.jpg", year: "2024" },
    { id: 20, title: "Jewelry Catalogue", category: "catalogue", image: "/projects/catalogue3.jpg", year: "2023" },
    { id: 21, title: "Electronics Catalogue", category: "catalogue", image: "/projects/catalogue4.jpg", year: "2024" },
    
    // UI/UX
    { id: 22, title: "E-commerce App", category: "uiux", image: "/projects/uiux1.jpg", year: "2024" },
    { id: 23, title: "Banking Dashboard", category: "uiux", image: "/projects/uiux2.jpg", year: "2024" },
    { id: 24, title: "Food Delivery App", category: "uiux", image: "/projects/uiux3.jpg", year: "2023" },
    { id: 25, title: "Fitness Tracker", category: "uiux", image: "/projects/uiux4.jpg", year: "2023" },
    { id: 26, title: "Social Media App", category: "uiux", image: "/projects/uiux5.jpg", year: "2024" },
    
    // Business Cards
    { id: 27, title: "Executive Card", category: "businesscard", image: "/projects/card1.jpg", year: "2024" },
    { id: 28, title: "Creative Agency", category: "businesscard", image: "/projects/card2.jpg", year: "2024" },
    { id: 29, title: "Minimalist Design", category: "businesscard", image: "/projects/card3.jpg", year: "2023" },
    { id: 30, title: "Luxury Cards", category: "businesscard", image: "/projects/card4.jpg", year: "2024" },
    
    // Packaging
    { id: 31, title: "Luxury Product", category: "packaging", image: "/projects/package1.jpg", year: "2024" },
    { id: 32, title: "Food Package", category: "packaging", image: "/projects/package2.jpg", year: "2024" },
    { id: 33, title: "Cosmetic Packaging", category: "packaging", image: "/projects/package3.jpg", year: "2023" },
    { id: 34, title: "Beverage Packaging", category: "packaging", image: "/projects/package4.jpg", year: "2024" },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      {/* PROJECTS SECTION */}
      <section className="relative bg-black text-white py-32 md:py-40 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Gray Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-black to-neutral-900/50"></div>
        
        {/* Subtle Gray Accent */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
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
          </div>

          {/* Category Filter Buttons */}
          <div className="mb-12">
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
          </div>

          {/* Projects Grid with Shuffle Animation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredProjects.slice(0,10).map((project, index) => (
              <div
                key={`${project.id}-${activeCategory}`}
                className="group relative"
                style={{
                  animation: `shuffleIn 0.5s ease-out ${index * 0.05}s backwards`,
                }}
              >
                {/* Project Card */}
                <div className="relative overflow-hidden rounded-xl bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-300 cursor-pointer">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-neutral-900">
                    {/* Placeholder for image - Replace with actual images */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                      <div className="text-4xl opacity-20">
                        {project.category === "logos" && "🎯"}
                        {project.category === "brochures" && "📄"}
                        {project.category === "flyers" && "📃"}
                        {project.category === "billboards" && "🪧"}
                        {project.category === "catalogue" && "📚"}
                        {project.category === "uiux" && "📱"}
                        {project.category === "businesscard" && "💳"}
                        {project.category === "packaging" && "📦"}
                      </div>
                    </div> */}
                    {/* Uncomment and use when you have actual images */}
                    
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span 
                        className="text-white text-xs tracking-wider uppercase"
                        style={{ fontFamily: "'Raleway', sans-serif" }}
                      >
                        View
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
                </div>
              </div>
            ))}
          </div>

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

          {/* Bottom CTA */}
          <div className="text-center mt-20 pt-12 border-t border-neutral-800/50">
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

      {/* Add this CSS to your global styles or in a style tag */}
      <style jsx>{`
        @keyframes shuffleIn {
          0% {
            opacity: 0;
            transform: scale(0.8) rotate(-5deg) translateY(20px);
          }
          50% {
            transform: scale(1.05) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg) translateY(0);
          }
        }

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
