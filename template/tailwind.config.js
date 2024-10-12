import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [daisyui],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dark", "bumblebee", "retro"],
  },


}

