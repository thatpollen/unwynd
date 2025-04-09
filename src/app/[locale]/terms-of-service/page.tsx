"use client";

import SmallContainer from "@/components/container/smallContainer";
import Footer from "@/components/layout/Footer";
import NextLink from "next/link";
import NextImage from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function TermsConditions() {
  const t = useTranslations("TermsOfService");
  const locale = useLocale();

  return (
    <main>
      <div className="pb-12.5 mt-25 mb-28 relative z-2">
        <SmallContainer>
          <div className="flex flex-col gap-10">
            <div className="self-center py-3 mb-6">
              <NextLink href={`/${locale}`}>
                <NextImage
                  src="/images/navlogo/32.svg"
                  alt="logo"
                  width={160}
                  height={32}
                  className="w-auto h-auto cursor-pointer"
                />
              </NextLink>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="text-H3 md:text-[44px] lg:text-[64px] leading-18 tracking-[-0.04em] text-text-primary text-center">
                {t("heading")}
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("terms_one")}
                </h5>
                <p
                  className="text-lg text-text-primary text-left"
                  dangerouslySetInnerHTML={{
                    __html: t("terms_one_description1").replace(
                      "&lt;website&gt;",
                      '<a href="https://www.unwynd.net" class="text-brand-accent" target="_blank" rel="noopener noreferrer">https://www.unwynd.net</a>'
                    ),
                  }}
                />
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_one_description2")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_one_description3")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("terms_two")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("terms_two_description1")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_two_description2")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_two_description3")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_two_description4")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_two_description5")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_two_description6")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_two_description7")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_two_description8")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_two_description9")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("terms_three")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("terms_three_description1")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_three_description2")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_three_description3")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_three_description4")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("terms_four")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("terms_four_description1")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_four_description2")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_four_description3")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_four_description4")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("terms_five")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description1")}
                </p>
                <br />

                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description2")}
                </p>

                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description3")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description4")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description5")}
                </p>
                <br />
                <p
                  className="text-lg text-text-primary text-left"
                  dangerouslySetInnerHTML={{
                    __html: t("terms_five_description6").replace(
                      "&lt;email&gt;",
                      '<a href="mailto:contact@unwynd.net" class="text-brand-accent" rel="noopener noreferrer">contact@unwynd.net</a>'
                    ),
                  }}
                />
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description7")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description8")}
                </p>
                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description9")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description10")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description11")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description12")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_five_description13")}
                </p>
                <br />
                <div className="border border-surface-inverted-primary">
                  <div className="p-2.5 border-b-2 border-dotted border-border-blackOpacity16 ">
                    {t("terms_five_table_heading")}
                  </div>
                  <div
                    className="px-2.5 py-6 border-b-2 border-dotted border-border-blackOpacity16 "
                    dangerouslySetInnerHTML={{
                      __html: t(
                        "terms_five_table_heading_description1"
                      ).replace(
                        "&lt;email&gt;",
                        '<a href="mailto:contact@unwynd.net" class="text-brand-accent" rel="noopener noreferrer">contact@unwynd.net</a>'
                      ),
                    }}
                  />

                  <div className="px-2.5 py-6 border-b-2 border-dotted border-border-blackOpacity16 ">
                    {t("terms_five_table_heading_description2")}
                  </div>
                  <div className="px-2.5 py-6 border-b-2 border-dotted border-border-blackOpacity16 ">
                    {t("terms_five_table_heading_description3")}
                  </div>
                  <div className="px-2.5 py-6 border-b-2 border-dotted border-border-blackOpacity16 ">
                    {t("terms_five_table_heading_description4")}
                  </div>
                  <div className="px-2.5 py-6 border-b-2 border-dotted border-border-blackOpacity16 ">
                    {t("terms_five_table_heading_description5")}
                  </div>
                  <div className="px-2.5 py-6 border-b-2 border-dotted border-border-blackOpacity16 ">
                    {t("terms_five_table_heading_description6")}
                  </div>
                  <div className="px-2.5 py-6 border-b-2 border-dotted border-border-blackOpacity16 ">
                    {t("terms_five_table_heading_description7")}
                  </div>
                  <div className="px-2.5 py-6">
                    {t("terms_five_table_heading_description8")}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("terms_six")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("terms_six_description")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("terms_seven")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("terms_seven_description1")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_seven_description2")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_seven_description3")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("terms_eight")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("terms_eight_description1")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("terms_nine")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("terms_nine_description1")}
                </p>
                <br />
                <p className="text-lg text-text-primary text-left">
                  {t("terms_nine_description2")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("terms_ten")}
                </h5>
                <p
                  className="text-lg text-text-primary text-left"
                  dangerouslySetInnerHTML={{
                    __html: t("terms_ten_description").replace(
                      "&lt;link&gt;",
                      '<a href="http://ec.europa.eu/consumers/odr" class="text-brand" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/consumers/odr</a>'
                    ),
                  }}
                />
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("terms_eleven")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("terms_eleven_description")}
                </p>
              </div>
            </div>
          </div>
        </SmallContainer>
      </div>
      <Footer />
    </main>
  );
}
