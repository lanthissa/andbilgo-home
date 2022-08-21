/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        'poimandres-bg' : '#1C1E27',
        'poimandres-body-text' : '#E6F0FA',
        'poimandres-detail-text' :'#B5D6FB',
        'poimandres-body-text-2' : '#83E1C8',
        'seafoam' : '#9AD0C6'
      },
    },
  },
  plugins: [],
};
