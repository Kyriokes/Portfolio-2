import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sergio Ferrari Bryce",
  description: "Este es mi Porfolio, donde podras ver todos mis proyectos y aptitudes",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
