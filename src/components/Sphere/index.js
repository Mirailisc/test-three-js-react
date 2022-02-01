import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

import Texture from "../../images/texture.png";

const Sphere = (props) => {
  const texture = useLoader(TextureLoader, Texture);

  const sphereRef = useRef();

  useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();

      sphereRef.current.rotation.y = elapsedTime * 7;
  })

  return (
    <>
      <ambientLight intensity={1} />
      <Stars radius={300} depth={60} factor={7} saturation={0} fade />
      <mesh ref={sphereRef}>
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial color="black" />
        <meshStandardMaterial map={texture} />
        <OrbitControls
          enableZoom
          enablePan
          enableRotate
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};

export default Sphere;
