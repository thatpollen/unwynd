"use client";

import NextImage from "next/image";
import AnimatedBackground from "../assets/animation/AnimatedBackground";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  const [text, setText] = useState("Breathe in");

  useEffect(() => {
    const sequence = [t("breatheIn"), t("breatheOut")];
    let index = 0;
    setText(sequence[index]);

    const interval = setInterval(() => {
      index = (index + 1) % sequence.length;
      setText(sequence[index]);
    }, 4000);

    return () => clearInterval(interval);
  }, [t]);

  // Background Animation
  const [backgroundType, setBackgroundType] = useState<
    "solid" | "gradient" | "radial"
  >("gradient");
  const [solidColor, setSolidColor] = useState("");
  const [gradientColors, setGradientColors] = useState([
    "#1F3FEA",
    "#671FEA",
    "#EA1FC9",
    "#EA1F5E",
    "#EAAD1F",
    "#AAEA1F",
  ]);

  return (
    <section className="p-2">
      <div className="inner-full-width bg-gray-100 rounded-2xl h-auto md:h-dvh flex flex-col justify-center items-center gap-8 md:gap-0 overflow-hidden">
        <div className="h-auto md:h-[56vh] mt-32 md:mt-0 flex flex-col justify-end items-center gap-6 relative z-1">
          <h1 className="flex flex-col text-H2 md:text-[56px] lg:text-[64px] text-center font-semibold bg-[linear-gradient(to_bottom_right,#1F3FEA,#671FEA,#EA1FC9,#EA1F5E,#EAAD1F,#AAEA1F)] bg-clip-text text-transparent">
            <span className="leading-[1]">Unwynd</span>
            <span className="">{t("heading")}</span>
          </h1>
          <p className="max-w-[580px] mx-auto text-base text-text-secondary text-center">
            {t("subHeading")}
          </p>
        </div>

        <div className="grow flex flex-col justify-end w-full h-auto md:h-[44vh] relative">
          <div className="flex flex-col justify-end items-center gap-2.5 relative h-[230px] md:h-[400px]">
            {/* Background Animation */}
            <AnimatedBackground
              backgroundType={backgroundType}
              solidColor={solidColor}
              gradientColors={gradientColors}
              animationDuration={2}
              animationStyle="wave"
              className="lamp-bg-gradient absolute inset-0"
            />

            {/* Color Selection */}
            <div className="color-selection absolute bottom-10 flex justify-center items-center gap-2 p-2 bg-white rounded-full border border-stroke-opacity12 backdrop-blur-[2px] z-3">
              {/* Gradient Color Option */}
              <div
                className="rainbow w-6 h-6 flex justify-center items-center cursor-pointer rounded-full border border-stroke-opacity12 transition-opacity duration-200 hover:bg-[linear-gradient(to_bottom_right,rgba(31,63,234,0.08),rgba(103,31,234,0.08),rgba(234,31,201,0.08),rgba(234,31,94,0.08),rgba(234,173,31,0.08),rgba(170,234,31,0.08))] group"
                onClick={() => {
                  setBackgroundType("gradient");
                  setGradientColors([
                    "#1F3FEA",
                    "#671FEA",
                    "#EA1FC9",
                    "#EA1F5E",
                    "#EAAD1F",
                    "#AAEA1F",
                  ]);
                }}
              >
                <div
                  className={`color ${
                    backgroundType === "gradient" ? "w-full h-full" : "w-4 h-4 "
                  } rounded-full bg-[linear-gradient(to_bottom_right,#1F3FEA,#671FEA,#EA1FC9,#EA1F5E,#EAAD1F,#AAEA1F)] group-hover:scale-[1.06] transition-width duration-400`}
                ></div>
              </div>
              {/* Solid Color Option */}
              {["#FF7100", "#AAEA1F", "#2563EB", "#FF00EE"].map((color) => (
                <div
                  key={color}
                  className="solid w-6 h-6 flex justify-center items-center cursor-pointer rounded-full border border-stroke-opacity12 transition-opacity duration-200 hover:bg-[rgba(255,113,0,0.08)] group"
                  onClick={() => {
                    setBackgroundType("solid");
                    setSolidColor(color);
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = `${color}25`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <div
                    style={{ backgroundColor: color }}
                    className={`color ${
                      backgroundType === "solid" && solidColor === color
                        ? "w-full h-full"
                        : "w-4 h-4"
                    } rounded-full group-hover:scale-[1.06] transition-width duration-400`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Image Section */}
            <figure className="w-[272px] md:w-[400px] h-[300px] overflow-hidden relative">
              {/* <div className="lamp-gradient absolute inset-0 opacity-80 z-2"></div> */}
              <div className="lamp-gradient absolute inset-0 opacity-80 z-2">
                <AnimatedBackground
                  backgroundType={backgroundType}
                  solidColor={solidColor}
                  gradientColors={gradientColors}
                  animationDuration={2}
                  animationStyle="wave"
                  animationAngle={135}
                  className="w-full h-full"
                />
              </div>
              <figure className="absolute bottom-[-172px] md:bottom-[-234px] aspect-auto">
                <NextImage
                  src="/images/unwynd-lamp.avif"
                  alt="hero-image"
                  width={400}
                  height={300}
                  className="max-w-full w-auto h-auto"
                  priority
                />
              </figure>

              <div className="absolute z-2 inset-0 flex justify-center items-center">
                <div className="font-caveat text-xl text-text-secondary">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={text} // Re-mounts when text changes to trigger animation
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, ease: "easeInOut" }} // Smooth fade effect
                      style={{
                        display: "block",
                      }}
                    >
                      {text}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
