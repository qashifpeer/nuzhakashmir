import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ["Montserrat", "sans-serif"],
      },
      colors: {
        "primary": "#ED5808",
        "secondary": "#00b5f8",
        "subtle": "#4DD3DD",
        "accent": "#08F5B1",
        "dark": "#09090b",
         // "secondary": "#0AEAAC",
        // "secondary": "#47c5fb",
        slate: {
          10: '#f1f3f4',
          900: "#0f172a",

        },
        light : {
          10 : '#f8fafc',
          20 : '#f1f5f9',
          30: '#cbd5e1',
          40: '#94a3b8',
          50: '#64748b',
          90 : '#0f172a',
          95 : '#020617',

        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        }
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
export default config
