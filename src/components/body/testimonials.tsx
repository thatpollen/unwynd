"use client";

import Container from "../container/container";
import NextImage from "next/image";
import { Vector, Graphic } from "../assets/icons";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/reusable/carousel";

interface TestimonialsProps {
  title?: string;
  description?: string;
  author?: string;
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 810);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  // For desktop
  const splitTestimonials = (arr: TestimonialsProps[], chunks: number) => {
    const perChunk = Math.ceil(arr.length / chunks);
    return Array.from({ length: chunks }, (_, i) =>
      arr.slice(i * perChunk, i * perChunk + perChunk)
    );
  };

  const [leftCol, middleCol, rightCol] = splitTestimonials(testimonials, 3);

  return (
    <section className="w-full px-2">
      <div className="rounded-2xl bg-background-tertiary pt-50 pb-12">
        <div className="flex flex-col justify-center gap-12 flex-nowrap">
          <div className="px-4">
            <Container>
              <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-0 w-full p-4">
                <div className="flex flex-col gap-4">
                  <h2 className="text-heading-4 md:text-heading-3 lg:text-[42px] font-medium text-center md:text-left">
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
                <div className="testimonials_wrapper h-auto md:h-[1024px] overflow-visible md:overflow-hidden">
                  {isMobile ? (
                    <div className="relative">
                      <Carousel opts={{ loop: true, align: "start" }}>
                        <CarouselContent>
                          {testimonials.map((testimonial, index) => (
                            <CarouselItem
                              className="basis-[calc(100%-10%)]"
                              key={`testimonial-${index}`}
                            >
                              <Testimonial testimonial={testimonial} />
                            </CarouselItem>
                          ))}
                        </CarouselContent>

                        {/* Pagination dots */}
                        <PaginationDots />
                      </Carousel>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center gap-2 flex-nowrap">
                      <div className="w-1/2 lg:w-[33.33%] hidden md:block testimonials_column-left relative">
                        <div className="flex flex-col items-center gap-2">
                          {leftCol.map((testimonial, index) => (
                            <Testimonial
                              testimonial={testimonial}
                              key={`left-${index}`}
                            />
                          ))}
                        </div>

                        <div className="absolute top-2 translate-y-full flex flex-col items-center gap-2">
                          {leftCol.map((testimonial, index) => (
                            <Testimonial
                              testimonial={testimonial}
                              key={`left-${index}`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="w-1/2 lg:w-[33.33%] hidden md:block testimonials_column-middle relative">
                        <div className="flex flex-col items-center gap-2">
                          {middleCol.map((testimonial, index) => (
                            <Testimonial
                              testimonial={testimonial}
                              key={`middle-${index}`}
                            />
                          ))}
                        </div>

                        <div className="absolute bottom-2 -translate-y-full flex flex-col items-center gap-2">
                          {middleCol.map((testimonial, index) => (
                            <Testimonial
                              testimonial={testimonial}
                              key={`middle-${index}`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="w-[33.33%] hidden lg:block testimonials_column-right relative">
                        <div className="flex flex-col items-center gap-2">
                          {rightCol.map((testimonial, index) => (
                            <Testimonial
                              testimonial={testimonial}
                              key={`right-${index}`}
                            />
                          ))}
                        </div>

                        <div className="absolute top-2 translate-y-full flex flex-col items-center gap-2">
                          {rightCol.map((testimonial, index) => (
                            <Testimonial
                              testimonial={testimonial}
                              key={`right-${index}`}
                            />
                          ))}
                        </div>
                      </div>
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

type TestimonialProps = {
  testimonial: TestimonialsProps;
};

function Testimonial(props: TestimonialProps) {
  const { testimonial } = props;

  return (
    <div className="testimonial w-full h-full md:w-auto md:h-auto bg-background-primary rounded-2xl hover:bg-background-secondary transition-all duration-300 ease-in-out">
      <div className="flex flex-col items-start gap-6 px-6 py-8">
        <span className="w-8 h-8">
          <Graphic />
        </span>
        <div className="w-full flex flex-col gap-2">
          <h6 className="text-heading-6 font-medium">{testimonial?.title}</h6>
          <p className="text-sm text-text-secondary">
            {testimonial?.description}
          </p>
        </div>
        <span className="text-base text-text-primary font-medium tracking-[-0.03em]">
          {testimonial?.author}
        </span>
      </div>
    </div>
  );
}

function PaginationDots() {
  const { api } = useCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    setScrollSnaps(api.scrollSnapList());
    api.on("select", onSelect);
    api.on("reInit", () => setScrollSnaps(api.scrollSnapList()));

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="flex justify-center mt-4 gap-2">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={`h-2 w-2 rounded-full p-0 transition-all cursor-pointer ${
            index === selectedIndex ? "bg-neutral-800" : "bg-neutral-300"
          }`}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  );
}
