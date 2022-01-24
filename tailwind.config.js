const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    container: {
      center:true
    },
   
    fontFamily: {
      sans: 'Poppins',
    },
    extends: {
      colors:{
        black: colors.black,
        'blue-dark': '#60a3fa',
        'blue-light':'#41e8f2'
      },
    }
  },
  plugins: [],
}
