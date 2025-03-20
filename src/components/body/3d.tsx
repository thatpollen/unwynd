"use client";

import { Canvas } from "@react-three/fiber";
import Lamp from "../assets/3D/lamp";
import Container from "../container/container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  useLanguageStore,
  useInitializeLanguage,
} from "@/lib/hooks/useLanguageStore";
import { translateTexts } from "@/lib/utils/translate";

export default function ThreeD() {
  useInitializeLanguage();
  const { language } = useLanguageStore();

  const [headingSpan, setHeadingSpan] = useState("Harmony in");
  const [heading, setHeading] = useState("Three Dimensions");
  const [content, setContent] = useState(
    " Crafted with meticulous attention to detail, the Unwynd lamp is more than just an illuminating presence — it's a serene sanctuary in itself. Every aspect of design has been thoughtfully considered to enhance meditation experience."
  );

  useEffect(() => {
    async function fetchTranslation() {
      const texts = [
        "Harmony in",
        "Three Dimensions",
        "Crafted with meticulous attention to detail, the Unwynd lamp is more than just an illuminating presence — it's a serene sanctuary in itself. Every aspect of the design has been thoughtfully considered to enhance the meditation experience.",
      ];

      const [translatedHeadingSpan, translatedHeading, translatedContent] =
        await translateTexts(texts, language);

      setHeadingSpan(translatedHeadingSpan);
      setHeading(translatedHeading);
      setContent(translatedContent);
    }

    fetchTranslation();
  }, [language]);

  return (
    <section className="w-full py-24">
      <Container>
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col justify-center items-center gap-2.5">
            <h1 className="text-H3 md:text-[44px] lg:text-[52px] text-center">
              <span className="text-text-tertiary">{headingSpan}</span>
              <br />
              {heading}
            </h1>
            <p className="max-w-[580px] mx-auto text-sm text-text-secondary text-center">
              {content}
            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-10">
            <div className="w-full h-[480px] md:h-[640px]">
              <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
                <Lamp />
              </Canvas>
            </div>
            <div className="w-full flex justify-center items-center relative px-6">
              <span>
                <ChevronLeft size={16} className="text-neutral-400" />
              </span>
              <div className="h-px grow bg-neutral-300"></div>
              <div className="p-2.5 text-sm text-text-inverted-primary bg-black overflow-hidden rounded-4xl border border-[rgba(255,255,255,0.1)]">
                Drag to rotate
              </div>
              <div className="h-px grow bg-neutral-300"></div>
              <span>
                <ChevronRight size={16} className="text-neutral-400" />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
