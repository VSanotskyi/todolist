/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                text: 'var(--text-black)',
                background: 'var(--bg-white)',
                accentBlue: 'var(--accent-blue)',
                accentRed: 'var(--accent-red)',
                accentGreen: 'var(--accent-green)',
                accentGray: 'var(--accent-gray)',
                accentWhite: 'var(--accent-white)',
                hover: 'var(--hover)',
            },
            fontSize: {
                sm: '14px',
                base: '16px',
                lg: '18px',
                xl: '20px',
                '2xl': '24px',
                '4xl': '36px',
            },
        },
    },
    plugins: [],
};
