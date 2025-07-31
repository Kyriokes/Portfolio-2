"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// All icons as string paths (SVGs and PNGs)
const BlenderIcon = "/icons/BlenderIcon.svg";
const CsharpIcon = "/icons/CsharpIcon.svg";
const SupaBaseIcon = "/icons/SupaBaseIcon.svg";
const FireBaseIcon = "/icons/FireBaseIcon.svg";
const NestIcon = "/icons/NestIcon.png";

// PNGs as string paths
const JavaScriptIcon = "/icons/JavaScriptIcon.png";
const TypeScriptIcon = "/icons/TypeScriptIcon.png";
const ReactIcon = "/icons/ReactIcon.png";
const HTMLIcon = "/icons/HTMLIcon.png";
const CSSIcon = "/icons/CSSIcon.png";
const NextIcon = "/icons/NextIcon.png";
const ViteIcon = "/icons/ViteIcon.png";
const TailwindIcon = "/icons/TailwindIcon.png";
const ReduxIcon = "/icons/ReduxIcon.png";
const NodeJSIcon = "/icons/NodeJSIcon.png";
const ExpressIcon = "/icons/ExpressIcon.png";
const PrismaIcon = "/icons/PrismaIcon.png";
const PostgreSQLIcon = "/icons/PostgreSQLIcon.png";
const GitIcon = "/icons/GitIcon.png";
const GitHubIcon = "/icons/GitHubIcon.png";
const VSCodeIcon = "/icons/VSCodeIcon.png";
const NPMIcon = "/icons/NPMIcon.png";
const YARNIcon = "/icons/YARNIcon.png";
const UnityIcon = "/icons/UnityIcon.png";
const NeonIcon = "/icons/NeonIcon.png";

import { useLang } from "../context/LangContext";
import Image from "next/image";
import expertBadge from "./expert.png";

type IconType = React.ComponentType<{ className?: string }> | string;

interface IconWithTooltipProps {
    Icon: IconType;
    name: string;
    expert?: boolean;
}

const IconWithTooltip: React.FC<IconWithTooltipProps> = ({
    Icon,
    name,
    expert,
}) => (
    <div className="group relative inline-block">
        <div className="w-16 h-16 flex justify-center items-center">
            {typeof Icon === "string" ? (
                <Image src={Icon} alt={name} width={48} height={48} />
            ) : (
                <Icon className="w-12 h-12" />
            )}
            {expert && (
                <Image
                    src={expertBadge}
                    alt="Expert"
                    className="absolute top-0 right-0 w-5 h-5"
                />
            )}
        </div>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {name}
        </div>
    </div>
);

interface TechnologyItemProps {
    icon: IconType;
    name: string;
    description: string;
    expert?: boolean;
}

const TechnologyItem: React.FC<TechnologyItemProps> = ({
    icon,
    name,
    description,
    expert,
}) => (
    <div className="flex-1 bg-gray-800 bg-opacity-80 rounded-lg p-2">
        <IconWithTooltip Icon={icon} name={name} expert={expert} />
        <div className="flex-1 mt-2">
            <h2 className="text-white text-base font-semibold">{name}</h2>
            <p className="text-sm text-gray-300">{description}</p>
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

    const expertTexts = {
        es: "Iconos con esta insignia marcan tecnologías donde tengo mayor dominio.",
        en: "Icons with this badge indicate technologies I'm most proficient in.",
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
            { icon: JavaScriptIcon, name: "JavaScript", expert: true },
            { icon: TypeScriptIcon, name: "TypeScript", expert: false },
            { icon: CsharpIcon, name: "C#", expert: false },
        ],
        frontend: [
            { icon: ReactIcon, name: "React", expert: false },
            { icon: HTMLIcon, name: "HTML", expert: true },
            { icon: CSSIcon, name: "CSS", expert: true },
            { icon: NextIcon, name: "NextJS", expert: false },
            { icon: ViteIcon, name: "Vite", expert: false },
            { icon: TailwindIcon, name: "TailwindCSS", expert: false },
            { icon: ReduxIcon, name: "Redux", expert: false },
        ],
        backend: [
            { icon: NodeJSIcon, name: "NodeJS", expert: true },
            { icon: ExpressIcon, name: "Express", expert: true },
            { icon: PrismaIcon, name: "Prisma", expert: true },
            { icon: NeonIcon, name: "Neon", expert: true },
            { icon: SupaBaseIcon, name: "Supabase", expert: true },
            { icon: PostgreSQLIcon, name: "PostgreSQL", expert: true },
            { icon: NestIcon, name: "NestJS", expert: false },
            { icon: FireBaseIcon, name: "Firebase", expert: false },
        ],
        tools: [
            { icon: GitIcon, name: "Git", expert: true },
            { icon: GitHubIcon, name: "GitHub", expert: true },
            { icon: VSCodeIcon, name: "VSCode", expert: true },
            { icon: NPMIcon, name: "NPM", expert: true },
            { icon: YARNIcon, name: "Yarn", expert: false },
            { icon: UnityIcon, name: "Unity", expert: false },
            { icon: BlenderIcon, name: "Blender", expert: false },
        ],
    };

    return (
        <div className="space-y-8 text-white bg-gray-800 bg-opacity-80 rounded-xl p-4">
            <div className="embla overflow-hidden" ref={emblaRef}>
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

            <div className="text-center px-4">
                <h2 className="text-2xl font-bold mb-4">
                    {sectionTitles[lang].technologies}
                </h2>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
                    <Image
                        src={expertBadge}
                        alt="Expert badge"
                        width={20}
                        height={20}
                    />
                    <span>{expertTexts[lang]}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            {sectionTitles[lang].frontend}
                        </h3>
                        {sections.frontend.map((tech) => (
                            <TechnologyItem
                                key={tech.name}
                                icon={tech.icon}
                                name={tech.name}
                                expert={tech.expert}
                                description={
                                    techDescriptions[
                                        tech.name as keyof typeof techDescriptions
                                    ][lang]
                                }
                            />
                        ))}
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            {sectionTitles[lang].languages}
                        </h3>
                        {sections.languages.map((tech) => (
                            <TechnologyItem
                                key={tech.name}
                                icon={tech.icon}
                                name={tech.name}
                                expert={tech.expert}
                                description={
                                    techDescriptions[
                                        tech.name as keyof typeof techDescriptions
                                    ][lang]
                                }
                            />
                        ))}
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            {sectionTitles[lang].backend}
                        </h3>
                        {sections.backend.map((tech) => (
                            <TechnologyItem
                                key={tech.name}
                                icon={tech.icon}
                                name={tech.name}
                                expert={tech.expert}
                                description={
                                    techDescriptions[
                                        tech.name as keyof typeof techDescriptions
                                    ][lang]
                                }
                            />
                        ))}
                    </div>
                    <div className="space-y-2 md:col-span-2 lg:col-span-1">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            {sectionTitles[lang].tools}
                        </h3>
                        {sections.tools.map((tech) => (
                            <TechnologyItem
                                key={tech.name}
                                icon={tech.icon}
                                name={tech.name}
                                expert={tech.expert}
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
