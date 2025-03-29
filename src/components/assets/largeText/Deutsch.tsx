/*
"use client";

import Container from "@/components/container/container";
import React, { useRef, useLayoutEffect } from "react";
import SplitType from "split-type";
import { gsap, ScrollTrigger } from "gsap/all";
import {
  Elements,
  Flow,
  HandPrayer,
  HealthCare,
  Music,
} from "@/components/assets/icons";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function LargeText() {
  const elementsToSplitRef = useRef<HTMLParagraphElement>(null);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (elementsToSplitRef.current) {
      const splitTypes = new SplitType(elementsToSplitRef.current, {
        types: "words",
      });

      const wordsAnimation = gsap.from(splitTypes.words, {
        scrollTrigger: {
          trigger: elementsToSplitRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 2,
          markers: false,
        },
        opacity: 0.24,
        stagger: 0.1,
        duration: 0.4,
      });

      const iconAnimations = Array.from(iconRefs.current.values())
        .filter(Boolean)
        .map((icon) =>
          gsap.fromTo(
            icon,
            { y: 20, opacity: 0 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: icon,
                start: "top 85%",
                end: "top 70%",
                scrub: 2,
              },
            }
          )
        );

      return () => {
        splitTypes.revert();
        wordsAnimation.kill();
        iconAnimations.forEach((anim) => anim.kill());
      };
    }
  }, [elementsToSplitRef.current?.textContent]);
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

  // Reusable Animated Icon Component
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
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="inline-flex justify-center items-center"
        style={{ x, y, transformOrigin: "center" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={(el) => {
          if (el && index !== undefined) {
            if (iconRefs.current[index] === undefined) {
              iconRefs.current[index] = el;
            }
          }
        }}
      >
        <div className="aspect-square relative overflow-visible w-12 h-12">
          <Icon className="stroke-neutral-600 w-full h-full" />
        </div>
      </motion.span>
    );
  };

  return (
    <section className="w-full py-32 px-2">
      <Container>
        <div>
          <div
            className="text-H3 lg:text-H2 leading-[1.3em] font-light text-text-primary text-center whitespace-pre-wrap"
            ref={elementsToSplitRef}
          >
            Unwynd: dein ultimativer{" "}
            <span className="inline-block">
              <AnimatedIcon Icon={HealthCare} />
            </span>{" "}
            Meditationsbegleiter. Wähle die{" "}
            <span>
              <AnimatedIcon Icon={Elements} />
            </span>{" "}
            Lichtfarbe, die zu deiner Stimmung passt, und vertiefe deine
            Konzentration mit einer Vielzahl von beruhigenden{" "}
            <span className="inline-block">
              <AnimatedIcon Icon={Music} />
            </span>{" "}
            Klängen. Lass deinen{" "}
            <span className="inline-block">
              <AnimatedIcon Icon={Flow} />
            </span>{" "}
            Atem von einem sanft pulsierenden Licht leiten oder folge einer
            geführten Meditation. Die Unwynd-Lampe begleitet dich auf deiner
            Reise zu innerem{" "}
            <span className="inline-block">
              <AnimatedIcon Icon={HandPrayer} />{" "}
            </span>
            Frieden – Atemzug für Atemzug.
          </div>
          ;
        </div>
      </Container>
    </section>
  );
}
*/

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
        key={`${Icon.toString()}-${index}`} // Ensure re-render when language changes
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="inline-flex justify-center items-center align-middle w-full h-full"
        style={{ x, y, transformOrigin: "center" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-12 h-12 flex justify-center items-center">
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
            Unwynd: dein ultimativer{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={HealthCare} />
            </span>{" "}
            Meditationsbegleiter. Wähle die{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Elements} />
            </span>{" "}
            Lichtfarbe, die zu deiner Stimmung passt, und vertiefe deine
            Konzentration mit einer Vielzahl von beruhigenden{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Music} />
            </span>{" "}
            Klängen. Lass deinen{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={Flow} />
            </span>{" "}
            Atem von einem sanft pulsierenden Licht leiten oder folge einer
            geführten Meditation. Die Unwynd-Lampe begleitet dich auf deiner
            Reise zu innerem{" "}
            <span className="inline-flex justify-center items-center align-middle">
              <AnimatedIcon Icon={HandPrayer} />
            </span>{" "}
            Frieden – Atemzug für Atemzug.
          </div>
        </div>
      </Container>
    </section>
  );
}
