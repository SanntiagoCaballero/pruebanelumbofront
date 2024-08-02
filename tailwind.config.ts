import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'custom-blue': '#0149BE !important',
        'custom-bg-home':'#EBEFF4 !important',
        'custom-color-boton': '#FFD300 !important'
      },
      boxShadow:{
        'custom-header':'0px 8px 15px #ccc',
        'yellow-button':'8px 0px 15px #00000029;'
      },
      transform:{
        'custom-matrix': 'matrix(0.71, 0.71, -0.71, 0.71, 0, 0)',
      },
      textColor:{
        'custom-button-text':'#FFD300 !important'
      }
    },
  },
  plugins: [],
};
export default config;
