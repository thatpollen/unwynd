"use client";

import { Canvas } from "@react-three/fiber";
import Lamp from "../assets/3D/lamp";
import Container from "../container/container";

export default function ThreeD() {
  return (
    <section className="w-full py-24">
      <Container>
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col justify-center items-center gap-2.5">
            <h1 className="text-H3 md:text-[44px] lg:text-[52px] text-center">
              <span className="text-text-tertiary">Harmony in</span>
              <br />
              Three Dimensions
            </h1>
            <p className="tex-sm text-text-secondary text-center">
              Crafted with meticulous attention to detail, the Unwynd lamp is
              more than just an illuminating presence — it&apos;s a serene
              sanctuary in itself. Every aspect of its design has been
              thoughtfully considered to enhance your meditation experience.
            </p>
          </div>
          <div className="w-full h-[480px] md:h-[670px]">
            <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
              <Lamp />
            </Canvas>
          </div>
        </div>
      </Container>
    </section>
  );
}
