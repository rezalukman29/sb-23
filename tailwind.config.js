/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary': '#00A793',
      'secondary': '#FF5C00',
      'white': '#ffffff',
      'disabled' : '#cccccc',
      'textDisabled': '#666666'
    },
  },
  plugins: [],
}
