"use client";

import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Lang } from "../data/content";
import { LANG_PATHS, LANG_STORAGE_KEY } from "../lib/lang";

type Link = { href: string; label: string };

export interface HeaderLabels {
    nav: Link[];
    cv: Link;
    menu: string;
    close: string;
    language: string;
    skip: string;
}

const LANGS: { code: Lang; name: string }[] = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
];

// Keeps the reader on the same section when switching language.
function currentSectionHash() {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    let current = "";
    sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 120) current = section.id;
    });
    return current && current !== "top" ? `#${current}` : "";
}

export default function Header({
    lang,
    labels,
}: {
    lang: Lang;
    labels: HeaderLabels;
}) {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    // Close the mobile menu with Escape or when the layout goes desktop.
    useEffect(() => {
        if (!open) return;
        const desktop = window.matchMedia("(min-width: 768px)");
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };
        const onResize = () => {
            if (desktop.matches) setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        desktop.addEventListener("change", onResize);
        return () => {
            window.removeEventListener("keydown", onKey);
            desktop.removeEventListener("change", onResize);
        };
    }, [open]);

    const switchLang = (event: MouseEvent<HTMLAnchorElement>, code: Lang) => {
        try {
            localStorage.setItem(LANG_STORAGE_KEY, code);
        } catch {
            // storage can be blocked, the link still works
        }
        event.preventDefault();
        if (code === lang) return;
        router.push(`${LANG_PATHS[code]}${currentSectionHash()}`);
    };

    return (
        <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_srgb,var(--bg)_90%,transparent)] backdrop-blur-sm">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-bg"
            >
                {labels.skip}
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
                    {labels.nav.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted transition-colors hover:text-ink"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={labels.cv.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-line px-4 py-1.5 text-sm font-medium transition-colors hover:border-ink"
                    >
                        {labels.cv.label}
                    </a>
                </nav>

                <div className="flex items-center gap-1">
                    <div
                        role="group"
                        aria-label={labels.language}
                        className="flex items-center"
                    >
                        {LANGS.map(({ code, name }) => (
                            <a
                                key={code}
                                href={LANG_PATHS[code]}
                                hrefLang={code}
                                lang={code}
                                aria-current={lang === code ? "page" : undefined}
                                onClick={(event) => switchLang(event, code)}
                                className={`rounded-md px-2 py-1 text-sm font-medium transition-colors ${
                                    lang === code
                                        ? "bg-ink text-bg"
                                        : "text-muted hover:text-ink"
                                }`}
                            >
                                {code.toUpperCase()}
                                <span className="sr-only"> {name}</span>
                            </a>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => setOpen((value) => !value)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="ml-2 rounded-md border border-line px-3 py-1 text-sm md:hidden"
                    >
                        {open ? labels.close : labels.menu}
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
                        {labels.nav.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block py-3 text-lg"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href={labels.cv.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-3 text-lg"
                            >
                                {labels.cv.label}
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
