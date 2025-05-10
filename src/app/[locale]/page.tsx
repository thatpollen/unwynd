"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/body/hero";
import LargeText from "@/components/body/largeText";
import Features from "@/components/body/features";
import FAQ from "@/components/body/FAQ";
import Gallery from "@/components/body/gallery";
import Advantages from "@/components/body/advantages";
import ThreeD from "@/components/body/3d";
import Testimonials from "@/components/body/testimonials";
import GetNotified from "@/components/body/GetNotified";
import WhyBack from "@/components/body/whyBack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LargeText />
      <GetNotified />
      <Features />
      <Gallery />
      <ThreeD />
      <Advantages />
      <WhyBack />
      <Testimonials />
      <FAQ />
      <div className="mb-24 md:mb-0">
        <Footer />
      </div>
    </>
  );
}
