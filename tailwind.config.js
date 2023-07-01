/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColors: {
        'transparent': 'transparent',
        'white': '#ffffff',
      },
      colors:{
        grayy: {
          300: "rgb(209,213,219)", 
          600: " rgb(75,85,99)"
        },
        blackk: {
          700: "#292f2b"
        },
        slatee: {
          900: "rgb(15,23,42)"
        },
        whitee: {
          400: "rgb(156,163,175)",
          700: "rgb(235,235,235)",
          900: "#efeeec"
        },
        bluee: {
          700: "#354753",
          200: "#3d5a80"
        },
        purplee: {  
          400: "rgb(192,132,252)",
          800: "rgb(107,33,168)",
          900: "#150050",
        }

      }, 
    },
    
    //Box Shadow NavBar
    boxShadow: {
      navbar: "0px 5px 10px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)"
    }, 

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      
      'md-1': '860px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
