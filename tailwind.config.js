/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ['0.66rem', {
          lineHeight: '0.8rem',
        }],
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },   
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        'gold': '#c5a47e',
        'gold-200': '#efece8',
        'gold-300': '#e0c39f',
        'gold-400': '#c5a47e',
        'gold-500': '#ac9f8c',
        'gold-600': '#97866e',
        't_white': '#ffffff',
        't_brown': '#c5a47e',
        't_gold': '#D0BB50',
        't_blue': '#1D71B8',
        't_green': '#00A19A',
        't_red': '#ef7743',
        't_greylight': '#E5E5E5',
        't_grey': '#706f6f',
        't_greydark': '#3c3c3b',
        't_dark': '#292929',
        'lotan-gold': '#c5a47e',
        'lotan-grey': '#999999',
        'lotan-bg': '#292929',
        'lotan-bg-footer': '#222',
      },
      borderWidth: {
        '05': '0.5px',
      },
      brightness: {
        10: '.10',
        15: '.15',
        20: '.20',
        25: '.25',
        30: '.30',
        35: '.35',
        40: '.40',
      }
    },
  },
  plugins: [],
}
