"use client";

import OrderButton from "../assets/buttons/OrderButton";
import { NavLogo } from "../assets/icons";
import NextLink from "next/link";
import { translateTexts } from "@/lib/utils/translate";
import { useEffect, useState } from "react";
import { useLanguageStore } from "@/lib/hooks/useLanguageStore";

export default function Navbar() {
  const { language } = useLanguageStore();

  const [navItemOne, setNavItemOne] = useState("Features");
  const [navItemTwo, setNavItemTwo] = useState("3D view");
  const [navItemThree, setNavItemThree] = useState("Advantages");
  const [headingText, setHeadingText] = useState("Meditation lamp");
  const [orderNow, setOrderNow] = useState("Order now");

  useEffect(() => {
    async function fetchTranslation() {
      const texts = [
        "Features",
        "3D view",
        "Advantages",
        "Meditation lamp",
        "Order now",
      ];
      const translations = await translateTexts(texts, language);

      setNavItemOne(translations[0]);
      setNavItemTwo(translations[1]);
      setNavItemThree(translations[2]);
      setHeadingText(translations[3]);
      setOrderNow(translations[4]);
    }

    fetchTranslation();
  }, [language]);

  return (
    <nav className="w-full fixed top-4 z-10">
      <div className="max-w-5xl mx-auto w-full px-6">
        <div className="flex items-center justify-between px-4 py-3 rounded-full bg-white shadow-[0_4px_24px_2px_rgba(0,0,0,0.04)] sticky top-4 z-10">
          <div className="hidden md:flex items-center gap-12">
            <NextLink href="/">
              <span>
                <NavLogo />
              </span>
            </NextLink>
            <ul className="flex items-center gap-6">
              <li className="text-xs font-medium text-text-primary hover:text-brand-accent">
                <NextLink href="/">{navItemOne}</NextLink>
              </li>
              <li className="text-xs font-medium text-text-primary hover:text-brand-accent">
                <NextLink href="/">{navItemTwo}</NextLink>
              </li>
              <li className="text-xs font-medium text-text-primary hover:text-brand-accent">
                <NextLink href="/">{navItemThree}</NextLink>
              </li>
            </ul>
          </div>
          <div className="grow md:grow-0 flex justify-between md:justify-start items-stretch gap-8">
            <div className="flex flex-col gap-1 pl-4 md:pl-0">
              <span className="text-sm text-text-primary font-medium">
                Unwynd
              </span>
              <span className="text-xs leading-4 text-text-tertiary">
                {headingText}
              </span>
            </div>
            <div className="hidden md:block grow w-px bg-stroke-opacity16"></div>
            <OrderButton variant="primary" type="button">
              {orderNow}
            </OrderButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
