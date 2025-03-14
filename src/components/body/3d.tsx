"use client";

import { Canvas } from "@react-three/fiber";
import Lamp from "../assets/3D/lamp";
import Container from "../container/container";
import { DragToRotate } from "../assets/icons";

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

          <div className="w-full flex flex-col items-center gap-10">
            <div className="w-full h-[480px] md:h-[640px]">
              <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
                <Lamp />
              </Canvas>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2.5 relative">
              <div className="p-2.5 text-sm text-text-inverted-primary bg-black overflow-hidden rounded-4xl border border-[rgba(255,255,255,0.1)]">
                Drag to rotate
              </div>
              <span className="absolute w-full h-9 top-[-15px] flex justify-center items-center -z-1 px-6">
                <DragToRotate />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
