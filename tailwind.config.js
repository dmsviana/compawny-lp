/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FF7843', // Coral/laranja vibrante
                    light: '#FF9A70',
                    dark: '#E55A20',
                },
                secondary: {
                    DEFAULT: '#2A4365', // Azul escuro
                    light: '#3C5C8D',
                    dark: '#1A2A40',
                },
                accent: {
                    DEFAULT: '#38B2AC', // Verde-água
                    light: '#4FD1CC',
                    dark: '#2C8A86',
                },
            },
        },
    },
    plugins: [],
}