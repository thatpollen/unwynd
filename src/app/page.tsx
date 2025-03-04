import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/body/hero";
import LargeText from "@/components/body/largeText";
import Features from "@/components/body/features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LargeText />
      <Features />
      <Footer />
    </>
  );
}
