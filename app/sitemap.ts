import type { MetadataRoute } from "next";
import { Lang, SITE_URL } from "./data/content";
import { LANG_PATHS } from "./lib/lang";

const url = (lang: Lang) => new URL(LANG_PATHS[lang], SITE_URL).href;

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const alternates = { languages: { en: url("en"), es: url("es") } };

    return (["en", "es"] as const).map((lang) => ({
        url: url(lang),
        lastModified,
        changeFrequency: "monthly",
        priority: 1,
        alternates,
    }));
}
