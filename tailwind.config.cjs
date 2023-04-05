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
                tablet: '2rem',
                desktop: '2rem',
            },
        },
        extend: {
            colors: {
                white: {
                    DEFAULT: 'var(--white)',
                },
                blue: {
                    DEFAULT: 'var(--blur)',
                    light: 'var(--blue-light)',
                    dark: 'var(--blue-dark)',
                },
                black: {
                    DEFAULT: 'var(--black)',
                    dark: 'var(--black-dark)',
                },
                red: {
                    DEFAULT: 'var(--red)',
                },
            },
            maxWidth: {
                container: '1530px',
            },
        },
    },
    plugins: [],
};
