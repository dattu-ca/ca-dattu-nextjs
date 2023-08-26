/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

const MyClass = plugin(function ({addUtilities}) {
    addUtilities({
        '.my-rotate-y-180': {
            transform: 'rotateY(180deg)'
        }
    })
})

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '0rem',
            },
        },
        extend: {
            aspectRatio:{
                '8/2': '8 / 2'
            },
            colors: {
                'site-primary-light': 'rgb(237, 188, 64)',
                'site-primary': 'rgb(218, 165, 32)',
                'site-primary-dark': 'rgb(185, 138, 21)',
                'site-secondary-light': 'rgb(68, 147, 255)',
                'site-secondary': 'rgb(0, 123, 255)',
                'site-secondary-dark': 'rgb(0, 96, 199)',
                'site-tertiary-light':'rgb(37, 177, 164)',
                'site-tertiary':'rgb(19,149,135)',
                'site-tertiary-dark':'rgb(0, 119, 107)',
                'site-color-dark': 'rgb(24, 25, 27)',
                'site-color-light': 'rgb(231, 230, 228)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [MyClass],
    variants: {
        extend: {
            display: ['group-hover'],
            visibility: ['group-hover'],
        }
    }
}
