/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppRegular: ['Poppins-Regular', 'sans-serif'],
        poppBold: ['Poppins-Bold', 'sans-serif'],
        poppMedium: ['Poppins-Medium', 'sans-serif'],
        kaushanReg: ['KaushanScript-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
