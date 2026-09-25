"use client";

import { useEffect, useRef, useState } from "react";
import type { LegalSectionData } from "./legalContent";
import { useActiveSection } from "./useActiveSection";

export default function LegalSidebar({ sections }: { sections: LegalSectionData[] }) {
  const { activeSection, activate } = useActiveSection(sections.map((section) => section.id));
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const current = nav?.querySelector<HTMLButtonElement>("[aria-current='true']");
    if (!nav || !current) return;
    const navRect = nav.getBoundingClientRect();
    const itemRect = current.getBoundingClientRect();
    if (itemRect.top < navRect.top) nav.scrollTop -= navRect.top - itemRect.top;
    else if (itemRect.bottom > navRect.bottom) nav.scrollTop += itemRect.bottom - navRect.bottom;
  }, [activeSection]);

  const jump = (id: string) => {
    activate(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const links = (
    <ul className="space-y-1">
      {sections.map((section) => {
        const current = activeSection === section.id;
        return (
          <li key={section.id}>
            <button
              type="button"
              aria-current={current ? "true" : undefined}
              onClick={() => jump(section.id)}
              className={`block w-full rounded-xl border-l-2 px-3 py-2 text-left text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-technic-cyan ${current ? "border-technic-cyan bg-technic-cyan-soft font-medium text-technic-cyan-deep" : "border-transparent text-technic-muted hover:text-technic-cyan-deep"}`}
            >
              {section.title}
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside className="md:sticky md:top-28 md:z-10 md:w-[220px] md:shrink-0 md:self-start lg:w-[260px]">
      <div className="rounded-2xl border border-technic-border bg-white p-4 shadow-tn-card lg:p-5">
        <button
          type="button"
          className="flex w-full items-center justify-between font-heading text-lg font-bold text-technic-text md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          On This Page
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <p className="mb-4 hidden font-heading text-lg font-bold text-technic-text md:block">On This Page</p>
        <nav ref={navRef} aria-label="On this page" className={open ? "mt-4 block max-h-[calc(100vh-12rem)] overflow-y-auto" : "mt-4 hidden max-h-[calc(100vh-12rem)] overflow-y-auto md:block"}>
          {links}
        </nav>
      </div>
    </aside>
  );
}
