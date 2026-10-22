import type { Metadata } from "next";
import { ui } from "./data/content";
import { fontVariables } from "./fonts";
import { LANG_PATHS } from "./lib/lang";
import "./globals.css";

// Unknown URLs land here. With two root layouts (/ and /es) there is no single
// layout to wrap a 404, so this page renders its own <html>, in both languages.
// Next.js adds the noindex robots tag by itself.

export const metadata: Metadata = {
    title: `404 | ${ui.notFound.title.en}`,
};

export default function GlobalNotFound() {
    return (
        <html lang="en" className={fontVariables}>
            <body>
                <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-12 px-5 py-20 sm:px-8">
                    <p className="font-display text-7xl font-bold tracking-tight">
                        404
                    </p>
                    {(["en", "es"] as const).map((lang) => (
                        <section key={lang} lang={lang}>
                            <h1 className="font-display text-3xl font-bold tracking-tight">
                                {ui.notFound.title[lang]}
                            </h1>
                            <p className="mt-2 text-lg text-muted">
                                {ui.notFound.text[lang]}
                            </p>
                            <a
                                href={LANG_PATHS[lang]}
                                className="btn-primary mt-5"
                            >
                                {ui.notFound.home[lang]}
                            </a>
                        </section>
                    ))}
                </main>
            </body>
        </html>
    );
}
