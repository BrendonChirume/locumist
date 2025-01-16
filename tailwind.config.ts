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
            backgroundImage: {
                'signup': 'url("https://oxbowui.com/pose/1.jpg")',
                'banner': 'url("https://plus.unsplash.com/premium_photo-1661546220316-5a3fdd25641a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    '50': '#f2f7fd',
                    '100': '#e3edfb',
                    '200': '#c1dbf6',
                    '300': '#8abdef',
                    '400': '#4c9be4',
                    '500': '#247dcf',
                    '600': '#1663b3',
                    '700': '#134f91',
                    '800': '#144478',
                    '900': '#163a64',
                    '950': '#0f2542',
                },
            },
        },
    },
    plugins: [AnimateCss],
} satisfies Config;
