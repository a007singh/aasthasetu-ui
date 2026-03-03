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

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto pt-25 pb-24 px-6 text-center relative z-10">
        
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                <h3 className="font-serif text-2xl text-white font-semibold tracking-wide text-cream-light drop-shadow-sm">
                  {feature.title}
                </h3>
              </div>
              <p className="font-serif text-xl text-charcoal-muted text-base mb-8 flex-grow leading-relaxed font-semibold">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}