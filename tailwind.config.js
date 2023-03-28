/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "background": "var(--background-color)",
                "primary": "var(--primary-color)",
                "primary-darker-orange": "var(--primary-darker-orange)",
                "primary-red": "var(--primary-red)",
                "primary-darker-red": "var(--primary-darker-red)",
                "primary-violet": "var(--primary-violet)",
                "primary-green": "var(--primary-green)",
                "primary-lighter-green": "var(--primary-lighter-green)",
                "primary-blue": "var(--primary-blue)",
                "primary-lighter-blue": "var(--primary-lighter-blue)",
                "primary-darker-blue": "var(--primary-darker-blue)",
                "primary-yellow": "var(--primary-yellow)",
                "primary-skin": "var(--primary-skin)",
                "primary-darker-yellow": "var(--primary-darker-yellow)",
            }
        },
    },
    plugins: [],
}
