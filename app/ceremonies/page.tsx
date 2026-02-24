"use client";
import React, { useState } from 'react';
import PoojaCard from '@/components/PoojaCard';

// 1. Mock Data (You can later move this to a database or separate file)
const allPoojas = [
  {
    id: 1,
    title: "Griha Pravesh & Vastu Shanti",
    price: "₹5,100",
    category: "Home & Office",
    tag: "Bestseller",
    images: ['/Grihpravesh_3.png', '/Grihpravesh_4.png'],
    description: "The complete auspicious beginning for your new home, including Navagraha Havan and Vastu Shanti to ensure prosperity and remove negative energies."
  },
  {
    id: 2,
    title: "Satyanarayan Katha Premium",
    price: "₹3,100",
    category: "Special Occasions",
    tag: "Trending",
    images: [], // Falls back to your beautiful gradient placeholder
    description: "Invite prosperity and peace with a beautifully arranged Katha. Perfect for birthdays, anniversaries, or general thanksgiving."
  },
  {
    id: 3,
    title: "Maha Rudrabhishek",
    price: "₹4,500",
    category: "Deity Worship",
    images: [],
    description: "A powerful and elaborate Shiva pooja performed with all required premium samagri, chanting of the Rudram, and offering of holy items."
  },
  {
    id: 4,
    title: "Namakaran Sanskar",
    price: "₹4,100",
    category: "Personal Rituals",
    images: [],
    description: "The sacred naming ceremony for your newborn, performed with absolute purity to seek divine blessings for the child's future."
  },
  {
    id: 5,
    title: "Office Opening Pooja",
    price: "₹5,500",
    category: "Home & Office",
    images: [],
    description: "Start your new business venture with the blessings of Lord Ganesha and Goddess Lakshmi for immense growth and success."
  }
];

// The Categories for your Filter Bar
const categories = ["All", "Bestsellers", "Home & Office", "Personal Rituals", "Deity Worship", "Special Occasions"];

export default function CeremoniesCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const filteredPoojas = allPoojas.filter(pooja => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Bestsellers") return pooja.tag === "Bestseller" || pooja.tag === "Trending";
    return pooja.category === activeCategory;
  });

  return (
    <main className="min-h-screen font-sans text-cream-light selection:bg-sunset selection:text-white relative pb-24">
      
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
      <header className="absolute top-6 left-6 md:top-8 md:left-10 z-50">
        <a href="/">
          <img 
            src="/logo.png" 
            alt="Aastha Setu Logo" 
            className="h-24 md:h-32 w-auto mix-blend-multiply contrast-125 opacity-90 hover:opacity-100 transition-opacity cursor-pointer drop-shadow-sm"
          />
        </a>
      </header>

      {/* Hero Section for the Catalog */}
      <section className="pt-40 pb-12 px-6 text-center relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-hero text-cream-light mb-6">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-light to-sunset drop-shadow-glow">Ceremonies</span>
        </h1>
        <p className="text-xl md:text-2xl text-warm-gray drop-shadow-md font-medium leading-relaxed">
          Find the perfect Vedic ritual for your special occasion. Curated with authenticity and devotion.
        </p>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-40 bg-black/10 backdrop-blur-md border-y border-white/10 shadow-sm mb-12">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex overflow-x-auto scrollbar-hide gap-3 py-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-sunset text-white border-sunset shadow-lg scale-105'
                    : 'bg-white/10 text-cream-light border-white/20 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* The Grid */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Results Count Summary */}
        <div className="mb-8 text-warm-gray font-medium flex items-center justify-between">
          <p>Showing {filteredPoojas.length} {filteredPoojas.length === 1 ? 'ceremony' : 'ceremonies'}</p>
        </div>

        {/* Dynamic Grid using your existing PoojaCard component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPoojas.map((pooja) => (
            <div key={pooja.id} className="animate-fade-in-up">
              <PoojaCard 
                title={pooja.title}
                shortdesc={pooja.description}
                description={pooja.description}
                price={pooja.price}
                tag={pooja.tag}
                images={pooja.images}
              />
            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredPoojas.length === 0 && (
          <div className="text-center py-20 bg-black/20 backdrop-blur-md rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-cream-light mb-2">No ceremonies found</h3>
            <p className="text-warm-gray">Try selecting a different category from above.</p>
          </div>
        )}
      </section>

    </main>
  );
}