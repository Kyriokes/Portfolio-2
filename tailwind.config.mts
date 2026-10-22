import type { Config } from "tailwindcss";

// Loaded from app/globals.css with @config (Tailwind v4 reads it there).
// The font variables come from app/fonts.ts. The .mts extension tells Node
// it is an ES module, so it is not parsed twice.
const config: Config = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
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
                display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
                sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
