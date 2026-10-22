import type { Metadata, Viewport } from "next";
import {
    Lang,
    SITE_URL,
    SOCIAL,
    skillGroups,
    ui,
} from "../data/content";
import { LANG_PATHS } from "./lang";

const NAME = "Sergio Ferrari Bryce";

const OG_LOCALE: Record<Lang, string> = { en: "en_US", es: "es_AR" };

// Layouts set the base URL too: the Open Graph images live at layout level
// and are resolved before the page metadata.
export const layoutMetadata: Metadata = { metadataBase: new URL(SITE_URL) };

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#eae6e5" },
        { media: "(prefers-color-scheme: dark)", color: "#141a18" },
    ],
};

export function pageMetadata(lang: Lang): Metadata {
    const title = ui.meta.title[lang];
    const description = ui.meta.description[lang];
    const other: Lang = lang === "en" ? "es" : "en";

    return {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        applicationName: NAME,
        authors: [{ name: NAME, url: SITE_URL }],
        creator: NAME,
        keywords: [
            "Sergio Ferrari Bryce",
            "full stack developer",
            "desarrollador full stack",
            "desarrollador web",
            "Buenos Aires",
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            ".NET",
            "C#",
        ],
        alternates: {
            canonical: LANG_PATHS[lang],
            languages: {
                en: LANG_PATHS.en,
                es: LANG_PATHS.es,
                "x-default": LANG_PATHS.en,
            },
        },
        openGraph: {
            type: "profile",
            firstName: "Sergio",
            lastName: "Ferrari Bryce",
            username: "Kyriokes",
            title,
            description,
            url: LANG_PATHS[lang],
            siteName: NAME,
            locale: OG_LOCALE[lang],
            alternateLocale: [OG_LOCALE[other]],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

// schema.org ProfilePage with the person as main entity, so search engines
// can tie the name to the role, location and social profiles.
export function jsonLd(lang: Lang): string {
    const pageUrl = new URL(LANG_PATHS[lang], SITE_URL).href;
    const data = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: ui.meta.title[lang],
        description: ui.meta.description[lang],
        inLanguage: lang,
        mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: NAME,
            givenName: "Sergio",
            familyName: "Ferrari Bryce",
            alternateName: "Kyriokes",
            jobTitle: ui.hero.role[lang],
            description: ui.hero.statement[lang],
            url: SITE_URL,
            image: `${SITE_URL}/profile.jpg`,
            email: `mailto:${SOCIAL.email}`,
            address: {
                "@type": "PostalAddress",
                addressLocality: "Buenos Aires",
                addressCountry: "AR",
            },
            knowsLanguage: ["es", "en"],
            knowsAbout: skillGroups.flatMap((group) =>
                group.items.map((skill) => skill.name)
            ),
            sameAs: [SOCIAL.github, SOCIAL.linkedin],
        },
    };
    // Escape "<" so the JSON can never close the <script> tag.
    return JSON.stringify(data).replace(/</g, "\\u003c");
}
