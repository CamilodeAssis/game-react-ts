/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redValo: '#FF4655',
        beigeValo: '#ECE8E1',
        
      }
    },
  },
  plugins: [],
}
