// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative bg-black overflow-hidden">
//       {/* Background circles */}
//       <div className="absolute right-0 top-0 w-full h-full">
//         <Image
//           src="/c6546ea6-c78c-44df-9dba-1bd00534d91b.png"
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           className="opacity-50"
//         />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center text-center md:flex-row md:text-left md:items-center md:justify-between">
//         {/* Left side content */}
//         <div className="md:w-1/2">
//           <div className="inline-block bg-gray-800 text-white text-xs font-semibold px-4 py-1 rounded mb-6">
//             OFFICIAL MEGA TOKEN
//           </div>
//           <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             MEGA — <span className="text-yellow-400">MAKE ETH GREAT AGAIN</span>
//           </h1>
//           <p className="text-gray-400 text-lg mb-8">
//             This is just the beginning. Join MEGA and Make Ethereum Great Again!
//           </p>
//           <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded transition">
//             BUY NOW
//           </button>
//         </div>

//         {/* Right side character image */}
//         <div className="hidden md:flex md:w-1/2 justify-end items-end space-x-4">
//           <div className="relative w-40 h-60">
//             <Image
//               src="/6252718a-0eb3-4c74-9f42-0cad4ecea4b6.png"
//               alt="Character 1"
//               layout="fill"
//               objectFit="contain"
//             />
//           </div>
//           <div className="relative w-40 h-60">
//             <Image
//               src="/hero_character_2.svg"
//               alt="Character 2"
//               layout="fill"
//               objectFit="contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile version character images */}
//       <div className="md:hidden mt-10 flex justify-center space-x-4">
//         <div className="relative w-28 h-40">
//           <Image
//             src="/6252718a-0eb3-4c74-9f42-0cad4ecea4b6.png"
//             alt="Character 1"
//             layout="fill"
//             objectFit="contain"
//           />
//         </div>
//         <div className="relative w-28 h-40">
//           <Image
//             src="/hero_character_2.svg"
//             alt="Character 2"
//             layout="fill"
//             objectFit="contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden text-white">
      {/* Background Circles Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/9bb359bf-27f2-4afe-8055-1ec1940209f2.png"
          alt="Background Circles"
          layout="fill"
          objectFit="cover"
          priorityHeroSection
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          {/* Badge */}
          <div className="inline-block bg-gray-800 text-xs text-white font-semibold px-4 py-1 rounded">
            OFFICIAL MEGA TOKEN
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            MEGA — <span className="text-[#E3E354]">MAKE</span>{" "}
            <span className="text-[#E3E354]">ETH</span> GREAT{" "}
            <span className="text-[#E3E354]">AGAIN</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-lg">
            This is just the beginning. Join MEGA and Make Ethereum Great Again!
          </p>

          {/* Button */}
          <div>
            <button className="bg-[#E3E354] hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded transition">
              BUY NOW
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="hidden md:flex md:w-1/2 items-center justify-between gap-8 mt-12 md:mt-0">
          {/* Left Character */}
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/character_pointing.svg" // Replace with your left pointing image
              alt="Barron Pointing"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Right Character */}
          <div className="relative w-[400px] h-[400px]">
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
      <div className="relative w-full h-20">
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
