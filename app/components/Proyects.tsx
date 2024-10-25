"use client";

import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import pokemon from "../assets/pokemon.jpg";
import ctime from "../assets/ctime.jpg";
import bastar2 from "../assets/bastar2.jpg";
import {
    ArrowA,
    ArrowD,
    ArrowU,
    CSSIcon,
    ExpressIcon,
    GitHubIcon,
    GitIcon,
    HTMLIcon,
    JavaScriptIcon,
    NextIcon,
    NodeJSIcon,
    NPMIcon,
    PostgreSQLIcon,
    PrismaIcon,
    ReactIcon,
    ReduxIcon,
    TailwindIcon,
    VSCodeIcon,
} from "../assets/icons";

const iconComponents = {
    JavaScriptIcon,
    PostgreSQLIcon,
    ExpressIcon,
    ReactIcon,
    ReduxIcon,
    HTMLIcon,
    CSSIcon,
    VSCodeIcon,
    NodeJSIcon,
    GitIcon,
    GitHubIcon,
    NPMIcon,
    PrismaIcon,
    NextIcon,
    TailwindIcon,
};

interface ProjectData {
    title: string;
    image: StaticImageData;
    description: string;
    url: string;
    technologies: (keyof typeof iconComponents)[];
}

const projectsData: ProjectData[] = [
    {
        title: "Pokemon",
        image: pokemon,
        description:
            "Mi primer proyecto es una aplicación que permite crear y buscar Pokémon, ofreciendo una experiencia interactiva y divertida. Utilicé una combinación de React y Express, junto con una base de datos PostgreSQL, para desarrollar esta aplicación desde cero. Cabe aclarar que al estar montado en un servicio gratuito de hosting la experiencia puede resultar un poco lenta",
        url: "https://pokemonappbysfb-omega.vercel.app/",
        technologies: [
            "JavaScriptIcon",
            "PostgreSQLIcon",
            "ExpressIcon",
            "ReactIcon",
            "ReduxIcon",
            "HTMLIcon",
            "CSSIcon",
            "VSCodeIcon",
            "NodeJSIcon",
            "GitIcon",
            "GitHubIcon",
            "NPMIcon",
        ],
    },
    {
        title: "ChillingTime",
        image: ctime,
        description:
            "En este proyecto grupal, contribuí a la primera versión de una página web dedicada a reservas para espacios VIP en aeropuertos. Mi enfoque principal estuvo en el desarrollo del backend, donde trabajé con tecnologías como JavaScript, PostgreSQL, Prisma y Node.js para asegurar un sólido sistema de gestión de reservas y usuarios. Además, colaboré en aspectos del frontend utilizando Next.js, HTML y Tailwind CSS para crear una interfaz de usuario atractiva y funcional.",
        url: "https://chillingtime.co/",
        technologies: [
            "JavaScriptIcon",
            "PostgreSQLIcon",
            "PrismaIcon",
            "NextIcon",
            "HTMLIcon",
            "TailwindIcon",
            "VSCodeIcon",
            "NodeJSIcon",
            "GitIcon",
            "GitHubIcon",
            "NPMIcon",
        ],
    },
    {
        title: "Bastardos server web page",
        image: bastar2,
        description:
            "En este proyecto desarrollado para el servidor Bastardos del juego DayZ, creé una página web personalizada que permite a los jugadores consultar sus estadísticas de forma actualizada. La página está conectada al servidor del juego mediante la plataforma CFTools, lo que garantiza que los datos se reflejen en tiempo real. Además, el sitio cuenta con una sección dedicada a las reglas del juego, un podio con los jugadores más destacados y enlaces a las redes sociales oficiales del servidor para una experiencia de comunidad completa.",
        url: "https://bastar2.vercel.app/",
        technologies: [
            "JavaScriptIcon",
            "ReactIcon",
            "NextIcon",
            "HTMLIcon",
            "CSSIcon",
            "VSCodeIcon",
            "GitIcon",
            "GitHubIcon",
            "NPMIcon",
        ],
    },
];

const Project = ({
    project,
    isVisible,
    onToggle,
}: {
    project: ProjectData;
    isVisible: boolean;
    onToggle: () => void;
}) => {
    return (
        <div className="mb-8">
            <div
                onClick={onToggle}
                className="flex justify-between items-center mt-10 mb-4 cursor-pointer"
            >
                <h2 className="text-xl font-bold">{project.title}</h2>
                <button className="border p-1">
                    {isVisible ? <ArrowU /> : <ArrowD />}
                </button>
            </div>
            {isVisible && (
                <article className="space-y-4">
                    <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 aspect-[16/9] max-w-lg mx-auto">
                        <div
                            className="absolute inset-0 z-10 cursor-pointer"
                            onClick={() => window.open(project.url, "_blank")}
                        />
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="brightness-50"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ArrowA />
                            <p className="absolute text-2xl font-bold text-center text-white">
                                tap
                            </p>
                        </div>
                    </div>
                    <p className="text-sm font-bold text-center">
                        {project.description}
                    </p>
                </article>
            )}
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                    const IconComponent = iconComponents[tech];
                    return <IconComponent key={tech} />;
                })}
            </div>
        </div>
    );
};

export const Proyects = () => {
    const [visibleProjects, setVisibleProjects] = useState<{
        [key: string]: boolean;
    }>({});

    const toggleProjectVisibility = (title: string) => {
        setVisibleProjects((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <div className="grid grid-rows-subgrid gap-4 text-white">
            {projectsData.map((project) => (
                <Project
                    key={project.title}
                    project={project}
                    isVisible={visibleProjects[project.title] || false}
                    onToggle={() => toggleProjectVisibility(project.title)}
                />
            ))}
        </div>
    );
};
