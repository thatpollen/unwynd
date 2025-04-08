/*
import NextImage from "next/image";
import Container from "../container/container";
import { useTranslations } from "next-intl";

export default function Gallery() {
  const t = useTranslations("gallery");

  return (
    <section className="w-full py-24 px-2">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="self-auto md:self-end w-full md:w-1/2 flex flex-col gap-2.5">
            <span className="text-H5 md:text-[28px] lg:text-H3 font-medium">
              {t("heading")}
            </span>
            <p className="text-base text-text-secondary">{t("subHeading")}</p>
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
*/
"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";
import Container from "../container/container";
import { useTranslations } from "next-intl";

export default function Gallery() {
  const t = useTranslations("gallery");

  const [scales, setScales] = useState<Record<number, number>>({});

  useEffect(() => {
    const images = document.querySelectorAll(".gallery-img");

    const observer = new IntersectionObserver(
      (entries) => {
        setScales((prev) => {
          const newState = { ...prev };

          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute("data-index"));
            const visibility = Math.min(
              Math.max(entry.intersectionRatio, 0),
              1
            );
            newState[index] = 1 + visibility * 0.3; // Scale between 1 and 1.02
          });
          return newState;
        });
      },
      {
        rootMargin: "100% 0px -30% 0px",
        threshold: Array.from({ length: 31 }, (_, i) => i * 0.0333),
      }
    );

    images.forEach((img) => observer.observe(img));

    return () => images.forEach((img) => observer.unobserve(img));
  }, []);

  return (
    <section className="w-full py-24 px-2">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="self-auto md:self-end w-full md:w-1/2 flex flex-col gap-2.5 px-4">
            <span className="text-H5 md:text-[28px] lg:text-H3 font-medium">
              {t("heading")}
            </span>
            <p className="text-base text-text-secondary">{t("subHeading")}</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <figure
                data-index="0"
                className="group w-full aspect-3/4 rounded-2xl overflow-hidden gallery-img transition-transform duration-300"
              >
                <NextImage
                  src="/images/gallery-img-1.avif"
                  width={550}
                  height={660}
                  alt="gallery-1"
                  className="max-w-full w-full h-full object-cover"
                  style={{
                    transform: `scale(${scales[0] || 1})`,
                    transformOrigin: "30% 80%",
                  }}
                />
              </figure>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <figure
                data-index="1"
                className="group w-full h-[550px] aspect-square rounded-2xl overflow-hidden gallery-img transition-transform duration-300"
              >
                <NextImage
                  src="/images/gallery-img-2.avif"
                  width={550}
                  height={550}
                  alt="gallery-2"
                  className="max-w-full w-full h-full object-cover"
                  style={{
                    transform: `scale(${scales[1] || 1})`,
                    transformOrigin: "5% 90%",
                  }}
                />
              </figure>
              <figure
                data-index="2"
                className="group h-[550px] rounded-2xl aspect-square overflow-hidden gallery-img transition-transform duration-300"
              >
                <NextImage
                  src="/images/gallery-img-3.avif"
                  width={550}
                  height={550}
                  alt="gallery-3"
                  className="max-w-full w-full h-full object-cover object-bottom"
                  style={{
                    transform: `scale(${scales[2] || 1})`,
                    transformOrigin: "50% 100%",
                  }}
                />
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
