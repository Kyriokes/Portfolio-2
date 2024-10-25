"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
    JavaScriptIcon,
    TypeScriptIcon,
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
} from "./icons";

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

    const icons = [
        { Icon: JavaScriptIcon, name: "JavaScript" },
        { Icon: TypeScriptIcon, name: "TypeScript" },
        { Icon: NestIcon, name: "NestJS" },
        { Icon: PostgreSQLIcon, name: "PostgreSQL" },
        { Icon: ExpressIcon, name: "Express" },
        { Icon: PrismaIcon, name: "Prisma" },
        { Icon: ReactIcon, name: "React" },
        { Icon: ReduxIcon, name: "Redux" },
        { Icon: ViteIcon, name: "Vite" },
        { Icon: NextIcon, name: "Next.js" },
        { Icon: HTMLIcon, name: "HTML" },
        { Icon: CSSIcon, name: "CSS" },
        { Icon: TailwindIcon, name: "Tailwind CSS" },
        { Icon: VSCodeIcon, name: "VS Code" },
        { Icon: NodeJSIcon, name: "Node.js" },
        { Icon: UnityIcon, name: "Unity" },
        { Icon: GitIcon, name: "Git" },
        { Icon: GitHubIcon, name: "GitHub" },
        { Icon: NPMIcon, name: "NPM" },
        { Icon: YARNIcon, name: "Yarn" },
        { Icon: NeonIcon, name: "Neon" },
        { Icon: BlenderIcon, name: "Blender" },
    ];

    return (
        <div className="space-y-8 text-white">
            <div className="embla  overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                    {icons.concat(icons).map((icon, index) => (
                        <div
                            key={index}
                            className="embla__slide flex-[0_0_auto] mr-4"
                        >
                            <IconWithTooltip
                                Icon={icon.Icon}
                                name={icon.name}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center px-4">
                <h2 className="text-2xl font-bold mb-4">Tecnologías</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                        <TechnologyItem
                            icon={ReactIcon}
                            name="React"
                            description="Biblioteca de JavaScript para construir interfaces de usuario interactivas."
                        />
                        <TechnologyItem
                            icon={HTMLIcon}
                            name="HTML"
                            description="Lenguaje de marcado para estructurar páginas web."
                        />
                        <TechnologyItem
                            icon={CSSIcon}
                            name="CSS"
                            description="Lenguaje de estilos para diseñar y dar formato a las páginas web."
                        />
                        <TechnologyItem
                            icon={JavaScriptIcon}
                            name="JavaScript"
                            description="Lenguaje de programación que permite añadir interactividad en sitios web."
                        />
                        <TechnologyItem
                            icon={TypeScriptIcon}
                            name="TypeScript"
                            description="Superset de JavaScript que agrega tipos estáticos para un código más robusto."
                        />
                        <TechnologyItem
                            icon={NextIcon}
                            name="Next.js"
                            description="Framework de React para crear aplicaciones web con renderizado del lado del servidor."
                        />
                        <TechnologyItem
                            icon={ViteIcon}
                            name="Vite"
                            description="Herramienta de desarrollo rápida para construir aplicaciones con un servidor de desarrollo ligero."
                        />
                        <TechnologyItem
                            icon={TailwindIcon}
                            name="Tailwind CSS"
                            description="Framework de CSS para diseñar interfaces de usuario utilizando utilidades predefinidas."
                        />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold mb-4">Backend</h3>
                        <TechnologyItem
                            icon={NodeJSIcon}
                            name="Node.js"
                            description="Entorno de ejecución de JavaScript para construir aplicaciones del lado del servidor."
                        />
                        <TechnologyItem
                            icon={ExpressIcon}
                            name="Express"
                            description="Framework minimalista para construir aplicaciones web en Node.js."
                        />
                        <TechnologyItem
                            icon={NestIcon}
                            name="NestJS"
                            description="Framework progresivo de Node.js para crear aplicaciones web escalables y eficientes."
                        />
                        <TechnologyItem
                            icon={PrismaIcon}
                            name="Prisma"
                            description="ORM moderno para trabajar con bases de datos de manera eficiente."
                        />
                        <TechnologyItem
                            icon={PostgreSQLIcon}
                            name="PostgreSQL"
                            description="Sistema de gestión de bases de datos relacional open-source."
                        />
                        <TechnologyItem
                            icon={NeonIcon}
                            name="Neon"
                            description="Plataforma moderna de bases de datos en la nube basada en PostgreSQL."
                        />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold mb-4">
                            Herramientas
                        </h3>
                        <TechnologyItem
                            icon={GitIcon}
                            name="Git"
                            description="Sistema de control de versiones distribuido para rastrear cambios en el código fuente."
                        />
                        <TechnologyItem
                            icon={GitHubIcon}
                            name="GitHub"
                            description="Plataforma de alojamiento para proyectos utilizando Git, ofreciendo colaboración y control de versiones."
                        />
                        <TechnologyItem
                            icon={VSCodeIcon}
                            name="VS Code"
                            description="Editor de código fuente altamente configurable y extensible."
                        />
                        <TechnologyItem
                            icon={NPMIcon}
                            name="NPM"
                            description="Gestor de paquetes para JavaScript y Node.js."
                        />
                        <TechnologyItem
                            icon={YARNIcon}
                            name="Yarn"
                            description="Gestor de paquetes rápido y seguro para JavaScript."
                        />
                        <TechnologyItem
                            icon={UnityIcon}
                            name="Unity"
                            description="Motor de desarrollo para crear videojuegos y experiencias interactivas en 3D y 2D."
                        />
                        <TechnologyItem
                            icon={BlenderIcon}
                            name="Blender"
                            description="Software de código abierto para modelado 3D, animación y renderización."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
