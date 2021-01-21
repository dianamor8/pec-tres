const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        base: "#a8dadc",
        complement: "#e63946",
        masterbrand: "#f1faee",
        corporate: "#1d3557"
      },
      container: {
        center: true,
        padding: "1rem"
      },
      backgroundImage: theme => ({
        'home-img': "url('/assets/images/audiencia.jpg')",        
      }),
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '60p' : '60%',
        'full': '100%',
       },
      height: {
        vframesm: '170px',
        vframemd: '240px',
        vframelg: '340px',        
       },
       maxWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',        
        'full': '100%',
       },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
