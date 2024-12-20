import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        //custom colors
        customBlue: {
          800: '#06061F',
          850: '#01020E',
          900: '#01020E',
        },
        
        CustomGreen: {
          500: '#0AFA2E',
          600: '#0afa2e',
        },

        CustomWhite: {
          200: '#D9D9D9'
        }
      },
      fontFamily: {
        inter: ['Inter Variable', 'sans-serif'], 
        NovaScript: ['Nova Script', 'system-ui'], //new font
        fira: ['Fira Code', 'monospace'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Geist: ['Geist', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
        },
        
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
