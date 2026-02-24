import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // A translucent white for the glass effect
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        // A darker translucent white for hover states
        'glass-white-hover': 'rgba(255, 255, 255, 0.2)',
        // A dark overlay for contrast
        'dark-overlay': 'rgba(0, 0, 0, 0.4)',
        
        // New Typography Colors
        'cream-light': '#FDFCFB', // Softer than pure white for hero text
        'warm-gray': '#E2E8F0', // For subtitles against the sky
        'deep-ocean': '#1A365D', // For high-contrast text inside glass cards
        'charcoal-muted': '#4A5568', // For descriptions inside glass cards

        sunset: {
          light: '#FDB813', // Bright yellow from the sun
          DEFAULT: '#FF9933', // Warm orange
          dark: '#C76B14', // Deeper orange/brown
        },
        ocean: {
          light: '#4FD1C5', // Light teal
          DEFAULT: '#319795', // Ocean blue/teal
          dark: '#285E61', // Deep sea blue
        },
        'text-light': '#F7FAFC', // Very light gray for text on dark backgrounds
      },
      backdropBlur: {
        'xs': '2px',
      },
      // Adding bolder drop shadows for text over bright backgrounds
      dropShadow: {
        'hero': '0 4px 3px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 10px rgba(255, 153, 51, 0.5)',
      }
    },
  },
  plugins: [],
};
export default config;