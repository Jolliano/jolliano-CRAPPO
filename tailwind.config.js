module.exports = {
  content: ['./public/index.html', './src/**/*.svelte'],
  theme: {
    extend: {
      fontFamily: {
       Rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
		// ...
  ],
}
