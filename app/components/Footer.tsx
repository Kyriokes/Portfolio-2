"use client";

import React from "react";
import { useLang } from "../context/LangContext";

interface FooterProps {
    onContactClick: () => void;
}

const footerText = {
    es: {
        text: "¿Buscás un desarrollador freelance?",
        contact: "¡Hablemos!",
    },
    en: {
        text: "Looking for a freelance developer?",
        contact: "Let's talk!",
    },
};

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
    const { lang } = useLang();

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-3 px-6 flex  items-center shadow-md z-50">
            <p className="text-sm sm:text-base font-medium text-gray-200">
                {footerText[lang].text}
            </p>
            <button
                onClick={onContactClick}
                className="bg-blue-700 hover:bg-blue-600 text-white text-sm sm:text-base px-4 py-2 ml-4 rounded font-semibold transition-colors"
            >
                {footerText[lang].contact}
            </button>
        </div>
    );
};

export default Footer;
