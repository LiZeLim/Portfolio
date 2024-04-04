import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                'bright-orange': '#FFA500',
                'bright-yellow-orange': '#FFBF47',
                'sea-teal': '#00DCDC',
                'deep-sea-teak': '#005C5C',
                'sleek-purple': '#6358C2',
                'faded-purple': '#ADAADF',
                'deep-purple': "#1E1D4E",
                'darker-purple': '#161637',
                'coral': '#FF8175',
            },
        },
    },
    plugins: [],
};
export default config;
