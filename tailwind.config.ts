import type { Config } from 'tailwindcss'

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#2C2F33',
                    DEFAULT: '#080A0B',
                    dark: '#000000',
                },
                secondary: '#F97316',
                accent: '#10B981',
                muted: '#6B7280',
                background: '#F3F4F6',
                text: '#111827',
            },
        },
    },
} satisfies Config
