/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Jost", "sans-serif"],
      secondary: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "deep-black": "#000000",
        "electric-blue": "#7fe9ec",
        "midnight-green": "#1c414e",
        platinum: "#d3d9d9",
        "navy-black": "#05080a",
        "ash-gray": "#9ca39c",
        "cadet-gray-1": "#7a9b9f",
        "cadet-gray-2": "#83a2a6",
        "light-cadet-gray": "#b6c6c7",
        yellow: "#ffc700",
        "light-ash-gray": "#c9d0c9",
        "transparent-cadet-gray": "rgba(122, 155, 159, 0.15)",
        "transparent-electric-blue": "rgba(127, 233, 236, 0.15)",
        "transparent-midnight-green": "rgba(28, 65, 78, 0.15)",
      },
    },
  },
  plugins: [],
};
