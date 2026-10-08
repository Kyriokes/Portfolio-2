"use client";

import Image from "next/image";
import { useLang, Lang } from "../context/LangContext";
import { FEATURED_COUNT, projects, ui, Project, Skill } from "../data/content";
import { ICONS } from "../data/icons";
import BrowserFrame from "./BrowserFrame";

function Chips({ stack }: { stack: Skill[] }) {
    return (
        <ul className="flex flex-wrap gap-2">
            {stack.map((tech) => (
                <li key={tech.name} className="chip">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white">
                        <Image
                            src={ICONS[tech.icon]}
                            alt=""
                            width={14}
                            height={14}
                            className="h-3.5 w-3.5 object-contain"
                        />
                    </span>
                    {tech.name}
                </li>
            ))}
        </ul>
    );
}

function Actions({ project, lang }: { project: Project; lang: Lang }) {
    return (
        <div className="mt-6 flex flex-wrap gap-3">
            <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-5 !py-2.5 !text-sm"
                aria-label={`${project.title}: ${ui.projects.demo[lang]} (${ui.projects.opensIn[lang]})`}
            >
                {ui.projects.demo[lang]}
            </a>
            {project.repo && (
                <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !px-5 !py-2.5 !text-sm"
                    aria-label={`${project.title}: ${ui.projects.code[lang]} (${ui.projects.opensIn[lang]})`}
                >
                    {ui.projects.code[lang]}
                </a>
            )}
        </div>
    );
}

function Featured({
    project,
    index,
    lang,
}: {
    project: Project;
    index: number;
    lang: Lang;
}) {
    const reverse = index % 2 === 1;
    const highlights = project.highlights?.[lang] ?? [];

    return (
        <article className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
            <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
                <BrowserFrame
                    href={project.demo}
                    image={project.image}
                    label={`${project.title}: ${ui.projects.demo[lang]} (${ui.projects.opensIn[lang]})`}
                    sizes="(min-width: 768px) 672px, 100vw"
                />
            </div>
            <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
                <h3 className="font-display text-3xl font-bold tracking-tight">
                    {project.title}
                </h3>
                {project.year && (
                    <p className="mt-1 text-sm text-muted">{project.year}</p>
                )}
                <p className="mt-4 text-lg leading-relaxed">
                    {project.summary[lang]}
                </p>
                {highlights.length > 0 && (
                    <ul className="mt-4 space-y-2 text-muted">
                        {highlights.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span
                                    aria-hidden="true"
                                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
                <div className="mt-5">
                    <Chips stack={project.stack} />
                </div>
                <Actions project={project} lang={lang} />
            </div>
        </article>
    );
}

function Compact({ project, lang }: { project: Project; lang: Lang }) {
    return (
        <article className="flex flex-col">
            <BrowserFrame
                href={project.demo}
                image={project.image}
                label={`${project.title}: ${ui.projects.demo[lang]} (${ui.projects.opensIn[lang]})`}
                sizes="(min-width: 640px) 560px, 100vw"
            />
            <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
                {project.title}
                {project.year && (
                    <span className="ml-3 text-sm font-normal text-muted">
                        {project.year}
                    </span>
                )}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
                {project.summary[lang]}
            </p>
            <div className="mt-4">
                <Chips stack={project.stack} />
            </div>
            <Actions project={project} lang={lang} />
        </article>
    );
}

export default function Projects() {
    const { lang } = useLang();
    const featured = projects.slice(0, FEATURED_COUNT);
    const rest = projects.slice(FEATURED_COUNT);

    return (
        <section id="projects" className="section">
            <h2 className="section-title">{ui.projects.title[lang]}</h2>
            <p className="mt-3 max-w-xl text-lg text-muted">
                {ui.projects.intro[lang]}
            </p>

            <div className="mt-14 space-y-20 md:space-y-28">
                {featured.map((project, index) => (
                    <Featured
                        key={project.id}
                        project={project}
                        index={index}
                        lang={lang}
                    />
                ))}
            </div>

            {rest.length > 0 && (
                <>
                    <h3 className="mt-28 border-t border-line pt-12 font-display text-3xl font-bold tracking-tight">
                        {ui.projects.more[lang]}
                    </h3>
                    <div className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2">
                        {rest.map((project) => (
                            <Compact
                                key={project.id}
                                project={project}
                                lang={lang}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
