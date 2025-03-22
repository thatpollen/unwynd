"use client";

import NextImage from "next/image";
import AnimatedBackground from "../assets/animation/AnimatedBackground";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { translateTexts } from "@/lib/utils/translate";
import { useLanguageStore } from "@/lib/hooks/useLanguageStore";

export default function Hero() {
  const { language } = useLanguageStore();

  // Translation
  const [heading, setHeading] = useState("The Breathing Lamp");
  const [subtext, setSubtext] = useState(
    "Whether you practice breathwork, mindfulness, or just need calm moments, this lamp creates the perfect environment."
  );

  // Breath in and out fade in out
  const [text, setText] = useState("Breath in");

  useEffect(() => {
    async function fetchTranslation() {
      const texts = [
        "The Breathing Lamp",
        "Whether you practice breathwork, mindfulness, or just need calm moments, this lamp creates the perfect environment.",
        "Breath in",
        "Breath out",
      ];

      const [
        translatedHeading,
        translatedSubtext,
        translatedBreathIn,
        translatedBreathOut,
      ] = await translateTexts(texts, language);

      setHeading(translatedHeading);
      setSubtext(translatedSubtext);

      const sequence = [translatedBreathIn, translatedBreathOut];
      let index = 0;
      setText(sequence[index]); // Set initial value

      const interval = setInterval(() => {
        index = (index + 1) % sequence.length;
        setText(sequence[index]);
      }, 4000);

      return () => clearInterval(interval);
    }

    fetchTranslation();
  }, [language]);

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
      <div className="inner-full-width bg-gray-100 rounded-2xl h-dvh flex flex-col justify-center items-center overflow-hidden">
        <div className="h-[56vh] flex flex-col justify-end items-center gap-6 relative z-1">
          <h1 className="text-H2 md:text-[56px] lg:text-[64px] text-center font-medium bg-[linear-gradient(to_bottom_right,#1F3FEA,#671FEA,#EA1FC9,#EA1F5E,#EAAD1F,#AAEA1F)] bg-clip-text text-transparent">
            Unwynd
            <br />
            {heading}
          </h1>
          <p className="max-w-[580px] mx-auto text-base text-text-secondary text-center">
            {subtext}
          </p>
        </div>

        <div className="grow flex flex-col justify-end w-full h-[44vh] relative">
          <div className="flex flex-col justify-end items-center gap-2.5 relative h-[400px]">
            {/* Background Animation */}
            <AnimatedBackground
              backgroundType={backgroundType}
              solidColor={solidColor} // Orange solid color
              gradientColors={gradientColors}
              animationDuration={3}
              animationStyle="wave"
              className="lamp-bg-gradient absolute inset-0"
            />

            {/* Color Selection */}
            <div className="color-selection absolute bottom-10 flex justify-center items-center gap-2 p-2 bg-white rounded-full border border-stroke-opacity12 backdrop-blur-[2px] z-3">
              {/* Gradient Color Option */}
              <div
                className="rainbow w-8 h-8 flex justify-center items-center cursor-pointer rounded-full border border-stroke-opacity12 transition-opacity duration-200 hover:bg-[linear-gradient(to_bottom_right,rgba(31,63,234,0.08),rgba(103,31,234,0.08),rgba(234,31,201,0.08),rgba(234,31,94,0.08),rgba(234,173,31,0.08),rgba(170,234,31,0.08))] group"
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
                <div className="color w-4 h-4 rounded-full bg-[linear-gradient(to_bottom_right,#1F3FEA,#671FEA,#EA1FC9,#EA1F5E,#EAAD1F,#AAEA1F)] group-hover:scale-[1.06]"></div>
              </div>

              {/* Solid Color Option */}
              <div
                className="solid w-8 h-8 flex justify-center items-center cursor-pointer rounded-full border border-stroke-opacity12 transition-opacity duration-200 hover:bg-[rgba(255,113,0,0.08)] group"
                onClick={() => {
                  setBackgroundType("solid");
                  setSolidColor("#FF7100");
                }}
              >
                <div className="color w-4 h-4 rounded-full bg-brand-orange group-hover:scale-[1.06]"></div>
              </div>
              <div
                className="solid w-8 h-8 flex justify-center items-center cursor-pointer rounded-full border border-stroke-opacity12 transition-opacity duration-200 hover:bg-[rgba(170,234,31,0.08)] group"
                onClick={() => {
                  setBackgroundType("solid");
                  setSolidColor("#AAEA1F");
                }}
              >
                <div className="color w-4 h-4 rounded-full bg-[#AAEA1F] group-hover:scale-[1.06]"></div>
              </div>
              <div
                className="solid w-8 h-8 flex justify-center items-center cursor-pointer rounded-full border border-stroke-opacity12 transition-opacity duration-200 hover:bg-[rgba(37,99,235,0.08)] group"
                onClick={() => {
                  setBackgroundType("solid");
                  setSolidColor("#2563EB");
                }}
              >
                <div className="color w-4 h-4 rounded-full bg-brand-hover group-hover:scale-[1.06]"></div>
              </div>
              <div
                className="solid w-8 h-8 flex justify-center items-center cursor-pointer rounded-full border border-stroke-opacity12 transition-opacity duration-200 hover:bg-[rgba(255,0,238,0.08)] group"
                onClick={() => {
                  setBackgroundType("solid");
                  setSolidColor("#FF00EE");
                }}
              >
                <div className="color w-4 h-4 rounded-full bg-brand-pink group-hover:scale-[1.06]"></div>
              </div>
            </div>

            {/* Image Section */}
            <figure className="w-[400px] h-[300px] overflow-hidden relative">
              {/* <div className="lamp-gradient absolute inset-0 opacity-80 z-2"></div> */}
              <div className="lamp-gradient absolute inset-0 opacity-80 z-2">
                <AnimatedBackground
                  backgroundType={backgroundType}
                  solidColor={solidColor}
                  gradientColors={gradientColors}
                  animationDuration={3}
                  animationStyle="wave"
                  animationAngle={135}
                  className="w-full h-full"
                />
              </div>
              <figure className="absolute bottom-[-234px] aspect-auto">
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
                <div className="text-base text-text-secondary">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={text} // Re-mounts when text changes to trigger animation
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth fade effect
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
