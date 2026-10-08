import type { StaticImageData } from "next/image";
import keywords from "../assets/keywords.jpg";
import prode from "../assets/prode.jpg";
import bastardos2 from "../assets/bastar2.jpg";
import eco from "../assets/eco.jpg";
import bastardos from "../assets/bastardos.jpg";
import ctime from "../assets/ctime.jpg";
import pokemon from "../assets/pokemon.jpg";
import { ICONS } from "./icons";

export type Lang = "en" | "es";
export type L<T> = Record<Lang, T>;

export const SOCIAL = {
    github: "https://github.com/Kyriokes",
    linkedin: "https://www.linkedin.com/in/sergiofb/",
    whatsapp:
        "https://wa.me/5491535040982?text=%C2%A1Hola%20Sergio,%20me%20contacto%20con%20vos%20desde%20tu%20porfolio!%0AMe%20llamo:%0ATe%20contacto%20respecto%20a%20...",
    email: "ferrari8986@gmail.com",
};

export const CV: L<string> = {
    en: "/CV_SERGIO_FERRARI_BRYCE_EN.pdf",
    es: "/CV_SERGIO_FERRARI_BRYCE.pdf",
};

// ---------------------------------------------------------------- UI text

export const ui = {
    nav: {
        projects: { en: "Projects", es: "Proyectos" },
        experience: { en: "Experience", es: "Experiencia" },
        skills: { en: "Skills", es: "Skills" },
        contact: { en: "Contact", es: "Contacto" },
        cv: { en: "CV", es: "CV" },
        menu: { en: "Menu", es: "Menú" },
        close: { en: "Close", es: "Cerrar" },
        language: { en: "Language", es: "Idioma" },
    },
    hero: {
        role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
        statement: {
            en: "I build websites, APIs and AI-driven tools using modern JavaScript technologies.",
            es: "Construyo sitios web, APIs y herramientas con IA usando tecnologías modernas de JavaScript.",
        },
        viewProjects: { en: "View projects", es: "Ver proyectos" },
        downloadCv: { en: "Download CV", es: "Descargar CV" },
        photoAlt: {
            en: "Portrait of Sergio Ferrari Bryce",
            es: "Retrato de Sergio Ferrari Bryce",
        },
    },
    projects: {
        title: { en: "Projects", es: "Proyectos" },
        intro: {
            en: "Every project has a live demo. Click a screenshot to open it.",
            es: "Todos los proyectos tienen demo en vivo. Hacé clic en la captura para abrirla.",
        },
        more: { en: "More projects", es: "Más proyectos" },
        demo: { en: "Live demo", es: "Ver demo" },
        code: { en: "Code", es: "Código" },
        opensIn: {
            en: "opens in a new tab",
            es: "se abre en una pestaña nueva",
        },
    },
    experience: {
        title: { en: "Experience", es: "Experiencia" },
        about1: {
            en: "I am a Full Stack Developer working with React, TypeScript, Next.js, Node.js and PostgreSQL. I built KeyWords, my own platform with multiple AI APIs, a feedback-based ranking system and ATS analysis of CVs against job postings. I handle the full cycle: architecture, backend, frontend, authentication and deploy. English C1.",
            es: "Soy Desarrollador Full Stack con stack en React, TypeScript, Next.js, Node.js y PostgreSQL. Construí KeyWords, una plataforma propia con múltiples APIs de IA, sistema de ranking por feedback y análisis ATS de CVs contra ofertas laborales. Manejo el ciclo completo: arquitectura, backend, frontend, autenticación y deploy. Inglés C1.",
        },
        about2: {
            en: "My multidisciplinary background and taste for logic, planning and organization enhance my performance as a developer. I am interested in growing within a stable team, with good practices and space to contribute my skills.",
            es: "Mi formación multidisciplinaria y gusto por la lógica, la planificación y la organización potencian mi desempeño como desarrollador. Me interesa crecer dentro de un equipo de trabajo estable, con buenas prácticas y espacio para aportar mis habilidades.",
        },
        quote: {
            en: "The basics are the most important!",
            es: "¡Lo básico es lo más importante!",
        },
        quoteBy: {
            en: "Takehiko Inoue, author of Slam Dunk",
            es: "Takehiko Inoue, autor de Slam Dunk",
        },
    },
    skills: {
        title: { en: "Skills", es: "Skills" },
        legend: {
            en: "Highlighted: the technologies where I am strongest.",
            es: "Resaltadas: las tecnologías donde tengo mayor dominio.",
        },
        languages: { en: "Languages", es: "Lenguajes" },
        frontend: { en: "Frontend", es: "Frontend" },
        backend: { en: "Backend and data", es: "Backend y datos" },
        tools: { en: "Tools", es: "Herramientas" },
    },
    contact: {
        title: { en: "Contact", es: "Contacto" },
        lead: {
            en: "Looking for a freelance developer, or for someone to join your team? Let's talk.",
            es: "¿Buscás un desarrollador freelance, o alguien para sumar a tu equipo? Hablemos.",
        },
        name: { en: "Full name", es: "Nombre y apellido" },
        email: { en: "Email", es: "Email" },
        message: { en: "Message", es: "Mensaje" },
        send: { en: "Send message", es: "Enviar mensaje" },
        sending: { en: "Sending...", es: "Enviando..." },
        success: {
            en: "Message sent. I will contact you soon.",
            es: "Mensaje enviado. Pronto me pongo en contacto.",
        },
        error: {
            en: "The message could not be sent. Try again or write to my email.",
            es: "No se pudo enviar el mensaje. Probá de nuevo o escribime por email.",
        },
        errName: { en: "Name is too short", es: "El nombre es muy corto" },
        errEmail: { en: "Invalid email", es: "Email inválido" },
        errMessage: {
            en: "The message is too short",
            es: "El mensaje es muy corto",
        },
        github: { en: "GitHub", es: "GitHub" },
        linkedin: { en: "LinkedIn", es: "LinkedIn" },
        whatsapp: { en: "WhatsApp", es: "WhatsApp" },
    },
    footer: {
        top: { en: "Back to top", es: "Volver arriba" },
    },
};

