import animate from 'tailwindcss-animate'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        darkNavy: 'oklch(29.85% 0.061 268.89)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      
    },
  },
  plugins: [animate],
}