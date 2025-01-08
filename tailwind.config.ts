import type {Config} from "tailwindcss";
import AnimateCss from 'tailwindcss-animate'

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    100: '#F0F4F8', // Lightest of the primary range
                    200: '#CBD5E1',
                    300: '#94A3B8',
                    400: '#64748B',
                    500: '#334155', // Original primary color
                    600: '#1E293B',
                    700: '#0F172A', // Original secondary color
                    800: '#0B1220',
                    900: '#020617', // Darkest of the primary range
                },
            },
        },
    },
    plugins: [AnimateCss],
} satisfies Config;
