/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		width: {
			"375": "375px",
		},
		colors: {
			// Light Theme
			veryLightGray: "hsl(0, 0%, 98%)",
			veryLightGrayishBlue: "hsl(236, 33%, 92%)",
			lightGrayishBlue: "hsl(233, 11%, 84%)",
			darkGrayishBlue: "hsl(236, 9%, 61%)",
			veryDarkGrayishBlue: "hsl(235, 19%, 35%)",

			// Dark Theme
			veryDarkBlue: "hsl(235, 21%, 11%)",
			veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
			lightGrayishBlue: "hsl(234, 39%, 85%)",
			lightGrayishBlueHover: "hsl(236, 33%, 92%)",
			darkGrayishBlue: "hsl(234, 11%, 52%)",
			veryDarkGrayishBlueOne: "hsl(233, 14%, 35%)",
			veryDarkGrayishBlueTwo: "hsl(237, 14%, 26%)",
		}
	  },
	},
	plugins: [],
  }