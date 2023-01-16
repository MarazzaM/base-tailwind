/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00aeef',
        'secondary': '#ff7849',
        'tertiary': '#13ce66',
        'accents': '#ffc82c',
        'borders': '#273444',
        'contrast': '#222222',
        'font':'#444',
      },
      fontFamily: {
        work: ['var(--font-work)']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      backgroundImage: {
        'hero': "url('/madera.jpg')",
      }

    },
  },
  plugins: [],
}