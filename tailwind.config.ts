import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
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
                cPlatinum: "#EAE6E5",
                cGreen: "#90A955",
                cTeal: "#1F7A8C",
                cBlack: "#1C2321",
            },
        },
    },
    plugins: [scrollbarHide],
};
export default config;
