"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Mock Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    ceremony: "Griha Pravesh & Vastu Shanti",
    text: "The entire arrangement was incredibly authentic. Our Sarthi handled everything from the Samagri to the floral decor. The Panditji explained the meaning behind every mantra, making our housewarming deeply spiritual.",
    avatar: "/user-1.jpg", 
    reviewImage: "", 
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya & Vikram",
    location: "Delhi",
    ceremony: "Marriage Ceremony",
    text: "We wanted a traditional Vedic wedding without the stress of coordinating the rituals. The Aastha Setu team was an absolute blessing. They respected our traditions and created a truly divine atmosphere.",
    avatar: "", 
    reviewImage: "/wedding-mandap.jpg", 
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Desai",
    location: "Bengaluru",
    ceremony: "Maha Rudrabhishek",
    text: "I was struggling to find a knowledgeable Pandit in my new city. Aastha Setu not only connected me with an excellent Acharya but also ensured the entire process was frictionless.", 
    avatar: "/user-2.jpg",
    reviewImage: "", 
    rating: 5,
  },
  {
    id: 4,
    name: "Dr. Meera Iyer",
    location: "Chennai",
    ceremony: "Satyanarayan Katha",
    text: "Purity and punctuality are very important to my family. The Panditji arrived exactly on time, and the quality of the Puja materials provided was premium. A truly uplifting experience.",
    avatar: "", 
    reviewImage: "",
    rating: 5,
  },
];

