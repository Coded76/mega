"use client";

import Image from "next/image";

export default function TokenAllocation() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="flex flex-col items-center justify-center">
        <div>
          <div className="inline-block bg-gray-800 text-[#E3E354] text-xs font-bold px-4 py-1 rounded mb-4">
            ALLOCATION
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl text-center flex flex-col justify-center items-center font-bold mb-12 relative">
          Token Details And Allocation
          <img src="/line.svg" alt="" />
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          {/* Bullet Points */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-5 h-1 mt-2 bg-[#E3E354] rounded-full"></div>
              <p className="text-base">
                Maximum Supply :{" "}
                <span className="text-[#E3E354]">$MEGA 47,000,000</span>
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-5 h-1 mt-2 bg-[#E3E354] rounded-full"></div>
              <div className="flex flex-col text-base">
                <span>90% Public Fair Distribution</span>
                <span>10% Liquidity</span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-5 h-1 mt-2 bg-[#E3E354] rounded-full"></div>
              <p className="text-base">0% team tokens</p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-5 h-1 mt-2 bg-[#E3E354] rounded-full"></div>
              <p className="text-base">
                Distribution Period:{" "}
                <span className="text-[#E3E354]">30 Days</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed max-w-md">
            Half of all funds raised through the public fair launch will fuel
            Ethereum's builders and ecosystem growth. The other half will be
            used to power liquidity for trading MEGA on the open market.
          </p>
        </div>

        {/* Right Side (Pie Chart Image) */}
        <div className="flex justify-center">
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/chart.svg"
              alt="Token Allocation Pie Chart"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
