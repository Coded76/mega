"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative bg-black overflow-hidden flex flex-col text-white"
      style={{
        backgroundImage: 'url("/hero_bg.svg")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", // optional: makes it stretch nicely
      }}
    >
      <div>
        {/* Background Circles Image */}
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/9bb359bf-27f2-4afe-8055-1ec1940209f2.png"
            alt="Background Circles"
            layout="fill"
            objectFit="cover"
            priorityHeroSection
          />
        </div> */}

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:pt-32 pt-[20px]  flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
          {/* Left Content */}
          <div className="md:w-full space-y-6">
            {/* Badge */}
            <div className="inline-block bg-gray-800 text-xs text-white font-semibold px-4 py-1 rounded">
              OFFICIAL MEGA TOKEN
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              MEGA — <span className="text-[#E3E354]">M</span>AKE{" "}
              <span className="text-[#E3E354]">E</span>TH{" "}
              <span className="text-[#E3E354]">G</span>REAT{" "}
              <span className="text-[#E3E354]">A</span>GAIN
            </h1>

            {/* Subtext */}
            <p className="text-gray-300 text-lg">
              This is just the beginning. Join MEGA and Make Ethereum Great
              Again!
            </p>

            {/* Button */}
            <div>
              <button className="bg-gradient-to-b from-[#E3D7AE] to-[#E3E354] hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded transition">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        {/* Right Images */}
        <div className="flex md:flex items-center justify-between gap-8 mt-0">
          {/* Left Character */}
          <div className="relative md:w-[400px] md:h-[400px] w-[150px] h-[150px]">
            <Image
              src="/character_pointing.svg" // Replace with your left pointing image
              alt="Barron Pointing"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Right Character */}
          <div className="relative md:w-[400px] md:h-[400px] w-[150px] h-[150px]">
            <Image
              src="/hero_character_2.svg" // Replace with your right hand on ear image
              alt="Barron Listening"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      {/* Bottom Stars Decoration */}
      <div className="relative w-full h-[23px] md:h-20">
        <Image
          src="/star_line.svg"
          alt="Stars Banner Bottom"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      </div>
    </section>
  );
}
