import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#0d9be7",
                "background-light": "#f5f7f8",
                "background-dark": "#101c22",
                "surface-dark": "#1a262d", // Used in Dashboard
                "surface-dark-login": "#1b2327", // From Login CSS - subtle diff but let's be precise if needed? 
                // Actually, let's just stick to the main ones or add the new ones if they differ significantly.
                // Login CSS has: surface-dark: #1b2327, border-dark: #3b4b54, text-secondary: #9cafba
                // Existing: surface-dark: #1a262d, surface-highlight: #283339
                "border-dark": "#3b4b54",
                "text-secondary": "#9cafba"
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [
        forms,
        containerQueries
    ],
}
