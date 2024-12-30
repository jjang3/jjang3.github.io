const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    darkMode: 'class', // Enable dark mode
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    '--rounded-box': '1rem',
                    '--rounded-btn': '0.5rem',
                    '--rounded-badge': '1.9rem',
                    'base-content': '#000000', // Text color for light mode
                    'primary': '#1a1a1a',
                    'secondary': '#333333',
                },
                black: {
                    ...require('daisyui/src/theming/themes')['black'],
                    '--rounded-box': '1rem',
                    '--rounded-btn': '0.5rem',
                    '--rounded-badge': '1.9rem',
                    'base-content': '#e5e5e5', // High-contrast text color
                    'primary': '#cccccc',
                    'secondary': '#444444',
                },
            },
        ],
    },
    theme: {
        extend: {
            colors: {
                background: '#ffffff', // Light mode background
                'background-dark': '#000000', // Dark mode background
                text: '#111111', // Default text for light mode
                'text-dark': '#e5e5e5', // High-contrast text for dark mode
                border: '#888888', // Unified border color
            },
            fontFamily: {
                sans: ['Manrope', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
