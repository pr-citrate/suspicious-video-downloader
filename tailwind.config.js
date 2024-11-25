/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        neonGreen: '#39FF14',
        neonPink: '#FF1493',
        neonBlue: '#00FFFF',
      },
      animation: {
        'blink': 'blink 1s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      fontFamily: {
        'impact': ['Impact', 'sans-serif'],
        'comic': ['Comic Sans MS', 'Comic Sans', 'cursive'],
      },
    },
  },
  plugins: [],
}