import ContractAddressSection from "@/components/ContractAddressSection";
import FAQSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Hero from "@/components/Hero";
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
      <ContractAddressSection />
      <TokenAllocation />
      <FAQSection />
      <Footer />
    </div>
  );
}
