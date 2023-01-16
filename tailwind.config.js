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
        'secondary': '#0093cb',
        'tertiary': '#13ce66',
        'accents': '#ffc82c',
        'borders': '#273444',
        'contrast': '#222222',
        'font':'#444',
        'font-secondary':'#333333'
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
        'gradient':"linear-gradient(to top, rgba(0,172,236,0.3) 0%, rgba(255,255,255,0) 30%)",
        'fuse': "linear-gradient(to top, rgba(0,172,236,0.3) 0%, rgba(255,255,255,0) 30%), url(/madera.jpg)"
      }

    },
  },
  plugins: [],
}