import ContractAddressSection from "@/components/ContractAddressSection";
import FAQSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Hero from "@/components/Hero";
import MegaLaunch from "@/components/MegaLaunch";
import Navbar from "@/components/Navbar";
import TokenAllocation from "@/components/TokenAllocation";
import WhatIsMega from "@/components/WhatIsMega";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Hero />/ */}
      <HeroSection />
      <WhatIsMega />
      <MegaLaunch />
      <ContractAddressSection />
      <TokenAllocation />
      <FAQSection />
      <Footer />

      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
    </div>
  );
}
