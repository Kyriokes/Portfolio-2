"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Lang, useLang } from "../context/LangContext";
import { SOCIAL, ui } from "../data/content";

const createContactSchema = (lang: Lang) =>
    z.object({
        user_name: z.string().min(2, ui.contact.errName[lang]),
        user_email: z.string().email(ui.contact.errEmail[lang]),
        message: z.string().min(10, ui.contact.errMessage[lang]),
    });

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

const fieldClass =
    "w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted";

const ContactForm: React.FC = () => {
    const { lang } = useLang();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(createContactSchema(lang)),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                data,
                { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
            );
            toast.success(ui.contact.success[lang]);
            reset();
        } catch {
            toast.error(ui.contact.error[lang]);
        }
    };

    const errorText = (message?: string) =>
        message ? (
            <p
                role="alert"
                className="mt-1 text-sm text-red-700 dark:text-red-400"
            >
                {message}
            </p>
        ) : null;

    return (
        <section id="contact" className="section">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <div>
                    <h2 className="section-title">{ui.contact.title[lang]}</h2>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                        {ui.contact.lead[lang]}
                    </p>
                    <p className="mt-6">
                        <a
                            href={`mailto:${SOCIAL.email}`}
                            className="font-display text-xl font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-ink md:text-2xl"
                        >
                            {SOCIAL.email}
                        </a>
                    </p>
                    <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base font-medium">
                        <a
                            href={SOCIAL.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                        >
                            {ui.contact.github[lang]}
                        </a>
                        <a
                            href={SOCIAL.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                        >
                            {ui.contact.linkedin[lang]}
                        </a>
                        <a
                            href={SOCIAL.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                        >
                            {ui.contact.whatsapp[lang]}
                        </a>
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-5"
                >
                    <div>
                        <label
                            htmlFor="user_name"
                            className="mb-2 block text-sm font-medium"
                        >
                            {ui.contact.name[lang]}
                        </label>
                        <input
                            id="user_name"
                            type="text"
                            autoComplete="name"
                            aria-invalid={!!errors.user_name}
                            className={fieldClass}
                            {...register("user_name")}
                        />
                        {errorText(errors.user_name?.message)}
                    </div>

                    <div>
                        <label
                            htmlFor="user_email"
                            className="mb-2 block text-sm font-medium"
                        >
                            {ui.contact.email[lang]}
                        </label>
                        <input
                            id="user_email"
                            type="email"
                            autoComplete="email"
                            aria-invalid={!!errors.user_email}
                            className={fieldClass}
                            {...register("user_email")}
                        />
                        {errorText(errors.user_email?.message)}
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-medium"
                        >
                            {ui.contact.message[lang]}
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            aria-invalid={!!errors.message}
                            className={`${fieldClass} resize-none`}
                            {...register("message")}
                        />
                        {errorText(errors.message?.message)}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary disabled:opacity-60"
                    >
                        {isSubmitting
                            ? ui.contact.sending[lang]
                            : ui.contact.send[lang]}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
