"use client"; // If you're using Next.js 13+

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react or use any icon library

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="md:hidden flex"></div>
   <div className="flex items-center gap-[90px]">
   <div className="flex items-center space-x-2">
        <div className="">
          <img src="/navbar/logo.svg" alt="" />
        </div>
        <span className="font-semibold text-lg">MEGA</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center">
        <a href="#what" className="hover:text-[#E3E354]">
          What is MEGA?
        </a>
        <a href="#token" className="hover:text-[#E3E354]">
          The Token
        </a>
        <a href="#allocation" className="hover:text-[#E3E354]">
          Allocation
        </a>
        <a href="#contact" className="hover:text-[#E3E354]">
          Contact Us
        </a>
        <a href="#buy" className="text-[#E3E354] font-bold">
          +BUY NOW
        </a>
      </div>
   </div>
      <button className="ml-4 md:block hidden bg-gradient-to-b from-[#E3D7AE] to-[#E3E354] text-black px-4 py-2 rounded-md font-semibold">
        CONNECT WALLET
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="absolute top-0 right-0 w-64 h-full bg-black text-white flex flex-col p-6 space-y-6 border-l border-yellow-400 z-50">
          <button onClick={toggleMenu} className="self-end">
            <X size={28} />
          </button>

          <a href="#what" className="hover:bg-yellow-400 py-2 px-4 rounded">
            What is MEGA?
          </a>
          <a href="#token" className="hover:text-yellow-400">
            The Token
          </a>
          <a href="#allocation" className="hover:text-yellow-400">
            Allocation
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact Us
          </a>
          <a href="#buy" className="text-yellow-400 font-bold">
            +BUY NOW
          </a>

          <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold">
            CONNECT WALLET
          </button>

          <div className="flex items-center space-x-2 pt-10">
            <div className="border border-yellow-400 rounded-full p-1">
              <span className="text-yellow-400 font-bold text-lg">M</span>
            </div>
            <span className="font-semibold text-lg">MEGA</span>
          </div>
        </div>
      )}
    </nav>
  );
}
