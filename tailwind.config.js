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
				textLight: 'slate.slate1',
				textDark: '#313131',
				slate: {
					'1': 'slate.slate1',
					'2': 'slate.slate2',
					'3': 'slate.slate3',
					'4': 'slate.slate4',
					'5': 'slate.slate5',
					'6': 'slate.slate6',
					'7': 'slate.slate7',
					'8': 'slate.slate8',
					'9': 'slate.slate9',
					'10': 'slate.slate10',
					'11': 'slate.slate11',
					'12': 'slate.slate12'
				},
				primary: {
					'1': 'blue.blue1',
					'2': 'blue.blue2',
					'3': 'blue.blue3',
					'4': 'blue.blue4',
					'5': 'blue.blue5',
					'6': 'blue.blue6',
					'7': 'blue.blue7',
					'8': 'blue.blue8',
					'9': 'blue.blue9',
					'10': 'blue.blue10',
					'11': 'blue.blue11',
					'12': 'blue.blue12'
				},
				accent: {
					ok: 'green.green10',
					warning: 'yellow.yellow9',
					destructive: 'red.red9',
					destructiveHover: 'red.red11'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},

	plugins: [forms, require("tailwindcss-animate")],
};
