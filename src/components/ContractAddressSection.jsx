"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContractAddressSection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0X63B7E5AE00CC6053358FB9B97B361372FBA10A5E";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-black text-white py-20 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-40 h-40">
        <Image
          src="/left_element.svg"
          alt="Decoration Left"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute top-0 right-0 w-40 h-40">
        <Image
          src="/right_element.svg"
          alt="Decoration Right"
          width={500}
          height={500}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-block bg-gray-800 text-[#E3E354] text-xs font-bold px-4 py-1 rounded mb-4">
          THE TOKEN
        </div>
        <div className="flex flex-col items-center justify-center w-full  mb-6">
          <h2 className="text-4xl md:text-5xl font-bold">Contract Address</h2>
          <img src="/line.svg" alt="" />
        </div>
        {/* Contract Box */}
        <div className="flex items-center justify-between bg-[#1a1a1a] border border-[#E3E354] rounded-md px-6 py-4">
          <p className="text-base break-all">{contractAddress}</p>
          <button
            onClick={handleCopy}
            className="text-[#E3E354] text-sm font-semibold ml-4 hover:underline"
          >
            {copied ? "COPIED!" : "COPY"}
          </button>
        </div>
      </div>
    </section>
  );
}
