"use client";

import { useState } from "react";
import { useLang, Lang } from "../context/LangContext";
import { CV, ui } from "../data/content";

const links = [
    { href: "#projects", key: "projects" },
    { href: "#experience", key: "experience" },
    { href: "#skills", key: "skills" },
    { href: "#contact", key: "contact" },
] as const;

export default function Header() {
    const { lang, setLang } = useLang();
    const [open, setOpen] = useState(false);

    const langButton = (code: Lang) => (
        <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`rounded-md px-2 py-1 text-sm font-medium transition-colors ${
                lang === code
                    ? "bg-ink text-bg"
                    : "text-muted hover:text-ink"
            }`}
        >
            {code.toUpperCase()}
        </button>
    );

    return (
        <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_srgb,var(--bg)_90%,transparent)] backdrop-blur">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-bg"
            >
                {lang === "es" ? "Saltar al contenido" : "Skip to content"}
            </a>
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
                <a
                    href="#top"
                    className="font-display text-lg font-bold tracking-tight"
                >
                    Sergio Ferrari Bryce
                </a>

                <nav
                    aria-label="Main"
                    className="hidden items-center gap-7 md:flex"
                >
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted transition-colors hover:text-ink"
                        >
                            {ui.nav[link.key][lang]}
                        </a>
                    ))}
                    <a
                        href={CV[lang]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-line px-4 py-1.5 text-sm font-medium transition-colors hover:border-ink"
                    >
                        {ui.nav.cv[lang]}
                    </a>
                </nav>

                <div className="flex items-center gap-1">
                    <div
                        role="group"
                        aria-label={ui.nav.language[lang]}
                        className="flex items-center"
                    >
                        {langButton("en")}
                        {langButton("es")}
                    </div>
                    <button
                        type="button"
                        onClick={() => setOpen((value) => !value)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="ml-2 rounded-md border border-line px-3 py-1 text-sm md:hidden"
                    >
                        {open ? ui.nav.close[lang] : ui.nav.menu[lang]}
                    </button>
                </div>
            </div>

            {open && (
                <nav
                    id="mobile-menu"
                    aria-label="Mobile"
                    className="border-t border-line px-5 pb-4 pt-2 md:hidden"
                >
                    <ul>
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block py-3 text-lg"
                                >
                                    {ui.nav[link.key][lang]}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href={CV[lang]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-3 text-lg"
                            >
                                {ui.nav.cv[lang]}
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
