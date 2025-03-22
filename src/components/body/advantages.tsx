"use client";

import {
  HandHeart,
  HeartBeat,
  Slider,
  ScanSearch,
  Wind,
  Pause,
  Lamp,
} from "../assets/icons";
import Container from "../container/container";
import { useState, useEffect } from "react";
import { translateTexts } from "@/lib/utils/translate";
import { useLanguageStore } from "@/lib/hooks/useLanguageStore";

interface AdvantagesProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const defaultAdvantages: AdvantagesProps[] = [
  {
    title: "Improve your well-being",
    description:
      "Meditation has numerous positive effects on our well-being. It can help reduce stress and anxiety, promote relaxation, and improve focus and clarity of mind.",
    icon: <HandHeart />,
  },
  {
    title: "Easy control",
    description:
      "Effortlessly control the lamp with the companion app or opt for direct control using the buttons on the lamp for a refreshing digital detox experience.",
    icon: <Slider />,
  },
  {
    title: "How are you feeling today?",
    description:
      "Customize the lamp's light and sound to match your mood! Explore various nature sounds, binaural beats, and meditation music, or play your own music.",
    icon: <HeartBeat />,
  },
  {
    title: "Explore",
    description:
      "Find inspiration in the app’s library that is full of breathing exercises and guided meditations.",
    icon: <ScanSearch />,
  },
  {
    title: "Enter your own breathing meditation",
    description:
      "You can also enter exercises with custom breathing patterns in the app to allow for a more tailored meditation session.",
    icon: <Wind />,
  },
  {
    title: "Remember to take a break!",
    description:
      "Are you so focused on your work that you forget about everything around you? Set an alert in the app and let a warm, pulsating light gently remind you to do your meditation.",
    icon: <Pause />,
  },
  {
    title: "Enjoy a stylish table lamp",
    description:
      "The lamp, with its discrete design, may also serve as a regular table lamp and seamlessly integrates into any environment.",
    icon: <Lamp />,
  },
];

export default function Advantages() {
  const { language } = useLanguageStore();
  const [headingOne, setHeadingOne] = useState("Unwynd");
  const [headingTwo, setHeadingTwo] = useState("Advantages");
  const [advantages, setAdvantages] =
    useState<AdvantagesProps[]>(defaultAdvantages);

  // Translate text when language changes
  useEffect(() => {
    async function translateAdvantages() {
      const [translatedHeadingOne, translatedHeadingTwo] = await translateTexts(
        ["Unwynd", "Advantages"],
        language
      );

      if (language !== "en") {
        const titles = await translateTexts(
          defaultAdvantages
            .map((item) => item.title)
            .filter((title): title is string => title !== undefined),
          language
        );
        const descriptions = await translateTexts(
          defaultAdvantages
            .map((item) => item.description)
            .filter(
              (description): description is string => description !== undefined
            ),
          language
        );

        setHeadingOne(translatedHeadingOne);
        setHeadingTwo(translatedHeadingTwo);
        setAdvantages(
          defaultAdvantages.map((item, index) => ({
            ...item,
            title: titles[index],
            description: descriptions[index],
          }))
        );
      } else {
        setAdvantages(defaultAdvantages);
      }
    }

    translateAdvantages();
  }, [language]);

  return (
    <section className="w-full py-24 px-4">
      <Container>
        <div className="w-full flex flex-col items-center lg:items-start lg:flex-row gap-12 flex-nowrap">
          <div className="w-auto lg:w-1/3 relative lg:sticky lg:top-[192px]">
            <h2 className="text-H4 md:text-H3 lg:text-[42px] font-medium text-center">
              <span className="hidden md:block lg:hidden">{headingOne}</span>
              {headingTwo}
            </h2>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 items-stretch gap-2">
            {advantages?.map((advantage, index) => (
              <div
                className="w-full flex flex-col gap-4 p-8 rounded-2xl bg-background-tertiary hover:bg-[linear-gradient(135deg,rgba(30,63,235,0.05),rgba(103,31,234,0.05),rgba(234,31,201,0.05),rgba(234,31,93,0.05),#EAAD1F0D,rgba(170,234,31,0.05))] hover:cursor-default transition-all ease-in-out duration-300 "
                key={index}
              >
                <span className="">{advantage?.icon}</span>
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
