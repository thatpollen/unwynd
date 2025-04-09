"use client";

import SmallContainer from "@/components/container/smallContainer";
import Footer from "@/components/layout/Footer";
import { CircleSmall } from "lucide-react";
import NextLink from "next/link";
import NextImage from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicy");
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
                {t("privacy_policy")}
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-lg text-text-primary text-left">
                <div>{t("last_updated")} 26-Jul-2024</div>
                <div>{t("effective_date")} 26-Jul-2024</div>
              </div>
              <div className="flex flex-col gap-4">
                <p
                  className="text-lg text-text-primary text-left"
                  dangerouslySetInnerHTML={{
                    __html: t("description")
                      .replace(
                        "&lt;email&gt;",
                        '<a href="mailto:contact@unwynd.net" class="text-brand-accent">contact@unwynd.net</a>'
                      )
                      .replace(
                        "&lt;website&gt;",
                        '<a href="http://www.unwynd.net" class="text-brand-accent" target="_blank" rel="noopener noreferrer">www.unwynd.net</a>'
                      ),
                  }}
                />

                <p className="text-lg text-text-primary text-left">
                  {t("modification_notice")}
                </p>
              </div>
              <div className="flex flex-col gap-4 mb-2">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("information_we_collect")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("personal_information")}
                </p>
                <ul className="flex flex-col gap-1 text-lg text-text-primary text-left ml-8">
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    {t.raw("personal_info_list")[0]}
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    {t.raw("personal_info_list")[1]}
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    {t.raw("personal_info_list")[2]}
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    {t.raw("personal_info_list")[3]}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 mb-2">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("how_we_use_info")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("usage_purposes")}
                </p>
                <ul className="flex flex-col gap-1 text-lg text-text-primary text-left ml-8">
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    {t.raw("usage_list")[0]}
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    {t.raw("usage_list")[1]}
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    {t.raw("usage_list")[2]}
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    {t.raw("usage_list")[3]}
                  </li>
                </ul>
              </div>
              <div className="text-lg text-text-primary text-left">
                {t("consent_notice")}
              </div>
              <div className="flex flex-col gap-4 mb-2">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("how_we_share_info")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("sharing_policy")}
                </p>
                <ul className="flex flex-col gap-1 text-lg text-text-primary text-left ml-8">
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    {t.raw("sharing_list")[0]}
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    {t.raw("sharing_list")[1]}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg text-text-primary text-left">
                  {t("third_party_usage")}
                </p>
                <p className="text-lg text-text-primary text-left">
                  {t("legal_disclosure")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("retention_info")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("retention_policy")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("your_rights")}
                </h5>
                <p
                  className="text-lg text-text-primary text-left"
                  dangerouslySetInnerHTML={{
                    __html: t("rights_description").replace(
                      "&lt;email&gt;",
                      '<a href="mailto:contact@unwynd.net" class="text-brand-accent">contact@unwynd.net</a>'
                    ),
                  }}
                />

                <p className="text-lg text-text-primary text-left">
                  {t("rights_note")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("cookie_policy")}
                </h5>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1.5">
                    <h6 className="text-lg font-semibold text-text-secondary text-left">
                      {t("what_are_cookies")}
                    </h6>
                    <p className="text-lg text-text-primary text-left">
                      {t("cookies_description")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h6 className="text-lg font-semibold text-text-secondary text-left">
                      {t("how_we_use_cookies")}
                    </h6>
                    <p className="text-lg text-text-primary text-left">
                      {t("cookies_usage")}
                    </p>
                    <br />
                    <p className="text-lg text-text-primary text-left">
                      {t("cookies_usage_description")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h6 className="text-lg font-semibold text-text-secondary text-left">
                      {t("cookies_preferences")}
                    </h6>
                    <p
                      className="text-lg text-text-primary text-left"
                      dangerouslySetInnerHTML={{
                        __html: t("cookie_settings").replace(
                          "&lt;link&gt;",
                          `<a href="/privacy-policy" class="text-brand">${t(
                            "cookies_preferences_link"
                          )}</a>`
                        ),
                      }}
                    />

                    <br />
                    <p className="text-lg text-text-primary text-left">
                      {t("additional_browser_support")}
                    </p>
                  </div>
                  <br />
                  <div>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-lg text-text-primary text-left">
                        Chrome:
                      </span>

                      <NextLink
                        href="https://support.google.com/accounts/answer/32050"
                        legacyBehavior
                      >
                        <a
                          target="_blank"
                          className="text-lg text-brand break-words"
                        >
                          https://support.google.com/accounts/answer/32050
                        </a>
                      </NextLink>
                    </div>
                    <br />
                    <br />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-lg text-text-primary text-left">
                        Safari:
                      </span>

                      <NextLink
                        href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
                        legacyBehavior
                      >
                        <a target="_blank" className="text-lg text-brand">
                          https://support.apple.com/en-in/guide/safari/sfri11471/mac
                        </a>
                      </NextLink>
                    </div>
                    <br />
                    <br />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-lg text-text-primary text-left">
                        Firefox:
                      </span>
                      <NextLink
                        href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
                        legacyBehavior
                      >
                        <a target="_blank" className="text-lg text-brand">
                          https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
                        </a>
                      </NextLink>
                    </div>
                    <br />
                    <br />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-lg text-text-primary text-left">
                        Internet Explorer:
                      </span>
                      <NextLink
                        href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
                        legacyBehavior
                      >
                        <a target="_blank" className="text-lg text-brand">
                          https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
                        </a>
                      </NextLink>
                    </div>
                    <br />
                    <br />
                    <p className="text-lg text-text-primary text-left">
                      {t("other_browser_support")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("security")}
                </h5>
                <p className="text-lg text-text-primary text-left">
                  {t("security_description")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  {t("grievance")}
                </h5>
                <p
                  className="text-lg text-text-primary text-left"
                  dangerouslySetInnerHTML={{
                    __html: t("grievance_description").replace(
                      "&lt;email&gt;",
                      '<a href="mailto:contact@unwynd.net" class="text-brand-accent">contact@unwynd.net</a>'
                    ),
                  }}
                />
              </div>
              <div className="text-lg text-text-primary text-left">
                {t("generated_with")}
              </div>
            </div>
          </div>
        </SmallContainer>
      </div>
      <Footer />
    </main>
  );
}
