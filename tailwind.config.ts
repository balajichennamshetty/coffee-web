import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                coffee: {
                    bg: {
                        primary: "#2D1810",
                        secondary: "#3D2820",
                    },
                    border: "#5A4034",
                    text: {
                        primary: "#F5E6D3",
                        secondary: "#C9B8A0",
                    },
                    accent: "#4F9C8F",
                    gold: "#FFD700",
                },
            },
            backgroundImage: {
                'coffee-gradient': 'linear-gradient(135deg, #2D1810 0%, #1A0F0A 100%)',
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                glow: "glow 2s ease-in-out infinite alternate",
                "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px rgba(212, 165, 116, 0.2)" },
                    "100%": { boxShadow: "0 0 20px rgba(212, 165, 116, 0.6)" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
