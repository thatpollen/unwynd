"use client";

import NextImage from "next/image";
import AnimatedBackground from "../assets/animation/AnimatedBackground";
import { useState } from "react";

export default function Hero() {
  const [backgroundType, setBackgroundType] = useState<"solid" | "gradient">(
    "gradient"
  );

  return (
    <section className="p-2">
      <div className="inner-full-width bg-gray-100 rounded-2xl h-dvh flex flex-col justify-center items-center overflow-hidden">
        <div className="h-[56vh] flex flex-col justify-end items-center gap-6">
          <h1 className="text-H1-display text-center font-semibold">
            <span className="text-text-tertiary">Unwynd</span>
            <br />
            The Breathing Lamp
          </h1>
          <p className="text-base text-text-secondary text-center">
            Experience the effortless serenity of meditation with Unwynd –
            elevate your practice today and discover how easy finding your calm
            can be.
          </p>
        </div>
        {/* <div className="w-full h-[44vh] flex flex-col justify-end items-center gap-2.5 relative">
          <div className="color-selection absolute bottom-10 flex justify-center items-center gap-2 p-2 bg-white rounded-full border border-stroke-opacity12 backdrop-blur-[2px] z-3">
            <div className="solid w-8 h-8 flex justify-center items-center cursor-pointer rounded-full border border-stroke-opacity12 transition-opacity duration-200 hover:bg-[rgba(255,113,0,0.08)] group">
              <div className="color w-4 h-4 rounded-full bg-brand-orange group-hover:scale-[1.06]"></div>
            </div>
            <div className="rainbow w-8 h-8 flex justify-center items-center cursor-pointer rounded-full border border-stroke-opacity12  transition-opacity duration-200 hover:bg-[linear-gradient(to_bottom_right,rgba(31,63,234,0.08),rgba(103,31,234,0.08),rgba(234,31,201,0.08),rgba(234,31,94,0.08),rgba(234,173,31,0.08),rgba(170,234,31,0.08))] group">
              <div className="color w-4 h-4 rounded-full bg-[linear-gradient(to_bottom_right,#1F3FEA,#671FEA,#EA1FC9,#EA1F5E,#EAAD1F,#AAEA1F)] group-hover:scale-[1.06]"></div>
            </div>
          </div>
          <div className="animated-background absolute inset-0"></div>
          <figure className="overflow-hidden relative">
            <div className="lamp-gradient absolute inset-0 opacity-80 z-2"></div>
            <NextImage
              src="/images/unwynd-lamp.avif"
              alt="hero-image"
              width={400}
              height={300}
              className="max-w-full"
              priority
            />
          </figure>
        </div> */}
        <div className="w-full h-[44vh] flex flex-col justify-end items-center gap-2.5 relative">
          {/* Background Animation */}
          <AnimatedBackground
            backgroundType={backgroundType}
            solidColor="#FF7100" // Orange solid color
            gradientColors={[
              "#1F3FEA",
              "#671FEA",
              "#EA1FC9",
              "#EA1F5E",
              "#EAAD1F",
              "#AAEA1F",
            ]}
            animationDuration={3}
            animationStyle="wave"
            className="absolute inset-0"
          />

          {/* Color Selection */}
          <div className="color-selection absolute bottom-10 flex justify-center items-center gap-2 p-2 bg-white rounded-full border border-stroke-opacity12 backdrop-blur-[2px] z-3">
            {/* Gradient Color Option */}
            <div
              className="rainbow w-8 h-8 flex justify-center items-center cursor-pointer rounded-full border border-stroke-opacity12 transition-opacity duration-200 hover:bg-[linear-gradient(to_bottom_right,rgba(31,63,234,0.08),rgba(103,31,234,0.08),rgba(234,31,201,0.08),rgba(234,31,94,0.08),rgba(234,173,31,0.08),rgba(170,234,31,0.08))] group"
              onClick={() => setBackgroundType("gradient")}
            >
              <div className="color w-4 h-4 rounded-full bg-[linear-gradient(to_bottom_right,#1F3FEA,#671FEA,#EA1FC9,#EA1F5E,#EAAD1F,#AAEA1F)] group-hover:scale-[1.06]"></div>
            </div>

            {/* Solid Color Option */}
            <div
              className="solid w-8 h-8 flex justify-center items-center cursor-pointer rounded-full border border-stroke-opacity12 transition-opacity duration-200 hover:bg-[rgba(255,113,0,0.08)] group"
              onClick={() => setBackgroundType("solid")}
            >
              <div className="color w-4 h-4 rounded-full bg-brand-orange group-hover:scale-[1.06]"></div>
            </div>
          </div>

          {/* Image Section */}
          <figure className="overflow-hidden relative">
            <div className="lamp-gradient absolute inset-0 opacity-80 z-2"></div>
            <NextImage
              src="/images/unwynd-lamp.avif"
              alt="hero-image"
              width={400}
              height={300}
              className="max-w-full"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
