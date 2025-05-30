"use client";

import React from "react";
import { useLang } from "../context/LangContext";

const aboutTranslations = {
    es: {
        title: "Soy un Desarrollador Full Stack especializado en JavaScript",
        paragraph1: `
            Tengo experiencia trabajando con React, Next.js, Nest.js, Node.js, Sequelize, PostgreSQL, SQLite y Prisma. 
            También cuento con habilidades en GIT/GitHub, Unity y Blender. Mi formación multidisciplinaria y mi pasión por la lógica, la planificación y la organización 
            potencian mi desempeño como desarrollador.
        `,
        experienceTitle: "Experiencia Laboral",
        experience1Title: "Desarrollador Full Stack Freelance - Comunidad DayZ",
        experience1Description: [
            "Diseñé y desarrollé una plataforma web desde cero usando React.js y Node.js.",
            "Implementé bases de datos para gestionar información en tiempo real del juego.",
        ],
        experience2Title: "Evaluador de Código - RemoteTasks",
        experience2Description: [
            "Analicé código generado por IA, asegurando calidad y precisión técnica.",
            "Revisé respuestas relacionadas con desarrollo web.",
        ],
        experience3Title: "Asistente de Enseñanza - Henry Bootcamp",
        experience3Description: [
            "Guié a estudiantes en ejercicios técnicos y promoví la colaboración grupal.",
            "Propuse mejoras en los procesos educativos del bootcamp.",
        ],
        technologiesTitle: "Tecnologías",
        technologies: [
            "Frontend: React, Next.js, HTML, CSS, JavaScript, TypeScript",
            "Backend: Node.js, Nest.js, Express.js, Prisma, Sequelize",
            "Bases de datos: PostgreSQL, SQLite",
            "Control de versiones: GIT/GitHub",
            "Herramientas: Unity, Blender",
        ],
        valueTitle: "¡Quiero aportar valor a tu equipo!",
        valueMessage: `
            Contáctame para conversar sobre cómo mis habilidades y experiencia pueden 
            contribuir a tus proyectos.
        `,
    },
    en: {
        title: "I am a Full Stack Developer specialized in JavaScript",
        paragraph1: `
            I have experience working with React, Next.js, Nest.js, Node.js, Sequelize, PostgreSQL, SQLite, and Prisma. 
            I also have skills in GIT/GitHub, Unity, and Blender. My multidisciplinary background and passion for logic, planning, 
            and organization enhance my performance as a developer.
        `,
        experienceTitle: "Professional Experience",
        experience1Title: "Freelance Full Stack Developer - DayZ Community",
        experience1Description: [
            "Designed and developed a web platform from scratch using React.js and Node.js.",
            "Implemented databases to manage real-time game information.",
        ],
        experience2Title: "Code Analyst - RemoteTasks",
        experience2Description: [
            "Analyzed AI-generated code, ensuring quality and technical accuracy.",
            "Reviewed web development-related responses.",
        ],
        experience3Title: "Teaching Assistant - Henry Bootcamp",
        experience3Description: [
            "Assisted students with technical exercises and encouraged group collaboration.",
            "Suggested improvements to teaching processes.",
        ],
        technologiesTitle: "Technologies",
        technologies: [
            "Frontend: React, Next.js, HTML, CSS, JavaScript, TypeScript",
            "Backend: Node.js, Nest.js, Express.js, Prisma, Sequelize",
            "Databases: PostgreSQL, SQLite",
            "Version control: GIT/GitHub",
            "Tools: Unity, Blender",
        ],
        valueTitle: "I want to add value to your team!",
        valueMessage: `
            Contact me to discuss how my skills and experience can contribute to your projects.
        `,
    },
};

const About: React.FC = () => {
    const { lang } = useLang();
    const translation = aboutTranslations[lang];

    return (
        <section className="relative p-5 bg-gray-800 bg-opacity-80 text-white overflow-x-hidden overflow-y-auto box-border">
            <h2 className="text-3xl font-semibold mb-4 text-white">
                {translation.title}
            </h2>

            <div className="max-h-[30vh] md:max-h-full">
                <p className="text-lg md:text-xl text-gray-300 mb-6 whitespace-pre-line">
                    {translation.paragraph1}
                </p>

                <section className="mt-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        {translation.experienceTitle}
                    </h3>

                    <ul className="space-y-4">
                        {[1, 2, 3].map((i) => {
                            const title =
                                translation[
                                    `experience${i}Title` as keyof typeof translation
                                ];
                            const descs = translation[
                                `experience${i}Description` as keyof typeof translation
                            ] as string[];
                            return (
                                <li key={i}>
                                    <h4 className="text-xl font-semibold text-white">
                                        {title}
                                    </h4>
                                    <ul className="ml-6 list-disc text-gray-300 text-lg mt-2">
                                        {descs.map((desc, idx) => (
                                            <li key={idx}>{desc}</li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </section>

                <section className="mt-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        {translation.technologiesTitle}
                    </h3>

                    <ul className="flex flex-wrap text-gray-300 text-lg">
                        {translation.technologies.map((tech, idx) => (
                            <li key={idx} className="mr-4">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        {translation.valueTitle}
                    </h3>

                    <p className="text-gray-300 text-lg">
                        {translation.valueMessage}
                    </p>
                </section>
            </div>
        </section>
    );
};

export default About;
