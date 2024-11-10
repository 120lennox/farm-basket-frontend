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
      },
      fontFamily: {
        inter: ['Inter Variable', 'sans-serif'], 
        NovaScript: ['Nova Script', 'system-ui'], //new font
        fira: ['Fira Code', 'monospace'],
        },
        
    },
  },
  plugins: [
    // require('daisyui'),
  ],
  images: {
    domains: ['https://i.pinimg.com'],
  },
};
export default config;
