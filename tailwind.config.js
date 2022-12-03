/** @type {import('tailwindcss').Config} */
module.exports ={
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    theme:[
      {
        doctorcolor:{
          primary: ' #0FCFEC',
          accent: "#37CDBE",
          secendary:'#19D3AE',
          neutral: "#3D4451",
          bambo:'#3A4256'
                   
          
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
