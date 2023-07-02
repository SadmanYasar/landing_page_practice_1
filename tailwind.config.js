/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0B1D26',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5dbfdd",

          "secondary": "#c026d3",

          "accent": "#f2b929",

          "neutral": "#1f1b23",

          "base-100": "#474952",

          "info": "#4469c1",

          "success": "#28d7b1",

          "warning": "#997205",

          "error": "#e7766a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
