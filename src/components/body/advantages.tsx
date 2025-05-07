"use client";

import {
  HandHeart,
  HeartBeat,
  Slider,
  ScanSearch,
  Wind,
  Lamp,
} from "../assets/icons";
import Container from "../container/container";
import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";

interface AdvantagesProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function Advantages() {
  const t = useTranslations("advantages");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the screen width is 840px or below
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Listen for resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);

  // Click outside to reset background
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSelectedIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isMobile) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      lastScrollY = scrollY;

      const cards = cardRefs.current;
      const viewportHeight = window.innerHeight;

      const visibleCards = cards
        .map((card, index) => {
          if (!card) return null;
          const rect = card.getBoundingClientRect();
          const isVisible =
            rect.top < viewportHeight * 0.7 &&
            rect.bottom > viewportHeight * 0.3;
          return isVisible ? { index, top: rect.top } : null;
        })
        .filter(Boolean) as { index: number; top: number }[];

      if (visibleCards.length === 0) return;

      let newIndex;

      if (direction === "down") {
        newIndex = visibleCards[0].index;
      } else {
        newIndex = visibleCards[visibleCards.length - 1].index;
      }

      setSelectedIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const advantages: AdvantagesProps[] = [
    {
      title: t("advantageOne.title"),
      description: t("advantageOne.description"),
      icon: <HandHeart />,
    },
    {
      title: t("advantageTwo.title"),
      description: t("advantageTwo.description"),
      icon: <Slider />,
    },
    {
      title: t("advantageThree.title"),
      description: t("advantageThree.description"),
      icon: <HeartBeat />,
    },
    {
      title: t("advantageFour.title"),
      description: t("advantageFour.description"),
      icon: <ScanSearch />,
    },
    {
      title: t("advantageFive.title"),
      description: t("advantageFive.description"),
      icon: <Wind />,
    },
    // {
    //   title: t("advantageSix.title"),
    //   description: t("advantageSix.description"),
    //   icon: <Pause />,
    // },
    {
      title: t("advantageSeven.title"),
      description: t("advantageSeven.description"),
      icon: <Lamp />,
    },
  ];

  return (
    <section id="advantages" className="w-full py-24 px-4">
      <Container>
        <div className="w-full flex flex-col items-center lg:items-start lg:flex-row gap-12 flex-nowrap">
          <div className="w-full lg:w-1/3 sticky top-0 lg:top-[192px] bg-white lg:bg-transparent py-4 lg:py-0">
            <h2 className="text-heading-4 md:text-heading-3 lg:text-[42px] font-medium text-center">
              <span className="hidden md:block lg:hidden">Unwynd</span>
              {t("heading")}
            </h2>
          </div>
          <div
            className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 items-stretch gap-2"
            ref={containerRef}
          >
            {advantages?.map((advantage, index) => (
              <div
                key={index}
                data-index={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`w-full flex flex-col gap-4 p-8 rounded-2xl transition-all ease-in-out duration-300
            ${
              isMobile && selectedIndex === index
                ? "bg-[linear-gradient(135deg,rgba(30,63,235,0.05),rgba(103,31,234,0.05),rgba(234,31,201,0.05),rgba(234,31,93,0.05),rgba(234,173,31,0.05),rgba(170,234,31,0.05))]"
                : "bg-background-tertiary"
            }
             ${
               !isMobile
                 ? "hover:bg-[linear-gradient(135deg,rgba(30,63,235,0.05),rgba(103,31,234,0.05),rgba(234,31,201,0.05),rgba(234,31,93,0.05),rgba(234,173,31,0.05),rgba(170,234,31,0.05))] hover:cursor-default"
                 : ""
             }
          `}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click from bubbling up
                  if (isMobile) setSelectedIndex(index);
                }}
              >
                <span>{advantage?.icon}</span>
                <h6 className="text-heading-6 font-medium">
                  {advantage?.title}
                </h6>
                <p className="text-base text-text-secondary">
                  {advantage?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
