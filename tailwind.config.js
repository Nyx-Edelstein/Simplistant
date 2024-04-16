import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./**/*.{html,js,js,ts,tsx}",
    ],
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                'simplistant': {
                    'primary': "#79008b",
                    'primary-focus': "#9e1eb9",
                    'primary-content': "#ffffff",

                    'secondary': "#c24fda",
                    'secondary-focus': "#ea77f8",
                    'secondary-content': "#ffffff",

                    'accent': "#0099cf",
                    'accent-focus': "#1eccff",
                    'accent-content': "#ffffff",

                    'neutral': "#28283c",
                    'neutral-focus': "#3c3c50",
                    'neutral-content': "#ffffff",

                    'base-100': "#0a0a14",
                    'base-200': "#28283c",
                    'base-300': "#3c3c50",
                    'base-content': "#ebecf0",

                    'info': "#0099cf",
                    'success': "#87cf3a",
                    'warning': "#e1d460",
                    'error': "#ff6b6b",

                    '--rounded-box': "1rem",
                    '--rounded-btn': ".5rem",
                    '--rounded-badge': "1.9rem",

                    '--animation-btn': ".25s",
                    '--animation-input': ".2s",

                    '--btn-text-case': "uppercase",
                    '--navbar-padding': ".5rem",
                    '--border-btn': "1px",
                },
            },
        ],
    },
}

