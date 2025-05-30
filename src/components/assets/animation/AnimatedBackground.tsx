"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  backgroundType?: "solid" | "gradient" | "radial";
  solidColor?: string;
  gradientColors?: string[];
  radialColors?: string[];
  autoAnimate?: boolean;
  animationDuration?: number;
  animationSpeed?: number;
  animationStyle?: "wave" | "ripple" | "pulse" | "slide";
  easing?: "ease" | "easeIn" | "easeOut" | "easeInOut";
  animationLoop?: "loop" | "once";
  animationAngle?: number;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  backgroundType = "gradient",
  solidColor = "#ffffff",
  // gradientColors = ["#ff7e5f", "#feb47b", "#6a11cb"],
  gradientColors = [
    "#1F3FEA",
    "#671FEA",
    "#EA1FC9",
    "#EA1F5E",
    "#EAAD1F",
    "#AAEA1F",
  ],
  // radialColors = ["#6a11cb", "#2575fc", "#ff7e5f"],
  radialColors = [
    "#1F3FEA",
    "#671FEA",
    "#EA1FC9",
    "#EA1F5E",
    "#EAAD1F",
    "#AAEA1F",
  ],
  autoAnimate = true,
  animationDuration = 5,
  animationSpeed = 1,
  animationStyle = "wave",
  easing = "easeInOut",
  animationLoop = "loop",
  animationAngle = 135,
  className,
}) => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    if (
      autoAnimate &&
      (backgroundType === "gradient" || backgroundType === "radial")
    ) {
      const interval = setInterval(() => {
        setCurrentBackgroundIndex(
          (prevIndex) =>
            (prevIndex + 1) %
            (backgroundType === "gradient"
              ? gradientColors.length
              : radialColors.length)
        );
      }, (animationDuration * 1000) / animationSpeed);

      return () => clearInterval(interval);
    }
  }, [
    autoAnimate,
    backgroundType,
    gradientColors,
    radialColors,
    animationDuration,
    animationSpeed,
  ]);

  const getGradientBackground = () => {
    // const nextIndex = (currentBackgroundIndex + 1) % gradientColors.length;
    // return `linear-gradient(${animationAngle}deg, ${gradientColors[currentBackgroundIndex]}, ${gradientColors[nextIndex]})`;
    return `linear-gradient(${animationAngle}deg, ${gradientColors.join(
      ", "
    )})`;
  };

  const getRadialGradientBackground = () => {
    const nextIndex = (currentBackgroundIndex + 1) % radialColors.length;
    return `radial-gradient(circle, ${radialColors[currentBackgroundIndex]}, ${radialColors[nextIndex]})`;
  };

  const animationVariants = {
    wave: {
      // background:
      //   backgroundType === "gradient"
      //     ? getGradientBackground()
      //     : getRadialGradientBackground(),
      background:
        backgroundType === "solid"
          ? solidColor
          : backgroundType === "gradient"
          ? getGradientBackground()
          : getRadialGradientBackground(),
      transition: {
        duration: animationDuration / animationSpeed,
        ease: easing,
        repeat: animationLoop === "loop" ? Infinity : 0,
        repeatType: "mirror" as const,
      },
      // transformOrigin: "bottom center",
    },
    ripple: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.5, 1],
      transition: {
        duration: animationDuration / animationSpeed,
        ease: easing,
        repeat: animationLoop === "loop" ? Infinity : 0,
        repeatType: "mirror" as const,
      },
      // transformOrigin: "bottom center",
    },
    pulse: {
      opacity: [1, 0.5, 1],
      transition: {
        duration: animationDuration / animationSpeed,
        ease: easing,
        repeat: animationLoop === "loop" ? Infinity : 0,
        repeatType: "mirror" as const,
      },
    },
    slide: {
      x: ["0%", "100%", "0%"],
      transition: {
        duration: animationDuration / animationSpeed,
        ease: easing,
        repeat: animationLoop === "loop" ? Infinity : 0,
        repeatType: "mirror" as const,
      },
    },
  };

  return (
    <motion.div
      className={`h-full w-full will-change-transform blur-[100px] ${className}`}
      style={{
        background:
          backgroundType === "solid"
            ? solidColor
            : backgroundType === "gradient"
            ? getGradientBackground()
            : getRadialGradientBackground(),
        // transition: "background 5s ease-in-out",
        // transformOrigin: "bottom center",
      }}
      animate={{
        ...(autoAnimate &&
        (backgroundType === "gradient" || backgroundType === "radial")
          ? animationVariants[animationStyle]
          : {}),
        opacity: [0.5, 1],
        scale: [1, 1.2],
        // transformOrigin: "bottom center",
      }}
      transition={{
        duration: `${animationDuration / animationSpeed}`,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
};

export default AnimatedBackground;
