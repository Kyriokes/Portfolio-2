"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { GitHubIcon, Linkedin, WhatsApp } from "../assets/icons";
import { useLang } from "../context/LangContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



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
            emailSuccessTitle: "¡Email enviado!",
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
            emailSuccessTitle: "Email Sent!",
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
        } catch{
            toast.error("Hubo un error al enviar el mensaje", {
                position: "bottom-right",
                theme: "dark",
            });
        }
    };

    return (
        <div className="p-5 bg-black bg-opacity-50 text-white text-center overflow-x-hidden overflow-y-auto box-border border-t-2 border-black">
            <div className="relative w-full my-10">
                <div className="w-full relative pb-2 my-10">
                    <h1 className="text-4xl text-center mb-4 align-text-bottom font-bold lg:text-6xl">
                        {formTexts[lang].contactTitle}
                    </h1>
                    <p className="text-center text-2xl my-6">
                        {formTexts[lang].email}
                    </p>

                    <div className="m-1 w-full flex justify-center">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full max-w-lg justify-center"
                        >
                            <div className="mb-6">
                                <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                                    {formTexts[lang].nameLabel}
                                </label>
                                <input
                                    {...register("user_name")}
                                    className="text-black appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                />
                                {errors.user_name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.user_name.message}
                                    </p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                                    {formTexts[lang].emailLabel}
                                </label>
                                <input
                                    {...register("user_email")}
                                    className="text-black appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="email"
                                />
                                {errors.user_email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.user_email.message}
                                    </p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                                    {formTexts[lang].messageLabel}
                                </label>
                                <textarea
                                    {...register("message")}
                                    className="text-black no-resize appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3 ml-auto">
                                    <button
                                        className="w-32 shadow bg-cTeal hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                        type="submit"
                                    >
                                        {formTexts[lang].submitButton}
                                    </button>
                                </div>
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
                            <GitHubIcon x={20} y={20} />
                        </a>
                        <a
                            className="flex items-center w-20 h-20"
                            href="https://www.linkedin.com/in/sergiofb/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin />
                        </a>
                        <a
                            className="flex items-center w-20 h-20"
                            href={`https://wa.me/5491535040982?text=%C2%A1Hola%20Sergio,%20me%20contacto%20con%20vos%20desde%20tu%20porfolio!%0AMe%20llamo:%0ATe%20contacto%20respecto%20a%20...`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsApp />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
