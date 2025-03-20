"use client";

import NextImage from "next/image";
import Container from "../container/container";
import {
  useLanguageStore,
  useInitializeLanguage,
} from "@/lib/hooks/useLanguageStore";
import { useEffect, useState } from "react";
import { translateTexts } from "@/lib/utils/translate";

export default function Gallery() {
  useInitializeLanguage();
  const { language } = useLanguageStore();
  const [heading, setHeading] = useState("Serenity in Any Setting");
  const [content, setContent] = useState(
    "The Unwynd lamp adds a touch of tranquility to any space. Whether placed in a cozy corner or as a cent in the living room, its understated elegance enhan ambiance of any room, creating a serene atmosphere for med and relaxation"
  );

  useEffect(() => {
    async function fetchTranslation() {
      const texts = [
        "Serenity in Any Setting",
        "The Unwynd lamp adds a touch of tranquility to any space. Whether placed in a cozy corner or as a centerpiece in the living room, its understated elegance enhances the ambiance of any room, creating a serene atmosphere for meditation and relaxation",
      ];

      const [translatedHeading, translatedContent] = await translateTexts(
        texts,
        language
      );

      setHeading(translatedHeading);
      setContent(translatedContent);
    }

    fetchTranslation();
  }, [language]);

  return (
    <section className="w-full py-24 px-2">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="self-auto md:self-end w-full md:w-1/2 flex flex-col gap-2.5">
            <span className="text-H5 md:text-[28px] lg:text-H3 font-medium">
              {heading}
            </span>
            <p className="text-base">{content}</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <figure className="group w-full aspect-3/4 rounded-2xl overflow-hidden">
                <NextImage
                  src="/images/gallery-img-1.avif"
                  width={550}
                  height={660}
                  alt="gallery-1"
                  className="max-w-full w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </figure>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <figure className="group w-full h-[550px] aspect-square rounded-2xl overflow-hidden">
                <NextImage
                  src="/images/gallery-img-2.avif"
                  width={550}
                  height={550}
                  alt="gallery-1"
                  className="max-w-full w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </figure>
              <figure className="group h-[550px] rounded-2xl aspect-square overflow-hidden">
                <NextImage
                  src="/images/gallery-img-3.avif"
                  width={550}
                  height={550}
                  alt="gallery-1"
                  className="max-w-full w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
