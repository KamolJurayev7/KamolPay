/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          'primary': '#1E1E1E',
          'secondary': '#F2F2F2',
          'lightWhite': 'rgb(255,255,255,0.7)',
          'lightBlue': 'rgb(9,151,124,0.1)',
          'black': '#000000',
          'red': '#FF0000',
          'green': '#00FF00',
        },
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'poppins': ['Poppins', 'sans-serif'],
          'timesNewRoman': ['Times New Roman', 'serif']
        }
      },
      screens: {
        'xs': '480px',
        'ss': '620px',
        'sm': '768px',
        'md': '1060px',
        'lg': '1200px',
        'xl': '1536px',
        '2xl': '1700px'
      }
    },
  plugins: [],
}

