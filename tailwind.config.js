/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#FAF9F6',
          100: '#F4F2EC',
          200: '#EBE7DF',
          300: '#DDD7CC',
          400: '#C2B9A7',
          500: '#9E937E',
          600: '#7B715E',
          700: '#595142',
          800: '#383228',
          900: '#1C1917',
          950: '#0F0E0D',
        },
        amber: {
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
        },
        brand: {
          gold: '#C5A880',
          'gold-light': '#DFCAA8',
          'gold-dark': '#9A7B54',
          dark: '#1C1917',
          light: '#FAF9F6',
          card: '#FFFFFF',
          border: '#E7E2D8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(28, 25, 23, 0.06)',
        'elevated': '0 12px 35px -5px rgba(28, 25, 23, 0.1)',
      },
    },
  },
  plugins: [],
}
