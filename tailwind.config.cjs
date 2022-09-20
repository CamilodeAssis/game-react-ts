/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '430': '430px',
        '100': '100px',
        
      },
      height:{
        '104': '104px',
      },
      colors: {
        redValo: '#FF4655',
        beigeValo: '#ECE8E1',
        
      }
    },
  },
  plugins: [],
}
