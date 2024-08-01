import { motion } from "framer-motion";
import React from 'react';
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
    const { children, mobileTop } = props;

    return (<motion.section
        className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start
        ${mobileTop ? " justify-start md:justify-center" : " justify-center"}
        `}
        initial={{
            opacity: 0,
            y: 50,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.6,
            }
        }}
    >
        {children}
    </motion.section>)
}

export const Interface = (props) => {
    const { setSection } = props;
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection setSection={setSection} />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}

const AboutSection = (props) => {
    const { setSection } = props;
    return (
        <Section mobileTop>
            <h1 className="text-4xl font-extrabold leading-snug md:text-6xl">
                Hey there!
                <br />
                <span className="px-1 italic bg-white ">I'm Chinedu
                </span>
            </h1>
            <motion.p
                className="mt-4 text-lg text-gray-300 w-60"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}
            >
                A passionate Software Developer
                <br />
                <span className="w-24">Specializing in crafting immersive web applications and stunning 3D visuals.</span>
            </motion.p>
            <motion.button
                onClick={() => setSection(3)}
                className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 2.5,
                }}
            >
                Contact me
            </motion.button>
        </Section>
    )
};

const skills = [
    {
        title: "Javascript",
        level: 90,
    },
    {
        title: "React / React Native",
        level: 85,
    },
    {
        title: "Threejs / React Three Fiber",
        level: 80,
    },
    {
        title: "Nextjs",
        level: 75,
    },
    {
        title: "Nodejs",
        level: 85,
    },
    {
        title: "Typscript",
        level: 80,
    },
    {
        title: "Tailwindcss",
        level: 85,
    },
    {
        title: "3D Modeling",
        level: 20,
    },
    {
        title: "Figma Design",
        level: 65,
    },
    {
        title: "Redux",
        level: 80,
    },
    {
        title: "MongoDB",
        level: 80,
    },
    {
        title: "Git",
        level: 90,
    },
    {
        title: "PostgreSQL",
        level: 60,
    },

]

const languages = [
    {
        title: "🇺🇸 English",
        level: 80,
    },
    {
        title: "🇳🇬 Yoruba",
        level: 60,
    },
    {
        title: "🇳🇬 Igbo",
        level: 60,
    }
]

const SkillSection = () => {
    return (
        <Section>
            <motion.div whileInView={"visible"}>
                <h2 className="text-3xl font-bold text-white md:text-5xl">Skills</h2>
                <div className="mt-8 space-y-4 ">
                    {skills.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <motion.h3
                                className="text-xl font-bold text-gray-300"
                                initial={{
                                    opacity: 0,
                                }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                            delay: 1 + index * 0.2,
                                        },
                                    },
                                }}
                            >
                                {skill.title}
                            </motion.h3>
                            <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                <motion.div
                                    className="h-full bg-indigo-500 rounded-full "
                                    style={{ width: `${skill.level}%` }}
                                    initial={{
                                        scaleX: 0,
                                        originX: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            scaleX: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2,
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="mt-10 text-5xl font-bold text-white">Languages</h2>
                    <div className="mt-8 space-y-4 ">
                        {languages.map((lng, index) => (
                            <div className="w-64" key={index}>
                                <motion.h3
                                    className="text-xl font-bold text-gray-300"
                                    initial={{
                                        opacity: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 2 + index * 0.2,
                                            },
                                        },
                                    }}
                                >
                                    {lng.title}
                                </motion.h3>
                                <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                    <motion.div
                                        className="h-full bg-indigo-500 rounded-full "
                                        style={{ width: `${lng.level}%` }}
                                        initial={{
                                            scaleX: 0,
                                            originX: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                scaleX: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 2 + index * 0.2,
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};

const ContactSection = () => {
    return (
        <Section>
            <h2 className="text-5xl font-bold ">
                Contact me
            </h2>
            <div className="max-w-full p-8 mt-8 bg-white rounded-md w-96">
                <form>
                    <label htmlFor="name" className="block mb-1 font-medium text-gray-900">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full h-10 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300"
                    />
                    <label htmlFor="email" className="block mt-8 mb-1 font-medium text-gray-900">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full h-10 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300"
                    />
                    <label htmlFor="email"
                        className="block mt-8 mb-1 font-medium text-gray-900">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="block w-full h-32 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300" />
                    <button className="px-8 py-4 mt-16 text-lg font-bold text-white bg-indigo-600 rounded-lg">
                        Submit
                    </button>
                </form>
            </div>
        </Section>
    )
}

const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };
    return (
        <Section>
            <div className="flex items-center justify-center w-full h-full gap-8">
                <button
                    className="text-gray-300 transition-colors hover:text-indigo-600"
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className="text-5xl font-bold text-white">Projects</h2>
                <button
                    className="text-gray-300 transition-colors hover:text-indigo-600"
                    onClick={nextProject}
                >
                    Next →
                </button>
            </div>
        </Section>
    )
}