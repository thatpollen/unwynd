"use client";

import NextImage from "next/image";
import AnimatedBackground from "../assets/animation/AnimatedBackground";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import NavLink from "next/link";

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  const [text, setText] = useState("Breathe in");

  // const [isBreathingIn, setIsBreathingIn] = useState(true);
  const [opacity, setOpacity] = useState(1);

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

  useEffect(() => {
    const sequence = [t("breatheIn"), t("breatheOut")];
    let index = 0;

    const animate = () => {
      setText(sequence[index]);
      // setIsBreathingIn(index === 0);

      // Step 1: Reset opacity instantly
      setOpacity(index === 0 ? 0 : 1);

      // Step 2: Delay by 2 seconds, then transition opacity
      setTimeout(() => {
        setOpacity(index === 0 ? 1 : 0);
      }, 2000); // 2s delay before fade

      // Step 3: Schedule next phase after full cycle (2s delay + 2s fade + 1s pause = 5s)
      setTimeout(() => {
        index = (index + 1) % sequence.length;
        animate();
      }, 5000); // repeat every 5s per phase
    };

    animate();

    return () => {};
  }, [t]);

  return (
    <section className="p-2">
      <div className="inner-full-width bg-gray-100 rounded-2xl h-auto md:h-dvh flex flex-col justify-center items-center gap-8 overflow-hidden">
        <div className="h-auto md:h-[56vh] mt-0 flex flex-col justify-end items-center gap-6 relative z-1 px-4">
          <h1
            className={`flex flex-col ${
              locale === "de" ? "text-H4" : "text-H2"
            } md:text-[56px] lg:text-[64px] text-center font-semibold bg-[linear-gradient(to_bottom_right,#1F3FEA,#671FEA,#EA1FC9,#EA1F5E,#EAAD1F,#AAEA1F)] bg-clip-text text-transparent`}
          >
            <div className="self-center block md:hidden py-3 my-6">
              <NavLink href={`/${locale}`}>
                <NextImage
                  src="/images/navlogo/32.svg"
                  alt="logo"
                  width={160}
                  height={32}
                  className="w-auto h-auto"
                />
              </NavLink>
            </div>
            <span className="leading-[1] hidden md:block">Unwynd</span>
            <span className="">{t("heading")}</span>
          </h1>
          <p className="max-w-[580px] mx-auto text-sm md:text-base text-text-secondary text-center">
            {t("subHeading")}
          </p>
        </div>

        <div className="grow flex flex-col justify-end w-full h-auto md:h-[44vh] relative">
          <div className="flex flex-col justify-end items-center gap-2.5 relative h-[230px] md:h-[400px] overflow-hidden">
            {/* Background Animation - now controlled by opacity */}
            <motion.div
              className="lamp-bg-gradient absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity }}
              transition={{ duration: 4, ease: "easeInOut" }}
            >
              <AnimatedBackground
                backgroundType={backgroundType}
                solidColor={solidColor}
                gradientColors={gradientColors}
                animationDuration={5}
                animationAngle={135}
                animationStyle="wave"
              />
            </motion.div>

            {/* Color Selection */}
            <div className="color-selection absolute bottom-2 md:bottom-10 flex justify-center items-center gap-2 p-2 bg-white rounded-full border border-stroke-opacity12 backdrop-blur-[2px] z-3">
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
                    backgroundType === "gradient" ? "scale-[1.4]" : "scale-100"
                  } w-4 h-4 rounded-full bg-[linear-gradient(to_bottom_right,#1F3FEA,#671FEA,#EA1FC9,#EA1F5E,#EAAD1F,#AAEA1F)] transition-width duration-200`}
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
                        ? "scale-[1.4]"
                        : "scale-100"
                    } w-4 h-4 rounded-full transition-width duration-200`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Image Section */}
            <figure className="w-[272px] md:w-[400px] h-[300px] overflow-hidden relative">
              <motion.div
                className="lamp-gradient absolute inset-0 top-12 md:inset-0 md:top-0 opacity-90 z-2"
                initial={{ opacity: 0 }}
                animate={{
                  opacity,
                }}
                transition={{ duration: 4, ease: "easeInOut" }}
              >
                <AnimatedBackground
                  backgroundType={backgroundType}
                  solidColor={solidColor}
                  gradientColors={gradientColors}
                  animationDuration={5}
                  animationStyle="wave"
                  animationAngle={135}
                  className="w-full h-full"
                />
              </motion.div>

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
                <div className="font-caveat text-2xl md:text-[32px] text-text-secondary">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={text}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      style={{ display: "block" }}
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
