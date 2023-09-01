/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'main-dark-blue': '#111827',
				'main-purple': '#9A94FF',
				'main-pink': '#f399af'
			},
			fontFamily: {
				jakarta: 'Plus Jakarta Sans, sans-serif'
			},
			container: {
				padding: '1rem',
				center: true
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
