"use client";

import { useState } from "react";
import Image from "next/image";
import pokemon from "../assets/pokemon.jpg";
import ctime from "../assets/ctime.jpg";
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

export const Proyects = () => {
    const [pokeIsVisible, setPokeIsVisible] = useState(false);
    const [ctIsVisible, setCtIsVisible] = useState(false);

    const pokeToggleBox = () => {
        setPokeIsVisible(!pokeIsVisible);
    };

    const ctToggleBox = () => {
        setCtIsVisible(!ctIsVisible);
    };

    const handleClickPoke = () => {
        window.open("https://pokemonappbysfb-omega.vercel.app/", "_blank");
    };

    const handleClickChill = () => {
        window.open("https://chillingtime.co/", "_blank");
    };

    return (
        <div className="grid grid-rows-subgrid gap-4 text-white">
            <div
                onClick={pokeToggleBox}
                className="flex justify-between items-center mt-10 mb-4 cursor-pointer"
            >
                <h2 className="text-xl font-bold">Pokemon</h2>
                <button className="border p-1">
                    {pokeIsVisible ? <ArrowU /> : <ArrowD />}
                </button>
            </div>
            {pokeIsVisible && (
                <article className="space-y-4">
                    <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 aspect-[16/9] max-w-lg mx-auto">
                        <div
                            className="absolute inset-0 z-10 cursor-pointer"
                            onClick={handleClickPoke}
                        />
                        <Image
                            src={pokemon}
                            alt="Pokemon"
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
                        Mi primer proyecto es una aplicación que permite crear y
                        buscar Pokémon, ofreciendo una experiencia interactiva y
                        divertida. Utilicé una combinación de React y Express,
                        junto con una base de datos PostgreSQL, para desarrollar
                        esta aplicación desde cero. Cabe aclarar que al estar
                        montado en un servicio gratuito de hosting la
                        experiencia puede resultar un poco lenta
                    </p>
                </article>
            )}
            <div className="flex flex-wrap gap-2">
                <JavaScriptIcon />
                <PostgreSQLIcon />
                <ExpressIcon />
                <ReactIcon />
                <ReduxIcon />
                <HTMLIcon />
                <CSSIcon />
                <VSCodeIcon />
                <NodeJSIcon />
                <GitIcon />
                <GitHubIcon />
                <NPMIcon />
            </div>

            <div
                onClick={ctToggleBox}
                className="flex justify-between items-center mt-10 mb-4 cursor-pointer"
            >
                <h2 className="text-xl font-bold">ChillingTime</h2>
                <button className="border p-1">
                    {ctIsVisible ? <ArrowU /> : <ArrowD />}
                </button>
            </div>
            {ctIsVisible && (
                <article className="space-y-4">
                    <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 aspect-[16/9] max-w-lg mx-auto">
                        <div
                            className="absolute inset-0 z-10 cursor-pointer"
                            onClick={handleClickChill}
                        />
                        <Image
                            src={ctime}
                            alt="ChillingTime"
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
                        En mi segundo proyecto grupal, contribuí a la primera
                        versión de una página web dedicada a reservas para
                        espacios VIP en aeropuertos. Mi enfoque principal estuvo
                        en el desarrollo del backend, donde trabajé con
                        tecnologías como JavaScript, PostgreSQL, Prisma y
                        Node.js para asegurar un sólido sistema de gestión de
                        reservas y usuarios. Además, colaboré en aspectos del
                        frontend utilizando Next.js, HTML y Tailwind CSS para
                        crear una interfaz de usuario atractiva y funcional.
                    </p>
                </article>
            )}
            <div className="flex flex-wrap gap-2">
                <JavaScriptIcon />
                <PostgreSQLIcon />
                <PrismaIcon />
                <NextIcon />
                <HTMLIcon />
                <TailwindIcon />
                <VSCodeIcon />
                <NodeJSIcon />
                <GitIcon />
                <GitHubIcon />
                <NPMIcon />
            </div>
        </div>
    );
};
