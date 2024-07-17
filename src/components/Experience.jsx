import { ContactShadows, Environment, Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { motion } from "framer-motion-3d"


{/* 
  
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"]
    },
  })
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.45}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        )}
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group> 
    </>
  ); 
  
  */}

export const Experience = (props) => {
  const { section } = props;
  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}>
        <Office section={section} />
      </motion.group>
      <group position={[0, -1.5, -10]}>
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"yellow"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
        <group scale={[2, 2, 2]} position-y={-1.5}>
          <Avatar animate={section === 0 ? "Falling" : "Standing"} />
        </group>
      </group>
    </>
  )
};
