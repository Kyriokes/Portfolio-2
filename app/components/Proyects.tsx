"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import pokemon from "../assets/pokemon.jpg";
import ctime from "../assets/ctime.jpg";
import bastar2 from "../assets/bastar2.jpg";
import bastardos from "../assets/bastardos.jpg";
import prode from "../assets/prode.png";
import eco from "../assets/eco.jpg";
import { ArrowD, ArrowU } from "./Icons";
import { useLang } from "../context/LangContext";
import { ICONS } from "../data/icons";

const projectsTranslations = {
    es: {
        pokemon: {
            description: `
                Mi primer proyecto es una aplicación que permite crear y buscar Pokémon, ofreciendo una experiencia interactiva y divertida. Utilicé una combinación de React y Express, junto con una base de datos PostgreSQL, para desarrollar esta aplicación desde cero. Cabe aclarar que al estar montado en un servicio gratuito de hosting, la experiencia puede resultar un poco lenta.
            `,
        },
        chillingTime: {
            description: `
                En este proyecto grupal, contribuí a la primera versión de una página web dedicada a reservas para espacios VIP en aeropuertos. Mi enfoque principal estuvo en el desarrollo del backend, donde trabajé con tecnologías como JavaScript, PostgreSQL, Prisma y Node.js para asegurar un sólido sistema de gestión de reservas y usuarios. Además, colaboré en aspectos del frontend utilizando Next.js, HTML y Tailwind CSS para crear una interfaz de usuario atractiva y funcional.
            `,
        },
        bastardos: {
            description: `
        Desarrollé la primera versión de una plataforma web para la comunidad del servidor Bastardos del juego DayZ. Utilicé React.js para construir una interfaz dinámica y personalizada, conectada a los datos del servidor mediante la plataforma CFTools.

        La web permitía consultar estadísticas de los jugadores en tiempo real, acceder a las reglas del servidor y ver un podio con los más destacados. También incluía enlaces a las redes sociales oficiales para fortalecer el sentido de comunidad. Este desarrollo se realizó en colaboración directa con el cliente y fue ajustado a sus necesidades específicas.
    `,
        },
        bastardos2: {
            description: `
        Plataforma completamente rediseñada con e-commerce, panel de administración y autenticación con Steam. Rehice el sitio desde cero utilizando Next.js y Neon como base de datos. Además de replicar las funcionalidades anteriores, integré pagos a través de PayPal, herramientas de gestión y personalización para el administrador, y una interfaz más robusta.

        • Autenticación con Steam
        • Pagos con PayPal
        • Panel de administración para gestión de productos
        • Integración con API de CFTools
        • Construido con Next.js, TypeScript y PostgreSQL
    `,
        },
        prode: {
            description: `
        Desarrollé un simulador interactivo del Mundial 2026 porque las opciones existentes no me convencían. Permite elegir selecciones no clasificadas, aplica reglas oficiales de la FIFA para mejores terceros y desempates, e integra el ranking FIFA para simulaciones aleatorias realistas.

        Todo el estado se guarda en la URL, lo que permite compartir predicciones y desafiar amigos fácilmente. Es una herramienta simple pero completa, construida con tecnologías modernas para ofrecer una experiencia de usuario fluida.
            `,
        },

        ecoShop: {
            description: `
            EcoShop es un proyecto de arquitectura fullstack de comercio electrónico construido con React, TypeScript, Node.js, Express, Prisma y PostgreSQL.
            El proyecto implementa características clave como autenticación de usuarios con JWT, exploración del catálogo de productos y gestión del carrito de compras.
            Fue diseñado para explorar patrones de arquitectura fullstack modernos e integraciones comúnmente utilizadas en sistemas de producción.
            `,
        },
    },
    en: {
        pokemon: {
            description: `
                My first project is an app that allows you to create and search for Pokémon, offering an interactive and fun experience. I used a combination of React and Express, along with a PostgreSQL database, to develop this app from scratch. It's worth mentioning that since it's hosted on a free service, the experience may be a little slow.
            `,
        },
        chillingTime: {
            description: `
                In this group project, I contributed to the first version of a website dedicated to booking VIP spaces at airports. My main focus was on backend development, where I worked with technologies like JavaScript, PostgreSQL, Prisma, and Node.js to ensure a solid booking and user management system. Additionally, I collaborated on frontend aspects using Next.js, HTML, and Tailwind CSS to create an attractive and functional user interface.
            `,
        },
        bastardos: {
            description: `
        I developed the first version of a web platform for the Bastardos DayZ server community. Using React.js, I built a dynamic and customized interface connected to the game server’s data through the CFTools platform.

        The site allowed players to view real-time statistics, access the server rules, and check a leaderboard featuring the top players. It also included links to the server’s official social media to strengthen community engagement. This project was carried out in close collaboration with the client and tailored to their specific needs.
    `,
        },
        bastardos2: {
            description: `
        Fully redesigned platform with e-commerce, admin panel, and Steam authentication. I rebuilt the entire site from scratch using Next.js and Neon as the database. In addition to reimplementing previous functionalities, I integrated PayPal payments, management and customization tools for the admin, and a more robust interface.

        • Steam authentication
        • PayPal payments
        • Admin panel for product management
        • Integration with CFTools API
        • Built with Next.js, TypeScript and PostgreSQL
    `,
        },
        prode: {
            description: `
        I developed an interactive World Cup 2026 simulator because existing options didn't satisfy me. It allows choosing unclassified teams, applies official FIFA rules for best third-place teams and tie-breakers, and integrates FIFA rankings for realistic random simulations.

        The entire state is saved in the URL, allowing easy sharing of predictions and challenging friends. It's a simple yet complete tool, built with modern technologies to offer a smooth user experience.
            `,
        },

        ecoShop: {
            description: `
            EcoShop is a fullstack ecommerce architecture project built with React, TypeScript, Node.js, Express, Prisma, and PostgreSQL. 
            The project implements core ecommerce features such as user authentication with JWT, product catalog browsing, and shopping cart management. 
            It was designed to explore modern fullstack architecture patterns and integrations commonly used in production systems.
            `,
        },
    },
};

