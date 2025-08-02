"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LangContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const ContactForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const { lang } = useLang();

    const formTexts = {
        es: {
            contactTitle: "Contáctame",
            email: "ferrari8986@gmail.com",
            nameLabel: "Nombre y Apellido",
            emailLabel: "E-mail",
            messageLabel: "Motivo de contacto",
            submitButton: "Enviar",
            socialTitle: "Mis Redes",
            emailSuccessText: "Pronto estaremos en contacto",
            user_name: "Nombre muy corto",
            user_email: "Email inválido",
            message: "El mensaje es muy corto",
        },
        en: {
            contactTitle: "Contact Me",
            email: "ferrari8986@gmail.com",
            nameLabel: "Full Name",
            emailLabel: "E-mail",
            messageLabel: "Reason for Contact",
            submitButton: "Send",
            socialTitle: "My Social Networks",
            emailSuccessText: "I will contact you soon",
            user_name: "Name too short",
            user_email: "Invalid Email",
            message: "The message is too short",
        },
    };

    const ContactSchema = z.object({
        user_name: z.string().min(2, formTexts[lang].user_name),
        user_email: z.string().email(formTexts[lang].user_email),
        message: z.string().min(10, formTexts[lang].message),
    });

    type ContactFormData = z.infer<typeof ContactSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(ContactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            await emailjs.send("service_ybkx9o9", "template_ov8bcak", data, {
                publicKey: "HPOdzduDO6Ab5e_Ro",
            });

            toast.success(formTexts[lang].emailSuccessText, {
                position: "bottom-right",
                theme: "dark",
            });

            reset();
        } catch {
            toast.error("Hubo un error al enviar el mensaje", {
                position: "bottom-right",
                theme: "dark",
            });
        }
    };

    return (
        <div className="p-5 bg-gray-800 bg-opacity-80 text-white text-center overflow-x-hidden overflow-y-auto box-border rounded-xl">
            <div className="w-full my-10">
                <h1 className="text-4xl text-center mb-4 font-bold lg:text-6xl">
                    {formTexts[lang].contactTitle}
                </h1>
                <p className="text-center text-2xl my-6 text-gray-300">
                    {formTexts[lang].email}
                </p>

                <div className="w-full flex justify-center">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full max-w-lg"
                    >
                        <div className="mb-6 text-left">
                            <label className="block text-sm font-semibold mb-2">
                                {formTexts[lang].nameLabel}
                            </label>
                            <input
                                {...register("user_name")}
                                className="text-black w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                type="text"
                            />
                            {errors.user_name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.user_name.message}
                                </p>
                            )}
                        </div>

                        <div className="mb-6 text-left">
                            <label className="block text-sm font-semibold mb-2">
                                {formTexts[lang].emailLabel}
                            </label>
                            <input
                                {...register("user_email")}
                                className="text-black w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                type="email"
                            />
                            {errors.user_email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.user_email.message}
                                </p>
                            )}
                        </div>

                        <div className="mb-6 text-left">
                            <label className="block text-sm font-semibold mb-2">
                                {formTexts[lang].messageLabel}
                            </label>
                            <textarea
                                {...register("message")}
                                className="text-black w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
                                type="submit"
                            >
                                {formTexts[lang].submitButton}
                            </button>
                        </div>
                    </form>
                </div>

                <h2 className="text-xl font-bold text-center mt-10">
                    {formTexts[lang].socialTitle}
                </h2>
                <div className="mx-auto p-3 gap-x-20 gap-y-6 flex flex-wrap justify-center">
                    <a
                        className="flex items-center w-20 h-20"
                        href="https://github.com/Kyriokes"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/GitHubIcon.png"
                            alt="GitHub"
                            width={80}
                            height={80}
                            className="bg-gray-800 bg-opacity-80 rounded-xl hover:bg-sky-700"
                        />
                    </a>
                    <a
                        className="flex items-center w-20 h-20"
                        href="https://www.linkedin.com/in/sergiofb/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/Linkedin.svg"
                            alt="LinkedIn"
                            width={80}
                            height={80}
                            className="bg-gray-800 bg-opacity-80 rounded-xl hover:bg-sky-700"
                        />
                    </a>
                    <a
                        className="flex items-center w-20 h-20"
                        href={`https://wa.me/5491535040982?text=%C2%A1Hola%20Sergio,%20me%20contacto%20con%20vos%20desde%20tu%20porfolio!%0AMe%20llamo:%0ATe%20contacto%20respecto%20a%20...`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/WhatsApp.svg"
                            alt="WhatsApp"
                            width={80}
                            height={80}
                            className="bg-gray-800 bg-opacity-80 rounded-xl hover:bg-sky-700"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
