"use client";

import { useEffect } from "react";

export const useGsapHowItWorksAnimation = (
  howItWorksRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const animateHowItWorksSection = async () => {
      if (!howItWorksRef.current) return;
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      const targets =
        howItWorksRef.current?.querySelectorAll(".card-animation");
      if (!targets || targets.length === 0) return;

      // More obvious animation: scale, rotate, fade, and bounce in
      const ctx = gsap.context(() => {
        gsap.fromTo(
          targets,
          {
            y: 80,
            opacity: 0,
            scale: 0.7,
            rotate: -10,
            filter: "blur(8px)",
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "bounce.out",
            stagger: 0.18,
            scrollTrigger: {
              trigger: howItWorksRef.current,
              start: "top 90%",
              scrub: 0.3,
            },
          }
        );
      }, howItWorksRef);

      // Clean up the gsap context
      return () => ctx.revert();
    };
    // Call the animation function
    animateHowItWorksSection();
  }, [howItWorksRef]);
};
