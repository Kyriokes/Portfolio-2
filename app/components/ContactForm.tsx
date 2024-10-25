"use client";


import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { GitHubIcon, Linkedin, WhatsApp } from "../assets/icons";

const ContactForm: React.FC = () => {

	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.current) {
			emailjs
				.sendForm("service_ybkx9o9", "template_ov8bcak", form.current, {
					publicKey: "HPOdzduDO6Ab5e_Ro",
				})
				.then(
					() => {
						console.log("SUCCESS!");
						if (form.current) {
							form.current.reset();
						}
						Swal.fire({
							title: "Email enviado!",
							text: "pronto estaremos en contacto",
							icon: "success",
							confirmButtonColor: "#1F7A8C",
							color: "#EAE6E5",
							background: "#1C2321",
							iconColor: "#90A955",
						});
					},
					(error) => {
						console.log("FAILED...", error.text);
					}
				);
		} else {
			console.error("Form is not available.");
		}
	};

	return (
        <div className="p-5 bg-black bg-opacity-50 text-white text-center overflow-x-hidden overflow-y-auto box-border border-t-2 border-black">
            <div className="relative w-full my-10">
                <div className="w-full relative pb-2 my-10">
                    <h1 className="text-4xl text-center mb-4 align-text-bottom font-bold lg:text-6xl">
                        Contáctame
                    </h1>
                    <p className="text-center text-2xl my-6">
                        ferrari8986@gmail.com
                    </p>

                    <div className="m-1 w-full flex justify-center">
                        <form
                            className="w-full max-w-lg justify-center"
                            ref={form}
                            onSubmit={sendEmail}
                        >
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Nombre y Apellido
                                    </label>
                                    <input
                                        className="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="nick"
                                        type="text"
                                        name="user_name"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide  text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        className="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="email"
                                        type="email"
                                        name="user_email"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide  text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Motivo de contacto
                                    </label>
                                    <textarea
                                        className="text-black no-resize appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                        id="message"
                                        name="message"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3 ml-auto">
                                    <button
                                        className="w-32 shadow bg-cTeal hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                        type="submit"
                                        value="Send"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <h2 className="text-xl font-bold text-center">
                        {" "}
                        Mis Redes{" "}
                    </h2>
                    <div className="mx-auto  p-3 gap-x-20 gap-y-6 flex flex-wrap justify-center">
                        <a
                            className="flex items-center w-20 h-20"
                            href="https://github.com/Kyriokes"
                            target="_blank"
                        >
                            <GitHubIcon x={20} y={20} />
                        </a>
                        <a
                            className="flex items-center w-20 h-20"
                            href="https://www.linkedin.com/in/sergiofb/"
                            target="_blank"
                        >
                            <Linkedin />
                        </a>
                        <a
                            className="flex items-center w-20 h-20"
                            href={`https://wa.me/5491535040982?text=%C2%A1Hola%20Sergio,%20me%20contacto%20con%20vos%20desde%20tu%20porfolio!%0AMe%20llamo:%0ATe%20contacto%20respecto%20a%20...`}
                            target="_blank"
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
