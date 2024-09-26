import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.tsx',
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Figtree', ...defaultTheme.fontFamily.sans],
				sansSerif: ['Roboto'],
				openSans: ['OpenSans'],
				ubuntu: ['Ubuntu'],
				inter: ['Inter']
			},
			colors: {
				textLight: "#fafafa",
				textDark: '#0a0a0a',
				primary: {
					0: "#60A5FA",
					1: "#2563eb",
					2: "#1e40af",
				},
				accent: {
					ok: {
						0: "#10b981",
						1: "#047857",
						2: "#065f46"
					},
					warning: {
						0: "#facc15",
						1: "#eab308",
						2: "#ca8a04"
					},
					destructive: {
						0: "#f87171",
						1: "#ef4444",
						2: "#dc2626"
					}
				}
			},

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},

			screens: {
				'phone': '300px',
				'tablet': '640px',
				'laptop': '1024px',
				'desktop': '1535px',
			},
		}
	},

	plugins: [forms, require("tailwindcss-animate")],
};
