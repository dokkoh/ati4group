/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'background-grey': '#FBFBFD',
                'primary-orange': '#EE7408',
                'secondary-orange': '#DA6308',
                'primary-gray': '#545454',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                bebas: ['Bebas Neue Cyrillic', 'sans-serif'],
                fira: ['Fira Sans', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('prettier-plugin-tailwindcss'),
        require('@tailwindcss/forms'),
    ],
}


