"use client";

import React from "react";
import { useLang } from "../context/LangContext";

type Experience = {
    title: string;
    description: string[];
};

const aboutTranslations = {
    es: {
        title: "Soy Full Stack Developer con experiencia Freelance en proyectos desarrollados con JavaScript",
        paragraph1: ` 
    Trabajo con React, Next.js, Node.js, Express, Nest.js, Sequelize, PostgreSQL, SQLite y Prisma. 
    Mi formación multidisciplinaria y gusto por la lógica, la planificación y la organización potencian mi desempeño como desarrollador.
    `,
        paragraph2: `
    Me interesa crecer dentro de un equipo de trabajo estable, con buenas prácticas y espacio para aportar mis habilidades. 
    `,
        experienceTitle: "Experiencia Laboral",
        experiences: [
            {
                title: "Desarrollador Full Stack Freelance - Comunidad DayZ",
                description: [
                    "Diseñé y desarrollé una plataforma web desde cero usando React.js y Node.js.",
                    "Implementé bases de datos para gestionar información en tiempo real del juego.",
                ],
            },
            {
                title: "Evaluador de Código - RemoteTasks",
                description: [
                    "Analicé código generado por IA, asegurando calidad y precisión técnica.",
                    "Revisé respuestas relacionadas con desarrollo web.",
                ],
            },
            {
                title: "Desafío Técnico – Servidor de Herramientas de IA",
                description: [
                    "Desarrollé un servidor backend con MCP para agentes de IA, diseñando herramientas y respuestas estructuradas compatibles con un agente externo.",
                ],
            },
            {
                title: "Asistente de Enseñanza - Henry Bootcamp",
                description: [
                    "Guié a estudiantes en ejercicios técnicos y promoví la colaboración grupal.",
                    "Propuse mejoras en los procesos educativos del bootcamp.",
                ],
            },
        ] satisfies Experience[],
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
        title: "I am a Full Stack Developer with Freelance experience in projects developed with JavaScript",
        paragraph1: ` 
    I work with React, Next.js, Node.js, Express, Nest.js, Sequelize, PostgreSQL, SQLite and Prisma. 
    My multidisciplinary background and taste for logic, planning, and organization enhance my performance as a developer.
    `,
        paragraph2: `
    I am interested in growing within a stable team, with good practices and space to contribute my skills. 
    `,
        experienceTitle: "Professional Experience",
        experiences: [
            {
                title: "Freelance Full Stack Developer - DayZ Community",
                description: [
                    "Designed and developed a web platform from scratch using React.js and Node.js.",
                    "Implemented databases to manage real-time game information.",
                ],
            },
            {
                title: "Code Reviewer - RemoteTasks",
                description: [
                    "Analyzed AI-generated code, ensuring quality and technical accuracy.",
                    "Reviewed web development-related responses.",
                ],
            },
            {
                title: "Technical Challenge – AI Tools Server",
                description: [
                    "Developed a backend server with MCP for AI agents, designing tools and structured responses compatible with an external agent.",
                ],
            },
            {
                title: "Teaching Assistant - Henry Bootcamp",
                description: [
                    "Guided students in technical exercises and promoted group collaboration.",
                    "Proposed improvements to the bootcamp's educational processes.",
                ],
            },
        ] satisfies Experience[],
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
                    {translation.paragraph2}
                </p>

                <section className="mt-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        {translation.experienceTitle}
                    </h3>

                    <ul className="space-y-4">
                        {translation.experiences.map((experience, idx) => (
                            <li key={idx}>
                                <h4 className="text-xl font-semibold text-white">
                                    {experience.title}
                                </h4>
                                <ul className="ml-6 list-disc text-gray-300 text-lg mt-2">
                                    {experience.description.map((desc, descIdx) => (
                                        <li key={descIdx}>{desc}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
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
