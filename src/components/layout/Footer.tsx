"use client";

import { ArrowUpFromDot, ChevronDown, Globe } from "lucide-react";
import SubscribeButton from "../assets/buttons/SubscribeButton";
import NextLink from "next/link";
import { AnimateButton } from "../assets/buttons/AnimateButton";
import NextImage from "next/image";
import LargeContainer from "../container/largeContainer";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const languages = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "it", name: "Italiano" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const router = useRouter();
  const locale = useLocale();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    router.replace(`/${newLocale}`, { scroll: false });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                  {t("form.heading.part1")}
                  <br />
                  <span className="text-transparent bg-[linear-gradient(to_bottom_right,rgb(89,106,255),rgb(211,144,225),rgb(232,109,84),rgb(255,187,108))] bg-clip-text">
                    {t("form.heading.part2")}
                  </span>
                </h2>
                <p className="text-sm text-text-inverted-tertiary tracking-tight text-center md:text-left">
                  {t("form.subHeading")}
                </p>
                <form className="w-auto md:w-[525px] relative flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
                  <label className="relative w-full inline-flex items-center">
                    <input
                      className="w-full text-white placeholder:text-text-secondary rounded-full p-4 border border-border-whiteOpacity12 focus:outline-none focus:ring-1 focus:ring-brand focus:ring-offeset-1 autofill"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder={`${t("form.input")}`}
                      required
                    />
                  </label>
                  <SubscribeButton
                    className="relative md:absolute md:right-2.5"
                    type="submit"
                  >
                    {t("form.btn")}
                  </SubscribeButton>
                </form>
              </div>
              <div className="flex flex-col gap-12 w-1/1">
                <div className="flex justify-start lg:justify-between gap-16 lg:gap-0">
                  <div className="flex flex-col gap-4">
                    <span className="text-xs text-text-tertiary">
                      {t("sitemap.heading")}
                    </span>
                    <ul className="flex flex-col items-start gap-4 text-sm text-text-inverted-primary">
                      <li className="hover:text-brand-accent">
                        <NextLink href="/">{t("sitemap.home")}</NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/">{t("sitemap.features")}</NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/">{t("sitemap.3dView")}</NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/">{t("sitemap.advantages")}</NextLink>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="text-xs text-text-tertiary">
                      {t("legal.heading")}
                    </span>
                    <ul className="flex flex-col items-start gap-4 text-sm text-text-inverted-primary">
                      <li className="hover:text-brand-accent">
                        <NextLink href="/terms-and-conditions">
                          {t("legal.termsConditions")}
                        </NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/imprint">
                          {t("legal.imprint")}
                        </NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/privacy-policy">
                          {t("legal.privacyPolicy")}
                        </NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href="/">{t("legal.declaration")}</NextLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6 md:gap-0">
                  <div className="flex flex-col justify-center">
                    <span className="text-sm text-[rgba(255,255,255,0.5)]">
                      {t("contactUs")}
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
                        value={locale}
                        onChange={handleLanguageChange}
                      >
                        {/* <option value="en">English</option>
                        <option value="de">Deutsch</option>
                        <option value="fr">Français</option>
                        <option value="es">Español</option>
                        <option value="ja">日本語</option> 
                        */}
                        {languages.map((language) => (
                          <option key={language.code} value={language.code}>
                            {language.name}
                          </option>
                        ))}
                      </select>

                      {/* Chevron Icon */}
                      <span className="absolute right-3 pointer-events-none text-text-inverted-primary">
                        <ChevronDown size={18} />
                      </span>
                    </div>
                    <AnimateButton
                      className="w-10 h-10 border border-border-whiteOpacity24 rounded-full cursor-pointer"
                      onClickChange={scrollToTop}
                    >
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
