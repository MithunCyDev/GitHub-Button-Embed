export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
    },

    screens: {
      'xs': '300px',

      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },

    colors: {
      'black': '#0e141e',
      'pureBlack': '#000000',
      'black2': '#4c4c4c',
      'white': '#d1d3d4',
      'gray': '#545454',
      'grayGreen': '#36454F',
      'yellow': '#FCCB06',
      'green': '#00751f',
    },
  },
  plugins: [],
}
