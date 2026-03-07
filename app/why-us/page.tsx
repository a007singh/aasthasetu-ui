import React from 'react';

// Aastha Setu Core Values
const features = [
  {
    title: 'Trusted & Authentic Pandits',
    description:
      'We act as a sacred bridge connecting you with highly experienced and knowledgeable Pandits. Every Vedic ritual is performed with absolute authenticity and precise adherence to ancient scriptures.',
    icon: (
      <svg className="w-8 h-8 text-sunset-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Seamless Arrangements',
    description:
      'From sourcing the purest Puja Samagri to arranging divine floral decorations and traditional catering, we handle every detail so you can focus entirely on your devotion.',
    icon: (
      <svg className="w-8 h-8 text-sunset-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Rooted in Tradition & Purity',
    description:
      'Purity is at the heart of our service. We uphold strict traditional standards in all our preparations, ensuring your auspicious occasion is blessed with the utmost sanctity and respect.',
    icon: (
      <svg className="w-8 h-8 text-sunset-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Spiritually Uplifting',
    description:
      'Our ultimate purpose is to deeply honor your rituals. We coordinate every ceremony with profound devotion and care, creating a peaceful, divine atmosphere for your family and guests.',
    icon: (
      <svg className="w-8 h-8 text-sunset-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default function WhyUsPage() {
  return (
    <main className="min-h-screen font-sans text-cream-light selection:bg-sunset selection:text-white relative">
      
      {/* Pure CSS Background - Matches Homepage exactly */}
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

      {/* Header / Logo Section (Links back to home) */}
      <header className="absolute top-1 left-1 md:top-1 md:left-1 z-50">
        <a href="/">
          <img 
            src="/logo.png" 
            alt="Aastha Setu Logo" 
            className="h-24 md:h-50 w-auto mix-blend-multiply contrast-125 opacity-90 hover:opacity-100 transition-opacity cursor-pointer drop-shadow-sm"
          />
        </a>
      </header>

      {/* NEW: Premium Top Right Navigation Pill (Desktop & Tablet) */}
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

        <a 
          href="/testimonials" 
          className="font-sans font-medium text-sm text-white hover:text-sunset-light transition-colors duration-300 tracking-wide"
        >
          Testimonials
        </a>

        {/* Elegant Divider */}
        <div className="w-px h-4 bg-white/50"></div>

        
        {/* Call Option */}
        <a 
          href="tel:+919876543210" 
          className="group flex items-center gap-2 text-white hover:text-sunset-light transition-colors duration-300"
        >
          <svg className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="font-sans font-medium text-sm tracking-wide">+91 98765 43210</span>
        </a>

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
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.097 3.097 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61586128941791" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-sunset-light transition-transform duration-300 hover:scale-110 drop-shadow-sm"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto pt-30 pb-24 px-6 text-center relative z-10">
        
        {/* Header Title Section */}
        <div className="mx-auto max-w-3xl text-center mb-60">
          {/* <span className="font-serif inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-white/10 backdrop-blur-sm border border-white/20 text-cream-light tracking-wide drop-shadow-sm mb-4 uppercase">
            Why Aastha Setu
          </span> */}

          {/* ADDED: font-serif for the majestic main heading */}
          <h1 className="font-serif text-5xl md:text-6xl mb-4 font-light tracking-tight leading-tight text-white drop-shadow-hero">
          Why Aastha Setu ?
          </h1>

          <p className="font-serif text-xl md:text-2xl text-warm-gray/90 mb-16 max-w-3xl mx-auto drop-shadow-md font-semibold leading-relaxed">
            Rooted in tradition and purity, we ensure seamless arrangements with the utmost care, honoring your rituals and creating spiritually uplifting experiences.
          </p>
        </div>

        {/* Themed Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="font-serif font-semibold group relative p-8 bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-300 hover:bg-black/30 hover:border-white/25 hover:-translate-y-1 shadow-2xl"
            >
              <div className="flex items-center gap-x-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 shadow-inner border border-white/10 transition-colors duration-300 group-hover:bg-white/20">
                  {feature.icon}
                </div>
                {/* ADDED: font-serif so the card titles match the main heading */}
                <h3 className="font-serif text-2xl text-charcoal-muted font-semibold tracking-wide text-cream-light drop-shadow-sm">
                  {feature.title}
                </h3>
              </div>
              <p className="font-serif text-lg text-white mb-8 flex-grow leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* Modern Floating Glass Footer & Social Links */}
      <footer className="w-full pb-12 pt-8 flex flex-col items-center justify-center relative z-10">
        
        {/* NEW: Container for Side-by-Side Contact Pills */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          
          {/* 1. Mobile Number / Call Us Pill */}
          <a 
            href="tel:+919876543210" 
            className="group flex items-center space-x-4 bg-black/30 hover:bg-black/40 backdrop-blur-md px-6 py-3 md:py-4 rounded-full border border-white/15 hover:border-sunset/50 transition-all duration-300 shadow-2xl"
          >
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 group-hover:bg-sunset transition-colors duration-300 shadow-sm border border-white/10">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-cream-light text-white font-normal text-sm md:text-base tracking-wide drop-shadow-sm transition-colors">
              +91 98765 43210
            </span>
          </a>

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
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.097 3.097 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Facebook Logo */}
            <a 
              href="https://www.facebook.com/profile.php?id=61586128941791" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-sunset-light transition-all duration-300 transform hover:scale-110 drop-shadow-md hover:drop-shadow-glow"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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