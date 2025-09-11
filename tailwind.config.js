/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#361e54',        // Homebridge purple
        'primary-dark': '#2a1740', // slightly darker for hover
        secondary: '#ffffff',       // white for text/icons
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // custom font for navbar/menu
      },
    },
  },
  plugins: [],
}
