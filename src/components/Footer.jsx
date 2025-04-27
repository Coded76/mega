"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
      {/* Top Decoration Section */}
      <div className="relative w-full pt-20 ">
        {/* Background Image (Stars + Red + Yellow Group) */}
        <Image
          src="/star_line.svg"
          alt="Stars Banner Background"
          className="h-[83px] "
          layout="fill"
          objectFit=""
          priority
        />
        <div className="md:h-[138px] h-[100px] bg-gradient-to-b from-[#E3D7AE] to-[#E3E354]"></div>
        <div className="absolute right-0 bottom-0">
          <Image
            src="/footer_character.svg"
            alt="Barron Trump"
            width={220}
            height={300}
            className="object-contain "
          />
        </div>

        {/* Barron Trump Character */}
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column - Mega Box */}
        <div>
          <div className="bg-gradient-to-b from-[#E3D7AE] to-[#E3E354] p-6 rounded-lg text-black flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#E3E354] font-bold text-lg">
                M
              </div>
              <span className="text-lg font-bold">MEGA</span>
            </div>
            <p className="text-sm">One Meme to Make Ethereum Great Again!</p>
            <button className="bg-black hover:bg-gray-800 text-white font-bold text-xs px-5 py-2 rounded transition">
              BUY NOW ↗
            </button>
          </div>
        </div>

        {/* Middle Column - Explore & Contact */}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-bold mb-2">Explore</h4>
            <a href="#" className="text-sm hover:underline">
              BUY NOW
            </a>
            <a href="#" className="text-sm hover:underline">
              What is MEGA?
            </a>
            <a href="#" className="text-sm hover:underline">
              The Token
            </a>
            <a href="#" className="text-sm hover:underline">
              Allocation
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <a
              href="mailto:support@getmegatrump.com"
              className="text-sm text-[#E3E354] hover:underline"
            >
              support@getmegatrump.com
            </a>
            <a
              href="https://getmegatrump.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#E3E354] hover:underline"
            >
              getmegatrump.com
            </a>
          </div>
        </div>

        {/* Right Column - Disclaimer */}
        <div className="flex flex-col text-xs text-gray-400 space-y-2">
          <p>
            <span className="text-[#E3E354]">MEGA Memes</span> site intended for
            collecting and entertainment purposes only. They are not financial
            instruments or investments. Always do your own research and never
            invest more than you can afford to lose.
          </p>
          <p>
            <span className="text-[#E3E354]">getmegatrump.com</span> is not
            political and has no affiliation with any political campaign,
            political office, or governmental agency. See{" "}
            <a href="#" className="underline hover:text-[#E3E354]">
              Terms & Conditions Here.
            </a>
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mx-6" />

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 py-6">
        Copyright © 2025 MKT World. All Rights Reserved.
      </div>
    </footer>
  );
}
