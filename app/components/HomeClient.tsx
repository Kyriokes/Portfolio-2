"use client";

import { useState } from "react";
import About from "./About";
import Header from "./Header";
import ContactForm from "./ContactForm";
import Pdf from "./Pdf";
import Skills from "../assets/skills";
import { Proyects } from "./Proyects";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomeClient() {
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

    const showFooter = activeTab !== "contact";

    return (
        <div
            className={`relative min-h-screen ${showFooter ? "pb-16" : "pb-0"}`}
        >
            <div className="absolute inset-0 backdrop-blur-lg m-2"></div>
            <div className="relative z-10 flex flex-col p-4 bg-gray-800 bg-opacity-80 rounded-2xl min-h-screen">
                <Header activeTab={activeTab} setActiveTab={handleTabChange} />
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

            {showFooter && (
                <Footer onContactClick={() => setActiveTab("contact")} />
            )}

            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}
