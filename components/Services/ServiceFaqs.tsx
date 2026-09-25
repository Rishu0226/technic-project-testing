"use client";

import { useState } from "react";

export default function ServiceFaqs({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question} className="rounded-2xl border border-technic-border bg-white">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-lg font-bold text-technic-text"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              {item.question}
              <span className="text-technic-cyan-deep" aria-hidden="true">{expanded ? "−" : "+"}</span>
            </button>
            {expanded && <p className="px-5 pb-5 leading-relaxed text-technic-secondary">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
