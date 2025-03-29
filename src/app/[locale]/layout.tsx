import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Unwynd – The meditation app",
  description:
    "Experience calm with the Unwynd Meditation Lamp: Custom lights, sounds and guided meditations for finding inner peace.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon/icon-light.avif",
        href: "/images/favicon/icon-light.avif",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon/icon-dark.avif",
        href: "/images/favicon/icon-dark.avif",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${poppins.className} ${caveat.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
