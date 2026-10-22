import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";

// Variable names match tailwind.config.mts (font-display and font-sans).
const display = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-bricolage",
    display: "swap",
});

const body = Instrument_Sans({
    subsets: ["latin"],
    variable: "--font-instrument",
    display: "swap",
});

export const fontVariables = `${display.variable} ${body.variable}`;
