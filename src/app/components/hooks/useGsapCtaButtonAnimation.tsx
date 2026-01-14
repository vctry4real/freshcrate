"use client";

import { useEffect } from "react";

export const useGsapCtaButtonAnimation = (
  ctaButtonRef: React.RefObject<HTMLButtonElement | null>
) => {
  useEffect(() => {
    const ctaButtonAnimation = async () => {
      if (!ctaButtonRef.current) return;
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      const target = ctaButtonRef.current;
      if (!target) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          target,
          {
            y: 10,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            repeat: 2,
            duration: 1.3,
            ease: "bounce",
            ScrollTrigger: {
              trigger: "ctaButtonRef",
              start: "top 90%",
              scrub: 0.3,
            },
          }
        );
      }, ctaButtonRef);

      return () => ctx.revert();
    };
    ctaButtonAnimation();
  }, [ctaButtonRef]);
};
