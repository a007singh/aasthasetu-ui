import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
      colors: {
        // A translucent white for the glass effect
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        // A darker translucent white for hover states
        'glass-white-hover': 'rgba(255, 255, 255, 0.2)',
        // A dark overlay for contrast
        'dark-overlay': 'rgba(0, 0, 0, 0.4)',
        
        // New Typography Colors
        'cream-light': '#FDFCFB', 
        'warm-gray': '#E2E8F0', 
        'deep-ocean': '#1A365D', 
        'charcoal-muted': '#4A5568', 

        sunset: {
          light: '#FDB813', 
          DEFAULT: '#FF9933', 
          dark: '#C76B14', 
        },
        ocean: {
          light: '#4FD1C5', 
          DEFAULT: '#319795', 
          dark: '#285E61', 
        },
        'text-light': '#F7FAFC', 
      },
      backdropBlur: {
        'xs': '2px',
      },
      dropShadow: {
        'hero': '0 4px 3px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 10px rgba(255, 153, 51, 0.5)',
      }
    },
  },
  plugins: [],
};
export default config;