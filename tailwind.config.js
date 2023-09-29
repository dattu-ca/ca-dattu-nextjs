/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

const MyClass = plugin(function ({addUtilities, matchUtilities, theme, addComponents}) {
    addUtilities({
        '.my-rotate-y-180': {
            transform: 'rotateY(180deg)'
        }
    });
    matchUtilities(
        {
            'text-shadow': (value) => ({
                textShadow: value,
            }),
        },
        {values: theme('textShadow')}
    );
    addComponents({})
})

export default {
    mode: 'jit',
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app.components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app.ui.components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/contentful/richTextRenderer/**/*.{tsx,jsx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {},
            textShadow: {
                sm: '-1px -1px 3px var(--tw-shadow-color-split), 0px 0px 6px var(--tw-shadow-color)',
                DEFAULT: '-1px -1px 4px var(--tw-shadow-color-split), 0px 0px 7px var(--tw-shadow-color)',
                lg: '-1px -1px 5px var(--tw-shadow-color-split), 0px 0px 5px var(--tw-shadow-color), 0px 0px 8px var(--tw-shadow-color-split)',
            },
            aspectRatio: {
                '8/2': '8 / 2'
            },
            colors: {
                // 'site-primary-light': 'rgb(237, 188, 64)',
                // 'site-primary': 'rgb(218, 165, 32)',
                // 'site-primary-dark': 'rgb(185, 138, 21)',
                // 'site-secondary-light': 'rgb(37, 177, 164)',
                // 'site-secondary': 'rgb(19,149,135)',
                // 'site-secondary-dark': 'rgb(0, 119, 107)',
                // 'site-tertiary-light': 'rgb(68, 147, 255)',
                // 'site-tertiary': 'rgb(0, 123, 255)',
                // 'site-tertiary-dark': 'rgb(0, 96, 199)',
                // 'site-color-dark': 'rgb(24, 25, 27)',
                // 'site-color-light': 'rgb(231, 230, 228)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    corePlugins: {},
    plugins: [MyClass],
    variants: {
        extend: {
            display: ['group-hover'],
            visibility: ['group-hover'],
        }
    }
}
