import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";


export const projects = [
    {
        title: "Threejs Customizer",
        url: "https://threejscustomizer-rt.vercel.app/",
        image: "images/three.png",
        description: "A SAAS product where users can design their T-shirt using a 3D-model, apply colors and textures to the model ask AI to help you generate stunning textures and save them to your gallery"
    },
    {
        title: "Ontheside",
        url: "https://mentord.io/",
        image: "images/mentord.png",
        description: "A web application built to foster meaningful mentorship connections. It leverages powerful technologies to create a seamless and secure platform for both mentors and mentees."
    },
    {
        title: "Goth Money",
        url: "https://goth-money.vercel.app/",
        image: "images/goth.png",
        description: "An innovative 3D visualization project created using Three.js, React-Three-Fiber, and Blender. This immersive web experience combines cutting-edge technologies with dynamic animations to create a unique and engaging user interface."
    },
    {
        title: "Dalle Clone",
        url: "https://dall-e-rose-ten.vercel.app/",
        image: "images/dalle.png",
        description: "A Fullstack MERN AI image generation App with modern and minimal design, dynamic image layout, hover effect that showcases a users prompt to generate each ai image, their name and a download button search functionality, the ability to create new ai generated images by clicking the surprise me button or entering any text of your choice."
    },
    {
        title: "Fahmed",
        url: "https://faahmeed.vercel.app/",
        image: "images/fahmeed.png",
        description: "A personal 3D website that provides an interactive experience, allowing users to explore the client's business in a dynamic and engaging way"
    },

    {
        title: "Amazon App",
        url: "https://amazon-clone-3woo.vercel.app/",
        image: "images/amazon.png",
        description: "A fully functional e-commerce platform replicating the core features of Amazon. Built with React.js, Redux, and Firebase, it includes user authentication, product browsing, shopping cart functionality, and secure payment processing"
    },
    {
        title: "Port",
        url: "https://3d-portfolio-beta-ashen.vercel.app/",
        image: "images/port.png",
        description: "A personal portfolio website integrating 3D models and animations using Three.js and React-Three-Fiber. This project demonstrates my skills in creating interactive, visually striking web experiences that stand out in the digital landscape."
    },
    {
        title: "Cara",
        url: "https://e-commerce-project-five-pearl.vercel.app/",
        image: "images/cara.png",
        description: "A sleek and modern web application designed for user-centric functionality, built with React.js and Tailwind CSS. Cara emphasizes clean design and efficient performance, offering users a seamless and enjoyable experience."
    },
    {
        title: "Linkedin",
        url: "https://linkedin-cl.vercel.app/",
        image: "images/linkedin.png",
        description: "A professional networking platform clone developed using React.js, Rdux and Firebase. This project features user authentication, profile management, and real-time updates, replicating the core functionality of LinkedIn in a responsive web application."
    }
];
const Project = (props) => {
    const { project, highlighted } = props;

    const background = useRef();
    const bgOpacity = useMotionValue(0.4);

    useEffect(() => {
        animate(bgOpacity, highlighted ? 0.7 : 0.4);
    }, [highlighted]);

    useFrame(() => {
        background.current.material.opacity = bgOpacity.get();
    });

    return (
        <group {...props}>
            <mesh
                position-z={-0.001}
                onClick={() => window.open(project.url, "_blank")}
                ref={background}
            >
                <planeGeometry args={[2.2, 2]} />
                <meshBasicMaterial color="black" transparent opacity={0.4} />
            </mesh>
            <Image
                scale={[2, 1.2, 1]}
                url={project.image}
                toneMapped={false}
                position-y={0.3}
            />
            <Text
                maxWidth={4}
                anchorX={"left"}
                anchorY={"top"}
                fontSize={0.1}
                position={[-1, -0.4, 0]}
            >
                {project.title.toUpperCase()}
            </Text>
            <Text
                maxWidth={2}
                anchorX="left"
                anchorY="top"
                fontSize={0.08}
                position={[-1, -0.6, 0]}
            >
                {project.description}
            </Text>
        </group>
    );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
    const { viewport } = useThree();
    const [currentProject] = useAtom(currentProjectAtom);

    return (
        <group position-y={-viewport.height * 2 + 1}>
            {projects.map((project, index) => (
                <motion.group
                    key={"project_" + index}
                    position={[index * 2.5, 0, -3]}
                    animate={{
                        x: 0 + (index - currentProject) * 2.5,
                        y: currentProject === index ? 0 : -0.1,
                        z: currentProject === index ? -2 : -3,
                        rotateX: currentProject === index ? 0 : -Math.PI / 3,
                        rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
                    }}
                >
                    <Project project={project} highlighted={index === currentProject} />
                </motion.group>
            ))}
        </group>
    );
};