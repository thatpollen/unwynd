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

  /*
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setSelectedIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0.5, // Adjust as needed
      }
    );

    // Store current refs in a variable to use in cleanup
    const currentRefs = cardRefs.current;

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isMobile]);
*/

  useEffect(() => {
    if (!isMobile) return;

    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        const scrollDown = window.scrollY > lastScrollY;
        lastScrollY = window.scrollY;

        // Filter intersecting entries
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          const sorted = visibleEntries.sort((a, b) => {
            const aIndex = Number(a.target.getAttribute("data-index"));
            const bIndex = Number(b.target.getAttribute("data-index"));
            return scrollDown ? aIndex - bIndex : bIndex - aIndex;
          });

          const firstVisibleIndex = Number(
            sorted[0].target.getAttribute("data-index")
          );
          setSelectedIndex(firstVisibleIndex);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0.5,
      }
    );

    const currentRefs = cardRefs.current;

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
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
            <h2 className="text-H4 md:text-H3 lg:text-[42px] font-medium text-center">
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
                <h6 className="text-H6 font-medium">{advantage?.title}</h6>
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
