import Container from "@/components/container/container";
import Footer from "@/components/layout/Footer";
import { useLocale, useTranslations } from "next-intl";
import NextImage from "next/image";
import NextLink from "next/link";

export default function Imprint() {
  const t = useTranslations("Imprint");
  const locale = useLocale();

  return (
    <main>
      <div className="flex flex-col">
        <div className="self-center py-3 mt-8 mb-12">
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

        <div className="max-w-full flex justify-center items-center px-6 pb-32 relative z-2">
          <Container>
            <div className="p-8 flex flex-col gap-12 rounded-2xl bg-white shadow-[0_4px_40px_0_rgba(0,0,0,0.08)]">
              <h1 className="text-H3 md:text-[44px] lg:text-H1 font-medium text-text-primary">
                {t("heading")}
              </h1>
              <div className="w-full h-px bg-surface-tertiary"></div>
              <div className="flex flex-col items-start gap-6">
                <h5 className="text-lg md:text-H6 lg:text-H5 font-medium text-text-primary">
                  Topus GmbH
                </h5>
                <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0">
                  <div className="basis-1/2">
                    <p className="text-base text-text-secondary">
                      <span>Wassermasch 15</span>
                      <br />
                      <span>38179 Schwülper</span>
                      <br />
                      <span>{t("country")}</span>
                    </p>
                  </div>
                  <div className="basis-1/2 flex flex-col gap-2.5 justify-center items-start">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-base">
                      <span className="text-text-primary font-medium">
                        {t("Email")}
                      </span>
                      <NextLink href="mailto:contact@unwynd.net" legacyBehavior>
                        <a className="relative inline-block text-brand-orange hover:text-brand duration-200 transition-colors">
                          contact@unwynd.net
                        </a>
                      </NextLink>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-base">
                      <span className="text-text-primary font-medium">
                        {t("Managing_director")}
                      </span>
                      <span className="text-text-secondary">
                        Peter Kallenbach
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-base">
                      <span className="text-text-primary font-medium">
                        {t("Registered_at")}
                      </span>
                      <span className="text-text-secondary">
                        {t("Registered_place")}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-base">
                      <span className="text-text-primary font-medium">
                        {t("Registration_number")}
                      </span>
                      <div className="text-text-secondary">HRB 206112</div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-base">
                      <span className="text-text-primary font-medium">
                        {t("VAT_ID")}
                      </span>
                      <div className="text-text-secondary">DE322316993</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-surface-tertiary"></div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2.5 text-base">
                  <span className="text-text-primary font-medium">
                    {t("Personal_responsible_for_content")}
                  </span>
                  <span className="text-text-secondary">Peter Kallenbach</span>
                </div>
                <div className="text-base text-text-secondary">
                  ({t("address_above")})
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </main>
  );
}
