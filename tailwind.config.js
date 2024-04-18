/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  
  content: ["./src/**/*.{html,js,jsx}"],

theme: {
  screens: {
    'mo': [
      {'min': '201px','max': '550px'}
    ],
    'ta': [
      {'min': '551px', 'max': '767px'}
    ],
    'de': [
      {'min': '768px', 'max': '990px'}
    ],
    'des':[{'min': '991px', 'max': '1600px'}],

    'des_search':[{
      'min':'991px', 'max':'1060px'
    }],

    'des_xl':[{
      'min':'1061px', 'max':'1300px'
    }]
    
  },
  extend: {
    
  },
  textShadow: {
    sm: '1px 1px 2px var(--tw-shadow-color)',
    DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
    lg: '4px 4px 8px var(--tw-shadow-color)',
    xl: '4px 4px 16px var(--tw-shadow-color)',
  }
},
plugins: [require("@tailwindcss/forms"),plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'text-shadow': (value) => ({
        textShadow: value,
      }),
    },
    { values: theme('textShadow') }
  )
})
],
//text-shadow 
}


