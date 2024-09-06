/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: 'yekan',
      },
      boxShadow: {
        'sheader': 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
      },
      backgroundImage: {
        'bg1': "url('./src/asset/img/home-bg.png')",
        'bg2': "url('./src/asset/img/17.jpg')",
        'bg3': "url('./src/asset/img/16.jpg')",
        'bg4': "url('./src/asset/img/19.jpg')",
        
      }
    },
  },
  plugins: [],
}

