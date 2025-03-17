"use client";

import * as THREE from "three";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";

function LampScene() {
  const { scene } = useGLTF("/models/lamp.glb");
  const [scale, setScale] = useState(1);
  const [positionY, setPositionY] = useState(1.2);

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth < 810) {
        setScale(6);
        setPositionY(-0.8);
      } else {
        setScale(10);
        setPositionY(-1.2);
      }
    }

    window.addEventListener("resize", updateSize);
    updateSize(); // Set initial size
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (scene) {
      scene.position.set(0, positionY, 0);
    }
  }, [scene, positionY]);

  return <primitive object={scene} scale={scale} />;
}

export default function Lamp({ ...props }) {
  const groupRef = useRef<THREE.Group>(null);
  return (
    <>
      <color attach="background" args={[""]} />
      <group ref={groupRef} {...props} dispose={null}>
        <ambientLight intensity={1} />
        <hemisphereLight intensity={1} color="#eaeaea" />
        <directionalLight position={[0, 6, 2]} intensity={1} />
        {/* <primitive object={scene} scale={1} position={[0, -0.12, 0]} /> */}
        <LampScene />
      </group>
      <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={200} />
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
