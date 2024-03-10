/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'v-dark-blue': 'hsl(235, 21%, 11%)',
        'v-dark-desat-blue': 'hsl(235, 24%, 19%)',
        'light-grayish-blue': 'hsl(234, 39%, 85%)',
        'h-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'v-dark-grayish-blue': 'hsl(233, 14%, 35%)',
        'vv-dark-grayish-blue': 'hsl(237, 14%, 26%)',
      },
      dropShadow: {
        light: '0 0 0 white',
      },
    },
  },
  plugins: [],
};
