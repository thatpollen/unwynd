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
            Unwynd: il compagno di{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={HealthCare} />
            </span>{" "}
            meditazione definitivo che eleva la tua pratica a nuove vette.
            Scegli tra uno spettro di colori di luce{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Elements} />
            </span>{" "}
            per abbinarti al tuo umore, mentre selezioni una varietà di suoni
            sereni{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Music} />
            </span>{" "}
            per approfondire la tua concentrazione. Lascia che il tuo{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Flow} />
            </span>{" "}
            respiro sia guidato da una luce pulsante che riflette i tuoi schemi
            di respirazione personalizzati o segui meditazioni guidate. Lascia
            che la lampada Unwynd guidi il tuo viaggio verso la pace interiore{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={HandPrayer} />
            </span>{" "}
            - un respiro alla volta.
          </div>
        </div>
      </Container>
    </section>
  );
}
