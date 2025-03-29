"use client";

import { useLocale } from "next-intl";
import English from "../assets/largeText/English";
import Deutsch from "../assets/largeText/Deutsch";
import Español from "../assets/largeText/Español";
import Français from "../assets/largeText/Français";
import Italiano from "../assets/largeText/Italiano";

const languageComponents: Record<string, React.FC> = {
  en: English,
  de: Deutsch,
  fr: Français,
  es: Español,
  it: Italiano,
};

export default function LargeText() {
  const locale = useLocale(); // Get the current language
  const LanguageComponent = languageComponents[locale] || English; // Default to English if not found

  return <LanguageComponent />;
}

/*
"use client";

import Container from "../container/container";
import React, { useRef, useLayoutEffect } from "react";
import SplitType from "split-type";
import { gsap, ScrollTrigger } from "gsap/all";
import { Elements, Flow, HandPrayer, HealthCare, Music } from "../assets/icons";
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

      const iconAnimations = iconRefs.current
        .filter((icon) => icon !== null)
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
        // iconAnimations.forEach((anim) => anim.kill());
      };
    }
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
        // initial={{ scale: 0.8, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
        // transition={{ duration: 0.3, ease: "easeOut" }}
        className="inline-flex justify-center items-center"
        style={{ x, y, transformOrigin: "center" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={(el) => {
          if (el && index !== undefined) {
            iconRefs.current[index] = el;
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
            Unwynd: the ultimate meditation companion that elevates your
            practice to new heights. Choose from a spectrum of light colors to
            match your mood, while selecting from a variety of serene sounds to
            deepen your focus. Let your breath be guided by a pulsating light
            that reflects your custom breathing patterns or follow guided
            meditations. Let the Unwynd lamp guide your journey to inner peace -
            one breath at a time.
          </div>
        </div>
      </Container>
    </section>
  );
}
*/
