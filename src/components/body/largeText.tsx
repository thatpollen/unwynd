"use client";

import Container from "../container/container";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap, ScrollTrigger } from "gsap/all";

export default function LargeText() {
  const elementsToSplitRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (elementsToSplitRef.current) {
      const splitTypes = elementsToSplitRef.current;

      const text = new SplitType(splitTypes, { types: "words" });

      gsap.from(text.words, {
        scrollTrigger: {
          trigger: splitTypes,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 2,
          markers: false,
        },
        opacity: 0.24,
        stagger: 0.1,
        duration: 0.4,
      });
    }

    return;
  }, []);

  return (
    <section className="w-full py-32 px-2">
      <Container>
        <div>
          <p
            className="text-H3 lg:text-H2 leading-[1.1em] font-light text-text-primary text-center whitespace-pre-wrap"
            ref={elementsToSplitRef}
          >
            Unwynd: the ultimate [] meditation companion that elevates your
            practice to new heights. Choose from a spectrum of light [] colors
            to match your mood, while selecting from a variety of serene []
            sounds to deepen your focus. Let your [] breath be guided by a
            pulsating light that reflects your custom breathing patterns or
            follow guided meditations. Let the Unwynd lamp guide your journey to
            inner [] peace - one breath at a time.
          </p>
        </div>
      </Container>
    </section>
  );
}
