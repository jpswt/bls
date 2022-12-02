/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			flex: {
				2: '2 2 0%',
				5: '5 5 0%',
			},
		},
	},
	plugins: [],
};
