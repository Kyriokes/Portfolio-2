"use client";

const Interests: React.FC = () => (
    <section className="p-5 bg-black bg-opacity-70 text-white text-center overflow-x-hidden overflow-y-auto box-border max-h-[44vh] lg:max-h-[42vh] sm:max-h-[40vh]">
        <h2 className="text-xl mb-4">Intereses</h2>
        <ul className="p-0 space-y-4">
            <li className="text-base">
                <h3 className="font-bold">Desarrollo Web</h3>
                <p>
                    Mejorar mis habilidades en React y herramientas
                    relacionadas.
                </p>
            </li>
            <li className="text-base">
                <h3 className="font-bold">Programación</h3>
                <p>
                    Mi contacto con JavaScript me mostró un mundo que combina
                    matemática y lógica, lo cual me resulta estimulante.
                </p>
            </li>
            <li className="text-base">
                <h3 className="font-bold">Streaming</h3>
                <p>
                    ¿Por qué solo jugar cuando también puedes crear contenido?
                </p>
            </li>
            <li className="text-base">
                <h3 className="font-bold">Aviación</h3>
                <p>
                    Desde chico sentí fascinación por los objetos voladores más
                    pesados que el aire.
                </p>
            </li>
            <li className="text-base">
                <h3 className="font-bold">Astrofísica</h3>
                <p>
                    El universo es atrapante y todo sobre él y lo desconocido
                    que encubre me fascina.
                </p>
            </li>
            <li className="text-base">
                <h3 className="font-bold">Historia</h3>
                <p>
                    Para entender dónde estamos, todo lo que pasó es relevante.
                </p>
            </li>
        </ul>
    </section>
);

export default Interests;
