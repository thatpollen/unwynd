"use client";

import NextImage from "next/image";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../reusable/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useRef } from "react";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface CarouselItemProps {
  id?: number;
  title?: string;
  subtitle?: string;
  description?: string[];
  image?: string;
  titleColor?: string;
  subtitleColor?: string;
}

export default function Features() {
  const t = useTranslations("features");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [scrollingIds, setScrollingIds] = useState<{ [key: number]: boolean }>(
    {}
  );

  let lastScrollTop = 0;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>, id: number) => {
    const target = e.target as HTMLDivElement;
    const scrollTop = target.scrollTop;

    if (scrollTop > lastScrollTop) {
      setScrollingIds((prev) => ({ ...prev, [id]: false }));
    } else {
      setScrollingIds((prev) => ({ ...prev, [id]: true }));
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);

    if (autoplayPlugin.current) {
      if (expandedId === id) {
        autoplayPlugin.current.play();
      } else {
        autoplayPlugin.current.stop();
      }
    }
  };

  const carouselItems: CarouselItemProps[] = [
    {
      id: 1,
      title: t("featureOne.title"),
      subtitle: t("featureOne.subtitle"),
      description: t.raw("featureOne.description"),
      image: "/images/meditation-img-1.avif",
      titleColor: "text-text-inverted-secondary",
      subtitleColor: "text-text-inverted-primary",
    },
    {
      id: 2,
      title: t("featureTwo.title"),
      subtitle: t("featureTwo.subtitle"),
      description: t.raw("featureTwo.description"),
      image: "/images/meditation-img-2.avif",
      titleColor: "text-text-secondary",
      subtitleColor: "text-text-primary",
    },
    {
      id: 3,
      title: t("featureThree.title"),
      subtitle: t("featureThree.subtitle"),
      description: t.raw("featureThree.description"),
      image: "/images/meditation-img-3.avif",
      titleColor: "text-text-inverted-secondary",
      subtitleColor: "text-text-inverted-primary",
    },
    {
      id: 4,
      title: t("featureFour.title"),
      subtitle: t("featureFour.subtitle"),
      description: t.raw("featureFour.description"),
      image: "/images/meditation-img-4.avif",
      titleColor: "text-text-secondary",
      subtitleColor: "text-text-primary",
    },
    {
      id: 5,
      title: t("featureFive.title"),
      subtitle: t("featureFive.subtitle"),
      description: t.raw("featureFive.description"),
      image: "/images/meditation-img-5.avif",
      titleColor: "text-text-inverted-secondary",
      subtitleColor: "text-text-inverted-primary",
    },
    {
      id: 6,
      title: t("featureSix.title"),
      subtitle: t("featureSix.subtitle"),
      description: t.raw("featureSix.description"),
      image: "/images/meditation-img-6.avif",
      titleColor: "text-text-secondary",
      subtitleColor: "text-text-primary",
    },
    {
      id: 7,
      title: t("featureSeven.title"),
      subtitle: t("featureSeven.subtitle"),
      description: t.raw("featureSeven.description"),
      image: "/images/meditation-img-7.avif",
      titleColor: "text-text-secondary",
      subtitleColor: "text-text-primary",
    },
    {
      id: 8,
      title: t("featureEight.title"),
      subtitle: t("featureEight.subtitle"),
      description: t.raw("featureEight.description"),
      image: "/images/meditation-img-8.avif",
      titleColor: "text-text-secondary",
      subtitleColor: "text-text-primary",
    },
    // {
    //   id: 9,
    //   title: t("featureNine.title"),
    //   subtitle: t("featureNine.subtitle"),
    //   description: t.raw("featureNine.description"),
    //   image: "/images/meditation-img-9.avif",
    //   titleColor: "text-text-secondary",
    //   subtitleColor: "text-text-primary",
    // },
    {
      id: 9,
      title: t("featureTen.title"),
      subtitle: t("featureTen.subtitle"),
      description: t.raw("featureTen.description"),
      image: "/images/meditation-img-10.avif",
      titleColor: "text-text-secondary",
      subtitleColor: "text-text-primary",
    },
  ];

  return (
    <section id="features" className="w-full">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full h-[600px]">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent>
              {carouselItems?.map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                  <CarouselItem
                    key={item?.id}
                    className="basis-[calc(100%-10%)] md:basis-[calc(50%-5%)] lg:basis-auto"
                    // onClick={() => {
                    //   if (expandedId !== item.id) toggleExpand(item.id ?? -1);
                    // }}
                    onClick={() => toggleExpand(item.id ?? -1)}
                  >
                    <motion.figure
                      className="group w-full lg:w-auto h-[524px] aspect-3/4 rounded-2xl overflow-hidden relative cursor-pointer"
                      initial={{
                        border: "1px solid #00000000",
                      }}
                      animate={{
                        border: isExpanded
                          ? "1px solid rgba(0, 0, 0, 0.12)"
                          : "1px solid #00000000",
                      }}
                      transition={{ duration: 0 }}
                    >
                      <motion.div
                        initial={{
                          backgroundColor: "#00000000",
                        }}
                        animate={{
                          backgroundColor: isExpanded ? "#f5f5f5" : "#00000000",
                        }}
                        transition={{ duration: 0 }}
                        className="absolute w-full h-full inset-0 z-2 transition-all rounded-2xl duration-300"
                      >
                        <div
                          className="w-full h-full overflow-auto px-8 pt-8 pb-16 flex flex-col gap-2.5"
                          // onScroll={(e) => handleScroll(e, item.id ?? -1)}
                          onScroll={(e) => handleScroll(e, item.id ?? -1)}
                        >
                          <motion.span
                            className={`text-sm ${
                              isExpanded
                                ? "text-text-primary"
                                : item?.titleColor
                            }`}
                          >
                            {item?.title}
                          </motion.span>
                          <motion.h5
                            className={`text-H5 ${
                              isExpanded
                                ? "text-text-primary"
                                : item?.subtitleColor
                            }`}
                          >
                            {item?.subtitle}
                          </motion.h5>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: isExpanded ? 1 : 0,
                            }}
                            transition={{ duration: 0 }}
                            className={`transition-all duration-300 easeInOut ${
                              isExpanded ? "block" : "hidden"
                            }`}
                          >
                            {item.description?.map((text, index) => (
                              <p
                                key={index}
                                className="text-sm mt-2 text-text-secondary"
                              >
                                {text}
                              </p>
                            ))}
                          </motion.div>
                        </div>
                      </motion.div>
                      {!isExpanded && (
                        <NextImage
                          src={`${item?.image}`}
                          alt="features-img"
                          width={384}
                          height={520}
                          className="max-w-full w-full h-full object-cover bg-neutral-100"
                          priority
                        />
                      )}
                      <motion.div
                        className="icon w-11 h-11 absolute right-5 bottom-5 z-2 flex justify-center items-center rounded-full bg-surface-inverted-primary text-text-inverted-primary group-hover:bg-brand-orange transition-colors duration-200"
                        // onClick={() => {
                        //   toggleExpand(item.id ?? -1, true);
                        // }}
                        // animate={{
                        //   opacity:
                        //     scrollingIds[item.id ?? -1] === false ? 0 : 1,
                        //   y: scrollingIds[item.id ?? -1] === false ? 10 : 0,
                        // }}
                        // transition={{ duration: 0.3, ease: "easeInOut" }}

                        animate={{
                          opacity:
                            scrollingIds[item.id ?? -1] === false ? 0 : 1, // Hide on scroll down, show on scroll up
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Plus
                          size={24}
                          className={`${
                            isExpanded ? "rotate-45" : "rotate-0"
                          } transition-all duration-200`}
                        />
                      </motion.div>
                    </motion.figure>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="hidden absolute right-6 -bottom-18 md:flex justify-center items-center gap-2.5">
              <CarouselPrevious className="text-text-inverted-primary bg-surface-inverted-primary hover:bg-brand-orange cursor-pointer" />
              <CarouselNext className="text-text-inverted-primary bg-surface-inverted-primary hover:bg-brand-orange cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent className="absolute inset-0 flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle className="text-sm text-text-secondary">
              {selectedItem?.title}
            </DialogTitle>
            <DialogTitle className="text-2xl font-semibold text-text-primary">
              {selectedItem?.subtitle}
            </DialogTitle>
          </DialogHeader>
          <div className="w-full h-px bg-surface-tertiary"></div>
          <DialogFooter>
            {selectedItem?.description &&
              selectedItem.description.map((p, index) => (
                <DialogDescription key={index} className="mb-2 text-base">
                  {p}
                </DialogDescription>
              ))}
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </section>
  );
}
