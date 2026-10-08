"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function HomeClient() {
    return (
        <>
            <Header />
            <main id="main">
                <Hero />
                <Projects />
                <Experience />
                <Skills />
                <ContactForm />
            </main>
            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                pauseOnHover
                theme="dark"
            />
        </>
    );
}
