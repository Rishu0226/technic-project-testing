"use client";

import React from "react";
import Link from "next/link";
const services = [
  {
    text: "AI SOLUTIONS",
    position: "top-[8%] right-[10%]",
    entranceDelay: "0.9s",
    floatDelay: "1.8s",
  },
  {
    text: "WEB DEVELOPMENT",
    position: "left-[2%] top-[27%]",
    entranceDelay: "1.1s",
    floatDelay: "2s",
  },
  {
    text: "MOBILE APPS",
    position: "right-[0%] top-[55%]",
    entranceDelay: "1.3s",
    floatDelay: "2.2s",
  },
  {
    text: "CLOUD SOLUTIONS",
    position: "left-[9%] bottom-[17%]",
    entranceDelay: "1.5s",
    floatDelay: "2.4s",
  },
  {
    text: "DIGITAL PRODUCTS",
    position: "right-[15%] bottom-[4%]",
    entranceDelay: "1.7s",
    floatDelay: "2.6s",
  },
];

export default function ContactHero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#0B1221] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Orange glow */}
        <div className="absolute left-[15%] top-[30%] h-[420px] w-[420px] rounded-full bg-orange-500/[0.07] blur-[140px]" />

        {/* Purple glow */}
        <div className="absolute right-[5%] top-[15%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.06] blur-[150px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/[0.035] blur-[120px]" />
      </div>

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <span className="contact-particle particle-1" />
        <span className="contact-particle particle-2" />
        <span className="contact-particle particle-3" />
        <span className="contact-particle particle-4" />
        <span className="contact-particle particle-5" />
        <span className="contact-particle particle-6" />
        <span className="contact-particle particle-7" />
        <span className="contact-particle particle-8" />
        <span className="contact-particle particle-9" />
        <span className="contact-particle particle-10" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-8">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="contact-hero-content relative z-20 max-w-3xl">
            {/* Label */}

            <div className="contact-hero-label mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-gradient-to-r from-orange-500 to-purple-500" />

              <span className="font-mono text-xs font-medium tracking-[0.35em] text-slate-100">
                CONTACT TECHNIC
              </span>
            </div>

            {/* Heading */}

            <h1 className="contact-hero-title text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[82px]">
              Let&apos;s Build
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-purple-500 bg-clip-text text-transparent">
                What&apos;s Next.
              </span>
            </h1>

            {/* Description */}

            <p className="contact-hero-description mt-8 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Have an idea, a challenge, or a product in mind?
              <br className="hidden sm:block" />
              Let&apos;s turn it into a scalable digital solution.
            </p>

            {/* CTA + Status */}

            <div className="contact-hero-cta mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/#contact"
                className="contact-cta group relative inline-flex items-center gap-5 overflow-hidden rounded-full border border-orange-500/60 bg-orange-500/[0.04] py-3 pl-7 pr-3 transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/10"
              >
                <span className="relative z-10 text-sm font-medium tracking-[0.12em] text-white">
                  START A CONVERSATION
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-xl text-[#0B1221] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              {/* Status */}

              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-emerald-400">
                    SYSTEM ONLINE
                  </p>

                  <p className="mt-1 text-xs text-slate-300">
                    We&apos;re ready to listen
                  </p>
                </div>
              </div>
            </div>

            {/* Small technology line */}

            <div className="contact-tech-line mt-12 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="font-mono text-[15px] tracking-[0.2em] text-slate-200">
                SPECIALIZED IN
              </span>

              <span className="h-px w-6 bg-white/10" />

              <span className="font-mono text-[14px] tracking-[0.15em] text-slate-100">
                WEB
              </span>

              <span className="text-slate-700">•</span>

              <span className="font-mono text-[14px] tracking-[0.15em] text-slate-100">
                MOBILE
              </span>

              <span className="text-slate-700">•</span>

              <span className="font-mono text-[14px] tracking-[0.15em] text-slate-100">
                AI
              </span>

              <span className="text-slate-700">•</span>

              <span className="font-mono text-[14px] tracking-[0.15em] text-slate-100">
                CLOUD
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE — CONNECTION VISUAL
          ===================================================== */}

          <div className="contact-visual relative mx-auto flex h-[480px] w-full max-w-[560px] items-center justify-center lg:h-[600px]">
            {/* Outer glow */}

            <div className="absolute h-[260px] w-[260px] rounded-full bg-orange-500/[0.035] blur-[70px] sm:h-[340px] sm:w-[340px] lg:h-[430px] lg:w-[430px]" />

            {/* =================================================
                OUTER ORBIT
            ================================================= */}

            <div className="orbit-outer absolute h-[340px] w-[340px] rounded-full border border-orange-500/10 sm:h-[410px] sm:w-[410px] lg:h-[480px] lg:w-[480px]">
              <div className="orbit-dot orbit-dot-1" />
              <div className="orbit-dot orbit-dot-2" />
            </div>

            {/* =================================================
                SECOND ORBIT
            ================================================= */}

            <div className="orbit-middle absolute h-[270px] w-[270px] rotate-[25deg] rounded-full border border-purple-500/15 sm:h-[330px] sm:w-[330px] lg:h-[390px] lg:w-[390px]">
              <div className="orbit-dot orbit-dot-3" />
              <div className="orbit-dot orbit-dot-4" />
            </div>

            {/* =================================================
                INNER ORBIT
            ================================================= */}

            <div className="orbit-inner absolute h-[190px] w-[190px] rotate-[-20deg] rounded-full border border-orange-400/20 sm:h-[240px] sm:w-[240px] lg:h-[300px] lg:w-[300px]">
              <div className="orbit-dot orbit-dot-5" />
            </div>

            {/* =================================================
                CONNECTION LINES
            ================================================= */}

            <div className="connection-lines absolute h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] lg:h-[430px] lg:w-[430px]">
              <div className="connection-line line-1" />
              <div className="connection-line line-2" />
              <div className="connection-line line-3" />
              <div className="connection-line line-4" />
            </div>

            {/* =================================================
                CENTRAL CORE
            ================================================= */}

            <div className="central-core relative z-10 flex h-[150px] w-[150px] items-center justify-center rounded-full border border-orange-400/30 bg-[#0B1221]/90 shadow-[0_0_80px_rgba(249,115,22,0.12)] backdrop-blur-xl sm:h-[180px] sm:w-[180px]">
              {/* Outer pulse */}

              <div className="core-ring absolute inset-[-18px] rounded-full border border-orange-500/10" />

              <div className="core-ring-2 absolute inset-[-35px] rounded-full border border-purple-500/[0.06]" />

              {/* Core */}

              <div className="core-center relative flex h-16 w-16 items-center justify-center rounded-full border border-orange-400/50 bg-orange-500/10">
                <div className="h-5 w-5 rounded-full bg-orange-400 shadow-[0_0_35px_rgba(249,115,22,0.9)] animate-pulse" />
              </div>

              {/* Core text */}

              <div className="absolute -bottom-12 whitespace-nowrap text-center">
                <p className="font-mono text-[10px] tracking-[0.3em] text-slate-400">
                  YOUR IDEA
                </p>

                <p className="mt-1 text-[10px] tracking-[0.25em] text-orange-400">
                  STARTS HERE
                </p>
              </div>
            </div>

            {/* =================================================
                SERVICE NODES
            ================================================= */}

            {services.map((service, index) => (
              <div
                key={service.text}
                className={`service-node absolute z-20 ${service.position}`}
                style={
                  {
                    "--entrance-delay": service.entranceDelay,
                    "--float-delay": service.floatDelay,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inset-0 rounded-full bg-orange-400 opacity-40 blur-[4px]" />

                    <span className="relative h-2.5 w-2.5 rounded-full border border-orange-300/70 bg-orange-400" />
                  </span>

                  <span className="whitespace-nowrap text-[24px] tracking-[0.18em] text-slate-100 sm:text-[12px]">
                    {service.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM INFORMATION BAR
      ========================================================= */}

      <div className="mt-25">
        <div className="contact-bottom-bar  absolute bottom-0 left-0 right-0 z-20  hidden border-t border-white/[0.06] bg-[#0B1221]/60 backdrop-blur-xl lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-12 py-5">
            <InfoItem
              symbol="⚡"
              title="< 24 HOURS"
              subtitle="RESPONSE TIME"
            />

            <div className="h-8 w-px bg-white/10" />

            <InfoItem
              symbol="✉"
              title="LET'S TALK"
              subtitle="START A PROJECT"
            />

            <div className="h-8 w-px bg-white/10" />

            <InfoItem
              symbol="◉"
              title="WEB • MOBILE • AI"
              subtitle="OUR EXPERTISE"
            />

            <div className="h-8 w-px bg-white/10" />

            <InfoItem
              symbol="✦"
              title="OPEN FOR PROJECTS"
              subtitle="LET'S BUILD TOGETHER"
            />
          </div>
        </div>
      </div>

      {/* =========================================================
        

            {/* =========================================================
          ALL ANIMATIONS
      ========================================================= */}

      <style jsx>{`
        /* =======================================================
           PAGE LOAD — LEFT CONTENT
        ======================================================= */

        .contact-hero-content {
          animation: heroContentIn 0.9s cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .contact-hero-label {
          opacity: 0;
          animation: heroLabelIn 0.7s ease-out 0.1s forwards;
        }

        .contact-hero-title {
          opacity: 0;
          animation: heroTitleIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s
            forwards;
        }

        .contact-hero-description {
          opacity: 0;
          animation: heroDescriptionIn 0.8s ease-out 0.4s forwards;
        }

        .contact-hero-cta {
          opacity: 0;
          animation: heroCtaIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s
            forwards;
        }

        .contact-tech-line {
          opacity: 0;
          animation: heroDescriptionIn 0.8s ease-out 0.8s forwards;
        }

        /* =======================================================
           PAGE LOAD — RIGHT VISUAL
        ======================================================= */

        .contact-visual {
          opacity: 0;
          animation: visualIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.25s
            forwards;
        }

        .orbit-outer {
          animation:
            orbitOuterSpin 28s linear infinite,
            orbitAppear 1.2s ease-out 0.35s both;
        }

        .orbit-middle {
          animation:
            orbitMiddleSpin 22s linear infinite reverse,
            orbitAppear 1.2s ease-out 0.45s both;
        }

        .orbit-inner {
          animation:
            orbitInnerSpin 17s linear infinite,
            orbitAppear 1.1s ease-out 0.55s both;
        }

        .connection-lines {
          opacity: 0;
          animation:
            connectionAppear 1s ease-out 0.6s forwards,
            connectionPulse 5s ease-in-out 2s infinite;
        }

        .central-core {
          opacity: 0;
          animation:
            coreAppear 1s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards,
            coreFloat 5s ease-in-out 2s infinite;
        }

        .core-ring {
          animation: corePulse 3s ease-in-out 2s infinite;
        }

        .core-ring-2 {
          animation: corePulse2 4s ease-in-out 2s infinite;
        }

        /* =======================================================
           SERVICE NODES
        ======================================================= */

        .service-node {
          opacity: 0;

          animation:
            nodeEntrance 0.7s cubic-bezier(0.22, 1, 0.36, 1)
              var(--entrance-delay) forwards,
            nodeFloat 4s ease-in-out var(--float-delay) infinite;
        }

        /* =======================================================
           PARTICLES
        ======================================================= */

        .contact-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(249, 115, 22, 0.7);
          box-shadow: 0 0 12px rgba(249, 115, 22, 0.6);

          animation: particleFloat 5s ease-in-out infinite;
        }

        .particle-1 {
          left: 8%;
          top: 20%;
          animation-delay: 0s;
        }

        .particle-2 {
          left: 22%;
          top: 12%;
          animation-delay: 1s;
        }

        .particle-3 {
          left: 39%;
          top: 30%;
          animation-delay: 2s;
        }

        .particle-4 {
          right: 18%;
          top: 18%;
          animation-delay: 3s;
        }

        .particle-5 {
          right: 7%;
          top: 45%;
          animation-delay: 1.5s;
        }

        .particle-6 {
          left: 18%;
          bottom: 20%;
          animation-delay: 2.5s;
        }

        .particle-7 {
          left: 42%;
          bottom: 15%;
          animation-delay: 3.5s;
        }

        .particle-8 {
          right: 30%;
          bottom: 22%;
          animation-delay: 4s;
        }

        .particle-9 {
          right: 42%;
          top: 10%;
          animation-delay: 2.8s;
        }

        .particle-10 {
          left: 5%;
          bottom: 35%;
          animation-delay: 1.8s;
        }

        /* =======================================================
           CTA
        ======================================================= */

        .contact-cta {
          box-shadow:
            0 0 0 rgba(249, 115, 22, 0),
            inset 0 0 0 rgba(249, 115, 22, 0);

          transition:
            box-shadow 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .contact-cta:hover {
          box-shadow:
            0 0 35px rgba(249, 115, 22, 0.15),
            inset 0 0 25px rgba(249, 115, 22, 0.04);
        }

        /* =======================================================
           ORBIT DOTS
        ======================================================= */

        .orbit-dot {
          position: absolute;
          height: 7px;
          width: 7px;
          border-radius: 50%;
          background: #fb923c;
          box-shadow: 0 0 18px rgba(249, 115, 22, 0.9);
        }

        .orbit-dot-1 {
          left: 50%;
          top: -4px;
        }

        .orbit-dot-2 {
          bottom: 12%;
          right: -3px;
        }

        .orbit-dot-3 {
          left: 8%;
          top: 18%;
          background: #a855f7;
          box-shadow: 0 0 18px rgba(168, 85, 247, 0.8);
        }

        .orbit-dot-4 {
          bottom: 4%;
          right: 20%;
        }

        .orbit-dot-5 {
          left: 50%;
          top: -4px;
        }

        /* =======================================================
           CONNECTION LINES
        ======================================================= */

        .connection-line {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          height: 1px;
          transform-origin: center;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(249, 115, 22, 0.3),
            rgba(168, 85, 247, 0.25),
            transparent
          );
        }

        .line-1 {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .line-2 {
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .line-3 {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .line-4 {
          transform: translate(-50%, -50%) rotate(135deg);
        }

        /* =======================================================
           BOTTOM BAR
        ======================================================= */

        .contact-bottom-bar {
          opacity: 0;
          animation: bottomBarIn 0.8s ease-out 1.2s forwards;
        }

        .contact-scroll {
          opacity: 0;
          animation:
            scrollIn 0.8s ease-out 1.5s forwards,
            scrollFloat 2.5s ease-in-out 2.3s infinite;
        }

        /* =======================================================
           KEYFRAMES
        ======================================================= */

        @keyframes heroContentIn {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroLabelIn {
          from {
            opacity: 0;
            transform: translateX(-25px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes heroTitleIn {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.97);
            filter: blur(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes heroDescriptionIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroCtaIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes visualIn {
          from {
            opacity: 0;
            transform: scale(0.78) rotate(-5deg);
            filter: blur(6px);
          }

          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0);
          }
        }

        @keyframes orbitAppear {
          from {
            opacity: 0;
            transform: scale(0.6);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes orbitOuterSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitMiddleSpin {
          from {
            transform: rotate(25deg);
          }

          to {
            transform: rotate(-335deg);
          }
        }

        @keyframes orbitInnerSpin {
          from {
            transform: rotate(-20deg);
          }

          to {
            transform: rotate(340deg);
          }
        }

        @keyframes connectionAppear {
          from {
            opacity: 0;
            transform: scale(0.7);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes connectionPulse {
          0%,
          100% {
            opacity: 0.45;
          }

          50% {
            opacity: 0.9;
          }
        }

        @keyframes coreAppear {
          from {
            opacity: 0;
            transform: scale(0.5);
          }

          70% {
            opacity: 1;
            transform: scale(1.08);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes coreFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes corePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.35;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.8;
          }
        }

        @keyframes corePulse2 {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.15;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.4;
          }
        }

        @keyframes nodeEntrance {
          from {
            opacity: 0;
            transform: scale(0.4) translateY(10px);
          }

          70% {
            opacity: 1;
            transform: scale(1.08) translateY(0);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes nodeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }

          50% {
            transform: translateY(-18px) scale(1.5);
            opacity: 1;
          }
        }

        @keyframes bottomBarIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollIn {
          from {
            opacity: 0;
            transform: translate(-50%, 15px);
          }

          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes scrollFloat {
          0%,
          100% {
            transform: translate(-50%, 0);
          }

          50% {
            transform: translate(-50%, 7px);
          }
        }

        /* =======================================================
           ACCESSIBILITY
        ======================================================= */

        @media (prefers-reduced-motion: reduce) {
          .contact-hero-content,
          .contact-hero-label,
          .contact-hero-title,
          .contact-hero-description,
          .contact-hero-cta,
          .contact-tech-line,
          .contact-visual,
          .orbit-outer,
          .orbit-middle,
          .orbit-inner,
          .connection-lines,
          .central-core,
          .service-node,
          .contact-particle,
          .contact-bottom-bar,
          .contact-scroll,
          .core-ring,
          .core-ring-2 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }

        /* =======================================================
           MOBILE OPTIMIZATION
        ======================================================= */

        @media (max-width: 767px) {
          .contact-visual {
            height: 390px;
          }

          .orbit-outer {
            height: 290px;
            width: 290px;
          }

          .orbit-middle {
            height: 230px;
            width: 230px;
          }

          .orbit-inner {
            height: 165px;
            width: 165px;
          }

          .connection-lines {
            height: 250px;
            width: 250px;
          }

          .central-core {
            height: 125px;
            width: 125px;
          }

          .service-node {
            transform-origin: center;
          }
        }
      `}</style>
    </section>
  );
}


/* =============================================================
   INFO ITEM
============================================================= */

interface InfoItemProps {
  symbol: string;
  title: string;
  subtitle: string;
}

function InfoItem({
  symbol,
  title,
  subtitle,
}: InfoItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-orange-500/100 text-lg text-orange-400">
        {symbol}
      </div>

      <div>
        <p className="font-mono text-[15px] tracking-[0.15em] text-slate-100">
          {title}
        </p>

        <p className="mt-1 text-[12px] tracking-[0.12em] text-slate-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}