// -------------------------------------------------------------- Experience

export interface Experience {
    role: L<string>;
    org: L<string>;
    period: L<string>;
    points: L<string[]>;
}

export const experiences: Experience[] = [
    {
        role: {
            en: "Full Stack Developer (Backoffice)",
            es: "Desarrollador Full Stack (Backoffice)",
        },
        org: {
            en: "Instituto de Ayuda Financiera (IAF), on-site",
            es: "Instituto de Ayuda Financiera (IAF), presencial",
        },
        period: { en: "07/2026 - Present", es: "07/2026 - Presente" },
        points: {
            en: [
                "Modernizing a legacy payroll system (.NET, VB.NET, ASPX, SQL), manually validating each function against the current system.",
                "Fixing bugs and providing backoffice support on an undocumented codebase.",
            ],
            es: [
                "Modernización de un sistema legacy de liquidación de sueldos (.NET, VB.NET, ASPX, SQL), validando manualmente cada función contra el sistema actual.",
                "Corrección de bugs y soporte de backoffice en una base de código sin documentación.",
            ],
        },
    },
    {
        role: {
            en: "Full Stack Developer",
            es: "Desarrollador Full Stack",
        },
        org: { en: "Freelance, remote", es: "Freelance, remoto" },
        period: { en: "06/2023 - Present", es: "06/2023 - Presente" },
        points: {
            en: [
                "Web platforms with React, Next.js, Node.js, Express, TypeScript and PostgreSQL. RESTful APIs, admin panels, OAuth (Google, Steam) and PayPal payments.",
                "Relational databases with Prisma and Sequelize. End-to-end management: planning, documentation and delivery.",
            ],
            es: [
                "Plataformas web con React, Next.js, Node.js, Express, TypeScript y PostgreSQL. APIs RESTful, paneles admin, OAuth (Google, Steam) y pagos con PayPal.",
                "Bases de datos relacionales con Prisma y Sequelize. Gestión end-to-end: planificación, documentación y entregas.",
            ],
        },
    },
    {
        role: { en: "AI Code Analyst", es: "Analista de Código - IA" },
        org: { en: "Remotasks, remote", es: "Remotasks, remoto" },
        period: { en: "12/2023 - 03/2026", es: "12/2023 - 03/2026" },
        points: {
            en: [
                "Analysis and correction of AI-generated code in JavaScript, HTML and CSS. Best practices, readability and quality standards.",
            ],
            es: [
                "Análisis y corrección de código generado por IA en JavaScript, HTML y CSS. Buenas prácticas, legibilidad y estándares de calidad.",
            ],
        },
    },
    {
        role: {
            en: "Technical Mentor, Full Stack",
            es: "Mentor Técnico, Full Stack",
        },
        org: { en: "Henry Bootcamp, remote", es: "Henry Bootcamp, remoto" },
        period: { en: "03/2023 - 07/2023", es: "03/2023 - 07/2023" },
        points: {
            en: [
                "Selected among 300+ candidates. Mentored 18 students in JS, React, Node.js and databases. 90% graduation rate.",
            ],
            es: [
                "Seleccionado entre más de 300 candidatos. Mentoría a 18 estudiantes en JS, React, Node.js y bases de datos. Graduación del 90%.",
            ],
        },
    },
];

