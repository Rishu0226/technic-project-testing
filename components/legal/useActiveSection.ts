"use client";

import { useEffect, useRef, useState } from "react";

const readingLine = 140;

function sectionAtReadingLine(ids: string[]) {
  let current = ids[0] ?? "";
  for (const id of ids) {
    const node = document.getElementById(id);
    if (!node) continue;
    if (node.getBoundingClientRect().top <= readingLine) current = id;
  }

  const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48;
  if (nearBottom) return ids[ids.length - 1] ?? current;
  return current;
}

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");
  const lockRef = useRef<string | null>(null);
  const idKey = sectionIds.join("|");

  const activate = (id: string) => {
    lockRef.current = id;
    setActiveSection(id);
  };

  useEffect(() => {
    const ids = idKey ? idKey.split("|") : [];
    if (!ids.length) return;

    let frame = 0;
    const sync = () => {
      const locked = lockRef.current;
      if (locked) {
        const node = document.getElementById(locked);
        const top = node?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
        if (top > readingLine + 8) return;
        lockRef.current = null;
      }
      const next = sectionAtReadingLine(ids);
      if (next) setActiveSection(next);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    };

    const release = () => {
      lockRef.current = null;
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchmove", release, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchmove", release);
    };
  }, [idKey]);

  return { activeSection, activate };
}
