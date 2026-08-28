import React from "react";
import Image from "next/image";
import BackgroundLights from "./BackgroundLights";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#0B1221] text-white relative overflow-hidden"
    >
      <BackgroundLights />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold tracking-widest uppercase text-sm mb-3 font-sans">
              The TechNic Advantage
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-md font-heading">
              We build products and engineer solutions.
            </h3>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed font-light font-sans">
              We are a technology company that builds its own products and delivers high-quality technology services. Our dedicated research lab fuels our proprietary product development, ensuring our tools stay years ahead of the market.
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light font-sans">
              Simultaneously, our enterprise service division implements these cutting-edge insights directly into custom client projects. Building products makes our engineering sharper; executing custom solutions makes our products battle-tested.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-orange-500/30">
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-2 drop-shadow-sm">
                  500+
                </div>
                <div className="text-slate-400 font-medium text-sm">
                  Deployments
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-rose-400/30">
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 mb-2 drop-shadow-sm">
                  5
                </div>
                <div className="text-slate-400 font-medium text-sm">
                  Proprietary Products
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-amber-400/30">
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-2 drop-shadow-sm">
                  50+
                </div>
                <div className="text-slate-400 font-medium text-sm">
                  Engineers
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-orange-500/30">
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 mb-2 drop-shadow-sm">
                  99%
                </div>
                <div className="text-slate-400 font-medium text-sm">
                  Client Retention
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Massive warm glow behind the image against the navy background */}
            <div
              className="aspect-square bg-gradient-to-tr from-orange-600/40 via-rose-500/20 to-transparent rounded-full blur-[90px] absolute inset-0 -z-10 animate-pulse"
              style={{ animationDuration: "7s" }}
            ></div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/Assest/about.png"
                alt="TechNic Infrastructure"
                fill
                className="object-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
