import { CV, Lang, ui } from "../data/content";
import { jsonLd } from "../lib/seo";
import Header, { HeaderLabels } from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const SECTIONS = ["projects", "experience", "skills", "contact"] as const;

// Server-rendered page. Only the header and the contact form ship JavaScript,
// and they get their texts as props so the content file stays on the server.
export default function HomePage({ lang }: { lang: Lang }) {
    const headerLabels: HeaderLabels = {
        nav: SECTIONS.map((id) => ({ href: `#${id}`, label: ui.nav[id][lang] })),
        cv: { href: CV[lang], label: ui.nav.cv[lang] },
        menu: ui.nav.menu[lang],
        close: ui.nav.close[lang],
        language: ui.nav.language[lang],
        skip: ui.nav.skip[lang],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(lang) }}
            />
            <Header lang={lang} labels={headerLabels} />
            <main id="main">
                <Hero lang={lang} />
                <Projects lang={lang} />
                <Experience lang={lang} />
                <Skills lang={lang} />
                <Contact lang={lang} />
            </main>
            <Footer lang={lang} />
        </>
    );
}
