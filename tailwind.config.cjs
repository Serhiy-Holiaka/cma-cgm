/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    theme: {
        fontFamily: {
            light: ['Resolve-Light', 'sans-serif'],
            regular: ['Resolve-Regular', 'sans-serif'],
            medium: ['Resolve-Medium', 'sans-serif'],
            mediumWd: ['Resolve-MediumWd', 'sans-serif'],
            semilight: ['Resolve-Semilight', 'sans-serif'],
        },
        screens: {
            tablet: '640px',
            desktop: '1000px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '0.9rem',
                tablet: '1rem',
                desktop: '1rem',
            },
        },
        extend: {
            colors: {
                white: {
                    DEFAULT: 'rgb(var(--white) / <alpha-value>)',
                },
                blue: {
                    DEFAULT: 'rgb(var(--blue) / <alpha-value>)',
                    light: 'rgb(var(--blue-light) / <alpha-value>)',
                    dark: 'rgb(var(--blue-dark) / <alpha-value>)',
                },
                black: {
                    DEFAULT: 'rgb(var(--black) / <alpha-value>)',
                    dark: 'rgb(var(--black-dark) / <alpha-value>)',
                },
                red: {
                    DEFAULT: 'rgb(var(--red) / <alpha-value>)',
                },
            },
            maxWidth: {
                container: '1530px',
            },
        },
    },
    plugins: [],
};
