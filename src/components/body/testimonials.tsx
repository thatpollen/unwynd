"use client";

import Container from "../container/container";
import NextImage from "next/image";
import { Vector, Graphic } from "../assets/icons";
import { useState, useEffect } from "react";
import Ticker from "framer-motion-ticker";
import { motion } from "framer-motion";
import { translateTexts } from "@/lib/utils/translate";
import { useLanguageStore } from "@/lib/hooks/useLanguageStore";

interface TestimonialsProps {
  title?: string;
  description?: string;
  author?: string;
}

const testimonials: TestimonialsProps[] = [
  {
    title: "The versatility of this meditation lamp is unparalleled",
    description:
      "From the calming pulsating light for breathing exercises to the vast selection of nature sounds and meditation music, it's an all-in-one relaxation tool",
    author: "Charlotte L.",
  },
  {
    title: "It guides my breathing effortlessly",
    description:
      "As someone who struggles with focus during meditation, the pulsating light feature of this lamp has been a game-changer. It guides my breathing effortlessly, allowing for deeper relaxation and mindfulness",
    author: "Daniel K.",
  },
  {
    title: "I love how seamlessly this lamp integrates into my daily routine",
    description:
      "Whether I need a moment of tranquility at work or a soothing ambiance for bedtime meditation, its dynamic lighting and sound options always cater to my needs",
    author: "Glen S.",
  },
  {
    title: "Discreet way to de-stress",
    description:
      "Working in a busy open space office, I needed a discreet way to de-stress without disturbing my colleagues. This lamp's silent mode, combined with its elegant design, allows me to practice mindfulness without drawing attention",
    author: "Max D.",
  },
  {
    title: "Aesthetic lamp",
    description:
      "The wooden design of this aesthetic lamp brings a touch of sophistication to any room. It effortlessly transitions from a meditation aid to a stylish table lamp, enhancing both my space and my well-being",
    author: "Julia R.",
  },
  {
    title: "Controlling this lamp is a breeze",
    description:
      "Controlling this lamp is a breeze, whether through the companion app or the buttons on the lamp itself. It's the perfect blend of modern convenience and timeless relaxation",
    author: "Alex S.",
  },
  {
    title: "I love how easy it is to customize",
    description:
      "I love how easy it is to customize my meditation sessions with this lamp. With just a few taps on the app, I can create the perfect environment for deep relaxation and introspection",
    author: "Paula K.",
  },
  {
    title: "The option for direct control on the lamp is irreplaceable",
    description:
      "As someone who values unplugging from technology, the option for direct control on the lamp is irreplaceable. It allows me to enjoy a digital detox while still benefiting from the lamp's calming features",
    author: "Felix S.",
  },
  {
    title: "I appreciate the simplicity and effectiveness of this lamp",
    description:
      "As a beginner to meditation, I appreciate the simplicity and effectiveness of this lamp. It guides me through breathing exercises with ease, making it accessible for anyone looking to start their mindfulness journey",
    author: "Peter J.",
  },
];

export default function Testimonials() {
  const [columns, setColumns] = useState(3);
  const { language } = useLanguageStore();
  const [translatedTestimonials, setTranslatedTestimonials] =
    useState<TestimonialsProps[]>(testimonials);
  const [headingText, setHeadingText] = useState<string>("Our testimonials");
  const [subHeadingText, setSubHeadingText] = useState(
    "Happy customers that enjoy our lamp"
  );

  useEffect(() => {
    async function fetchTranslations() {
      const titles = testimonials
        .map((t) => t.title)
        .filter((title): title is string => title !== undefined);
      const descriptions = testimonials
        .map((t) => t.description)
        .filter(
          (description): description is string => description !== undefined
        );

      const [translatedHeading, translatedSubHeading] = await translateTexts(
        ["Our testimonials", "Happy customers that enjoy our lamp"],
        language
      );

      const translatedTitles = await translateTexts(titles, language);
      const translatedDescriptions = await translateTexts(
        descriptions,
        language
      );

      const updatedTestimonials = testimonials.map((t, index) => ({
        title: translatedTitles[index],
        description: translatedDescriptions[index],
        author: t.author,
      }));

      setHeadingText(translatedHeading);
      setSubHeadingText(translatedSubHeading);
      setTranslatedTestimonials(updatedTestimonials);
    }

    fetchTranslations();
  }, [language]);

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

  const duplicatedTestimonials = [
    ...translatedTestimonials,
    ...translatedTestimonials,
  ];

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
      <div className="rounded-2xl bg-background-tertiary pt-50 pb-12 px-4">
        <Container>
          <div className="flex flex-col justify-center items-center gap-12 flex-nowrap">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-0 w-full p-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-H4 md:text-H3 lg:text-[42px] font-medium text-center md:text-left">
                  {headingText}
                </h2>
                <p className="text-base text-text-secondary text-center md:text-left">
                  {subHeadingText}
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
            <div className="p-4 w-full">
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
                    {translatedTestimonials.map((testimonial, index) => (
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
        </Container>
      </div>
    </section>
  );
}
