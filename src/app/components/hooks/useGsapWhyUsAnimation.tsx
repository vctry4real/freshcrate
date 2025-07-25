"use client";

import { useEffect } from "react";

export const useGsapWhyUs = (
  whyUsRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const animateWhyUs = async () => {
      if (!whyUsRef.current) return;
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);

      const target = whyUsRef.current.querySelector("video");
      if (!target) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          target,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1.1,
            opacity: 1,
            duration: 2.2,
            scrollTrigger: {
              trigger: whyUsRef.current,
              start: "top 90%",
              scrub:0.3
            },
          }
        );
      }, whyUsRef);

      return () => ctx.revert();
    };
    animateWhyUs();
  }, [whyUsRef]);
};
