import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Unwynd – The meditation app",
  description:
    "Experience calm with the Unwynd Meditation Lamp: Custom lights, sounds and guided meditations for finding inner peace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
