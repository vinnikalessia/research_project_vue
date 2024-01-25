/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#9F004E',
          400: '#8A0245',
          500: '#74043B',
          600: '#620431',
        },
        secondary: {
          500: '#FEB95F',
        },
        tertiary: {
          500: '#FEDAC2',
        },
        neutral: {
          black: '#3A3042',
          white: '#FEFDFE',
        },
      },
      borderWidth: {
        1.8: '0.1125rem',
      },
      padding: {
        2.5: '0.625rem',
      },
    },
  },
  plugins: [],
}

