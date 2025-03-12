"use client";

import * as THREE from "three";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";

function LampScene() {
  const { scene } = useGLTF("/models/lamp.glb");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateSize() {
      setScale(window.innerWidth < 810 ? 0.7 : 1);
    }

    window.addEventListener("resize", updateSize);
    updateSize(); // Set initial size
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return <primitive object={scene} scale={scale} position={[0, -0.12, 0]} />;
}

export default function Lamp({ ...props }) {
  const groupRef = useRef<THREE.Group>(null);
  return (
    <>
      <color attach="background" args={[""]} />
      <group ref={groupRef} {...props} dispose={null}>
        <ambientLight intensity={1} />
        <hemisphereLight intensity={1} color="#eaeaea" />
        <directionalLight position={[0, 2, 5]} intensity={1} />
        {/* <primitive object={scene} scale={1} position={[0, -0.12, 0]} /> */}
        <LampScene />
      </group>
      <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={1800} />
      <OrbitControls
        enableZoom={false}
        rotateSpeed={2}
        enableDamping
        dampingFactor={0.125}
      />
    </>
  );
}

useGLTF.preload("/models/lamp.glb");
