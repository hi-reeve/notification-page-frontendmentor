/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
			},
			colors: {
				primary: {
					red: 'hsl(var(--primary-red) / <alpha-value>)',
					blue: 'hsl(var(--primary-blue) / <alpha-value>)',
				},
				neutral: {
					'light-grayish-blue-1':
						'hsl(var(--light-grayish-blue-1) / <alpha-value>)',
					'light-grayish-blue-2':
						'hsl(var(--light-grayish-blue-2) / <alpha-value>)',
					'light-grayish-blue-3':
						'hsl(var(--light-grayish-blue-3) / <alpha-value>)',
					'grayish-blue': 'hsl(var(--grayish-blue) / <alpha-value>)',
					'dark-grayish-blue':
						'hsl(var(--dark-grayish-blue) / <alpha-value>)',
					'very-dark-blue':
						'hsl(var(--very-dark-blue) / <alpha-value>)',
				},
			},
		},
	},
	plugins: [],
};
