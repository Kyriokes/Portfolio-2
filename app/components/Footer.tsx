"use client";

import React from "react";
import { useLang } from "../context/LangContext";
import { ui } from "../data/content";

const Footer: React.FC = () => {
    const { lang } = useLang();

    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 text-sm text-muted sm:px-8">
                <div>
                    <p>© {new Date().getFullYear()} Sergio Ferrari Bryce</p>
                    <p className="mt-1 text-xs">
                        <span lang="ja">「基礎が大事だ！」</span>
                        {" · "}
                        {ui.experience.quote[lang]}
                    </p>
                </div>
                <a href="#top" className="transition-colors hover:text-ink">
                    {ui.footer.top[lang]}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
