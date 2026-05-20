import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./context/LangContext";

export const metadata: Metadata = {
    title: "Sergio Ferrari Bryce",
    description:
        "Este es mi Portfolio, donde podras ver todos mis proyectos y aptitudes",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <head>
                <script
                    defer
                    src="https://cloud.umami.is/script.js"
                    data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
                ></script>
            </head>
            <body>
                <LangProvider>{children}</LangProvider>
            </body>
        </html>
    );
}
