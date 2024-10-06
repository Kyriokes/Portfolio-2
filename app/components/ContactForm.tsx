"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [successMessage, setSuccessMessage] = useState<string>("");

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccessMessage("¡Mensaje enviado con éxito!");
    };

    return (
        <section className="grid place-items-center p-5 bg-black bg-opacity-70 text-white">
            <h2 className="text-xl mb-4">Contacto</h2>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-full max-w-md"
                >
                    <label htmlFor="name" className="mb-1 font-bold">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mb-3 p-2 border border-gray-300 rounded-md text-black"
                    />
                    <label htmlFor="email" className="mb-1 font-bold">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mb-3 p-2 border border-gray-300 rounded-md text-black"
                    />
                    <label htmlFor="message" className="mb-1 font-bold">
                        Mensaje:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mb-3 p-2 border border-gray-300 rounded-md text-black"
                    />
                    <button
                        type="submit"
                        className="p-2 bg-green-600 text-white border-none rounded-md hover:bg-green-700 transition-colors"
                    >
                        Enviar
                    </button>
                </form>
            </div>
            {successMessage && (
                <p className="mt-3 text-green-500">{successMessage}</p>
            )}
        </section>
    );
};

export default ContactForm;
