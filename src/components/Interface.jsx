import { motion } from "framer-motion";
import React from 'react';
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
    const { children } = props;

    return (<motion.section className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center
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

export const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}

const AboutSection = () => {
    return (


        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hey there!,
                <br />
                <span className=" bg-white px-1 italic">I'm Chinedu
                </span>
            </h1>
            <motion.p
                className="w-60 text-lg text-gray-600 mt-4"
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
            <motion.button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
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
                <h2 className="text-5xl font-bold">Skills</h2>
                <div className=" mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <motion.h3
                                className="text-xl font-bold text-gray-800"
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
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
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
                    <h2 className="text-5xl font-bold mt-10">Languages</h2>
                    <div className=" mt-8 space-y-4">
                        {languages.map((lng, index) => (
                            <div className="w-64" key={index}>
                                <motion.h3
                                    className="text-xl font-bold text-gray-800"
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
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
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
            <h2 className=" text-5xl font-bold ">
                Contact me
            </h2>
            <div className=" mt-8 p-8 rounded-md bg-white w-96 max-w-full">
                <form>
                    <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className=" block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 h-10"
                    />
                    <label htmlFor="email" className="font-medium text-gray-900 block mb-1 mt-8">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className=" block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 h-10"
                    />
                    <label htmlFor="email"
                        className="font-medium text-gray-900 block mb-1 mt-8">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className=" h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300" />
                    <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">
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
            <div className="flex w-full h-full gap-8 items-center justify-center">
                <button
                    className="hover:text-indigo-600 transition-colors"
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className="text-5xl font-bold">Projects</h2>
                <button
                    className="hover:text-indigo-600 transition-colors"
                    onClick={nextProject}
                >
                    Next →
                </button>
            </div>
        </Section>
    )
}