// ------------------------------------------------------------------ Skills

export type IconKey = keyof typeof ICONS;

export interface Skill {
    name: string;
    icon: IconKey;
    strong?: boolean;
}

export const skillGroups: {
    id: "languages" | "frontend" | "backend" | "tools";
    items: Skill[];
}[] = [
    {
        id: "languages",
        items: [
            { name: "JavaScript", icon: "JavaScript", strong: true },
            { name: "TypeScript", icon: "TypeScript" },
            { name: "C#.NET", icon: "Csharp" },
            { name: "VB.NET", icon: "Placeholder" },
        ],
    },
    {
        id: "frontend",
        items: [
            { name: "React", icon: "React" },
            { name: "HTML", icon: "HTML", strong: true },
            { name: "CSS", icon: "CSS", strong: true },
            { name: "Next.js", icon: "Next" },
            { name: "Vite", icon: "Vite" },
            { name: "Tailwind CSS", icon: "Tailwind" },
            { name: "Redux", icon: "Redux" },
            { name: "Zustand", icon: "Placeholder" },
        ],
    },
    {
        id: "backend",
        items: [
            { name: "Node.js", icon: "NodeJS", strong: true },
            { name: "Express", icon: "Express", strong: true },
            { name: "Prisma", icon: "Prisma", strong: true },
            { name: "PostgreSQL", icon: "PostgreSQL", strong: true },
            { name: "Neon", icon: "Neon", strong: true },
            { name: "Supabase", icon: "SupaBase", strong: true },
            { name: "NestJS", icon: "Nest" },
            { name: "Firebase", icon: "FireBase" },
            { name: "NextAuth", icon: "Placeholder" },
            { name: "JWT", icon: "Placeholder" },
            { name: "MySQL", icon: "Placeholder" },
            { name: "SQLite", icon: "Placeholder" },
        ],
    },
    {
        id: "tools",
        items: [
            { name: "Git", icon: "Git", strong: true },
            { name: "GitHub", icon: "GitHub", strong: true },
            { name: "VS Code", icon: "VSCode", strong: true },
            { name: "NPM", icon: "NPM", strong: true },
            { name: "PNPM", icon: "PNPM" },
            { name: "Yarn", icon: "YARN" },
            { name: "Trae", icon: "Trae", strong: true },
            { name: "Claude Code", icon: "Placeholder", strong: true },
            { name: "Docker", icon: "Placeholder" },
            { name: "Postman", icon: "Placeholder" },
            { name: "Vercel", icon: "Placeholder" },
            { name: "Scrum", icon: "Placeholder" },
        ],
    },
];

