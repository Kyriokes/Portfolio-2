import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                surface: "var(--surface)",
                ink: "var(--ink)",
                muted: "var(--muted)",
                line: "var(--line)",
                accent: "var(--accent)",
                "accent-ink": "var(--accent-ink)",
                sage: "var(--sage)",
            },
            fontFamily: {
                display: ["var(--font-display)", "system-ui", "sans-serif"],
                sans: ["var(--font-body)", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
