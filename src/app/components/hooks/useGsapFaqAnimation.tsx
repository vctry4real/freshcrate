"use client";
import { useEffect } from "react";

export const useGsapFaqAnimation = (
  faqRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const FaqAnimation = async () => {
      if (!faqRef.current) return;
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const target = faqRef.current.querySelector(".green-card");
      if (!target) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          target,
          {
            y: 50,
            scale: 0.5,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.3,
            scale: 1,
            scrollTrigger: {
              trigger: faqRef.current,
              start: "top 95%", // Start fading in when top hits bottom area
              end: "top 80%", // Finish fading in quickly
              scrub: true,
            },
          }
        );

        // Fade out when scrolling to middle
        gsap.to(target, {
          opacity: 1,
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 70%", // Start fading out as it rises past lower quarter
            end: "top 45%", // Finish fading out just before it hits exact center
            scrub: true,
          },
        });
      }, faqRef);

      return () => ctx.revert();
    };
    FaqAnimation();
  }, [faqRef]);
};
