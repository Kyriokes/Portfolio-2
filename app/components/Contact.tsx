import { Lang, SOCIAL, ui } from "../data/content";
import ContactForm, { ContactFormLabels } from "./ContactForm";

const linkClass =
    "underline decoration-line underline-offset-4 transition-colors hover:decoration-ink";

export default function Contact({ lang }: { lang: Lang }) {
    const t = ui.contact;
    const labels: ContactFormLabels = {
        name: t.name[lang],
        email: t.email[lang],
        message: t.message[lang],
        send: t.send[lang],
        sending: t.sending[lang],
        success: t.success[lang],
        error: t.error[lang],
        errName: t.errName[lang],
        errEmail: t.errEmail[lang],
        errMessage: t.errMessage[lang],
        errLong: t.errLong[lang],
    };

    return (
        <section id="contact" className="section">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <div>
                    <h2 className="section-title">{t.title[lang]}</h2>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                        {t.lead[lang]}
                    </p>
                    <p className="mt-6">
                        <a
                            href={`mailto:${SOCIAL.email}`}
                            className={`font-display text-xl font-medium md:text-2xl ${linkClass}`}
                        >
                            {SOCIAL.email}
                        </a>
                    </p>
                    <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base font-medium">
                        <a
                            href={SOCIAL.github}
                            target="_blank"
                            rel="noopener noreferrer me"
                            className={linkClass}
                        >
                            {t.github[lang]}
                        </a>
                        <a
                            href={SOCIAL.linkedin}
                            target="_blank"
                            rel="noopener noreferrer me"
                            className={linkClass}
                        >
                            {t.linkedin[lang]}
                        </a>
                        <a
                            href={SOCIAL.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClass}
                        >
                            {t.whatsapp[lang]}
                        </a>
                    </p>
                </div>

                <ContactForm labels={labels} />
            </div>
        </section>
    );
}
