"use client";
import React, { useState } from 'react';

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatDrawer({ isOpen, onClose }: ChatDrawerProps) {
  const [inputText, setInputText] = useState("");

  return (
    <>
      {/* Darkened Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* The Sliding Glass Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-ocean-dark/90 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Glass Header */}
        <div className="bg-glass-white backdrop-blur-md px-6 py-5 border-b border-white/10 flex justify-between items-center relative">
          <div>
            <h2 className="text-xl font-bold text-white drop-shadow-sm">Ask Sarthi ✨</h2>
            <p className="text-xs text-sunset-light text-white font-medium">Your AI Spiritual Guide</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-transparent">
          {/* AI Message - Glass Bubble */}
          <div className="flex justify-start">
            <div className="bg-glass-white backdrop-blur-md border border-white/10 text-gray-100 px-5 py-4 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[85%] leading-relaxed">
              <p>Namaskaram! 🙏 I am Sarthi.</p>
              <p className="mt-2">I can help you plan a perfect ceremony based on Vedic traditions. Are you looking for a specific Pooja, or do you need help finding an auspicious date?</p>
            </div>
          </div>
          
          {/* User Message - Gradient Bubble */}
          <div className="flex justify-end">
            <div className="bg-gradient-to-r from-sunset to-sunset-dark text-white px-5 py-4 rounded-2xl rounded-tr-none text-sm shadow-md max-w-[85%] leading-relaxed font-medium">
              I need to book a Griha Pravesh for next month. What are the available dates?
            </div>
          </div>
        </div>

        {/* Input Area - Glass Effect */}
        <div className="p-5 bg-glass-white backdrop-blur-md border-t border-white/10">
          <div className="flex items-center bg-black/30 rounded-full border border-white/10 px-4 py-3 focus-within:border-sunset-light/50 transition-colors">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..." 
              className="flex-1 bg-transparent focus:outline-none text-white placeholder-gray-400 text-sm"
            />
            <button className="text-sunset-light hover:text-white font-bold text-sm px-3 transition-colors flex items-center">
              Send <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}