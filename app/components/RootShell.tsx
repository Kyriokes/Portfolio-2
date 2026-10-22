import Script from "next/script";
import type { ReactNode } from "react";
import { Lang, SITE_URL } from "../data/content";
import { fontVariables } from "../fonts";
import "../globals.css";

const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
// Umami only counts visits on the real domain, not localhost or previews.
const SITE_HOST = new URL(SITE_URL).host;

// <html> and <body> shared by the English and Spanish root layouts.
export default function RootShell({
    lang,
    head,
    children,
}: {
    lang: Lang;
    head?: ReactNode;
    children: ReactNode;
}) {
    return (
        <html lang={lang} className={fontVariables}>
            {head ? <head>{head}</head> : null}
            <body>
                {children}
                {UMAMI_ID ? (
                    <Script
                        src="https://cloud.umami.is/script.js"
                        data-website-id={UMAMI_ID}
                        data-domains={SITE_HOST}
                        strategy="afterInteractive"
                    />
                ) : null}
            </body>
        </html>
    );
}
