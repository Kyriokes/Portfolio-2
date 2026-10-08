"use client";

import Image from "next/image";
import { useLang } from "../context/LangContext";
import { CV, SOCIAL, ui } from "../data/content";

export default function Hero() {
    const { lang } = useLang();

    return (
        <section
            id="top"
            className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-4 pt-12 sm:px-8 md:grid-cols-[1.35fr_1fr] md:pb-8 md:pt-20"
        >
            <div>
                <h1 className="font-display text-[clamp(3rem,8.5vw,6rem)] font-bold leading-[0.95] tracking-tight">
                    <span className="block">Sergio</span>
                    <span className="block">Ferrari</span>
                    <span className="block">Bryce</span>
                </h1>
                <p className="mt-6 font-display text-2xl font-medium text-accent md:text-3xl">
                    {ui.hero.role[lang]}
                </p>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                    {ui.hero.statement[lang]}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a href="#projects" className="btn-primary">
                        {ui.hero.viewProjects[lang]}
                    </a>
                    <a
                        href={CV[lang]}
                        download
                        className="btn-secondary"
                    >
                        {ui.hero.downloadCv[lang]}
                    </a>
                </div>

                <p className="mt-6 flex gap-6 text-base font-medium">
                    <a
                        href={SOCIAL.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                    >
                        GitHub
                    </a>
                    <a
                        href={SOCIAL.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                    >
                        LinkedIn
                    </a>
                </p>
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line md:ml-auto md:mr-0">
                <Image
                    src="/profile.jpg"
                    alt={ui.hero.photoAlt[lang]}
                    fill
                    priority
                    sizes="(min-width: 768px) 24rem, 90vw"
                    className="object-cover object-center"
                />
            </div>
        </section>
    );
}
