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
            Unwynd: el compañero de meditación definitivo{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={HealthCare} />
            </span>{" "}
            que eleva tu práctica a nuevas cotas. Elige entre un espectro de{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Elements} />
            </span>{" "}
            colores de luz para adaptarte a tu estado de ánimo, mientras
            seleccionas entre una variedad de{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Music} />
            </span>{" "}
            sonidos serenos para profundizar en tu concentración. Deja que tu{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Flow} />
            </span>{" "}
            respiración sea guiada por una luz pulsante que refleja tus patrones
            de respiración personalizados o sigue meditaciones guiadas. Deja que
            la lámpara Unwynd guíe tu viaje hacia la{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={HandPrayer} />
            </span>{" "}
            paz interior - respiración a respiración.
          </div>
          ;
        </div>
      </Container>
    </section>
  );
}
