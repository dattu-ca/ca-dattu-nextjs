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
    addComponents({
        '.content-container':{
            width: '100%',
            paddingLeft: '2em',
            paddingRight: '2em',
            margin: '0 auto',
            maxWidth: '100%',
            '@screen sm': {
                maxWidth: '640px',
            },
            '@screen md': {
                maxWidth: '760px',
            },
            '@screen lg': {
                maxWidth: '1024px',
            },
            '@screen xl': {
                maxWidth: '1280px',
            },
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
        extend: {
            fontFamily: {
                'black-ops': ['Black Ops One', 'sans-serif'],
                'acme': ['Acme', 'sans-serif'],
                'exo': ['Exo', 'sans-serif']
            },
            textShadow: {
                sm: '-1px -1px 3px var(--tw-shadow-color-split), 0px 0px 6px var(--tw-shadow-color)',
                DEFAULT: '-1px -1px 4px var(--tw-shadow-color-split), 0px 0px 7px var(--tw-shadow-color)',
                lg: '-1px -1px 5px var(--tw-shadow-color-split), 0px 0px 5px var(--tw-shadow-color), 0px 0px 8px var(--tw-shadow-color-split)',
            },
            aspectRatio: {
                '8/2': '8 / 2'
            },
            colors: {
                'site-primary-light': 'rgb(237, 188, 64)',
                'site-primary': 'rgb(218, 165, 32)',
                'site-primary-dark': 'rgb(185, 138, 21)',
                'site-secondary-light': 'rgb(68, 147, 255)',
                'site-secondary': 'rgb(0, 123, 255)',
                'site-secondary-dark': 'rgb(0, 96, 199)',
                'site-tertiary-light': 'rgb(37, 177, 164)',
                'site-tertiary': 'rgb(19,149,135)',
                'site-tertiary-dark': 'rgb(0, 119, 107)',
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
    corePlugins: {
        
    },
    plugins: [MyClass, require('daisyui')],
    variants: {
        extend: {
            display: ['group-hover'],
            visibility: ['group-hover'],
        }
    },
    daisyui: {
        prefix: "daisyui-"
    },
}
