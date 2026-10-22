"use client";

import { FormEvent, useState } from "react";

export interface ContactFormLabels {
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    errName: string;
    errEmail: string;
    errMessage: string;
    errLong: string;
}

type Field = "user_name" | "user_email" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "success" | "error";

const MAX: Record<Field, number> = {
    user_name: 100,
    user_email: 254,
    message: 5000,
};
const MIN = { user_name: 2, message: 10 };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values, t: ContactFormLabels): Errors {
    const errors: Errors = {};
    const { user_name, user_email, message } = values;

    if (user_name.length < MIN.user_name) errors.user_name = t.errName;
    else if (user_name.length > MAX.user_name) errors.user_name = t.errLong;

    if (!EMAIL.test(user_email)) errors.user_email = t.errEmail;
    else if (user_email.length > MAX.user_email) errors.user_email = t.errLong;

    if (message.length < MIN.message) errors.message = t.errMessage;
    else if (message.length > MAX.message) errors.message = t.errLong;

    return errors;
}

function readForm(form: HTMLFormElement) {
    const data = new FormData(form);
    const get = (name: string) => String(data.get(name) ?? "").trim();
    return {
        values: {
            user_name: get("user_name"),
            user_email: get("user_email"),
            message: get("message"),
        },
        // Honeypot: hidden from people, spam bots tend to fill it.
        honeypot: get("website"),
    };
}

const fieldClass =
    "w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted";

export default function ContactForm({ labels }: { labels: ContactFormLabels }) {
    const [errors, setErrors] = useState<Errors>({});
    // After the first submit, errors update while the person types.
    const [touched, setTouched] = useState(false);
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState<Status>("idle");

    const onChange = (event: FormEvent<HTMLFormElement>) => {
        if (touched) setErrors(validate(readForm(event.currentTarget).values, labels));
    };

    const done = (form: HTMLFormElement) => {
        form.reset();
        setTouched(false);
        setStatus("success");
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (sending) return;

        const form = event.currentTarget;
        const { values, honeypot } = readForm(form);
        const found = validate(values, labels);
        setTouched(true);
        setErrors(found);
        setStatus("idle");

        const firstInvalid = (Object.keys(found) as Field[])[0];
        if (firstInvalid) {
            (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
            return;
        }

        if (honeypot) {
            // A bot filled the hidden field: drop it without telling.
            done(form);
            return;
        }

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        setSending(true);
        try {
            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS environment variables are missing");
            }
            // Loaded on submit, so it is not part of the initial page load.
            const { default: emailjs } = await import("@emailjs/browser");
            await emailjs.send(serviceId, templateId, values, {
                publicKey,
                blockHeadless: true,
                limitRate: { id: "portfolio-contact", throttle: 30_000 },
            });
            done(form);
        } catch (error) {
            console.error("Contact form:", error);
            setStatus("error");
        } finally {
            setSending(false);
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
        <form
            onSubmit={onSubmit}
            onChange={onChange}
            noValidate
            className="space-y-5"
        >
            <div>
                <label htmlFor="user_name" className="mb-2 block text-sm font-medium">
                    {labels.name}
                </label>
                <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    autoComplete="name"
                    maxLength={MAX.user_name}
                    aria-invalid={!!errors.user_name}
                    className={fieldClass}
                />
                {errorText(errors.user_name)}
            </div>

            <div>
                <label htmlFor="user_email" className="mb-2 block text-sm font-medium">
                    {labels.email}
                </label>
                <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    autoComplete="email"
                    maxLength={MAX.user_email}
                    aria-invalid={!!errors.user_email}
                    className={fieldClass}
                />
                {errorText(errors.user_email)}
            </div>

            <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    {labels.message}
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={MAX.message}
                    aria-invalid={!!errors.message}
                    className={`${fieldClass} resize-none`}
                />
                {errorText(errors.message)}
            </div>

            <div aria-hidden="true" className="sr-only">
                <label htmlFor="website">Website</label>
                <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary disabled:opacity-60"
                >
                    {sending ? labels.sending : labels.send}
                </button>
                <p
                    role="status"
                    className={`text-sm font-medium ${
                        status === "error"
                            ? "text-red-700 dark:text-red-400"
                            : "text-accent"
                    }`}
                >
                    {status === "success" && labels.success}
                    {status === "error" && labels.error}
                </p>
            </div>
        </form>
    );
}
