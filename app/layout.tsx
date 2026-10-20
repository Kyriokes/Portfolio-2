import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./context/LangContext";
import { SITE_URL } from "./data/content";

const display = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
});

const body = Instrument_Sans({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

const title = "Sergio Ferrari Bryce | Full Stack Developer";
const description =
    "Full Stack Developer building websites, APIs, desktop tools and AI-driven products with React, Next.js, Node.js, PostgreSQL and .NET. Projects, experience and contact.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [
        "full stack developer",
        "desarrollador full stack",
        "portfolio",
        "React",
        "Next.js",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        ".NET",
        "C#",
        "Sergio Ferrari Bryce",
    ],
    authors: [{ name: "Sergio Ferrari Bryce" }],
    openGraph: {
        title,
        description,
        url: SITE_URL,
        siteName: "Sergio Ferrari Bryce",
        images: [
            {
                url: "/profile.jpg",
                width: 1078,
                height: 1084,
                alt: "Sergio Ferrari Bryce",
            },
        ],
        locale: "en_US",
        alternateLocale: ["es_AR"],
        type: "website",
    },
    twitter: {
        card: "summary",
        title,
        description,
        images: ["/profile.jpg"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${display.variable} ${body.variable}`}>
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
