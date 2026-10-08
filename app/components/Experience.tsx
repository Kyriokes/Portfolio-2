"use client";

import { useLang } from "../context/LangContext";
import { experiences, ui } from "../data/content";

export default function Experience() {
    const { lang } = useLang();

    return (
        <section id="experience" className="section">
            <h2 className="section-title">{ui.experience.title[lang]}</h2>

            <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
                <p>{ui.experience.about1[lang]}</p>
                <p>{ui.experience.about2[lang]}</p>
            </div>

            <ul className="mt-14 border-t border-line">
                {experiences.map((item) => (
                    <li
                        key={item.role.en}
                        className="grid gap-4 border-b border-line py-8 md:grid-cols-[18rem_1fr] md:gap-12"
                    >
                        <div>
                            <h3 className="font-display text-xl font-bold">
                                {item.role[lang]}
                            </h3>
                            <p className="mt-1 text-muted">{item.org[lang]}</p>
                            <p className="mt-1 text-sm text-muted">
                                {item.period[lang]}
                            </p>
                        </div>
                        <ul className="space-y-2">
                            {item.points[lang].map((point) => (
                                <li key={point} className="flex gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                                    />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <figure className="mt-16">
                <p lang="ja" className="font-display text-3xl md:text-4xl">
                    「基礎が大事だ！」
                </p>
                <figcaption className="mt-3 text-muted">
                    {ui.experience.quote[lang]}{" "}
                    <a
                        href="https://wikipedia.org/wiki/Takehiko_Inoue"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line underline-offset-4 hover:decoration-ink"
                    >
                        {ui.experience.quoteBy[lang]}
                    </a>
                </figcaption>
            </figure>
        </section>
    );
}
