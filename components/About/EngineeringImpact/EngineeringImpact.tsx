"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EngineeringCard from "./EngineeringCard";
import { engineeringCards, engineeringIntro } from "./engineeringData";
import "./engineeringImpact.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const clear = "opacity,visibility,transform";

export default function EngineeringImpact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const introDone = { current: false };
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const play = (mobile: boolean) => {
        introDone.current = false;
        gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
            once: true,
          },
          onComplete: () => {
            introDone.current = true;
          },
        })
          .from(".ei-eyebrow", {
            autoAlpha: 0,
            y: mobile ? 12 : 15,
            duration: 0.5,
            ease: "power2.out",
            clearProps: clear,
          })
          .from(
            ".ei-heading",
            {
              autoAlpha: 0,
              y: mobile ? 20 : 25,
              duration: mobile ? 0.55 : 0.7,
              ease: "power3.out",
              clearProps: clear,
            },
            "-=0.2",
          )
          .from(
            ".ei-desc",
            {
              autoAlpha: 0,
              y: mobile ? 12 : 15,
              duration: mobile ? 0.5 : 0.6,
              ease: "power3.out",
              clearProps: clear,
            },
            "-=0.25",
          )
          .from(
            ".ei-cta",
            {
              autoAlpha: 0,
              y: mobile ? 10 : 12,
              duration: 0.5,
              ease: "power2.out",
              clearProps: clear,
            },
            ">+0.08",
          )
          .from(
            ".ei-card",
            {
              autoAlpha: 0,
              y: mobile ? 20 : 24,
              scale: mobile ? 1 : 0.98,
              duration: mobile ? 0.55 : 0.65,
              stagger: mobile ? 0.08 : 0.1,
              ease: "power3.out",
              clearProps: clear,
            },
            "-=0.2",
          );
      };

      mm.add("(max-width: 767px)", () => play(true));

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        play(false);
        return bindHover(root, introDone, -2, 2, 0);
      });

      mm.add("(min-width: 1024px)", () => {
        play(false);
        const trigger = {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        };
        gsap.fromTo(copyRef.current, { y: 0 }, { y: -8, ease: "none", scrollTrigger: trigger });
        gsap.fromTo(cardsRef.current, { y: 0 }, { y: 5, ease: "none", scrollTrigger: { ...trigger } });
        return bindHover(root, introDone, -4, 4, -5);
      });
    }, root);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full" aria-labelledby="engineering-impact-heading">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div ref={copyRef} className="min-w-0 lg:col-span-4">
          <p className="ei-eyebrow mb-4 inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-technic-muted">
            <span className="h-0.5 w-6 rounded-full bg-technic-orange" aria-hidden />
            {engineeringIntro.eyebrow}
          </p>
          <h3
            id="engineering-impact-heading"
            className="ei-heading max-w-md font-heading text-3xl font-bold leading-[1.15] text-technic-text md:text-4xl"
          >
            {engineeringIntro.headingLead}{" "}
            <span className="text-technic-cyan">{engineeringIntro.highlight}</span>
          </h3>
          <p className="ei-desc mt-4 max-w-md text-sm leading-6 text-technic-secondary md:text-[15px] md:leading-7">
            {engineeringIntro.description}
          </p>
          <div className="mt-7">
            <Link href={engineeringIntro.href} className="ei-cta  text-sm">
              <span>{engineeringIntro.cta}</span>
              <ArrowRight className="ei-cta-arrow" size={16} aria-hidden />
            </Link>
          </div>
        </div>

        <div ref={cardsRef} className="min-w-0 lg:col-span-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
            {engineeringCards.map((card) => (
              <EngineeringCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function bindHover(
  root: HTMLElement,
  introDone: { current: boolean },
  lift: number,
  arrowX: number,
  rotate: number,
) {
  const cards = Array.from(root.querySelectorAll<HTMLElement>(".ei-card"));
  const cta = root.querySelector(".ei-cta");
  const ctaIcon = root.querySelector(".ei-cta-arrow");
  const stops: Array<() => void> = [];

  const watch = (el: Element, enter: () => void, leave: () => void) => {
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    stops.push(() => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    });
  };

  cards.forEach((card) => {
    const title = card.querySelector(".ei-title");
    const icon = card.querySelector(".ei-arrow-icon");
    watch(
      card,
      () => {
        if (!introDone.current) return;
        gsap.to(card, { y: lift, duration: 0.35, ease: "power2.out", overwrite: "auto" });
        if (title) gsap.to(title, { y: -2, duration: 0.3, ease: "power2.out", overwrite: "auto" });
        if (icon) gsap.to(icon, { x: arrowX, rotation: rotate, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      },
      () => {
        if (!introDone.current) return;
        gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
        if (title) gsap.to(title, { y: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
        if (icon) gsap.to(icon, { x: 0, rotation: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      },
    );
  });

  if (cta instanceof HTMLElement) {
    watch(
      cta,
      () => {
        if (!introDone.current) return;
        gsap.to(cta, { y: -1, duration: 0.28, ease: "power2.out", overwrite: "auto" });
        if (ctaIcon) gsap.to(ctaIcon, { x: 4, duration: 0.28, ease: "power2.out", overwrite: "auto" });
      },
      () => {
        if (!introDone.current) return;
        gsap.to(cta, { y: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
        if (ctaIcon) gsap.to(ctaIcon, { x: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      },
    );
  }

  return () => {
    stops.forEach((stop) => stop());
    if (!introDone.current) return;
    const moved = root.querySelectorAll(".ei-card, .ei-title, .ei-arrow-icon, .ei-cta, .ei-cta-arrow");
    gsap.killTweensOf(moved);
    gsap.set(moved, { clearProps: "transform" });
  };
}
