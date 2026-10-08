"use client";

import Image from "next/image";
import { useLang } from "../context/LangContext";
import { skillGroups, ui } from "../data/content";
import { ICONS } from "../data/icons";

export default function Skills() {
    const { lang } = useLang();

    return (
        <section id="skills" className="section">
            <h2 className="section-title">{ui.skills.title[lang]}</h2>
            <p className="mt-3 flex items-center gap-3 text-muted">
                <span
                    aria-hidden="true"
                    className="chip chip-strong !h-5 !w-8 !p-0"
                />
                {ui.skills.legend[lang]}
            </p>

            <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                {skillGroups.map((group) => (
                    <div key={group.id}>
                        <h3 className="font-display text-xl font-bold">
                            {ui.skills[group.id][lang]}
                        </h3>
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                                <li
                                    key={skill.name}
                                    className={`chip ${
                                        skill.strong ? "chip-strong" : ""
                                    }`}
                                >
                                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white">
                                        <Image
                                            src={ICONS[skill.icon]}
                                            alt=""
                                            width={14}
                                            height={14}
                                            className="h-3.5 w-3.5 object-contain"
                                        />
                                    </span>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
