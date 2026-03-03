"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import PoojaCard from '@/components/PoojaCard';
import ChatDrawer from '@/components/ChatDrawer';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="min-h-screen font-sans text-text-light selection:bg-sunset selection:text-white relative">
      
       {/* Pure CSS Background - Guarantees bottom anchor and zero compression */}
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
      <header className="absolute top-1 left-1 md:top-1 md:left-1 z-50">
        <Link href="/">
          <img 
            src="/logo.png" 
            alt="Aastha Setu Logo" 
            /* THE MAGIC CLASS: mix-blend-multiply 
               This makes the white background of the JPG transparent,
               matching the web page background perfectly.
            */
            className="h-24 md:h-50 w-auto mix-blend-multiply contrast-125 opacity-90 hover:opacity-100 transition-opacity cursor-pointer drop-shadow-sm"
          />
        </Link>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto pt-25 pb-24 px-6 text-center relative z-10">
        {/* <h1 className="text-5xl md:text-6xl mb-2 font-light text-white tracking-tight leading-none drop-shadow-hero text-cream-light">
          Your Bridge to Divine Blessings.
        </h1>
        <p className="text-2xl md:text-3xl text-white/80 text-warm-gray mb-16 max-w-4xl mx-auto drop-shadow-md font-normal leading-relaxed">
          Premium, end-to-end Vedic ceremonies. From experienced Panditjis to the puja materials to the decoration to the final Bhog, we handle it all.
        </p> */}

        <h1 className="font-serif text-5xl md:text-6xl mb-4 font-light tracking-tight leading-tight text-white drop-shadow-hero">
            Your Bridge to Divine Blessings.
        </h1>
        <p className="font-serif text-xl md:text-2xl text-warm-gray/90 mb-16 max-w-3xl mx-auto drop-shadow-md font-semibold leading-relaxed">
          Premium, end-to-end Vedic ceremonies. From experienced Panditjis to the puja materials to the decoration to the final Bhog, we handle it all.
        </p>
        
        {/* Modern Search Bar / Trigger */}
        {/* <div 
          className="relative max-w-3xl mx-auto group cursor-pointer" 
          onClick={() => setIsChatOpen(true)}
        >
          <div className="absolute inset-0 bg-glass-white backdrop-blur-md rounded-full shadow-2xl transition-all group-hover:bg-glass-white-hover border border-white/20"></div>
          <div className="relative flex items-center p-2">
            <span className="pl-6 text-3xl mr-4 drop-shadow">🔍</span>
            <input 
              type="text" 
              placeholder="Would you like to book a Pooja or find Samagri?" 
              className="w-full bg-transparent focus:outline-none text-xl placeholder-gray-200 text-cream-light font-medium py-4 pointer-events-none drop-shadow-sm"
              readOnly
            />
            <button 
              className="bg-gradient-to-r from-sunset to-sunset-dark hover:from-sunset-light hover:to-sunset text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg transform group-hover:scale-105"
            >
              Ask Sarthi ✨
            </button>
          </div>
        </div> */}
      </section>

      {/* Modern E-Commerce Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pb-48 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-serif text-4xl md:text-4xl font-light tracking-tight leading-tight text-white drop-shadow-hero">Popular Ceremonies</h2>
          
          {/* Modernized "View All" Link matching "View Details" style */}
          <Link 
            href="/ceremonies"
            className="group relative inline-flex items-center gap-3 px-6 py-3 bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/15 hover:border-sunset/50 rounded-full transition-all duration-500 ease-out shadow-lg overflow-hidden cursor-pointer"
          >
            {/* Subtle animated shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            <span className="relative z-10 text-white text-cream-light group-hover:text-black font-semibold tracking-wide text-sm transition-colors duration-300 drop-shadow-sm">
              View All
            </span>
            
            {/* Circular icon container that lights up on hover */}
            <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-sunset transition-colors duration-300 border border-white/10 group-hover:border-sunset-light shadow-sm">
              <svg className="w-3.5 h-3.5 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <PoojaCard 
            title="Griha Pravesh & Vastu Shanti" 
            price="₹5,100"
            tag="Bestseller"
            images={[
              '/Grihpravesh_1.png', 
              '/Grihpravesh_2.png',
              '/Grihpravesh_3.png',
              '/Grihpravesh_4.png'
            ]}
            shortdesc="An auspicious Vedic ritual performed before entering a home to purify the space and seek blessings for harmony, health, and prosperity."
            description={`This pooja removes negative energies and ensures a positive and spiritually enriched beginning for the family in their new or renewed home.

              Depending on the situation, Grihpravesh is performed in different forms, each aligned with Vedic traditions and astrological guidelines.
              Types of Grihpravesh Pooja
              - Apoorva Grihpravesh – For entering a newly constructed home for the first time
              - Sapoorva Grihpravesh – For re-entering a home after a period of absence
              - Dwandwah Grihpravesh – After major repairs, renovations, or reconstruction

              Auspicious Day & Timings:
              - Preferred Tithis:
                * Dvitiya, Tritiya, Panchami, Saptami
                * Dashami, Ekadashi, Dwadashi
              - Auspicious Days:
                * Monday, Wednesday, Thursday, Friday
              - Avoid:
                * Amavasya
                * Rahu Kaal`}
          />
          <PoojaCard 
            title="Satynarayan Puja & Katha" 
            price="₹3,100"
            tag="Trending"
            images={[
              '/Satyanarayan_Puja.png'
            ]}
            shortdesc="Invite prosperity, peace and good health into your home with the Satynarayan puja."
            description={`Performed to fulfill wishes or offer thanks, this puja is traditionally observed on auspicious days and is especially recommended on Purnima. It’s perfect for life-events — housewarmings, birthdays, marriages and other celebrations.

              Why choose this puja:
              - Seeks blessings for prosperity, peace and robust health.
              - Helps fulfil personal wishes and express gratitude.
              - Traditionally performed on auspicious occasions and especially meaningful on Purnima.

              Auspicious Day & Timings:
              - Can be performed any day, with special significance on Purnima.
              - Best times: morning or evening. `}
          />
          <PoojaCard 
            title="Rudrabhishek Puja" 
            price="₹4,500"
            images={[
              '/Rudrabhishek_1.png', 
              '/Rudrabhishek_2.png'
            ]}
            shortdesc="Most sacred and powerful rituals dedicated to Lord Shiva."
            description={`Performed with Vedic mantras and holy offerings, this puja helps remove obstacles, cleanse negativity, and bring inner peace, good health, and prosperity to the devotee and family.

              It is highly effective in reducing the effects of Graha Dosh and Pitru Dosh, making it ideal for those facing delays, stress, or recurring challenges in life. The puja holds special significance when performed during auspicious Shiva timings and festivals.

              Why choose this puja:
              - Removes obstacles and negative energies
              - Brings peace, good health, and prosperity
              - Helps reduce Graha Dosh and Pitru Dosh
              - Strengthens spiritual and mental well-being

              Auspicious Day & Timings:
              - Mondays (especially during the holy month of Shravan)
              - Pradosh Kaal
              - Mahashivratri `}
          />
        </div>
      </section>

      {/* The Chat Drawer Component */}
      <ChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

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

        {/* RE-DESIGNED: Modernized Trendy Why Us Link */}
        <div className="mt-10 flex items-center justify-center relative z-20">
          <Link 
            href="/why-us" 
            className="group relative inline-flex items-center gap-4 px-8 py-3.5 bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/15 hover:border-sunset/50 rounded-full transition-all duration-500 ease-out shadow-lg overflow-hidden cursor-pointer"
          >
            {/* Subtle animated shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            <span className="font-serif relative z-10 text-white text-cream-light group-hover:text-black font-semibold tracking-wide text-lg transition-colors duration-300 drop-shadow-sm">
              Discover Why Aastha Setu
            </span>
            
            {/* Circular icon container that lights up on hover */}
            <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-sunset transition-colors duration-300 border border-white/10 group-hover:border-sunset-light shadow-sm">
              <svg className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="font-serif text-white/100 text-x1 mt-6 tracking-wide drop-shadow-md font-bold">
          © {new Date().getFullYear()} Aastha Setu. All rights reserved.
        </p>

      </footer>

    </main>
  );
}