"use client";

import { ArrowUpFromDot, ChevronDown } from "lucide-react";
import NextLink from "next/link";
import { AnimateButton } from "../assets/buttons/AnimateButton";
import NextImage from "next/image";
import LargeContainer from "../container/largeContainer";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "react-scroll";
import NewsletterSignUpForm from "../assets/NewsletterSignUpForm";
import ReactCountryFlag from "react-country-flag";
import { useState, useEffect, useTransition } from "react";

const languages = [
  { code: "en", name: "English", countryCode: "GB" },
  { code: "de", name: "Deutsch", countryCode: "DE" },
  { code: "fr", name: "Français", countryCode: "FR" },
  { code: "es", name: "Español", countryCode: "ES" },
  { code: "it", name: "Italiano", countryCode: "IT" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();

  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((lang) => lang.code === locale) || languages[0]
  );

  useEffect(() => {
    // Update the flag when locale changes
    const newLanguage = languages.find((lang) => lang.code === locale);
    if (newLanguage) {
      setSelectedLanguage(newLanguage);
    }
  }, [locale]);

  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function getPathWithNewLocale(pathname: string, newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || `/${newLocale}`;
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    startTransition(() => {
      const newPath = getPathWithNewLocale(pathname, newLocale);
      router.replace(newPath, { scroll: false });
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  return (
    <footer className="w-full p-2">
      <div className="flex flex-col h-full">
        <div className="h-[200px]">
          <LargeContainer>
            <div className="relative -z-1">
              <div className="absolute -z-2 top-0 md:top-[-72px] lg:left-[32px] left-1/2 w-fit -translate-x-1/2 lg:translate-x-0">
                <figure className="relative w-[300px] h-[405px] md:w-auto md:h-auto aspect-auto">
                  <NextImage
                    src="/images/unwynd-footer-lamp.avif"
                    alt="footer-lamp"
                    width={340}
                    height={540}
                    className="max-w-full w-auto h-auto"
                    priority
                  />
                  <div className="absolute w-[540px] max-w-[100vw] h-[120%] md:w-[720px] left-1/2 top-1/2 -translate-1/2 blur-[100px] opacity-20 -z-5 bg-[linear-gradient(to_bottom_right,rgba(90,106,255,1),rgba(212,145,226,1),rgba(232,110,84,1),rgba(255,188,109,1))]"></div>
                </figure>
              </div>
            </div>
          </LargeContainer>
        </div>

        <div className="bg-surface-inverted-primary rounded-2xl relative z-1">
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
                <p className="text-sm text-text-inverted-secondary tracking-tight text-center md:text-left">
                  {t("form.subHeading")}
                </p>
                <NewsletterSignUpForm variant="footer" />
              </div>
              <div className="flex flex-col gap-12 w-1/1">
                <div className="flex justify-start gap-16 md:gap-0">
                  <div className="flex flex-col gap-4 w-auto md:w-[60%]">
                    <span className="text-xs text-text-tertiary">
                      {t("sitemap.heading")}
                    </span>
                    <ul className="flex flex-col items-start gap-4 text-sm text-text-inverted-primary">
                      <li className="hover:text-brand-accent cursor-pointer">
                        <NextLink href="/">{t("sitemap.home")}</NextLink>
                      </li>
                      <li className="hover:text-brand-accent cursor-pointer">
                        <Link
                          to="features"
                          spy={true}
                          smooth={true}
                          offset={isMobile ? -10 : -120}
                          duration={500}
                        >
                          {t("sitemap.features")}
                        </Link>
                      </li>
                      <li className="hover:text-brand-accent cursor-pointer">
                        <Link
                          to="view3d"
                          spy={true}
                          smooth={true}
                          offset={isMobile ? 50 : -50}
                          duration={500}
                        >
                          {t("sitemap.3dView")}
                        </Link>
                      </li>
                      <li className="hover:text-brand-accent cursor-pointer">
                        <Link
                          to="advantages"
                          spy={true}
                          smooth={true}
                          offset={isMobile ? 50 : -50}
                          duration={500}
                        >
                          {t("sitemap.advantages")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="self-auto md:self-start flex flex-col gap-4">
                    <span className="text-xs text-text-tertiary">
                      {t("legal.heading")}
                    </span>
                    <ul className="flex flex-col items-start gap-4 text-sm text-text-inverted-primary">
                      <li className="hover:text-brand-accent">
                        <NextLink href={`/${locale}//terms-of-service`}>
                          {t("legal.termsConditions")}
                        </NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href={`/${locale}/imprint`}>
                          {t("legal.imprint")}
                        </NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href={`/${locale}/privacy-policy`}>
                          {t("legal.privacyPolicy")}
                        </NextLink>
                      </li>
                      <li className="hover:text-brand-accent">
                        <NextLink href={`/${locale}`}>
                          {t("legal.declaration")}
                        </NextLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6 md:gap-0">
                  <div className="flex flex-col justify-center items-start w-auto md:w-[60%]">
                    <span className="text-sm text-[rgba(255,255,255,0.5)]">
                      {t("contactUs")}
                    </span>
                    <NextLink href="mailto:contact@unwynd.net" legacyBehavior>
                      <a className="text-sm text-brand-accent group relative hover:text-text-inverted-primary transition-all duration-100 linear">
                        contact@unwynd.net
                        <div className="h-px absolute left-0 w-0 bg-surface-primary group-hover:w-full transition-all duration-300 block z-2"></div>
                      </a>
                    </NextLink>
                  </div>
                  <div className="self-auto md:self-start flex justify-between md:justify-start items-center gap-6">
                    <div className="relative flex items-center">
                      {/* Globe Icon */}
                      <div className="absolute left-3 top-2 text-text-inverted-primary w-4.5 h-4.5 rounded-full">
                        <ReactCountryFlag
                          countryCode={selectedLanguage.countryCode}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "100%",
                            objectFit: "cover",
                          }}
                          svg
                        />
                      </div>

                      {/* Select Input */}
                      <select
                        className="appearance-none bg-neutral-800 text-sm text-text-inverted-primary p-2.5 pl-10 pr-8 rounded-[10px] border border-transparent 
               hover:border-surface-inverted-primary focus:ring-1 focus:ring-surface-inverted-tertiary focus:outline-none cursor-pointer"
                        id="language"
                        disabled={isPending}
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
