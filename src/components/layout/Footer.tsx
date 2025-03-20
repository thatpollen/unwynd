"use client";

import { ArrowUpFromDot, ChevronDown, Globe } from "lucide-react";
import SubscribeButton from "../assets/buttons/SubscribeButton";
import NextLink from "next/link";
import { AnimateButton } from "../assets/buttons/AnimateButton";
import NextImage from "next/image";
import LargeContainer from "../container/largeContainer";
import {
  useLanguageStore,
  useInitializeLanguage,
} from "@/lib/hooks/useLanguageStore";
import { useEffect, useState } from "react";
import { translateTexts } from "@/lib/utils/translate";

export default function Footer() {
  useInitializeLanguage();
  const { language, setLanguage } = useLanguageStore();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  useEffect(() => {
    setSelectedLanguage(language);
  }, [language]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setSelectedLanguage(newLang);
  };

  // Translation
  const [textSubscribe, setTextSubscribe] = useState("Subscribe to the");
  const [textNewsletter, setNewsletter] = useState("newsletter");
  const [textForm, setTextForm] = useState(
    "Sign up to receive the latest news and important announcements directly in your inbox."
  );
  const [email, setEmail] = useState("Enter your email");
  const [subscribeBtn, setSubscribeBtn] = useState("Subscribe");
  const [textSitemap, setSitemap] = useState("Sitemap");
  const [home, setHome] = useState("Home");
  const [features, setFeatures] = useState("Features");
  const [view3D, setView3D] = useState("3D view");
  const [advantages, setAdvantages] = useState("Advantages");
  const [textLegal, setLegal] = useState("Legal");
  const [terms, setTerms] = useState("Terms of Services");
  const [imprint, setImprint] = useState("Imprint");
  const [privacy, setPrivacy] = useState("Privacy Policy");
  const [declaration, setDeclaration] = useState("Declaration Community");
  const [textContact, setContact] = useState("Please contact us for support");

  useEffect(() => {
    async function fetchTranslation() {
      const texts = [
        "Subscribe to the",
        "newsletter",
        "Sign up to receive the latest news and important announcements directly in your inbox.",
        "Enter your email",
        "Subscribe",
        "Sitemap",
        "Home",
        "Features",
        "3D view",
        "Advantages",
        "Legal",
        "Terms of Services",
        "Imprint",
        "Privacy Policy",
        "Declaration Community",
        "Please contact us for support",
      ];

      const [
        translatedSubscribe,
        translatedNewsletter,
        translatedFormText,
        translatedEmail,
        translatedSubscribeBtn,
        translatedSitemap,
        translatedHome,
        translatedFeatures,
        translatedView3D,
        translatedAdvantages,
        translatedLegal,
        translatedTerms,
        translatedImprint,
        translatedPrivacy,
        translatedDeclaration,
        translatedContact,
      ] = await translateTexts(texts, language);
      setTextSubscribe(translatedSubscribe);
      setNewsletter(translatedNewsletter);
      setTextForm(translatedFormText);
      setEmail(translatedEmail);
      setSubscribeBtn(translatedSubscribeBtn);
      setSitemap(translatedSitemap);
      setHome(translatedHome);
      setFeatures(translatedFeatures);
      setView3D(translatedView3D);
      setAdvantages(translatedAdvantages);
      setLegal(translatedLegal);
      setTerms(translatedTerms);
      setImprint(translatedImprint);
      setPrivacy(translatedPrivacy);
      setDeclaration(translatedDeclaration);
      setContact(translatedContact);
    }

    fetchTranslation();
  }, [language]);

  return (
    <footer className="w-full p-2">
      <div className="flex flex-col">
        <div className="h-[200px]">
          <LargeContainer>
            <div className="relative">
              <div className="absolute z-1 top-[-128px] lg:left-[32px] left-1/2 w-fit -translate-x-1/2 lg:translate-x-0">
                <figure className="relative w-[300px] h-[405px] md:w-auto md:h-auto aspect-auto">
                  <NextImage
                    src="/images/unwynd-footer-lamp.avif"
                    alt="footer-lamp"
                    width={340}
                    height={540}
                    className="max-w-full w-auto h-auto"
                    priority
                  />
                  <div className="absolute w-[540px] max-w-[100vw] h-[150%] md:w-[720px] left-1/2 top-1/2 -translate-1/2 blur-[100px] opacity-20 -z-1 bg-[linear-gradient(to_bottom_right,rgba(90,106,255,1),rgba(212,145,226,1),rgba(232,110,84,1),rgba(255,188,109,1))]"></div>
                </figure>
              </div>
            </div>
          </LargeContainer>
        </div>

        <div className="bg-surface-inverted-primary rounded-2xl relative z-2">
          <LargeContainer>
            <div className="flex flex-col lg:flex-row gap-20 px-6 py-12 md:p-20">
              <div className="flex flex-col justify-center gap-6 w-1/1">
                <h2 className="text-H2 leading-14 tracking-[-0.04em] text-text-inverted-primary text-center md:text-left">
                  {textSubscribe}
                  <br />
                  <span className="text-transparent bg-[linear-gradient(to_bottom_right,rgb(89,106,255),rgb(211,144,225),rgb(232,109,84),rgb(255,187,108))] bg-clip-text">
                    Unwynd {textNewsletter}
                  </span>
                </h2>
                <p className="text-sm text-text-inverted-tertiary tracking-tight text-center md:text-left">
                  {textForm}
                </p>
                <form className="w-auto md:w-[525px] relative flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
                  <label className="relative w-full inline-flex items-center">
                    <input
                      className="w-full text-white placeholder:text-text-secondary rounded-full p-4 border border-border-whiteOpacity12 focus:outline-none focus:ring-1 focus:ring-brand focus:ring-offeset-1 autofill"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder={`${email}`}
                      required
                    />
                  </label>
                  <SubscribeButton
                    className="relative md:absolute md:right-2.5"
                    type="submit"
                  >
                    {subscribeBtn}
                  </SubscribeButton>
                </form>
              </div>
              <div className="flex flex-col gap-12 w-1/1">
                <div className="flex justify-start lg:justify-between gap-16 lg:gap-0">
                  <div className="flex flex-col gap-4">
                    <span className="text-xs text-text-tertiary">
                      {textSitemap}
                    </span>
                    <ul className="flex flex-col items-start gap-4 text-sm text-text-inverted-primary">
                      <li className="hover:text-brand-accent">
                        <NextLink href="/">{home}</NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/">{features}</NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/">{view3D}</NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/">{advantages}</NextLink>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="text-xs text-text-tertiary">
                      {textLegal}
                    </span>
                    <ul className="flex flex-col items-start gap-4 text-sm text-text-inverted-primary">
                      <li className="hover:text-brand-accent">
                        <NextLink href="/terms-and-conditions">
                          {terms}
                        </NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/imprint">{imprint}</NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/privacy-policy">{privacy}</NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/">{declaration}</NextLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6 md:gap-0">
                  <div className="flex flex-col justify-center">
                    <span className="text-sm text-[rgba(255,255,255,0.5)]">
                      {textContact}
                    </span>
                    <NextLink
                      className="text-sm text-brand-accent"
                      href="mailto:contact@unwynd.net"
                    >
                      contact@unwynd.net
                    </NextLink>
                  </div>
                  <div className="flex justify-between md:justify-start  items-center gap-6">
                    <div className="relative flex items-center">
                      {/* Globe Icon */}
                      <span className="absolute left-3 text-text-inverted-primary">
                        <Globe size={18} />
                      </span>

                      {/* Select Input */}
                      <select
                        className="appearance-none bg-neutral-800 text-sm text-text-inverted-primary p-2.5 pl-10 pr-8 rounded-[10px] border border-transparent 
               hover:border-surface-inverted-primary focus:ring-1 focus:ring-surface-inverted-tertiary focus:outline-none cursor-pointer"
                        id="language"
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                      >
                        <option value="en">English</option>
                        <option value="de">Deutsch</option>
                        <option value="fr">Français</option>
                        <option value="es">Español</option>
                        <option value="ja">日本語</option>
                      </select>

                      {/* Chevron Icon */}
                      <span className="absolute right-3 pointer-events-none text-text-inverted-primary">
                        <ChevronDown size={18} />
                      </span>
                    </div>
                    <AnimateButton className="w-10 h-10 border border-border-whiteOpacity24 rounded-full cursor-pointer">
                      <ArrowUpFromDot
                        className="text-text-inverted-primary"
                        size={20}
                      />
                    </AnimateButton>
                  </div>
                </div>
              </div>
            </div>
          </LargeContainer>
        </div>
      </div>
    </footer>
  );
}
