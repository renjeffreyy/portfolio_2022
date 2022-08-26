/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'#0a192f',
        secondary:'#64ffda',
        content_bg:'#112240',
        text_primary:'#8892b0',
        text_secondary:'#ccd6f6'
      },
      screens:{
        'lg': '940px',
      }
    },
  },
  plugins: [],
}
