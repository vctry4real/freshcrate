"use client";

import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

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
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  // Allow timelineRefs to be undefined for type safety
  const timelineRefs = useRef<Array<gsap.core.Timeline | undefined>>([]);

  useEffect(() => {
    initializeAnimations();
  }, []);

  const initializeAnimations = () => {
    contentRefs.current.forEach((content) => {
      if (content) {
        gsap.set(content, {
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          overflow: "hidden",
          display: "none",
        });
      }
    });

    iconRefs.current.forEach((icon) => {
      if (icon) {
        gsap.set(icon, { rotation: 0 });
      }
    });
  };

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (!content) return;

      // Only kill if timeline exists
      if (timelineRefs.current[index]) {
        timelineRefs.current[index]!.kill();
        timelineRefs.current[index] = undefined;
      }

      if (openIndex === index) {
        const tl = gsap.timeline();
        tl.set(content, { display: "block" })
          .to(content, {
            height: "auto",
            duration: 0.4,
            ease: "power2.out",
          })
          .to(
            content,
            {
              opacity: 1,
              paddingTop: "16px",
              paddingBottom: "16px",
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.2"
          );

        timelineRefs.current[index] = tl;
      } else {
        const tl = gsap.timeline();
        tl.to(content, {
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: 0.2,
          ease: "power2.in",
        }).to(
          content,
          {
            height: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(content, { display: "none" });
            },
          },
          "-=0.1"
        );

        timelineRefs.current[index] = tl;
      }
    });

    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          rotation: openIndex === index ? 180 : 0,
          duration: 0.35,
          ease: "power2.out",
        });
      }
    });
  }, [openIndex]);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  useEffect(() => {
    return () => {
      timelineRefs.current.forEach((tl) => {
        if (tl) tl.kill();
      });
    };
  }, []);

  return (
    <div className="w-full mx-auto flex flex-col gap-y-[24px] md:px-[74px] md:gap-y-4">
      {faqData.map((item, idx) => (
        <div
          key={idx}
          className="w-full border rounded-[10px] border-[#A1A1A133] overflow-hidden transition-all duration-300 hover:border-[#A1A1A166] hover:shadow-lg"
        >
          <button
            className={`w-full text-left px-[12px] py-[16px] font-medium text-[16px] leading-[100%] ${
              openIndex === idx ? "text-[#16A34A]" : "text-[#ffffff]"
            } focus:outline-none flex justify-between items-center md:text-[20px] md:py-4 md:px-6 transition-colors duration-300 hover:bg-[#ffffff05] group`}
            onClick={() => handleToggle(idx)}
          >
            <span className="transition-colors duration-300 flex-1 pr-4">
              {item.question}
            </span>
            <span
              ref={(el) => (iconRefs.current[idx] = el)}
              className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
            >
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
            </span>
          </button>
          <div
            ref={(el) => (contentRefs.current[idx] = el)}
            className="px-6 text-[#D9D9D9] font-normal overflow-hidden"
            style={{
              display: "none",
              height: "0",
              opacity: "0",
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
            <div className="leading-relaxed">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