// Map of technology name to icon file name (for PNGs)
const techIconMap: Record<string, string> = {
    JavaScriptIcon: ICONS.JavaScript,
    TypeScriptIcon: ICONS.TypeScript,
    PostgreSQLIcon: ICONS.PostgreSQL,
    ExpressIcon: ICONS.Express,
    ReactIcon: ICONS.React,
    ReduxIcon: ICONS.Redux,
    HTMLIcon: ICONS.HTML,
    CSSIcon: ICONS.CSS,
    VSCodeIcon: ICONS.VSCode,
    NodeJSIcon: ICONS.NodeJS,
    GitIcon: ICONS.Git,
    GitHubIcon: ICONS.GitHub,
    NPMIcon: ICONS.NPM,
    PNPMIcon: ICONS.PNPM,
    PrismaIcon: ICONS.Prisma,
    NextIcon: ICONS.Next,
    TailwindIcon: ICONS.Tailwind,
    ViteIcon: ICONS.Vite,
    SupaBaseIcon: ICONS.SupaBase,
    BlenderIcon: ICONS.Blender,
    NeonIcon: ICONS.Neon,
    TraeIcon: ICONS.Trae,
};

interface ProjectData {
    title: string;
    image: StaticImageData;
    description: string;
    url: string;
    technologies: string[];
    id: string;
    repoUrl?: string;
}

