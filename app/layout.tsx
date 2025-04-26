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
            <body>
                <LangProvider>{children}</LangProvider>
            </body>
        </html>
    );
}
