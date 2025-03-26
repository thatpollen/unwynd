"use client";

import Container from "../container/container";
import NextImage from "next/image";
import { Vector, Graphic } from "../assets/icons";
import { useState, useEffect } from "react";
import Ticker from "framer-motion-ticker";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface TestimonialsProps {
  title?: string;
  description?: string;
  author?: string;
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const [columns, setColumns] = useState(3);

  const testimonials: TestimonialsProps[] = [
    {
      title: t("testimonialOne.title"),
      description: t("testimonialOne.description"),
      author: "Charlotte L.",
    },
    {
      title: t("testimonialTwo.title"),
      description: t("testimonialTwo.description"),
      author: "Daniel K.",
    },
    {
      title: t("testimonialThree.title"),
      description: t("testimonialThree.description"),
      author: "Glen S.",
    },
    {
      title: t("testimonialFour.title"),
      description: t("testimonialFour.description"),
      author: "Max D.",
    },
    {
      title: t("testimonialFive.title"),
      description: t("testimonialFive.description"),
      author: "Julia R.",
    },
    {
      title: t("testimonialSix.title"),
      description: t("testimonialSix.description"),
      author: "Alex S.",
    },
    {
      title: t("testimonialSeven.title"),
      description: t("testimonialSeven.description"),
      author: "Paula K.",
    },
    {
      title: t("testimonialEight.title"),
      description: t("testimonialEight.description"),
      author: "Felix S.",
    },
    {
      title: t("testimonialNine.title"),
      description: t("testimonialNine.description"),
      author: "Peter J.",
    },
  ];

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 810) {
        setColumns(1);
      } else if (window.innerWidth < 1200) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // **Framer Motion Infinite Scroll Variants**
  const verticalTicker = (direction: "up" | "down") => ({
    animate: {
      y: direction === "up" ? ["0%", "-100%"] : ["-50%", "0%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 400,
        ease: "linear",
      },
    },
  });

  return (
    <section className="w-full px-2">
      <div className="rounded-2xl bg-background-tertiary pt-50 pb-12">
        <div className="flex flex-col justify-center gap-12 flex-nowrap">
          <div className="px-4">
            <Container>
              <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-0 w-full p-4">
                <div className="flex flex-col gap-4">
                  <h2 className="text-H4 md:text-H3 lg:text-[42px] font-medium text-center md:text-left">
                    {t("heading")}
                  </h2>
                  <p className="text-base text-text-secondary text-center md:text-left">
                    {t("subHeading")}
                  </p>
                </div>
                <div className="w-[214px] h-[162px] relative">
                  <div className="w-12 h-12 aspect-square rounded-full absolute top-5 left-0 overflow-hidden">
                    <NextImage
                      src="/images/avatars/avatar-img-1.avif"
                      alt="avatar-img"
                      width={48}
                      height={48}
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="w-17 h-17 aspect-square rounded-full absolute top-0 right-7 overflow-hidden">
                    <NextImage
                      src="/images/avatars/avatar-img-2.avif"
                      alt="avatar-img"
                      width={68}
                      height={68}
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="w-20 h-20 aspect-square rounded-full absolute bottom-0 left-[38px] overflow-hidden">
                    <span className="w-full h-full flex justify-center items-center bg-black">
                      <Vector />
                    </span>
                  </div>
                  <div className="w-14 h-14 aspect-square rounded-full absolute bottom-1 right-0 overflow-hidden">
                    <NextImage
                      src="/images/avatars/avatar-img-4.avif"
                      alt="avatar-img"
                      width={56}
                      height={56}
                      className="w-auto h-auto"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div className="px-4">
            <div className="w-full max-w-full md:max-w-[1200px] mx-auto">
              <div className="px-0 md:p-4 w-full">
                <div className="testimonials_wrapper flex justify-center items-center gap-2 flex-nowrap h-auto md:h-[1024px] overscroll-visible md:overflow-hidden">
                  {/* <div className="flex flex-col items-center gap-2">
                  {testimonials.map((testimonial, index) => (
                    <div
                      className="bg-background-primary overflow-hidden rounded-2xl hover:bg-background-secondary transition-all duration-300 ease-in-out"
                      key={index}
                    >
                      <div className="flex flex-col items-start gap-6 px-6 py-8">
                        <span className="w-8 h-8">
                          <Graphic />
                        </span>
                        <div className="w-full flex flex-col gap-2">
                          <h6 className="text-H6 font-medium">
                            {testimonial?.title}
                          </h6>
                          <p className="text-sm text-text-secondary">
                            {testimonial?.description}
                          </p>
                        </div>
                        <span className="text-base text-text-primary font-medium tracking-[-0.03em]">
                          {testimonial?.author}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden md:flex flex-col items-center gap-2">
                  {testimonials.map((testimonial, index) => (
                    <div
                      className="bg-background-primary overflow-hidden rounded-2xl hover:bg-background-secondary transition-all duration-300 ease-in-out"
                      key={index}
                    >
                      <div className="flex flex-col items-start gap-6 px-6 py-8">
                        <span className="w-8 h-8">
                          <Graphic />
                        </span>
                        <div className="w-full flex flex-col gap-2">
                          <h6 className="text-H6 font-medium">
                            {testimonial?.title}
                          </h6>
                          <p className="text-sm text-text-secondary">
                            {testimonial?.description}
                          </p>
                        </div>
                        <span className="text-base text-text-primary font-medium tracking-[-0.03em]">
                          {testimonial?.author}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden lg:flex flex-col items-center gap-2">
                  {testimonials.map((testimonial, index) => (
                    <div
                      className="bg-background-primary overflow-hidden rounded-2xl hover:bg-background-secondary transition-all duration-300 ease-in-out"
                      key={index}
                    >
                      <div className="flex flex-col items-start gap-6 px-6 py-8">
                        <span className="w-8 h-8">
                          <Graphic />
                        </span>
                        <div className="w-full flex flex-col gap-2">
                          <h6 className="text-H6 font-medium">
                            {testimonial?.title}
                          </h6>
                          <p className="text-sm text-text-secondary">
                            {testimonial?.description}
                          </p>
                        </div>
                        <span className="text-base text-text-primary font-medium tracking-[-0.03em]">
                          {testimonial?.author}
                        </span>
                      </div>
                    </div>
                  ))}
                </div> */}
                  {columns === 1 ? (
                    <Ticker duration={60}>
                      {testimonials.map((testimonial, index) => (
                        <div
                          className="bg-background-primary rounded-2xl hover:bg-background-secondary transition-all duration-300 ease-in-out w-[300px] ml-2"
                          key={index}
                        >
                          <div className="flex flex-col items-start gap-6 px-6 py-8">
                            <span className="w-8 h-8">
                              <Graphic />
                            </span>
                            <div className="w-full flex flex-col gap-2">
                              <h6 className="text-H6 font-medium">
                                {testimonial?.title}
                              </h6>
                              <p className="text-sm text-text-secondary">
                                {testimonial?.description}
                              </p>
                            </div>
                            <span className="text-base text-text-primary font-medium tracking-[-0.03em]">
                              {testimonial?.author}
                            </span>
                          </div>
                        </div>
                      ))}
                    </Ticker>
                  ) : (
                    <div
                      className={`grid ${
                        columns === 2 ? "grid-cols-2" : "grid-cols-3"
                      } gap-2 w-full h-full`}
                    >
                      {[...Array(columns)].map((_, colIndex) => (
                        <div
                          key={colIndex}
                          className="overscroll-visible md:overflow-hidden relative"
                        >
                          <motion.div
                            className="absolute top-0 w-full flex flex-col gap-2"
                            variants={verticalTicker(
                              colIndex === 1 ? "down" : "up"
                            )}
                            animate="animate"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {[
                              ...duplicatedTestimonials,
                              ...duplicatedTestimonials,
                            ].map((testimonial, index) => (
                              <div
                                className="bg-background-primary rounded-2xl hover:bg-background-secondary transition-all duration-300 ease-in-out"
                                key={`${colIndex}-${index}`}
                              >
                                <div className="flex flex-col items-start gap-6 px-6 py-8">
                                  <span className="w-8 h-8">
                                    <Graphic />
                                  </span>
                                  <div className="w-full flex flex-col gap-2">
                                    <h6 className="text-H6 font-medium">
                                      {testimonial?.title}
                                    </h6>
                                    <p className="text-sm text-text-secondary">
                                      {testimonial?.description}
                                    </p>
                                  </div>
                                  <span className="text-base text-text-primary font-medium tracking-[-0.03em]">
                                    {testimonial?.author}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
