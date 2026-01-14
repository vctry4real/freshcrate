"use client";

import { useEffect } from "react";

export const useGsapWhyUs = (
  whyUsRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const animateWhyUs = async () => {
      if (!whyUsRef.current) return;

      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const video = whyUsRef.current.querySelector("video");
      const cards = gsap.utils.toArray<HTMLElement>(".whycard-animation");

      if (!video || cards.length === 0) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: whyUsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Video zoom + fade
        tl.fromTo(
          video,
          { scale: 0.8, opacity: 0 },
          { scale: 1.1, opacity: 1, duration: 2 }
        );

        // Slide cards in from the right
        tl.fromTo(
          cards,
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out",
          },
          "<" // sync with video animation
        );
      }, whyUsRef);

      return () => ctx.revert();
    };

    animateWhyUs();
  }, [whyUsRef]);
};
