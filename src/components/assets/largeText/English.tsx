"use client";

import Container from "@/components/container/container";
import React from "react";
import {
  Elements,
  Flow,
  HandPrayer,
  HealthCare,
  Music,
} from "@/components/assets/icons";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function LargeText() {
  const useHoverMotion = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const smoothX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 });
    const smoothY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 });

    const handleMouseMove = (event: React.MouseEvent<HTMLSpanElement>) => {
      const { currentTarget, clientX, clientY } = event;
      const { left, top, width, height } =
        currentTarget.getBoundingClientRect();

      // Restrict movement within the wrapper (max ±15px)
      const moveX = Math.min(
        Math.max((clientX - (left + width / 2)) * 0.3, -15),
        15
      );
      const moveY = Math.min(
        Math.max((clientY - (top + height / 2)) * 0.3, -15),
        15
      );

      x.set(moveX);
      y.set(moveY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return { x: smoothX, y: smoothY, handleMouseMove, handleMouseLeave };
  };

  const AnimatedIcon = ({
    Icon,
    index,
  }: {
    Icon: React.ElementType<{ className?: string }>;
    index?: number;
  }) => {
    const { x, y, handleMouseMove, handleMouseLeave } = useHoverMotion();

    return (
      <motion.span
        key={`${Icon.toString()}-${index}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="inline-flex justify-center items-center align-middle w-12 h-12"
        style={{ x, y, transformOrigin: "center" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <Icon className="stroke-neutral-600 w-full h-full" />
        </div>
      </motion.span>
    );
  };

  return (
    <section className="w-full py-32 px-2">
      <Container>
        <div>
          <div className="text-H3 lg:text-H2 leading-[1.3em] font-light text-text-primary text-center whitespace-pre-wrap">
            Unwynd: the ultimate{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={HealthCare} />
            </span>{" "}
            meditation companion that elevates your practice to new heights.
            Choose from a spectrum of light{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Elements} />
            </span>{" "}
            colors to match your mood, while selecting from a variety of serene{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Music} />
            </span>{" "}
            sounds to deepen your focus. Let your{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Flow} />
            </span>{" "}
            breath be guided by a pulsating light that reflects your custom
            breathing patterns or follow guided meditations. Let the Unwynd lamp
            guide your journey to inner{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={HandPrayer} />
            </span>{" "}
            peace - one breath at a time.
          </div>
        </div>
      </Container>
    </section>
  );
}
