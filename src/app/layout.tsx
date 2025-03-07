import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
