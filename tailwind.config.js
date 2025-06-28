/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(195, 60, 84)',
        'primary-dark': 'rgb(130, 40, 55)',
        secondary: 'rgb(37, 78, 131)',
        'secondary-dark': 'rgb(28, 49, 85)',
        tertiary: 'rgb(55, 113, 142)',
        'tertiary-dark': 'rgb(42, 85, 107)',
        'accent-1': 'rgb(142, 227, 239)',
        'accent-1-dark': 'rgb(106, 189, 200)',
        'accent-2': 'rgb(174, 243, 231)',
        'accent-2-dark': 'rgb(130, 221, 210)',
      },
    },
  },
  plugins: [],
}
