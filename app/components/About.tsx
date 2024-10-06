"use client";

const About: React.FC = () => (
    <section className="relative p-5 bg-black bg-opacity-70 text-white overflow-x-hidden overflow-y-auto box-border">
        <h2 className="text-3xl mb-4">
            Soy un Desarrollador Full Stack con foco en JavaScript
        </h2>

        <div className="max-h-[30vh] md:max-h-full">
            <p className="text-xl mb-6">
                Poseo sólidos conocimientos en React, Node.js, Sequelize,
                PostgreSQL y Prisma. Cuento con habilidades en GIT/Github, Unity
                y Blender. Mi formación multidisciplinaria me ha brindado
                excelentes capacidades analíticas que enriquecen mi trabajo como
                desarrollador.
            </p>

            <section className="mt-6">
                <h3 className="text-xl font-medium mb-4">
                    Experiencia Profesional
                </h3>

                <ul className="space-y-4">
                    <li>
                        <h4 className="text-xl font-medium">
                            Full Stack Developer - Henry Bootcamp
                        </h4>
                        <div className="ml-4">
                            <ul className="list-disc pl-5 text-lg">
                                <li>
                                    Desarrollo backend (Node.js, Prisma,
                                    PostgreSQL) en el proyecto Chilling Time.
                                </li>
                                <li>
                                    Colaboración en el diseño del frontend y la
                                    producción de contenido para la página del
                                    proyecto.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h4 className="text-xl font-medium">
                            Evaluador de Código - RemoteTasks
                        </h4>
                        <div className="ml-4">
                            <ul className="list-disc pl-5 text-lg">
                                <li>
                                    Evaluación de código generado por IA y
                                    respuestas relacionadas con desarrollo web.
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="mt-6">
                <h3 className="text-xl font-medium mb-4">Tecnologías</h3>

                <ul className="flex flex-wrap text-lg">
                    <li className="mr-4 mb-2">
                        Frontend: React, HTML, CSS, JavaScript
                    </li>
                    <li className="mr-4 mb-2">
                        Backend: Node.js, Express.js, Prisma, PostgreSQL
                    </li>
                    <li className="mr-4 mb-2">Bases de datos: PostgreSQL</li>
                    <li className="mr-4 mb-2">
                        Control de versiones: GIT/Github
                    </li>
                    <li className="mr-4 mb-2">Herramientas: Unity, Blender</li>
                </ul>
            </section>

            <section className="mt-6">
                <h3 className="text-xl font-medium mb-4">
                    ¡Quiero aportar valor a tu equipo!
                </h3>

                <p className="text-lg">
                    Contáctame para conversar sobre cómo mis habilidades y
                    experiencia pueden contribuir a tus proyectos.
                </p>
            </section>
        </div>
    </section>
);

export default About;
