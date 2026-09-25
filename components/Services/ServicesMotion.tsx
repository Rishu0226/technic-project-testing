"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const clear = "opacity,visibility,transform";

export default function ServicesMotion({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const hero = gsap.utils.toArray<HTMLElement>("[data-hero]");
      if (hero.length) {
        gsap.from(hero, {
          autoAlpha: 0,
          y: 24,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: clear,
        });
      }

      const visual = root.querySelector("[data-hero-visual]");
      if (visual) {
        gsap.from(visual, {
          autoAlpha: 0,
          y: 20,
          scale: 0.97,
          duration: 0.85,
          delay: 0.12,
          ease: "power3.out",
          clearProps: clear,
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((section) => {
        const copy = section.querySelector("[data-copy]");
        const cards = section.querySelectorAll("[data-card]");
        const trigger = { trigger: section, start: "top 80%", once: true };

        if (copy) {
          gsap.from(copy, {
            scrollTrigger: trigger,
            autoAlpha: 0,
            y: 30,
            duration: 0.7,
            ease: "power3.out",
            clearProps: clear,
          });
        }

        if (cards.length) {
          gsap.from(cards, {
            scrollTrigger: trigger,
            autoAlpha: 0,
            y: 25,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: clear,
          });
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
