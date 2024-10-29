"use client";

import React from "react";
import Image from "next/image";

interface HeaderProps {
    setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveTab }) => (
    <header className="flex flex-col rounded-t-[5%] text-white">
        <div className="flex flex-col items-center lg:flex-row lg:items-start w-full">
            <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={1080}
                height={720}
                className="rounded-full w-64 h-64 mb-4 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[23em] lg:h-[23em] lg:mr-4"
            />
            <div className="font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-center lg:text-left text-xl shadow-[1px_0px_1px_#000,0px_1px_1px_#00000050,2px_1px_1px_#000,1px_2px_1px_#00000050,3px_2px_1px_#000,2px_3px_1px_#00000050,4px_3px_1px_#000,3px_4px_1px_#00000050,5px_4px_1px_#000,4px_5px_1px_#00000050,6px_5px_1px_#000,5px_6px_1px_#00000050,7px_6px_1px_#000] m-4 sm:text-2xl md:text-3xl lg:text-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl">
                    Hi! I{"'"}m
                </h2>
                <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-4xl">
                    Sergio
                    <br /> Ferrari
                    <br /> Bryce
                </h1>
            </div>
        </div>
        <nav className="flex flex-wrap justify-center lg:justify-start items-start w-full mt-5">
            <button
                onClick={() => setActiveTab("about")}
                className="py-2 px-2 bg-black bg-opacity-80 text-white border border-black cursor-pointer hover:bg-[#8b631d7c] rounded-tl-2xl text-sm sm:text-base"
            >
                Sobre mí
            </button>
            <button
                onClick={() => setActiveTab("proyects")}
                className="py-2 px-2 bg-black bg-opacity-80 text-white border border-black cursor-pointer hover:bg-[#8b631d7c] text-sm sm:text-base"
            >
                Proyectos
            </button>
            <button
                onClick={() => setActiveTab("skills")}
                className="py-2 px-2 bg-black bg-opacity-80 text-white border border-black cursor-pointer hover:bg-[#8b631d7c] text-sm sm:text-base"
            >
                Skills
            </button>
            <button
                onClick={() => setActiveTab("pdf")}
                className="py-2 px-2 bg-black bg-opacity-80 text-white border border-black cursor-pointer hover:bg-[#8b631d7c] text-sm sm:text-base"
            >
                Curriculum
            </button>
            <button
                onClick={() => setActiveTab("contact")}
                className="py-2 px-2 bg-black bg-opacity-80 text-white border border-black cursor-pointer hover:bg-[#8b631d7c] rounded-tr-2xl text-sm sm:text-base"
            >
                Contacto
            </button>
        </nav>
    </header>
);

export default Header;