const projectsData: ProjectData[] = [
    {
        title: "Bastardos server e-commerce 2025",
        image: bastar2,
        description: "",
        url: "https://bastardos-e-commerce.vercel.app/",
        repoUrl: "https://github.com/Kyriokes/Bastardos-E-Commerce",
        technologies: [
            "TypeScriptIcon",
            "PostgreSQLIcon",
            "PrismaIcon",
            "NeonIcon",
            "NextIcon",
            "ReactIcon",
            "HTMLIcon",
            "TailwindIcon",
            "VSCodeIcon",
            "GitIcon",
            "GitHubIcon",
            "PNPMIcon",
        ],
        id: "bastardos2",
    },
    {
        title: "Prode Mundial 2026",
        image: prode,
        description: "",
        url: "https://prode-mundial2026.vercel.app/qualifiers",
        repoUrl: "https://github.com/Kyriokes/ProdeMundial2026",
        technologies: [
            "TypeScriptIcon",
            "ReactIcon",
            "ViteIcon",
            "TailwindIcon",
            "HTMLIcon",
            "VSCodeIcon",
            "GitIcon",
            "GitHubIcon",
            "NPMIcon",
        ],
        id: "prode",
    },
    {
        title: "EcoShop",
        image: eco,
        description: "",
        url: "https://ecommerce-front-ten-olive.vercel.app/",
        repoUrl: "https://github.com/Kyriokes/ecommerce-crud",
        technologies: [
            "TypeScriptIcon",
            "PostgreSQLIcon",
            "PrismaIcon",
            "ExpressIcon",
            "SupaBaseIcon",
            "ReactIcon",
            "ViteIcon",
            "HTMLIcon",
            "TailwindIcon",
            "VSCodeIcon",
            "GitIcon",
            "GitHubIcon",
            "NPMIcon",
        ],
        id: "ecoShop",
    },
    {
        title: "Bastardos server web page 2024",
        image: bastardos,
        description: "",
        url: "https://bastar2.vercel.app/",
        repoUrl: "https://github.com/Kyriokes/Bastardos",
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
        id: "bastardos",
    },
    {
        title: "ChillingTime",
        image: ctime,
        description: "",
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
        id: "chillingTime",
    },
    {
        title: "Pokemon",
        image: pokemon,
        description: "",
        url: "https://pokemonappbysfb-omega.vercel.app/",
        repoUrl: "https://github.com/Kyriokes/PokeFront",
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
        id: "pokemon",
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
    const { lang } = useLang();
    const projectTranslation =
        projectsTranslations[lang][
            project.id as keyof (typeof projectsTranslations)[typeof lang]
        ];

    return (
        <div className="bg-gray-800 bg-opacity-80 p-4">
            <div
                onClick={onToggle}
                className="flex justify-between items-center mt-1 mb-4 cursor-pointer"
            >
                <h2 className="text-xl font-semibold text-white">
                    {project.title}
                </h2>
                <button className="border border-gray-700 p-1 rounded hover:bg-gray-700">
                    {isVisible ? <ArrowU /> : <ArrowD />}
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-2 mb-2">
                {project.technologies.map((techRaw) => {
                    const tech = String(techRaw);
                    // Special case: BlenderIcon, SupaBaseIcon, or TraeIcon as React component (or SVG path that needs explicit sizing/handling if distinct from PNGs)
                    if (
                        tech === "BlenderIcon" ||
                        tech === "SupaBaseIcon" ||
                        tech === "TraeIcon"
                    ) {
                        return (
                            <Image
                                key={tech}
                                src={techIconMap[tech]}
                                alt={tech}
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                        );
                    }
                    // Default: PNG icons
                    const iconSrc = techIconMap[tech];
                    if (iconSrc) {
                        return (
                            <Image
                                key={tech}
                                src={iconSrc}
                                alt={tech}
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                        );
                    }
                    return null;
                })}
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
                            className="brightness-50 rounded"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <Image
                                src="/hand-pointer.png"
                                alt="Toca o haz click"
                                width={64}
                                height={64}
                                className="opacity-80 drop-shadow-lg"
                                priority
                            />
                        </div>
                    </div>
                    <p className="text-sm font-medium text-gray-300 text-center whitespace-pre-line">
                        {projectTranslation.description}
                    </p>
                    {project.repoUrl && (
                        <div className="text-center mt-2">
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-400 hover:text-sky-300 underline text-sm transition-colors"
                            >
                                {lang === "es" ? "Ver código en GitHub" : "View code on GitHub"}
                            </a>
                        </div>
                    )}
                </article>
            )}
        </div>
    );
};

export const Proyects = () => {
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
        null
    );

    const toggleProjectVisibility = (id: string) => {
        setSelectedProjectId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="grid grid-rows-subgrid gap-1 text-white">
            {projectsData.map((project) => (
                <Project
                    key={project.title}
                    project={project}
                    isVisible={selectedProjectId === project.title}
                    onToggle={() => toggleProjectVisibility(project.title)}
                />
            ))}
        </div>
    );
};
