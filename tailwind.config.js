/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFE81F',
        'custom-gray': 'rgba(158, 158, 158, 0.7)',
        'sith-red': '#FF0000',
      },
      fontFamily: {
        custom: ['Jedi'],
      },
    },
  },
  plugins: [],
}

