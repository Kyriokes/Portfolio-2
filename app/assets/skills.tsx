"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
    JavaScriptIcon,
    TypeScriptIcon,
    CsharpIcon,
    NestIcon,
    PostgreSQLIcon,
    ExpressIcon,
    PrismaIcon,
    ReactIcon,
    ReduxIcon,
    ViteIcon,
    NextIcon,
    HTMLIcon,
    CSSIcon,
    TailwindIcon,
    VSCodeIcon,
    NodeJSIcon,
    UnityIcon,
    GitIcon,
    GitHubIcon,
    NPMIcon,
    YARNIcon,
    NeonIcon,
    BlenderIcon,
    FireBaseIcon,
    SupaBaseIcon,

} from "./icons";
import { useLang } from "../context/LangContext"; // Asumo que ya usas el context de idioma

interface IconWithTooltipProps {
    Icon: React.ComponentType;
    name: string;
}

const IconWithTooltip: React.FC<IconWithTooltipProps> = ({ Icon, name }) => (
    <div className="group relative inline-block">
        <div className="w-16 h-16 flex justify-center items-center">
            <Icon />
        </div>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {name}
        </div>
    </div>
);

const TechnologyItem: React.FC<{
    icon: React.ComponentType;
    name: string;
    description: string;
}> = ({ icon: Icon, name, description }) => (
    <div className="flex-1">
        <IconWithTooltip Icon={Icon} name={name} />
        <div className="flex-1">
            <h2>{name}</h2>
            <p className="flex-1">{description}</p>
        </div>
    </div>
);

