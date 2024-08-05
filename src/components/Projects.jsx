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
        title: "Fahmed",
        url: "https://faahmeed.vercel.app/",
        image: "images/fahmeed.png",
        description: "A SAAS product where users can design their T-shirt using a 3D-model, apply colors and textures to the model ask AI to help you generate stunning textures and save them to your gallery"
    },
    {
        title: "Goth Money",
        url: "https://goth-money.vercel.app/",
        image: "images/goth.png",
        description: "A SAAS product where users can design, apply colors and textures, ask AI to help you generate textures and save them to your gallery"
    },
    {
        title: "Amazon App",
        url: "https://amazon-clone-3woo.vercel.app/",
        image: "images/amazon.png",
        description: "A SAAS product where users can design their T-shirt using a 3D-model, apply colors and textures to the model ask AI to help you generate stunning textures and save them to your gallery"
    },
    {
        title: "Port",
        url: "https://3d-portfolio-beta-ashen.vercel.app/",
        image: "images/port.png",
        description: "A SAAS product where users can design their T-shirt using a 3D-model, apply colors and textures to the model ask AI to help you generate stunning textures and save them to your gallery"
    },
    {
        title: "Cara",
        url: "https://3d-portfolio-beta-ashen.vercel.app/",
        image: "images/port.png",
        description: "A SAAS product where users can design their T-shirt using a 3D-model, apply colors and textures to the model ask AI to help you generate stunning textures and save them to your gallery"
    },
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