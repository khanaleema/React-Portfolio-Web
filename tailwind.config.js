// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: '#D2B48C',
        dustStorm: '#E5CCC5',
        whiteSmoke: '#F5F5F5',
        vanDykeBrown: '#6C4F3D',
      },
      },
  },
  plugins: [require("daisyui")],
};
