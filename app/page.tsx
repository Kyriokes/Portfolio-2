"use client";

import { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Pdf from "./components/Pdf";
import Skills from "./assets/skills";
import { Proyects } from "./components/Proyects";

export default function Home() {
    const [activeTab, setActiveTab] = useState<string>("about");
    const [transitioning, setTransitioning] = useState<boolean>(false);

    const handleTabChange = (tab: string) => {
        if (tab === activeTab) return;
        setTransitioning(true);
        setTimeout(() => {
            setActiveTab(tab);
            setTransitioning(false);
        }, 300);
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 backdrop-blur-lg m-2"></div>
            <div className="relative z-10 flex flex-col p-4 bg-black bg-opacity-80 rounded-2xl min-h-screen ">
                <Header setActiveTab={handleTabChange} />
                <div className="relative flex-grow">
                    <div
                        className={`transition-transform duration-300 ease-in-out ${
                            transitioning
                                ? "-translate-x-full"
                                : "translate-x-0"
                        }`}
                    >
                        {activeTab === "about" && <About />}
                        {activeTab === "skills" && <Skills />}
                        {activeTab === "proyects" && <Proyects />}
                        {activeTab === "contact" && <ContactForm />}
                        {activeTab === "pdf" && <Pdf />}
                    </div>
                </div>
            </div>
        </div>
    );
}
