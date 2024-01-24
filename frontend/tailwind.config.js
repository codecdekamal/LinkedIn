/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      spacing:{
      "100":"100vw"
      },
      colors: {
        'linkedIn-blue': '#F4F2EE',
      },
      fontFamily:{
        'sans':['Assistant', 'sans-serif'],
        "roboto":["Roboto Mono",'sans-serif'],
        'system': [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Fira Sans',
          'Ubuntu',
          'Oxygen',
          'Oxygen Sans',
          'Cantarell',
          'Droid Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Lucida Grande',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      }
    },
  },
  plugins: [],
};
