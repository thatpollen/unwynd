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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LargeText />
      <Features />
      <Gallery />
      <ThreeD />
      <Advantages />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
