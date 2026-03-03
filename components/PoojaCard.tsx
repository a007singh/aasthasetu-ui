"use client";
import React, { useState, useEffect } from 'react';

interface PoojaCardProps {
  title: string;
  shortdesc: string;
  description: string;
  price: string;
  tag?: string;
  images?: string[]; 
}

export default function PoojaCard({ title, shortdesc, description, price, tag, images = [] }: PoojaCardProps) {
  const [needsPandit, setNeedsPandit] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // State for the image slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent background scrolling when the drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  // Image Navigation Handlers
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* --- ORIGINAL MAIN CARD --- */}
      <div 
        className="group relative bg-glass-white backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl hover:shadow-sunset/20 transition-all duration-300 hover:-translate-y-3 flex flex-col h-full overflow-hidden cursor-pointer"
        onClick={() => setIsDrawerOpen(true)}
      >
        
        {tag && (
          <span className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-3xl z-20 shadow-sm">
            {tag}
          </span>
        )}

        {/* Modern Image Carousel for Card */}
        <div className="relative w-full h-60 rounded-2xl mb-6 overflow-hidden group-hover:opacity-95 transition-opacity border border-white/10 bg-gradient-to-tr from-ocean-dark/20 to-sunset-light/20 shadow-inner">
          {images.length > 0 ? (
            <>
              {/* Sliding Image Track */}
              <div 
                className="flex w-full h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {images.map((img, index) => (
                  <div key={index} className="flex-shrink-0 w-full h-full flex items-center justify-center p-2">
                    {/* CHANGED: object-cover to object-contain */}
                    <img 
                      src={img} 
                      alt={`${title} image ${index + 1}`} 
                      className="w-full h-full object-contain drop-shadow-md" 
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 z-10"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 z-10"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex ? 'w-5 bg-white shadow-sm' : 'w-1.5 bg-white/50 hover:bg-white/80'
                        }`} 
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-deep-ocean/50 z-10 font-bold tracking-widest">
              IMAGE
            </div>
          )}
        </div>
        
        <h3 className="font-serif text-2xl text-white font-semibold mb-4 text-deep-ocean tracking-tight leading-tight drop-shadow-hero">{title}</h3>
        
        <p className="font-serif text-xl text-charcoal-muted text-base mb-8 flex-grow leading-relaxed font-bold">
          {shortdesc}
        </p>
        
        {/* <div 
          className="bg-deep-ocean/5 p-4 rounded-2xl flex items-center justify-between mb-8 border border-deep-ocean/10"
          onClick={(e) => e.stopPropagation()} 
        >
          <span className="text-sm font-bold text-deep-ocean">Include Experienced Panditji?</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={needsPandit}
              onChange={() => setNeedsPandit(!needsPandit)}
            />
            <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-sunset peer-checked:to-sunset-dark shadow-inner"></div>
          </label>
        </div> */}

        <div className="flex items-end justify-between mt-auto pt-4 border-t border-deep-ocean/10">
          {/* <div>
            <span className="text-xs text-charcoal-muted font-bold uppercase tracking-wider block mb-1">Starting from</span>
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sunset to-sunset-dark drop-shadow-sm">{price}</span>
          </div> */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsDrawerOpen(true);
            }}
            className="group relative inline-flex items-center gap-3 px-6 py-3 bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/15 hover:border-sunset/50 rounded-full transition-all duration-500 ease-out shadow-lg overflow-hidden cursor-pointer"
          >
            {/* Subtle animated shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            <span className="relative z-10 text-white text-cream-light group-hover:text-black font-semibold tracking-wide text-sm transition-colors duration-300 drop-shadow-sm">
              View Details
            </span>
            
            {/* Circular icon container that lights up on hover */}
            <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-sunset transition-colors duration-300 border border-white/10 group-hover:border-sunset-light shadow-sm">
              <svg className="w-3.5 h-3.5 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* --- SLIDE DRAWER --- */}
      <div 
        className={`fixed inset-0 bg-deep-ocean/60 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[32rem] shadow-2xl z-[110] transform transition-transform duration-500 ease-in-out flex flex-col ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#53A5C5' 
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-xl"></div>

        <div className="relative z-10 flex flex-col h-full">
          
          <div className="flex items-center justify-between p-6 border-b border-deep-ocean/10 bg-white/30 backdrop-blur-md">
            <h2 className="font-serif text-2xl font-semibold text-deep-ocean tracking-tight">{title}</h2>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="text-deep-ocean/70 hover:text-deep-ocean bg-white/50 hover:bg-white rounded-full p-2 transition-all shadow-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            
            {/* Modern Image Carousel for Drawer */}
            <div className="relative w-full h-64 rounded-2xl mb-8 overflow-hidden border border-white/40 shadow-sm bg-gradient-to-tr from-ocean-dark/20 to-sunset-light/20 group">
              {images.length > 0 ? (
                <>
                  <div 
                    className="flex w-full h-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {images.map((img, index) => (
                      <div key={index} className="flex-shrink-0 w-full h-full flex items-center justify-center p-2">
                        {/* CHANGED: object-cover to object-contain */}
                        <img 
                          src={img} 
                          alt={`${title} detailed image ${index + 1}`} 
                          className="w-full h-full object-contain drop-shadow-md rounded-xl" 
                        />
                      </div>
                    ))}
                  </div>

                  {images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg z-10"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg z-10"
                        aria-label="Next image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Dot Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {images.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx === currentImageIndex ? 'w-6 bg-white shadow-sm' : 'w-2 bg-white/50 hover:bg-white/80'
                            }`} 
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-deep-ocean/60 font-bold tracking-widest">
                  IMAGE PREVIEW
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 mb-6">
            <span className="text-charcoal-muted text-sm font-medium flex items-center gap-1 bg-white/40 px-3 py-1.5 rounded-full">
                {price}
              </span>
              <span className="text-charcoal-muted text-sm font-medium flex items-center gap-1 bg-white/40 px-3 py-1.5 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Approx 2-3 Hours
              </span>
            </div>

            <div className="font-serif font-bold text-x1 text-base text-deep-ocean font-medium leading-relaxed mb-8 whitespace-pre-wrap">
              {description}
            </div>

            <div className="p-4 bg-sunset/10 rounded-2xl font-bold border border-sunset/20 mb-8">
               <p className="font-serif text-x1 text-deep-ocean italic">We ensure this sacred ritual is performed with the utmost devotion and strict adherence to Vedic traditions.</p>
            </div>

            <h4 className="font-serif text-deep-ocean font-bold text-xl mb-4">What's Included:</h4>
            <ul className="font-serif text-x1 space-y-3 mb-8">
              {[
                'Highly Experienced Vedic Pandit',
                '100% Pure & Authentic Puja Samagri',
                'Floral Arrangements & Setup',
                'Traditional Prasad & Bhog Preparation'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-charcoal-muted font-semibold bg-white/50 p-4 rounded-2xl border border-white/40 shadow-sm">
                  <div className="bg-sunset-light/20 p-1.5 rounded-full flex-shrink-0">
                    <svg className="w-4 h-4 text-sunset-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* <div className="bg-white/50 p-5 rounded-2xl flex items-center justify-between border border-white/40 shadow-sm mb-4">
              <span className="text-sm font-bold text-deep-ocean">Include Experienced Panditji?</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={needsPandit}
                  onChange={() => setNeedsPandit(!needsPandit)}
                />
                <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-sunset peer-checked:to-sunset-dark shadow-inner"></div>
              </label>
            </div> */}

          </div>

          {/* <div className="p-6 border-t border-deep-ocean/10 bg-white/40 backdrop-blur-md">
            <button className="w-full bg-gradient-to-r from-sunset to-sunset-dark hover:from-sunset-light hover:to-sunset text-black py-4 rounded-2xl font-bold text-lg transition-all shadow-lg transform hover:scale-[1.02] flex items-center justify-center gap-2">
              Proceed to Book
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div> */}

          {/* Sticky Bottom Action Bar - MVP Contact Version */}
          <div className="p-5 sm:p-0 border-t border-deep-ocean/10 bg-white/60 backdrop-blur-xl">
            <div className="bg-gradient-to-r from-sunset/10 to-sunset-dark/10 border border-sunset/20 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
              
              {/* Refined Message */}
              <div className="flex-1 text-center sm:text-left">
                <h4 className="font-serif text-x1 text-deep-ocean font-bold mb-1">
                Book it now for a Hassle Free Experience
                </h4>
                <p className="font-serif text-x1 text-deep-ocean/70 leading-relaxed">
                To schedule this ceremony, drop us a message with your date and time. We will handle the rest of the arrangements.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Call Button */}
                <a 
                  href="tel:+919876543210" 
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-deep-ocean hover:text-sunset font-bold py-2.5 px-4 rounded-xl shadow-sm border border-white/40 transition-all hover:shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call
                </a>

                {/* WhatsApp Button */}
                <a 
                  href="https://wa.me/919876543210?text=Hari%20Om!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20Pooja." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all hover:shadow-md hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </>
  );
}