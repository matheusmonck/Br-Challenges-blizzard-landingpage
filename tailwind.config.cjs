/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Poppins: ['Poppins'],
    },
    screens: {
      sm: '0px',
      md: '768px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      colors: {
        text: '#FFFFFF',
        primary: '#00AEFF',
      },
    },
  },
  plugins: [],
};
