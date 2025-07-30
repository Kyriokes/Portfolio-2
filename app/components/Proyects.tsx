"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import pokemon from "../assets/pokemon.jpg";
import ctime from "../assets/ctime.jpg";
import bastar2 from "../assets/bastar2.jpg";
import eco from "../assets/eco.jpg";
import {
    ArrowD,
    ArrowU,
    CSSIcon,
    ExpressIcon,
    GitHubIcon,
    GitIcon,
    HTMLIcon,
    TypeScriptIcon,
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
    SupaBaseIcon,
    ViteIcon,
} from "../assets/icons";
import { useLang } from "../context/LangContext";

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
                En este proyecto desarrollado para el servidor Bastardos del juego DayZ, creé una página web personalizada que permite a los jugadores consultar sus estadísticas de forma actualizada. La página está conectada al servidor del juego mediante la plataforma CFTools, lo que garantiza que los datos se reflejen en tiempo real. Además, el sitio cuenta con una sección dedicada a las reglas del juego, un podio con los jugadores más destacados y enlaces a las redes sociales oficiales del servidor para una experiencia de comunidad completa.
            `,
        },
        ecoShop: {
            description: `
            EcoShop es una plataforma de ecommerce fullstack que estoy desarrollando actualmente como proyecto personal. Utiliza React con TypeScript y Tailwind CSS para el frontend, y Node.js con Express, Prisma y PostgreSQL para el backend. 
        
            Ya se encuentran funcionando partes clave como el registro e inicio de sesión de usuarios con JWT, la visualización de productos y la gestión del carrito de compras. Próximamente, migraré el sistema de autenticación a Auth0 para mejorar la seguridad y escalabilidad. También estoy trabajando en la integración con Stripe para permitir pagos reales en la plataforma.
        
            Cuenta con un panel administrativo en desarrollo para la gestión de productos y usuarios. Es un proyecto en progreso que refleja mi capacidad para diseñar arquitecturas modernas, trabajar con tecnologías de backend y frontend, e incorporar servicios de terceros como Auth0 y Stripe.
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
                In this project developed for the Bastardos server in DayZ, I created a custom website that allows players to check their up-to-date statistics. The site is connected to the game server via the CFTools platform, ensuring real-time data reflection. The website also features a dedicated section for game rules, a podium with top players, and links to the server's official social media for a full community experience.
            `,
        },
        ecoShop: {
            description: `
            EcoShop is a fullstack ecommerce platform I'm currently developing as a personal project. It uses React with TypeScript and Tailwind CSS for the frontend, and Node.js with Express, Prisma, and PostgreSQL for the backend.
        
            Key features are already working, including user registration and login with JWT, product browsing, and shopping cart management. I'm currently transitioning the authentication system to Auth0 for improved security and scalability, and working on integrating Stripe to enable real payment processing.
        
            The admin panel is under development for managing products and users. This is a work-in-progress project that showcases my ability to design modern architectures, work across the full stack, and integrate third-party services like Auth0 and Stripe.
            `,
        },
    },
};

const iconComponents = {
    JavaScriptIcon,
    TypeScriptIcon,
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
    SupaBaseIcon,
    ViteIcon,
};

interface ProjectData {
    title: string;
    image: StaticImageData;
    description: string;
    url: string;
    technologies: (keyof typeof iconComponents)[];
    id: string;
}

const projectsData: ProjectData[] = [
    {
        title: "EcoShop (WIP)",
        image: eco,
        description: "",
        url: "https://ecommerce-front-ten-olive.vercel.app/",
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
        image: bastar2,
        description: "",
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
                </article>
            )}
            <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => {
                    const IconComponent = iconComponents[tech];
                    return <IconComponent key={tech} />;
                })}
            </div>
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
