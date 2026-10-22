import type { MetadataRoute } from "next";
import { Lang, PROFILE_PHOTO, SITE_URL } from "./data/content";
import { LANG_PATHS } from "./lib/lang";

const url = (lang: Lang) => new URL(LANG_PATHS[lang], SITE_URL).href;

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const alternates = { languages: { en: url("en"), es: url("es") } };
    // Lets image search tie the photo to the page with the name.
    const images = [new URL(PROFILE_PHOTO, SITE_URL).href];

    return (["en", "es"] as const).map((lang) => ({
        url: url(lang),
        lastModified,
        changeFrequency: "monthly",
        priority: 1,
        alternates,
        images,
    }));
}
