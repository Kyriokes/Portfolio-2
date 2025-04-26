"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useLang } from "../context/LangContext";
import { ArgIcon, UsaIcon } from "../assets/icons";

interface HeaderProps {
    setActiveTab: (tab: string) => void;
}

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
};

const tabsTranslations = {
    es: {
        about: "Sobre mí",
        proyects: "Proyectos",
        skills: "Skills",
        pdf: "Curriculum",
        contact: "Contacto",
    },
    en: {
        about: "About Me",
        proyects: "Projects",
        skills: "Skills",
        pdf: "Resume",
        contact: "Contact",
    },
};

const presentation = {
    es: {
        text: "Desarrollador Full Stack.",
        text1: "Enfocado en crear soluciones",
        text2: "ágiles, modernas y escalables.",
    },
    en: {
        text: "Full Stack Developer.",
        text1: "Focused on building",
        text2: "agile, modern, and scalable solutions.",
    },
};

const Header: React.FC<HeaderProps> = ({ setActiveTab }) => {
    const windowWidth = useWindowWidth();
    const { lang, setLang } = useLang();

    if (windowWidth === 0) {
        return null;
    }

    const tabs = [
        { label: tabsTranslations[lang].about, tab: "about" },
        { label: tabsTranslations[lang].proyects, tab: "proyects" },
        { label: tabsTranslations[lang].skills, tab: "skills" },
        { label: tabsTranslations[lang].pdf, tab: "pdf" },
        { label: tabsTranslations[lang].contact, tab: "contact" },
    ];

    const getButtonClass = (index: number) => {
        const isFirstTab = index === 0;
        const isLastTab = index === tabs.length - 1;

        return clsx(
            "py-2 px-2 bg-black bg-opacity-80 text-white border border-black cursor-pointer hover:bg-[#8b631d7c] text-xs sm:text-sm md:text-base flex-grow lg:flex-grow-0 transition-all duration-300 ease-in-out",
            {
                "rounded-tl-2xl": isFirstTab,
                "rounded-tr-2xl":
                    windowWidth <= 320
                        ? index === 2
                        : windowWidth <= 385
                        ? index === 3
                        : isLastTab,
            }
        );
    };

    return (
        <header className="flex flex-col rounded-t-[5%] text-white">
            <div className="flex justify-end">
                <button
                    onClick={() => setLang("es")}
                    className={clsx(
                        "mb-2 px-3 py-1 bg-black bg-opacity-80 text-white rounded-md text-xs",
                        { "opacity-50": lang !== "es" }
                    )}
                    aria-label="Cambiar a Castellano"
                >
                    <ArgIcon/>
                </button>
                <button
                    onClick={() => setLang("en")}
                    className={clsx(
                        "mb-2 px-3 py-1 bg-black bg-opacity-80 text-white rounded-md text-xs",
                        { "opacity-50": lang !== "en" }
                    )}
                    aria-label="Change to English"
                >
                    <UsaIcon/>
                </button>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:items-start w-full">
                <Image
                    src="/profile.jpg"
                    alt="Profile Picture"
                    width={1080}
                    height={720}
                    className="rounded-full w-64 h-64 mb-4 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[23em] lg:h-[23em] lg:mr-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-center lg:text-left text-xl m-4 sm:text-2xl md:text-3xl lg:text-2xl p-4">
                    <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-4xl p-2">
                        Sergio
                        <br /> Ferrari
                        <br /> Bryce
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl p-2">
                        <span className="block lg:ml-0">
                            {presentation[lang].text}
                        </span>
                        <span className="block lg:ml-4">
                            {presentation[lang].text1}
                        </span>
                        <span className="block lg:ml-8">
                            {presentation[lang].text2}
                        </span>
                    </h2>
                </div>
            </div>
            <nav className="flex flex-wrap justify-start items-start w-full mt-5">
                <div className="flex flex-wrap justify-center lg:justify-start w-full max-w-3xl mx-auto lg:mx-0">
                    {tabs.map((item, index) => (
                        <button
                            key={item.tab}
                            onClick={() => setActiveTab(item.tab)}
                            className={getButtonClass(index)}
                            aria-label={`Go to ${item.label}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