const Skills: React.FC = () => {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true, containScroll: "trimSnaps" },
        [Autoplay({ delay: 2000, stopOnInteraction: false })]
    );
    const { lang } = useLang();

    const sectionTitles = {
        es: {
            languages: "Lenguajes de programación",
            frontend: "Frontend",
            backend: "Backend",
            tools: "Herramientas",
            technologies: "Tecnologías",
        },
        en: {
            languages: "Programming Languages",
            frontend: "Frontend",
            backend: "Backend",
            tools: "Tools",
            technologies: "Technologies",
        },
    };

    const techDescriptions = {
        JavaScript: {
            es: "Lenguaje de programación que permite añadir interactividad en sitios web.",
            en: "Programming language for adding interactivity to websites.",
        },
        TypeScript: {
            es: "Superset de JavaScript que agrega tipos estáticos para un código más robusto.",
            en: "JavaScript superset that adds static typing for more robust code.",
        },
        "C#": {
            es: "Lenguaje de programación orientado a objetos desarrollado por Microsoft.",
            en: "Object-oriented programming language developed by Microsoft.",
        },
        React: {
            es: "Biblioteca de JavaScript para construir interfaces de usuario interactivas.",
            en: "JavaScript library for building interactive UIs.",
        },
        HTML: {
            es: "Lenguaje de marcado para estructurar páginas web.",
            en: "Markup language for structuring web pages.",
        },
        CSS: {
            es: "Lenguaje de estilos para diseñar páginas web.",
            en: "Style language for designing web pages.",
        },
        NextJS: {
            es: "Framework de React para renderizado del lado del servidor.",
            en: "React framework for server-side rendering.",
        },
        Vite: {
            es: "Herramienta de desarrollo rápida para aplicaciones modernas.",
            en: "Fast development tool for modern applications.",
        },
        TailwindCSS: {
            es: "Framework de CSS basado en utilidades.",
            en: "Utility-first CSS framework.",
        },
        NodeJS: {
            es: "Entorno de ejecución de JavaScript para el backend.",
            en: "JavaScript runtime environment for backend.",
        },
        Express: {
            es: "Framework minimalista de Node.js para crear APIs.",
            en: "Minimalist Node.js framework for building APIs.",
        },
        NestJS: {
            es: "Framework progresivo para construir aplicaciones eficientes en Node.js.",
            en: "Progressive Node.js framework for building efficient apps.",
        },
        Prisma: {
            es: "ORM moderno y fácil de usar.",
            en: "Modern and easy-to-use ORM.",
        },
        PostgreSQL: {
            es: "Sistema de gestión de bases de datos relacional open-source.",
            en: "Open-source relational database system.",
        },
        Redux: {
            es: "Biblioteca de JavaScript para manejo del estado en aplicaciones.",
            en: "JavaScript library for state management in applications.",
        },
        Neon: {
            es: "Base de datos en la nube basada en PostgreSQL.",
            en: "Cloud database based on PostgreSQL.",
        },
        Git: {
            es: "Sistema de control de versiones distribuido.",
            en: "Distributed version control system.",
        },
        GitHub: {
            es: "Plataforma de alojamiento para proyectos Git.",
            en: "Hosting platform for Git projects.",
        },
        VSCode: {
            es: "Editor de código fuente extensible y configurable.",
            en: "Extensible and configurable code editor.",
        },
        NPM: {
            es: "Gestor de paquetes para JavaScript.",
            en: "Package manager for JavaScript.",
        },
        Yarn: {
            es: "Gestor de paquetes rápido y seguro.",
            en: "Fast and secure package manager.",
        },
        Unity: {
            es: "Motor de desarrollo de videojuegos en 2D y 3D.",
            en: "2D and 3D game development engine.",
        },
        Blender: {
            es: "Software libre para modelado, animación y renderizado 3D.",
            en: "Open-source 3D modeling, animation, and rendering software.",
        },
        Firebase: {
            es: "Plataforma de desarrollo de aplicaciones móviles y web de Google, que ofrece servicios como bases de datos en tiempo real, autenticación y hosting.",
            en: "Google's mobile and web app development platform, offering services like real-time databases, authentication, and hosting.",
        },
        Supabase: {
            es: "Plataforma de código abierto que proporciona una alternativa a Firebase, con bases de datos PostgreSQL, autenticación y almacenamiento de archivos.",
            en: "An open-source platform providing an alternative to Firebase, with PostgreSQL databases, authentication, and file storage.",
        },
    };

    const sections = {
        languages: [
            { icon: JavaScriptIcon, name: "JavaScript" },
            { icon: TypeScriptIcon, name: "TypeScript" },
            { icon: CsharpIcon, name: "C#" },
        ],
        frontend: [
            { icon: ReactIcon, name: "React" },
            { icon: HTMLIcon, name: "HTML" },
            { icon: CSSIcon, name: "CSS" },
            { icon: NextIcon, name: "NextJS" },
            { icon: ViteIcon, name: "Vite" },
            { icon: TailwindIcon, name: "TailwindCSS" },
            { icon: ReduxIcon, name: "Redux" },
        ],
        backend: [
            { icon: NodeJSIcon, name: "NodeJS" },
            { icon: ExpressIcon, name: "Express" },
            { icon: NestIcon, name: "NestJS" },
            { icon: PrismaIcon, name: "Prisma" },
            { icon: PostgreSQLIcon, name: "PostgreSQL" },
            { icon: FireBaseIcon, name: "Firebase" },
            { icon: SupaBaseIcon, name: "Supabase" },
            { icon: NeonIcon, name: "Neon" },
        ],
        tools: [
            { icon: GitIcon, name: "Git" },
            { icon: GitHubIcon, name: "GitHub" },
            { icon: VSCodeIcon, name: "VSCode" },
            { icon: NPMIcon, name: "NPM" },
            { icon: YARNIcon, name: "Yarn" },
            { icon: UnityIcon, name: "Unity" },
            { icon: BlenderIcon, name: "Blender" },
        ],
    };

    return (
        <div className="space-y-8 text-white bg-black bg-opacity-70">
            {/* Slider */}
            <div
                className="embla overflow-hidden bg-black bg-opacity-70"
                ref={emblaRef}
            >
                <div className="embla__container flex">
                    {Object.values(sections)
                        .flat()
                        .concat(Object.values(sections).flat())
                        .map((tech, index) => (
                            <div
                                key={index}
                                className="embla__slide flex-[0_0_auto] mr-4"
                            >
                                <IconWithTooltip
                                    Icon={tech.icon}
                                    name={tech.name}
                                />
                            </div>
                        ))}
                </div>
            </div>

            {/* Sections */}
            <div className="text-center px-4">
                <h2 className="text-2xl font-bold mb-4">
                    {sectionTitles[lang].technologies}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Frontend */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold mb-4">
                            {sectionTitles[lang].frontend}
                        </h3>
                        {sections.frontend.map((tech) => (
                            <TechnologyItem
                                key={tech.name}
                                icon={tech.icon}
                                name={tech.name}
                                description={
                                    techDescriptions[
                                        tech.name as keyof typeof techDescriptions
                                    ][lang]
                                }
                            />
                        ))}
                    </div>

                    {/* Lenguajes */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold mb-4">
                            {sectionTitles[lang].languages}
                        </h3>
                        {sections.languages.map((tech) => (
                            <TechnologyItem
                                key={tech.name}
                                icon={tech.icon}
                                name={tech.name}
                                description={
                                    techDescriptions[
                                        tech.name as keyof typeof techDescriptions
                                    ][lang]
                                }
                            />
                        ))}
                    </div>
                    {/* Backend */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold mb-4">
                            {sectionTitles[lang].backend}
                        </h3>
                        {sections.backend.map((tech) => (
                            <TechnologyItem
                                key={tech.name}
                                icon={tech.icon}
                                name={tech.name}
                                description={
                                    techDescriptions[
                                        tech.name as keyof typeof techDescriptions
                                    ][lang]
                                }
                            />
                        ))}
                    </div>

                    {/* Herramientas */}
                    <div className="space-y-2 md:col-span-2 lg:col-span-1">
                        <h3 className="text-xl font-semibold mb-4">
                            {sectionTitles[lang].tools}
                        </h3>
                        {sections.tools.map((tech) => (
                            <TechnologyItem
                                key={tech.name}
                                icon={tech.icon}
                                name={tech.name}
                                description={
                                    techDescriptions[
                                        tech.name as keyof typeof techDescriptions
                                    ][lang]
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
