"use client";

import Container from "../container/container";
import { useRef, useLayoutEffect } from "react";
import SplitType from "split-type";
import { gsap, ScrollTrigger } from "gsap/all";
import { Elements, Flow, HandPrayer, HealthCare, Music } from "../assets/icons";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function LargeText() {
  const elementsToSplitRef = useRef<HTMLParagraphElement>(null);
  const iconRefs = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (elementsToSplitRef.current) {
      const splitTypes = new SplitType(elementsToSplitRef.current, {
        types: "words",
      });

      gsap.from(splitTypes.words, {
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
    }

    // Animate icons on scroll
    iconRefs.current.forEach((icon) => {
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
      );
    });

    return;
  }, []);

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
        className="inline-flex justify-center items-center"
        style={{ x, y, transformOrigin: "center" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={(el) => {
          if (el && index !== undefined) iconRefs.current[index] = el;
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
            Unwynd: the ultimate{" "}
            <span className="inline-block">
              <AnimatedIcon Icon={HealthCare} index={0} />
            </span>{" "}
            meditation companion that elevates your practice to new heights.
            Choose from a spectrum of light{" "}
            <span className="inline-block">
              <AnimatedIcon Icon={Elements} index={1} />
            </span>{" "}
            colors to match your mood, while selecting from a variety of serene{" "}
            <span className="inline-block">
              <AnimatedIcon Icon={Music} index={2} />
            </span>{" "}
            sounds to deepen your focus. Let your{" "}
            <span className="inline-block">
              <AnimatedIcon Icon={Flow} index={3} />
            </span>{" "}
            breath be guided by a pulsating light that reflects your custom
            breathing patterns or follow guided meditations. Let the Unwynd lamp
            guide your journey to inner{" "}
            <span className="inline-block">
              <AnimatedIcon Icon={HandPrayer} index={4} />
            </span>{" "}
            peace - one breath at a time.
          </div>
        </div>
      </Container>
    </section>
  );
}
