"use client";

// import OrderButton from "../assets/buttons/OrderButton";
// import OrderModal from "../assets/Modal/OrderModal";
// import { useState } from "react";
import { NavLogo } from "../assets/icons";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "react-scroll";
import { Popover, PopoverContent, PopoverTrigger } from "../reusable/popover";
import { useState, useEffect } from "react";
import GetNotifiedForm from "../assets/forms/GetNotifiedForm";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const t2 = useTranslations("OrderModal");
  const locale = useLocale();
  const [isMobile, setIsMobile] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
      setIsMediumScreen(window.innerWidth <= 640);
      setIsSmallScreen(window.innerWidth <= 360);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full fixed bottom-4 top-auto md:bottom-auto md:top-4 z-10">
      <div className="max-w-5xl mx-auto w-full px-6">
        <div className="flex items-center justify-between py-2 px-4 md:py-3 rounded-full bg-white border border-border-blackOpacity8 shadow-[0_4px_64px_0px_rgba(0,0,0,0.16)] sticky top-4 z-10">
          <div className="hidden md:flex items-center gap-12">
            <NextLink href={`/${locale}`}>
              <span>
                <NavLogo />
              </span>
            </NextLink>
            <ul className="flex items-center gap-6">
              <li className="text-sm font-medium text-text-primary hover:text-brand-accent cursor-pointer">
                <Link
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                >
                  {t("features")}
                </Link>
              </li>
              <li className="text-sm font-medium text-text-primary hover:text-brand-accent cursor-pointer">
                <Link
                  to="view3d"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  {t("view3d")}
                </Link>
              </li>
              <li className="text-sm font-medium text-text-primary hover:text-brand-accent cursor-pointer">
                <Link
                  to="advantages"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  {t("advantages")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="grow md:grow-0 flex justify-between md:justify-start items-center gap-0 md:gap-8">
            <div className="flex flex-col gap-0.5 pl-4 md:pl-0">
              <span className="text-sm text-text-primary font-medium">
                Unwynd
              </span>
              <span className="text-xs leading-4 bg-[linear-gradient(to_bottom_right,#1F3FEA,#671FEA,#EA1FC9,#EA1F5E,#EAAD1F,#AAEA1F)] bg-clip-text text-transparent break-keep">
                {t("launchingSoon")}
              </span>
            </div>

            <div className="hidden md:block h-6 w-px bg-stroke-opacity16"></div>
            {/* <OrderButton
              
              variant="primary"
              type="button"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              {t("orderNow")}
            </OrderButton>
            <OrderModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
            <Popover>
              <PopoverTrigger>
                <div
                  className="
                    text-sm text-white px-4 py-3.5 md:py-2.5 rounded-full cursor-pointer
                         bg-brand hover:bg-brand-hover"
                >
                  {t("orderNow")}
                </div>
              </PopoverTrigger>

              <PopoverContent
                align="end"
                alignOffset={
                  isSmallScreen
                    ? -35
                    : isMediumScreen
                    ? -30
                    : isMobile
                    ? -25
                    : 0
                }
                sideOffset={20}
                className="orderModal w-[96vw] max-w-5xl md:max-w-[520px] flex flex-col gap-8 p-6 sm:p-10"
              >
                <div className="flex flex-col space-y-2.5">
                  <span className="text-2xl font-medium text-text-primary">
                    {t2("headingOne")}
                    <span className="text-text-tertiary">
                      {t2("headingTwo")}
                    </span>
                  </span>
                  <p className="text-sm text-text-secondary">
                    {t2("subHeading")}
                  </p>
                </div>

                <div className="flex flex-col space-y-2.5">
                  {/* <NewsletterSignUpForm variant="popover" /> */}
                  <GetNotifiedForm variant="popover" />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
}
