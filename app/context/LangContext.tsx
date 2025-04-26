"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "es";
type LangContextType = {
    lang: Lang;
    setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    const context = useContext(LangContext);
    if (!context) throw new Error("useLang must be used inside LangProvider");
    return context;
}
