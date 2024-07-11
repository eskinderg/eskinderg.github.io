module.exports = {
    prefix: '',
    content: ['./src/**/*.{html,ts}' /* ... */],
    darkMode: 'class',
    theme: {
        extend: {},
        screens: {
            xxs: '400px',
            xs: '640px',
            sm: '768px',
            md: '1024px',
            lg: '1280px',
            xl: '1536px'
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
