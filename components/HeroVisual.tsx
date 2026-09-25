import React from "react";

const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl" aria-hidden="true">
      <div className="absolute -top-6 -right-4 h-24 w-24 rounded-full bg-technic-orange/15 blur-2xl" />
      <div className="absolute -bottom-8 -left-6 h-28 w-28 rounded-full bg-technic-cyan/20 blur-2xl" />
      <div className="relative rounded-[1.75rem] border border-technic-border bg-white p-6 shadow-tn-lg">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-technic-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-technic-cyan/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-technic-orange/70" />
          </div>
          <span className="rounded-full bg-technic-cyan-soft px-3 py-1 text-[11px] font-semibold tracking-wide text-technic-cyan-deep">
            PLATFORM
          </span>
        </div>
        <svg viewBox="0 0 480 320" className="h-auto w-full" role="img">
          <title>Technology platform illustration</title>
          <rect x="0" y="0" width="480" height="320" rx="18" fill="var(--background)" />
          <path d="M40 250 C120 180, 180 220, 240 150 C300 80, 360 120, 440 70" fill="none" stroke="var(--brand-cyan)" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 270 C130 230, 190 250, 250 190 C320 120, 370 160, 440 110" fill="none" stroke="var(--brand-orange)" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <circle cx="120" cy="206" r="8" fill="var(--surface)" stroke="var(--brand-cyan)" strokeWidth="3" />
          <circle cx="240" cy="150" r="8" fill="var(--surface)" stroke="var(--brand-cyan)" strokeWidth="3" />
          <circle cx="360" cy="108" r="8" fill="var(--surface)" stroke="var(--brand-orange)" strokeWidth="3" />
          <rect x="36" y="36" width="150" height="78" rx="14" fill="var(--surface)" stroke="var(--border)" />
          <rect x="52" y="54" width="72" height="8" rx="4" fill="var(--cyan-soft)" />
          <rect x="52" y="72" width="110" height="8" rx="4" fill="var(--brand-cyan)" />
          <rect x="52" y="90" width="86" height="8" rx="4" fill="var(--border)" />
          <rect x="294" y="36" width="150" height="78" rx="14" fill="var(--surface)" stroke="var(--border)" />
          <circle cx="330" cy="75" r="18" fill="var(--orange-soft)" />
          <path d="M330 66 v18 M321 75 h18" stroke="var(--brand-orange)" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="358" y="58" width="64" height="8" rx="4" fill="var(--text-primary)" opacity="0.8" />
          <rect x="358" y="76" width="48" height="8" rx="4" fill="var(--border)" />
          <rect x="36" y="200" width="92" height="72" rx="14" fill="var(--surface)" stroke="var(--border)" />
          <rect x="50" y="216" width="40" height="8" rx="4" fill="var(--text-muted)" opacity="0.35" />
          <rect x="50" y="236" width="18" height="22" rx="4" fill="var(--cyan-soft)" />
          <rect x="74" y="224" width="18" height="34" rx="4" fill="var(--brand-cyan)" />
          <rect x="98" y="230" width="16" height="28" rx="4" fill="var(--brand-orange)" />
        </svg>
      </div>
    </div>
  );
};

export default HeroVisual;