export default function EditorialTestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // NEW: State to control the mobile dropdown menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Logic
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const current = testimonials[currentIndex];

  return (
    <main className="min-h-screen font-sans text-cream-light selection:bg-sunset selection:text-white relative flex flex-col overflow-x-hidden pb-12">
      
      {/* Pure CSS Background */}
      <div 
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#53A5C5' 
        }}
      />

      {/* Header / Logo Section */}
      <header className="absolute top-1 left-1 md:top-1 md:left-1 z-40">
        <a href="/">
          <img 
            src="/logo.png" 
            alt="Aastha Setu Logo" 
            className="h-24 md:h-50 w-auto mix-blend-multiply contrast-125 opacity-90 hover:opacity-100 transition-opacity cursor-pointer drop-shadow-sm"
          />
        </a>
      </header>

      {/* =========================================================
          MOBILE TOP RIGHT CONTROLS (Hamburger Menu & Quick Call) 
          Visible ONLY on mobile screens (md:hidden)
          ========================================================= */}
      <div className="absolute top-4 right-4 z-[60] flex md:hidden items-center gap-3">
        {/* Quick Call Icon for Mobile */}
        <a 
          href="tel:+919876543210"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-xl active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* Hamburger Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-xl active:scale-95 transition-transform"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[55] bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="absolute top-16 right-4 w-64 bg-black/70 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-5 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()} 
          >
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium tracking-wide text-lg border-b border-white/10 pb-3">Home</a>
            <a href="/ceremonies" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium tracking-wide text-lg border-b border-white/10 pb-3">Explore</a>
            <a href="/why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium tracking-wide text-lg border-b border-white/10 pb-3">Why Aastha Setu</a>
            
            <div className="flex flex-col gap-3 pb-3 border-b border-white/10 pt-1">
              <span className="text-sunset-light text-xs font-bold uppercase tracking-wider">Call Us</span>
              <a href="tel:+919876543210" className="text-white text-base tracking-wide flex items-center gap-2 hover:text-sunset-light transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 +91 98765 43210
              </a>
              {/* <a href="tel:+919123456789" className="text-white text-base tracking-wide flex items-center gap-2 hover:text-sunset-light transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 +91 91234 56789
              </a> */}
            </div>

            <div className="flex items-center gap-5 pt-2">
              <a href="https://www.instagram.com/aasthasetu_saarthi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sunset-light transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.097 3.097 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61586128941791" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sunset-light transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          DESKTOP TOP RIGHT NAVIGATION PILL
          Hidden on mobile, visible from tablet upwards (hidden md:flex)
          ========================================================= */}
      <div className="absolute top-6 right-6 md:top-8 md:right-10 z-50 hidden md:flex items-center gap-5 bg-black/20 hover:bg-black/30 backdrop-blur-md border border-white/15 shadow-xl rounded-full px-6 py-2.5 transition-all duration-300">

        {/* Home Link */}
        <a 
          href="/" 
          className="font-sans font-medium text-sm text-white hover:text-sunset-light transition-colors duration-300 tracking-wide"
        >
          Home
        </a>
        
        {/* Elegant Divider */}
        <div className="w-px h-4 bg-white/50"></div>

        {/* Explore Link */}
        <a 
          href="/ceremonies" 
          className="font-sans font-medium text-sm text-white hover:text-sunset-light transition-colors duration-300 tracking-wide"
        >
          Explore
        </a>
        
        {/* Elegant Divider */}
        <div className="w-px h-4 bg-white/50"></div>

      {/* Why Us Link */}
        <a 
          href="/why-us" 
          className="font-sans font-medium text-sm text-white hover:text-sunset-light transition-colors duration-300 tracking-wide"
        >
          Why Aastha Setu
        </a>

        {/* Elegant Divider */}
        <div className="w-px h-4 bg-white/50"></div>
        
        {/* Call Option */}
        <div className="group flex items-center gap-2 text-white">
          <svg className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div className="flex items-center gap-2">
            <a href="tel:+919876543210" className="font-sans font-medium text-sm tracking-wide hover:text-sunset-light transition-colors duration-300">
              +91 98765 43210
            </a>
            {/* <span className="text-white/30 text-xs">|</span>
            <a href="tel:+919123456789" className="font-sans font-medium text-sm tracking-wide hover:text-sunset-light transition-colors duration-300">
              +91 91234 56789
            </a> */}
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="w-px h-4 bg-white/50"></div>

        {/* Socials Cluster */}
        <div className="flex items-center gap-3">
          <a 
            href="https://www.instagram.com/aasthasetu_saarthi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-sunset-light transition-transform duration-300 hover:scale-110 drop-shadow-sm"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.097 3.097 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61586128941791" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-sunset-light transition-transform duration-300 hover:scale-110 drop-shadow-md hover:drop-shadow-glow"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto pt-30 pb-24 px-6 text-center relative z-10">
        <h1 className="font-serif text-5xl md:text-6xl mb-4 font-light tracking-tight leading-tight text-white drop-shadow-hero">
        Voice Of Devotees.
        </h1>
      </section>

      {/* Main Framed Content Area */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex-grow flex flex-col justify-center">
        
        {/* The Master Presentation Frame */}
        <div className="relative w-full rounded-[2.5rem] bg-black/20 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden p-8 md:p-12 lg:p-16">
          
          {/* Subtle Inner Glow Border Effect */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none"></div>

          {/* Dynamic Content Wrapper (Handles Animations) */}
          <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'} flex flex-col lg:flex-row gap-12 lg:gap-20 items-center`}>
            
            {/* Text & Details Column */}
            <div className={`flex-1 flex flex-col w-full ${current.reviewImage ? 'text-left' : 'text-center items-center mx-auto max-w-4xl'}`}>
              
              {/* Elegant Quote Icon */}
              <div className={`mb-6 ${current.reviewImage ? '' : 'mx-auto'}`}>
                <svg className="w-12 h-12 md:w-16 md:h-16 text-sunset/40 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Constrained Text */}
              <h2 className={`font-serif text-white font-light leading-relaxed md:leading-snug drop-shadow-sm mb-10 ${current.reviewImage ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-3xl md:text-4xl lg:text-5xl'}`}>
                "{current.text}"
              </h2>

              {/* Author Details (Avatar + Name) */}
              <div className={`flex items-center gap-5 mt-auto ${current.reviewImage ? '' : 'justify-center'}`}>
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-sunset/30 shadow-lg flex-shrink-0 bg-gradient-to-br from-deep-ocean to-black">
                  {current.avatar ? (
                    <img 
                      src={current.avatar} 
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sunset-light font-serif font-semibold text-xl md:text-2xl">
                      {current.name.charAt(0)}
                    </div>
                  )}
                </div>
                
                <div className={current.reviewImage ? 'text-left' : 'text-left'}>
                  <div className="font-sans text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-sm mb-0.5">
                    {current.name}
                  </div>
                  <div className="font-sans text-sunset-light text-xs md:text-sm font-medium tracking-wide uppercase">
                    {current.ceremony} <span className="text-white/40 mx-1.5">|</span> {current.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Right Side: Image with Frame */}
            {current.reviewImage && (
              <div className="w-full lg:w-2/5 flex-shrink-0">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white/5 border border-white/20 shadow-2xl p-2">
                  <img 
                    src={current.reviewImage} 
                    alt="Ceremony Moment" 
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mt-12 mb-8"></div>

          {/* Navigation Controls (Inside the Frame at the Bottom) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
            
            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setCurrentIndex(idx);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx 
                      ? 'w-10 h-2 bg-sunset shadow-[0_0_10px_rgba(255,153,51,0.5)]' 
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePrev}
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white shadow-md transition-all duration-300 hover:-translate-x-1"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 pr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={handleNext}
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white shadow-md transition-all duration-300 hover:translate-x-1"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 pl-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Modern Floating Glass Footer & Social Links */}
      <footer className="w-full pb-12 pt-8 flex flex-col items-center justify-center relative z-10">
        
        {/* NEW: Container for Side-by-Side Contact Pills */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          
          {/* 1. Mobile Number / Call Us Pill */}
          <div className="group flex items-center space-x-4 bg-black/30 hover:bg-black/40 backdrop-blur-md px-6 py-3 md:py-4 rounded-full border border-white/15 hover:border-sunset/50 transition-all duration-300 shadow-2xl">
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 group-hover:bg-sunset transition-colors duration-300 shadow-sm border border-white/10">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-cream-light text-white font-normal text-sm md:text-base tracking-wide drop-shadow-sm">
              <a href="tel:+919876543210" className="hover:text-sunset-light transition-colors duration-300">
                +91 98765 43210
              </a>
              {/* <span className="hidden md:inline text-white/30 text-xs">|</span>
              <a href="tel:+919123456789" className="hover:text-sunset-light transition-colors duration-300">
                +91 91234 56789
              </a> */}
            </div>
          </div>

          {/* 2. Existing Socials Pill */}
          <div className="flex items-center space-x-6 bg-black/30 backdrop-blur-md px-8 py-4 rounded-full border border-white/15 shadow-2xl">
            <span className="font-serif relative z-10 text-white text-cream-light group-hover:text-black font-semibold tracking-wide text-lg transition-colors duration-300 drop-shadow-sm">
              Connect with us
            </span>
            
            {/* Instagram Logo */}
            <a 
              href="https://www.instagram.com/aasthasetu_saarthi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-sunset-light transition-all duration-300 transform hover:scale-110 drop-shadow-md hover:drop-shadow-glow"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.097 3.097 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>

          {/* Facebook Logo */}
          <a 
            href="https://www.facebook.com/profile.php?id=61586128941791" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-sunset-light transition-transform duration-300 hover:scale-110 drop-shadow-md hover:drop-shadow-glow"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright Text */}
      <p className="font-serif text-white/100 text-x1 mt-6 tracking-wide drop-shadow-md font-bold">
        © {new Date().getFullYear()} Aastha Setu. All rights reserved.
      </p>

      </footer>

    </main>
  );
}