"use client";

import { useEffect } from "react";

export const useGsapHowItWorksAnimation = (
  howItWorksRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const animateHowItWorksSection = async () => {
      if (!howItWorksRef.current) return;

      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const targets =
        howItWorksRef.current?.querySelectorAll(".card-animation");
      if (!targets || targets.length === 0) return;

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
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: howItWorksRef.current,
              start: "top 90%", // 🔁 adjusted for earlier fire
              end: "bottom 70%",
              scrub: 0.3,
              // markers: true,
            },
          }
        );
      }, howItWorksRef);

      return () => ctx.revert(); // cleanup
    };

    animateHowItWorksSection();
  }, [howItWorksRef]);
};
