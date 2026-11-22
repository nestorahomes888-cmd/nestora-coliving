/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F1EB',
          200: '#ECE5DB',
          300: '#DFD5C7',
          400: '#CEC0AD',
          500: '#B8A68F',
        },
        charcoal: {
          900: '#131312',
          800: '#1C1B1A',
          700: '#272624',
          600: '#3A3835',
          500: '#524F4B',
          400: '#736F69',
          300: '#9E9991',
        },
        gold: {
          DEFAULT: '#C5A880',
          light: '#DFC7A7',
          dark: '#A6875D',
          hover: '#B5966E',
        },
        earth: {
          light: '#8C7E72',
          DEFAULT: '#6B5E53',
          dark: '#4A3F36',
        },
        olive: {
          DEFAULT: '#525B44',
          light: '#6E795B',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(19, 19, 18, 0.05)',
        'medium': '0 10px 30px -4px rgba(19, 19, 18, 0.08)',
        'elevated': '0 20px 40px -6px rgba(19, 19, 18, 0.12)',
        'gold-glow': '0 0 25px rgba(197, 168, 128, 0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
