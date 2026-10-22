import type { Metadata, Viewport } from "next";
import {
    Lang,
    PROFILE_PHOTO,
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
            "Sergio Ferrari",
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

// Ways people may search for the name. "Sergio Ferrari" alone is shared with
// other people, so the full name stays the main one everywhere.
const ALTERNATE_NAMES = ["Sergio Ferrari", "Sergio FB", "Kyriokes"];

const BUILT_AT = new Date().toISOString();

// schema.org graph: the site (its name is what Google shows above the result),
// the profile page and the person, linked by @id. It ties the name to the role,
// the location, the photo and the GitHub and LinkedIn profiles.
export function jsonLd(lang: Lang): string {
    const homeUrl = new URL("/", SITE_URL).href;
    const pageUrl = new URL(LANG_PATHS[lang], SITE_URL).href;
    const photoUrl = new URL(PROFILE_PHOTO, SITE_URL).href;
    const person = `${homeUrl}#person`;
    const website = `${homeUrl}#website`;

    const data = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": website,
                url: homeUrl,
                name: NAME,
                alternateName: ALTERNATE_NAMES[0],
                inLanguage: ["en", "es"],
                publisher: { "@id": person },
                about: { "@id": person },
            },
            {
                "@type": "ProfilePage",
                "@id": `${pageUrl}#page`,
                url: pageUrl,
                name: ui.meta.title[lang],
                description: ui.meta.description[lang],
                inLanguage: lang,
                isPartOf: { "@id": website },
                about: { "@id": person },
                mainEntity: { "@id": person },
                primaryImageOfPage: { "@id": `${photoUrl}#image` },
                dateModified: BUILT_AT,
            },
            {
                "@type": "Person",
                "@id": person,
                name: NAME,
                givenName: "Sergio",
                familyName: "Ferrari Bryce",
                alternateName: ALTERNATE_NAMES,
                jobTitle: ui.hero.role[lang],
                description: ui.hero.statement[lang],
                url: homeUrl,
                image: {
                    "@type": "ImageObject",
                    "@id": `${photoUrl}#image`,
                    url: photoUrl,
                    caption: NAME,
                },
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
        ],
    };
    // Escape "<" so the JSON can never close the <script> tag.
    return JSON.stringify(data).replace(/</g, "\\u003c");
}