// ---------------------------------------------------------------- Projects

export interface Project {
    id: string;
    title: string;
    year?: string;
    image: StaticImageData;
    demo: string;
    repo?: string;
    stack: Skill[];
    summary: L<string>;
    highlights?: L<string[]>;
}

const s = (name: string, icon: IconKey): Skill => ({ name, icon });

// The first FEATURED_COUNT projects get the large layout, the rest go compact.
// To reorder the portfolio, reorder this list.
export const FEATURED_COUNT = 3;

export const projects: Project[] = [
    {
        id: "keywords",
        title: "KeyWords",
        year: "2026",
        image: keywords,
        demo: "https://kwtools.vercel.app/",
        repo: "https://github.com/Kyriokes/keywords.2",
        stack: [
            s("TypeScript", "TypeScript"),
            s("Next.js 16", "Next"),
            s("React 19", "React"),
            s("Tailwind CSS", "Tailwind"),
            s("Prisma", "Prisma"),
            s("PostgreSQL", "PostgreSQL"),
            s("Neon", "Neon"),
        ],
        summary: {
            en: "An AI-powered platform to optimize job searching.",
            es: "Una plataforma con IA para optimizar la búsqueda laboral.",
        },
        highlights: {
            en: [
                "Analyzes CVs and job listings",
                "Generates relevant keywords",
                "Tracks your applications",
                "Integrates several AI models: Gemini, Mistral, Groq and Cohere",
            ],
            es: [
                "Analiza CVs y ofertas laborales",
                "Genera keywords relevantes",
                "Hace seguimiento de postulaciones",
                "Integra varios modelos de IA: Gemini, Mistral, Groq y Cohere",
            ],
        },
    },
    {
        id: "prode",
        title: "Prode Mundial 2026",
        year: "2026",
        image: prode,
        demo: "https://prode-mundial2026.vercel.app/qualifiers",
        repo: "https://github.com/Kyriokes/ProdeMundial2026",
        stack: [
            s("TypeScript", "TypeScript"),
            s("React", "React"),
            s("Vite", "Vite"),
            s("Tailwind CSS", "Tailwind"),
        ],
        summary: {
            en: "An interactive World Cup 2026 simulator, built because the existing options did not satisfy me.",
            es: "Un simulador interactivo del Mundial 2026, hecho porque las opciones existentes no me convencían.",
        },
        highlights: {
            en: [
                "Lets you choose unqualified teams",
                "Applies the official FIFA rules for best third-placed teams and tie-breakers",
                "Uses FIFA rankings for realistic random simulations",
                "The whole state lives in the URL, so sharing a prediction is sharing a link",
            ],
            es: [
                "Permite elegir selecciones no clasificadas",
                "Aplica las reglas oficiales de la FIFA para mejores terceros y desempates",
                "Usa el ranking FIFA para simulaciones aleatorias realistas",
                "Todo el estado vive en la URL: compartir una predicción es compartir un link",
            ],
        },
    },
    {
        id: "bastardos2",
        title: "Bastardos Server, e-commerce",
        year: "2025",
        image: bastardos2,
        demo: "https://bastardos-e-commerce.vercel.app/",
        repo: "https://github.com/Kyriokes/Bastardos-E-Commerce",
        stack: [
            s("TypeScript", "TypeScript"),
            s("Next.js", "Next"),
            s("React", "React"),
            s("Tailwind CSS", "Tailwind"),
            s("Prisma", "Prisma"),
            s("PostgreSQL", "PostgreSQL"),
            s("Neon", "Neon"),
        ],
        summary: {
            en: "A fully redesigned platform for a DayZ server community, rebuilt from scratch with Next.js and Neon.",
            es: "Una plataforma completamente rediseñada para una comunidad de servidor de DayZ, rehecha desde cero con Next.js y Neon.",
        },
        highlights: {
            en: [
                "Steam authentication",
                "PayPal payments",
                "Admin panel for product management",
                "Integration with the CFTools API",
            ],
            es: [
                "Autenticación con Steam",
                "Pagos con PayPal",
                "Panel de administración para gestión de productos",
                "Integración con la API de CFTools",
            ],
        },
    },
    {
        id: "ecoshop",
        title: "EcoShop",
        image: eco,
        demo: "https://ecommerce-front-ten-olive.vercel.app/",
        repo: "https://github.com/Kyriokes/ecommerce-crud",
        stack: [
            s("TypeScript", "TypeScript"),
            s("React", "React"),
            s("Express", "Express"),
            s("Prisma", "Prisma"),
            s("PostgreSQL", "PostgreSQL"),
            s("Supabase", "SupaBase"),
        ],
        summary: {
            en: "A fullstack e-commerce architecture project with JWT authentication, a product catalog and a shopping cart. Built to explore modern fullstack patterns used in production systems.",
            es: "Un proyecto de arquitectura fullstack de e-commerce con autenticación JWT, catálogo de productos y carrito de compras. Hecho para explorar patrones fullstack modernos usados en sistemas de producción.",
        },
    },
    {
        id: "bastardos",
        title: "Bastardos Server, web",
        year: "2024",
        image: bastardos,
        demo: "https://bastar2.vercel.app/",
        repo: "https://github.com/Kyriokes/Bastardos",
        stack: [
            s("JavaScript", "JavaScript"),
            s("React", "React"),
            s("Next.js", "Next"),
            s("HTML", "HTML"),
            s("CSS", "CSS"),
        ],
        summary: {
            en: "The first version of the web platform for the Bastardos DayZ server community: real-time player stats through CFTools, the server rules and a leaderboard. Built with React in close collaboration with the client.",
            es: "La primera versión de la plataforma web de la comunidad del servidor Bastardos de DayZ: estadísticas de jugadores en tiempo real vía CFTools, reglas del servidor y un podio. Hecha con React en colaboración directa con el cliente.",
        },
    },
    {
        id: "chillingtime",
        title: "ChillingTime",
        image: ctime,
        demo: "https://chillingtime.co/",
        stack: [
            s("JavaScript", "JavaScript"),
            s("Next.js", "Next"),
            s("Tailwind CSS", "Tailwind"),
            s("Node.js", "NodeJS"),
            s("Prisma", "Prisma"),
            s("PostgreSQL", "PostgreSQL"),
        ],
        summary: {
            en: "A group project: the first version of a website for booking VIP spaces at airports. I focused on the backend, with solid booking and user management, and helped on the frontend.",
            es: "Un proyecto grupal: la primera versión de un sitio para reservar espacios VIP en aeropuertos. Me enfoqué en el backend, con un sólido sistema de reservas y usuarios, y colaboré en el frontend.",
        },
    },
    {
        id: "pokemon",
        title: "Pokémon app",
        image: pokemon,
        demo: "https://pokemonappbysfb-omega.vercel.app/",
        repo: "https://github.com/Kyriokes/PokeFront",
        stack: [
            s("JavaScript", "JavaScript"),
            s("React", "React"),
            s("Redux", "Redux"),
            s("Express", "Express"),
            s("Node.js", "NodeJS"),
            s("PostgreSQL", "PostgreSQL"),
        ],
        summary: {
            en: "My first project: an app to create and search Pokémon, built from scratch with React, Express and PostgreSQL. It runs on free hosting, so it may load slowly.",
            es: "Mi primer proyecto: una app para crear y buscar Pokémon, hecha desde cero con React, Express y PostgreSQL. Está en un hosting gratuito, así que puede cargar lento.",
        },
    },
];
