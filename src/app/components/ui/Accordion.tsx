"use client";

import { ChevronDownIcon, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Freshcart?",
    answer:
      "Freshcart is a digital grocery shopping app, giving you access to fresh and quality food produce at affordable prices, and for your convenience",
  },
  {
    question: "Where do we deliver to?",
    answer:
      "We currently deliver to every location in the city of Abuja. As long as you are in Abuja, you will receive your order",
  },
  {
    question: "Can I get same-day delivery?",
    answer:
      "We currently do not offer same-day delivery, but orders placed before 5 PM are delivered the next day",
  },
  {
    question: "How do you charge for delivery?",
    answer:
      "Your delivery fee is automatically calculated based on location and weight of your order",
  },
];

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full  mx-auto flex flex-col gap-y-[24px]  md:px-[74px] md:gap-y-4">
      {faqData.map((item, idx) => (
        <div
          key={idx}
          className="w-full border rounded-[10px] border-[#A1A1A133]  "
        >
          <button
            className="w-full text-left px-[12px] py-[16px] font-medium text-[16px]  leading-[100%] text-[#16A34A] focus:outline-none flex justify-between items-center md:text-[20px] md:py-4  md:px-6 "
            onClick={() => handleToggle(idx)}
          >
            {item.question}
            <span>
              {openIndex === idx ? <ChevronUp /> : <ChevronDownIcon />}
            </span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-[#D9D9D9] font-normal animate-fadeIn">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
