"use client";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

export type Lang = "en" | "es";
type LangContextType = {
    lang: Lang;
    setLang: (lang: Lang) => void;
};

const STORAGE_KEY = "portfolio-lang";

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>("en");

    // Saved choice first, then the browser language. Falls back to English.
    useEffect(() => {
        let initial: Lang = "en";
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "es" || saved === "en") {
                initial = saved;
            } else if (navigator.language?.toLowerCase().startsWith("es")) {
                initial = "es";
            }
        } catch {
            // storage can be blocked, English stays
        }
        setLangState(initial);
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const setLang = useCallback((next: Lang) => {
        setLangState(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // ignore
        }
    }, []);

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
