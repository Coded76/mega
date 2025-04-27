"use client";

import Image from "next/image";

export default function WhatIsMega() {
  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Small MEGA Tag */}
        <div className="bg-gray-800 text-[#E3E354] text-xs font-bold px-4 py-1 rounded mb-4">
          MEGA
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          What Is MEGA?
        </h2>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-12 w-full">
          {/* Left Side - Big M Logo */}
          <div className="flex-1 hidden md:flex justify-center">
            <div className="relative w-76 bg-gradient-to-b from-[#E3D7AE] to-[#E3E354] rounded-full h-76">
              <Image
                src="/mega-token.svg"
                alt="Mega Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 flex flex-col space-y-12 relative">
            {/* Vertical Dashed Line */}
            <div className="hidden md:block absolute left-3 top-0 bottom-0 border-l-2 border-dashed border-gray-600"></div>

            {/* Point 1 */}
            <div className="flex flex-col pl-10 relative">
              <div className="absolute left-0 top-0 bg-[#E3E354] text-black font-bold w-6 h-6 rounded-full flex items-center justify-center">
                M
              </div>
              <h3 className="text-xl font-bold mb-2">MEGA Token</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                MEGA Memes are digital collectibles intended to function as an
                expression of support for, and engagement with, the ideals
                embodied by the symbol "$MEGA" — Make Ethereum Great Again — and
                the associated artwork. MEGA Memes are not intended to be, nor
                should they be considered, an investment opportunity, investment
                contract, or security of any type.
              </p>
            </div>

            {/* Point 2 */}
            <div className="flex flex-col pl-10 relative">
              <div className="absolute left-0 top-0 bg-[#E3E354] text-black font-bold w-6 h-6 rounded-full flex items-center justify-center">
                🔥
              </div>
              <h3 className="text-xl font-bold mb-2">Community First</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                The MEGA movement is about empowering the Ethereum community
                through culture, creativity, and collaboration. MEGA is built by
                the community, for the community.
              </p>
            </div>

            {/* Point 3 */}
            <div className="flex flex-col pl-10 relative">
              <div className="absolute left-0 top-0 bg-[#E3E354] text-black font-bold w-6 h-6 rounded-full flex items-center justify-center">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2">Ethereum</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                MEGA stands for a renewed spirit of innovation and
                decentralization on Ethereum. A portion of funds raised from the
                fair public distribution will directly support Ethereum
                ecosystem development and its builders.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Text */}
        {/* <div className="mt-16 text-xs text-gray-400 max-w-2xl text-center">
          <p>
            <span className="text-[#E3E354]">getmegatrump.com</span> is not
            political and has no affiliation with any political campaign,
            political office, or governmental agency. See{" "}
            <a href="#" className="underline hover:text-[#E3E354]">
              Terms & Conditions Here
            </a>
            .
          </p>
        </div> */}
      </div>
    </section>
  );
}
