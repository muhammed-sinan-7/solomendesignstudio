import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const headerRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formInViewRef = useRef(null);
  const formElementRef = useRef(null);

  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });
  const contactInfoInView = useInView(contactInfoRef, { once: false, amount: 0.3 });
  const formInView = useInView(formInViewRef, { once: false, amount: 0.2 });

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
        staggerChildren: 0.15
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if form ref is not null
    if (!formElementRef.current) {
      toast.error("Form reference error. Please try again.", {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#1c1c1c',
          color: '#fff',
          border: '1px solid #404040',
          borderRadius: '12px',
          padding: '16px',
          fontFamily: "'Raleway', sans-serif",
        },
        iconTheme: {
          primary: '#ff5459',
          secondary: '#1c1c1c',
        },
      });
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading('Sending your message...', {
      style: {
        background: '#1c1c1c',
        color: '#fff',
        border: '1px solid #404040',
        borderRadius: '12px',
        padding: '16px',
        fontFamily: "'Raleway', sans-serif",
      },
    });

    // Send email using EmailJS
    emailjs.sendForm(
      "service_tzbqtre", 
      "template_f8o42i1", 
      formElementRef.current,
      "WhuqLJ_OkmC7BsdnE"
    )
    .then(
      (result) => {
        console.log("Email sent successfully!", result.text);
        
        // Dismiss loading toast and show success
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#1c1c1c',
            color: '#fff',
            border: '1px solid #404040',
            borderRadius: '12px',
            padding: '16px',
            fontFamily: "'Raleway', sans-serif",
          },
          iconTheme: {
            primary: '#32b8c6',
            secondary: '#1c1c1c',
          },
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        console.log("Failed to send email:", error.text);
        
        // Dismiss loading toast and show error
        toast.dismiss(loadingToast);
        toast.error(`Failed to send message: ${error.text}`, {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#1c1c1c',
            color: '#fff',
            border: '1px solid #404040',
            borderRadius: '12px',
            padding: '16px',
            fontFamily: "'Raleway', sans-serif",
          },
          iconTheme: {
            primary: '#ff5459',
            secondary: '#1c1c1c',
          },
        });
      }
    );
  };

  return (
    <div>
      {/* Toast Container - Add this at the top */}
      <Toaster 
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          top: 20,
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1c1c1c',
            color: '#fff',
            border: '1px solid #404040',
            borderRadius: '12px',
            padding: '16px',
            fontFamily: "'Raleway', sans-serif",
            fontSize: '14px',
          },
        }}
      />

      {/* CONTACT SECTION */}
      <section className="relative bg-black text-white py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Gray Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-black to-neutral-900/50"></div>
        
        {/* Subtle Gray Accent */}
        <div className="absolute bottom-0 left-1/4 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-neutral-800/20 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Header - Animated */}
          <motion.div 
            ref={headerRef}
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block mb-4 sm:mb-6">
              <span
                className="text-neutral-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-light"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                — Get In Touch —
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white"
              style={{ fontFamily: "'TASA Explorer', serif" }}
            >
              Let's Create
              <br />
              <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-300 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed px-4"
              style={{
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: "0.3px",
              }}
            >
              Have a project in mind? I'd love to hear about it. Drop me a message and let's bring your vision to life.
            </p>
          </motion.div>

          {/* Contact Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            
            {/* Left Side - Contact Info - Staggered Animation */}
            <motion.div
              ref={contactInfoRef}
              variants={staggerContainer}
              initial="hidden"
              animate={contactInfoInView ? "visible" : "hidden"}
            >
              <motion.h3
                variants={fadeUp}
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-white"
                style={{ fontFamily: "'TASA Explorer', serif" }}
              >
                Contact Information
              </motion.h3>

              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-6">
                
                {/* Email */}
                <motion.div variants={fadeUp} className="group relative">
                  <div className="relative bg-neutral-900/30 border border-neutral-800/50 rounded-xl p-4 sm:p-6 hover:border-neutral-700/50 transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-neutral-800/50 border border-neutral-700/50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-neutral-500 text-xs uppercase tracking-wider mb-1"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Email
                        </p>
                        <a
                          href="mailto:solomendesigns@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-base sm:text-lg font-medium hover:text-neutral-300 transition-colors break-all"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          solomendesigns@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div variants={fadeUp} className="group relative">
                  <div className="relative bg-neutral-900/30 border border-neutral-800/50 rounded-xl p-4 sm:p-6 hover:border-neutral-700/50 transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-neutral-800/50 border border-neutral-700/50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p
                          className="text-neutral-500 text-xs uppercase tracking-wider mb-1"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Phone
                        </p>
                        <a
                          href="tel:+971567576495"
                          className="text-white text-base sm:text-lg font-medium hover:text-neutral-300 transition-colors"
                          style={{ fontFamily: "'TASA Explorer', sans-serif" }}
                        >
                          +971 567576495
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div variants={fadeUp} className="group relative">
                  <div className="relative bg-neutral-900/30 border border-neutral-800/50 rounded-xl p-4 sm:p-6 hover:border-neutral-700/50 transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-neutral-800/50 border border-neutral-700/50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p
                          className="text-neutral-500 text-xs uppercase tracking-wider mb-1"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Location
                        </p>
                        <p
                          className="text-white text-base sm:text-lg font-medium"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          Dubai, UAE
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Social Links */}
              <motion.div variants={fadeUp} className="mt-8 sm:mt-12">
                <p
                  className="text-neutral-500 text-sm uppercase tracking-wider mb-4"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  Follow Me
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a
                    href="https://www.behance.net/SULAIMANKUTTASSERI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 20.3h6.03c.5-.674.76-1.483.76-2.412 0-1.46-.673-2.483-2.02-3.07-.675-.29-1.427-.438-2.252-.438H16.94v5.92zm0-8.69h2.53c.674 0 1.24-.12 1.7-.36.46-.24.69-.757.69-1.553 0-.805-.21-1.35-.63-1.64-.42-.29-.98-.436-1.68-.436h-2.61v3.99zm-9.26 5.61c.75 0 1.36-.18 1.83-.54.47-.36.7-.896.7-1.61 0-.73-.24-1.25-.72-1.57-.48-.32-1.05-.48-1.71-.48H3.24v4.2h4.44v-.01zm.39-5.88c.68 0 1.22-.13 1.63-.39.41-.26.62-.74.62-1.44 0-.71-.23-1.17-.69-1.4-.46-.23-1-.346-1.62-.346H3.24v3.576h4.83zm8.1-6.642h4.97v1.02h-4.97v-1.02z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sulaiman-kuttasseri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/sulaiman_kuttasseri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/solomendesignstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form - Staggered Animation */}
            <motion.div
              ref={formInViewRef}
              variants={staggerContainer}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              <motion.h3
                variants={fadeUp}
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-white"
                style={{ fontFamily: "'TASA Explorer', serif" }}
              >
                Send Me a Message
              </motion.h3>

              <form 
                ref={formElementRef}
                onSubmit={handleSubmit} 
                className="space-y-5 sm:space-y-6"
              >
                
                {/* Name */}
                <motion.div variants={fadeUp}>
                  <label
                    htmlFor="name"
                    className="block text-neutral-400 text-sm mb-2"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-neutral-900/30 border border-neutral-800/50 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700/50 transition-colors text-sm sm:text-base"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                    placeholder="John Doe"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeUp}>
                  <label
                    htmlFor="email"
                    className="block text-neutral-400 text-sm mb-2"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-neutral-900/30 border border-neutral-800/50 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700/50 transition-colors text-sm sm:text-base"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                    placeholder="john@example.com"
                  />
                </motion.div>

                {/* Subject */}
                <motion.div variants={fadeUp}>
                  <label
                    htmlFor="subject"
                    className="block text-neutral-400 text-sm mb-2"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-neutral-900/30 border border-neutral-800/50 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700/50 transition-colors text-sm sm:text-base"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={fadeUp}>
                  <label
                    htmlFor="message"
                    className="block text-neutral-400 text-sm mb-2"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-neutral-900/30 border border-neutral-800/50 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700/50 transition-colors resize-none text-sm sm:text-base"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  variants={fadeUp}
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neutral-800 to-neutral-700 border-2 border-neutral-700 rounded-lg text-white font-semibold tracking-wide hover:border-neutral-600 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group text-sm sm:text-base"
                  style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: "1.5px" }}
                >
                  SEND MESSAGE
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>

              </form>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;
