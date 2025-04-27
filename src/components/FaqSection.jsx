"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this an official Trump product?",
    answer:
      "Yes, this is the only Official Barron Trump Meme, by Barron W. Trump.",
  },
  {
    question:
      "What is the official contract address and symbol for the MEGA MEME?",
    answer:
      "The contract address and symbol information will be released officially.",
  },
  {
    question: "How can I get MEGA Memes?",
    answer:
      "You can buy MEGA Memes through our official website and supported platforms.",
  },
  {
    question: "What is a meme?",
    answer:
      "A meme is a piece of media that spreads humor or cultural ideas rapidly online.",
  },
  {
    question: "Which blockchain network are the MEGA Memes minted?",
    answer: "MEGA Memes are minted on the Ethereum blockchain.",
  },
  {
    question: "What are the MEGA Memes?",
    answer:
      "They are official meme NFTs related to Ethereum and popular culture.",
  },
  {
    question: "What else should I know?",
    answer: "Stay tuned to our official channels for updates and launches!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col">
          <div>
            <div className="inline-block bg-gray-800 text-[#E3E354] text-xs font-bold px-4 py-1 rounded mb-4">
              FAQ
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl flex flex-col justify-center items-center font-bold mb-12 relative">
            Frequently Asked Questions
            <img src="/line.svg" alt="" />
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-yellow-600 rounded overflow-hidden ${
                openIndex === index
                  ? "bg-gradient-to-b from-[#E3D7AE] to-[#E3E354]"
                  : "bg-[#E3E354]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex gap-4 items-center px-6 py-4 font-semibold text-lg text-black"
              >
                <span className="text-2xl">
                  {openIndex === index ? "↑" : "↓"}
                </span>
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="text-start pl-10 py-2 text-sm text-black">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
