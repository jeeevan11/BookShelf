/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f5f2',
          100: '#f0eae4',
          200: '#e0d5c9',
          300: '#c9b7a3',
          400: '#b3987d',
          500: '#9d7a57',
          600: '#8a6a4a',
          700: '#73563d',
          800: '#5c4530',
          900: '#4a3726',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fdf6ed',
          100: '#f6e7d3',
          200: '#eccfa7',
          300: '#e2b77b',
          400: '#d89f4f',
          500: '#ce8723',
          600: '#a56c1c',
          700: '#7c5115',
          800: '#53360e',
          900: '#2a1b07',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.05)',
        'card-hover': '0 4px 6px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
} 