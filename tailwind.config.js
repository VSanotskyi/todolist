/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                black: 'var(--black)',
                white: 'var(--white)',
                'acc-blue': 'var(--accent-blue)',
                'acc-red': 'var(--accent-red)',
                'acc-green': 'var(--accent-green)',
                'acc-gray': 'var(--accent-gray)',
                'cl-hover': 'var(--hover)',
            },
            fontSize: {
                sm: '14px',
                base: '16px',
                lg: '18px',
                xl: '20px',
                '2xl': '24px',
                '4xl': '36px',
            },
            spacing: {
                'space-xs': '8px',
                'space-sm': '16px',
                'space-md': '24px',
                'space-lg': '32px',
                'space-xl': '40px',
            },
            borderRadius: {
                'radius-sm': '8px',
                'radius-md': '16px',
                'radius-lg': '24px',
            },
        },
    },
    plugins: [],
};
