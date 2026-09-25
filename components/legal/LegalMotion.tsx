"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const clear = "opacity,visibility,transform";

export default function LegalMotion({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const breadcrumb = root.querySelector("[data-breadcrumb]");
      if (breadcrumb) {
        gsap.from(breadcrumb, { autoAlpha: 0, y: 10, duration: 0.6, ease: "power3.out", clearProps: clear });
      }
      const hero = gsap.utils.toArray<HTMLElement>("[data-hero]");
      if (hero.length) {
        gsap.from(hero, { autoAlpha: 0, y: 25, duration: 0.7, stagger: 0.08, ease: "power3.out", clearProps: clear });
      }
      const visual = root.querySelector("[data-hero-visual]");
      if (visual) {
        gsap.from(visual, { autoAlpha: 0, scale: 0.97, duration: 0.8, ease: "power3.out", clearProps: clear });
      }
      const cards = root.querySelectorAll("[data-card]");
      if (cards.length) {
        gsap.from(cards, {
          scrollTrigger: { trigger: cards[0], start: "top 85%", once: true },
          autoAlpha: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: clear,
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
