/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
     md: '768px',
     sm:'480px',
     lg: '976px',
     xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}