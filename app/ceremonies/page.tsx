"use client";
import React, { useState, useRef } from 'react';
import PoojaCard from '@/components/PoojaCard';

export default function CeremoniesCatalog() {

  // NEW: Reference to the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // NEW: Scroll function for the left/right buttons
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Get the width of one card + gap to scroll exactly one item at a time
      const scrollAmount = window.innerWidth > 768 ? 432 : 320; 
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen font-sans text-cream-light selection:bg-sunset selection:text-white relative pb-24 overflow-x-hidden">
      
      {/* Pure CSS Background - Matches your exact theme */}
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

      {/* Premium Top Right Navigation Pill (Desktop & Tablet) */}
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

        {/* Why Us Link */}
        <a 
          href="/why-us" 
          className="font-sans font-medium text-sm text-white hover:text-sunset-light transition-colors duration-300 tracking-wide"
        >
          Why Aastha Setu
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
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.097 3.097 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>

          {/* Facebook Logo */}
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

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto pt-30 pb-24 px-6 text-center relative z-10">
        <h1 className="font-serif text-5xl md:text-6xl mb-4 font-light tracking-tight leading-tight text-white drop-shadow-hero">
        Explore.
        </h1>
        <p className="font-serif text-xl md:text-2xl text-warm-gray/90 mb-16 max-w-3xl mx-auto drop-shadow-md font-semibold leading-relaxed">
        Find the perfect Vedic ritual for your special occasion. Curated with authenticity and devotion.
        </p>
      </section>

      {/* Modern E-Commerce Carousel Section */}
      <section className="max-w-7xl mx-auto px-6 pb-48 relative z-10">
        <div className="flex items-center justify-between mb-20">
          
        </div>
        
        {/* RE-DESIGNED: Horizontally Scrollable Carousel Wrapper */}
        <div className="relative group flex items-center">
          
          {/* Left Arrow Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 md:-left-6 z-20 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-lg border border-white/20 text-white shadow-2xl transition-all duration-300 opacity-90 hover:scale-110"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7 pr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-2 w-full items-stretch"
          >
            
            <div className="w-[85vw] sm:w-[350px] md:w-[400px] flex-none snap-center flex flex-col h-full">
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
            </div>

            <div className="w-[85vw] sm:w-[350px] md:w-[400px] flex-none snap-center flex flex-col h-full">
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
            </div>

            <div className="w-[85vw] sm:w-[350px] md:w-[400px] flex-none snap-center flex flex-col h-full">
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

            <div className="w-[85vw] sm:w-[350px] md:w-[400px] flex-none snap-center flex flex-col h-full">
              <PoojaCard 
                title="Maha Mrityunjaya Path" 
                price="₹4,500"
                images={[
                  '/Maha_Mrityunjaya_Path.png'
                ]}
                shortdesc="A sacred Vedic chanting dedicated to Lord Shiva, known as the conqueror of death."
                description={`This powerful mantra is recited for protection from serious illnesses, accidents, fear, and negative energies, while promoting healing, longevity, peace, and spiritual growth.

                  It is especially recommended during health challenges, mental stress, planetary imbalances, or as a preventive spiritual practice for overall well-being.

                  Maha Mrityunjaya Mantra (महा मृत्युंजय मंत्र)
                  ॐ त्र्यम्बकं यजामहे, सुगन्धिं पुष्टिवर्धनम्।
                  उर्वारुकमिव बन्धनान्, मृत्योर्मुक्षीय मामृतात्॥

                  Meaning (Hindi):
                  हम त्रिनेत्रधारी भगवान शिव की पूजा करते हैं, 
                  जो सबको सुगंध और पुष्टि (शक्ति) प्रदान करते हैं। 
                  वे हमें मृत्यु के बंधन से मुक्त करें और अमरत्व की 
                  ओर ले जाएं।

                  Meaning (English):
                  We worship the Three-Eyed Lord Shiva, who 
                  nourishes and sustains all beings. May He 
                  liberate us from the bondage of death and 
                  lead us towards immortality.

                  Benefits:
                  - Protection from serious illness and accidents
                  - Healing of body and mind
                  - Longevity and good health
                  - Removal of fear and negative energies
                  - Relief from planetary doshas
                  - Peace, stability, and spiritual growth

                  Jaap Count Options:
                  - Daily Practice: 108 Jaap
                  - Special Purposes:
                    * 11,000 Jaap
                    * 51,000 Jaap
                    * 1,25,000 Jaap (Anushthan)

                  Auspicious Day & Timings:
                  - Early morning (Brahma Muhurat)
                  - Monday
                  - Pradosh Kaal `}
              />
            </div>

            <div className="w-[85vw] sm:w-[350px] md:w-[400px] flex-none snap-center flex flex-col h-full">
              <PoojaCard 
                title="Namakaran Sanskar Puja" 
                price="₹4,500"
                images={[
                  '/Namakaran_Sanskar_Puja.png'
                ]}
                shortdesc="One of the most important Hindu sanskars, performed to formally bestow a name upon a newborn child."
                description={`This sacred ceremony invokes divine blessings, purifies the child, and marks their spiritual and social identity within the family and lineage.

                  Performed with Vedic mantras and traditional rituals, Namakaran Sanskar seeks blessings for the child’s good health, long life, prosperity, and overall well-being, while introducing the child to relatives and society in an auspicious manner.

                  Importance:
                  - Purifies and blesses the newborn
                  - Invokes divine protection and positive energies
                  - Ensures good health, prosperity, and long life
                  - Formally introduces the child to family and lineage

                  Auspicious Day & Timings:
                  - Commonly performed on the 11th, 12th, or 21st day after birth
                  - Can also be done on any auspicious muhurat, as advised by Panditji
                  - Preferably conducted in the morning `}
              />
            </div>

            <div className="w-[85vw] sm:w-[350px] md:w-[400px] flex-none snap-center flex flex-col h-full">
              <PoojaCard 
                title="Sundarkand Path" 
                price="₹4,500"
                images={[
                  '/Sundarkand_Path_1.png'
                ]}
                shortdesc="Sundarkand Path is the 5th chapter of the Ramayana, describing the divine journey of Hanuman ji to Lanka — finding Mata Sita, burning Lanka, and delivering Shri Ram’s message."
                description={`This sacred ceremony invokes divine blessings, purifies the child, and marks their spiritual and social identity within the family and lineage.

                  Regular recitation of Sundarkand invokes the blessings of Hanuman ji, Shri Ram, and Mata Sita, helping devotees overcome fear, negativity, and obstacles while bringing peace, prosperity, and strength.

                  Benefits:
                  - Removal of obstacles and negative energies
                  - Protection from evil, fear, and black magic
                  - Peace and prosperity in the home
                  - Courage, strength, and self-confidence
                  - Quick solutions to ongoing problems
                  - Relief from Shani, Rahu, and Ketu doshas
                  - Divine grace of Hanuman ji, Shri Ram & Mata Sita

                  Auspicious Day & Timings:
                  - Tuesdays and Saturdays (especially auspicious for Hanuman ji)
                  - Early morning (Brahma Muhurat)
                  - Evening after sunset (Shubh time)

                  Special Rules for Wish Fulfillment (Sankalp Path):
                  - 7-Day Sundarkand Path – Daily recitation for 7 consecutive days
                  - 5 Tuesday Path – Every Tuesday for 5 weeks
                  - 40-Day Sadhana – Daily path with diya and Sankalp `}
              />
            </div>

            <div className="w-[85vw] sm:w-[350px] md:w-[400px] flex-none snap-center flex flex-col h-full">
              <PoojaCard 
                title="Navgrah Shanti Puja" 
                price="₹4,500"
                images={[
                  '/Navgrah_Shanti_Puja.png'
                ]}
                shortdesc="A sacred Vedic ritual performed to appease the nine planets (Navagrahas) and balance their influence in one’s horoscope."
                description={`When planetary positions cause obstacles, delays, or instability in life, this puja helps reduce their negative effects and brings harmony, peace, and progress.

                  It is especially recommended for individuals facing doshas, health concerns, career blocks, marriage delays, or financial and business challenges.

                  The Nine Planets (Navgrahas):
                  - Surya – Sun
                  - Chandra – Moon
                  - Mangal – Mars
                  - Budh – Mercury
                  - Guru – Jupiter
                  - Shukra – Venus
                  - Shani – Saturn
                  - Rahu
                  - Ketu

                  When is Navgrah Shanti Puja Recommended?:
                  - Kundli Dosha
                  - Sade Sati & Shani Dhaiya
                  - Mangal Dosha
                  - Rahu–Ketu Dosha
                  - Delay in marriage
                  - Health-related issues
                  - Business & financial problems
                  - Career obstacles and instability

                  Pooja Vidhi (Ritual Steps):
                  - Ganesh Poojan
                  - Kalash Sthapana
                  - Navgrah Avahan
                  - Navgrah Mantra Japa
                  - Havan
                  - Purnahuti
                  - Aarti
                  - Prasad Distribution

                  Auspicious Day & Timings:
                  - Monday, Thursday, Saturday
                  - Shukla Paksha 
                  
                  Pandit Ji Requirement:
                  - 1 to 9 Pandits, depending on horoscope and ritual scale `}
              />
            </div>

            <div className="w-[85vw] sm:w-[350px] md:w-[400px] flex-none snap-center flex flex-col h-full">
              <PoojaCard 
                title="Durga Path (Chandi / Durga Saptashati Path)" 
                price="₹4,500"
                images={[
                  '/Durga_Path.png'
                ]}
                shortdesc="A highly potent Vedic recitation dedicated to Maa Durga."
                description={`It is performed to seek divine protection, courage, success, and victory over obstacles and negative forces.

                  This sacred path is especially recommended during Navratri, as well as on birthdays, anniversaries, new beginnings, or during challenging phases of life involving health, finances, legal matters, or enemy troubles.

                  Significance:
                  - Removes fear, negativity, and obstacles
                  - Brings divine protection, prosperity, and success
                  - Enhances confidence, courage, and spiritual energy
                  - Beneficial for health issues, legal disputes, financial stress, and enemy-related problems
                  - Highly auspicious during Navratri, Ashtami, and Navami

                  Main Scriptures Recited:
                  - Durga Saptashati (700 Shlokas)
                  - Devi Mahatmyam from Markandeya Puran
                  - Kavach, Argala Stotra & Kilak

                  Types of Durga Path:
                  - Ek Path – Single recitation
                  - 3 Path – For quick results
                  - 7 Path – For strong protection
                  - 9 Path – For major obstacles
                  - 11, 21, 51, 108 Paths – For special wishes and siddhi
                  - Sampoorna Chandi Path – Complete ritual with homam (havan)

                  Duration of Puja:
                  - Single Path: 1.5 – 2 hours
                  - Sampoorna Chandi Path with Havan: 4 – 6 hours
                  - Multiple Paths: Conducted over multiple days as per count

                  Auspicious Day & Timings:
                  - Navratri (all 9 days)
                  - Ashtami & Navami
                  - Tuesdays & Fridays`}
              />
            </div>

            <div className="w-[85vw] sm:w-[350px] md:w-[400px] flex-none snap-center flex flex-col h-full">
              <PoojaCard 
                title="Bhajan Mandali" 
                price="₹4,500"
                images={[
                  '/Bhajan_Mandali.png'
                ]}
                shortdesc="A traditional devotional group of singers and musicians who perform bhajans, kirtans, and aartis in praise of God."
                description={`Rooted in Indian spiritual and cultural traditions, Bhajan Mandali programs uplift the mind, spread devotion, and create an atmosphere of peace, unity, and spiritual awareness.

                  These programs are ideal for religious functions, festivals, and family ceremonies, bringing people together through devotion and divine music.

                  Purpose:
                  - Spread spiritual knowledge and devotion (Bhakti)
                  - Conduct bhajan, kirtan, and satsang sessions
                  - Participate in religious ceremonies and festivals
                  - Promote Indian spiritual and cultural values
                  - Encourage youth participation in devotional activities

                  Members of Bhajan Mandali
                  A typical mandali includes:
                  - Lead Singer (Mukhiya / Gayak)
                  - Chorus Singers
                  - Harmonium Player
                  - Tabla / Dholak Player
                  - Manjira Player
                  - Sound System Operator (if required)

                  Occasions:
                  - Satyanarayan Pooja
                  - Griha Pravesh (House Warming)
                  - Navratri
                  - Ram Navami
                  - Janmashtami
                  - Shivratri
                  - Kirtan & Satsang Programs
                  - Shraddh / Terahvi Bhajan

                  Duration of Programs:
                  - Short Program: 1 – 2 hours
                  - Medium Program: 3 – 4 hours
                  - Full Night Jagran: 6 – 10 hours `}
              />
            </div>

          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 md:-right-6 z-20 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-lg border border-white/20 text-white shadow-2xl transition-all duration-300 opacity-90 hover:scale-110"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7 pl-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </section>

      {/* Modern Floating Glass Footer & Social Links */}
      <footer className="w-full pb-12 pt-8 flex flex-col items-center justify-center relative z-10">
        
        {/* Container for Side-by-Side Contact Pills */}
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

      {/* Modernized Trendy Why Us Link */}
      <div className="mt-10 flex items-center justify-center relative z-20">
        <a 
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
        </a>
      </div>

      {/* Copyright Text */}
      <p className="font-serif text-white/100 text-x1 mt-6 tracking-wide drop-shadow-md font-bold">
        © {new Date().getFullYear()} Aastha Setu. All rights reserved.
      </p>

      </footer>

    </main>
  );
}