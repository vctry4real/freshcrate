"use client";

import { useEffect } from "react";

export const useGsapHeroAnimation = (
  heroRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const animateHeroSection = async () => {
      // Ensure the heroRef is defined before proceeding or is assigned to a valid HTMLDivElement
      if (!heroRef.current) return;

      // Dynamically import gsap and ScrollTrigger to avoid SSR issues
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Ensure the target elements are present
      const target = heroRef.current.querySelectorAll("h2, p, img");
      // Check if target elements exist
      if (!target) return;

      // Create a gsap context to manage the animations
      // This allows us to scope the animations to the hero section
      // and avoid conflicts with other animations on the page
      // It also ensures that the animations are cleaned up properly
      const ctx = gsap.context(() => {
        gsap.fromTo(
          target,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 90%",
              scrub: 0.3,
            },
          }
        );
      }, heroRef);

      //cleanup function to revert the gsap context
      // This is important to prevent memory leaks and unwanted animations
      return () => ctx.revert();
    };
    animateHeroSection();
  }, [heroRef]);
};

//How to use this hook in a component
// import { useGsapHeroAnimation } from './path/to/useGsapHeroAnimation';
// const heroRef = useRef<HTMLDivElement>(null);
// useGsapHeroAnimation(heroRef);
// <div ref={heroRef}>...</div>
