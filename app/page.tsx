import HomeClient from "./components/HomeClient";

export const metadata = {
    title: "Inicio | Mi Portfolio",
    description:
        "Desarrollador web frontend con experiencia en React, Next.js y más.",
    keywords: [
        "frontend",
        "desarrollador",
        "portfolio",
        "Next.js",
        "React",
        "Sergio Ferrari",
        "Sergio Ferrari Bryce",
    ],
    authors: [{ name: "Sergio Ferrari Bryce" }],
    openGraph: {
        title: "Inicio | Mi Portfolio",
        description: "Conoce más sobre mi trabajo como desarrollador web.",
        url: "https://portfoliosergiofb.vercel.app/",
        siteName: "Mi Portfolio",
        images: [
            {
                url: "https://portfoliosergiofb.vercel.app/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Captura del portfolio",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
};


export default function HomePage() {
    return <HomeClient />;
}