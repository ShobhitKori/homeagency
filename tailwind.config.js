/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple' : '#28293E',
        'custom-orange' : '#EF6D58',
        'beige' : '#FDF0E9',
        'dark-beige' : '#F3D1BF',
        'custom-brown' : '#391400',
      }
    },
  },
  plugins: [],
}

