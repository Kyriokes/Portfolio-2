import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./context/LangContext";

export const metadata: Metadata = {
    title: "Sergio Ferrari Bryce",
    description:
        "Este es mi Porfolio, donde podras ver todos mis proyectos y aptitudes",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <script
                    defer
                    src="https://cloud.umami.is/script.js"
                    data-website-id="68aa0307-f752-4a9e-8fc6-0e2ec3e3cd37"
                ></script>
            </head>
            <body>
                <LangProvider>{children}</LangProvider>
            </body>
        </html>
    );
}
