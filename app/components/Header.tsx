"use client";

import React from "react";
import Image from "next/image";

interface HeaderProps {
    setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveTab }) => (
    <header className="flex flex-col rounded-t-[5%] text-white">
        <div className="flex items-center w-full">
            <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={1080}
                height={720}
                className="rounded-full w-[23em] h-[23em] mr-4 sm:w-[20em] sm:h-[20em] xs:w-[15em] xs:h-[15em]"
            />
            <div className="font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-2xl shadow-[1px_0px_1px_#000,0px_1px_1px_#00000050,2px_1px_1px_#000,1px_2px_1px_#00000050,3px_2px_1px_#000,2px_3px_1px_#00000050,4px_3px_1px_#000,3px_4px_1px_#00000050,5px_4px_1px_#000,4px_5px_1px_#00000050,6px_5px_1px_#000,5px_6px_1px_#00000050,7px_6px_1px_#000] m-4 md:text-xl sm:absolute sm:right-10 sm:text-base xs:text-sm">
                <h2 className="md:text-3xl">Hi! I{"'"}m</h2>
                <h1 className="uppercase md:text-4xl">
                    Sergio
                    <br /> Ferrari
                    <br /> Bryce
                </h1>
            </div>
        </div>
        <nav className="flex items-start w-full mt-5">
            <button
                onClick={() => setActiveTab("about")}
                className="py-2.5 px-2.5 bg-[#6b694379] text-white border border-[#00000079] cursor-pointer hover:bg-[#8b631d7c] rounded-tl-2xl"
            >
                Sobre mí
            </button>
            <button
                onClick={() => setActiveTab("interests")}
                className="py-2.5 px-2.5 bg-[#6b694379] text-white border border-[#00000079] cursor-pointer hover:bg-[#8b631d7c]"
            >
                Intereses
            </button>
            <button
                onClick={() => setActiveTab("contact")}
                className="py-2.5 px-2.5 bg-[#6b694379] text-white border border-[#00000079] cursor-pointer hover:bg-[#8b631d7c] rounded-tr-2xl"
            >
                Contacto
            </button>
        </nav>
    </header>
);

export default Header;
