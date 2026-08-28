import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import BackgroundLights from "./BackgroundLights";

interface HeroProps {
  badgeText?: string;
  title?: React.ReactNode;
  description?: string;
  primaryActionText?: string;
  primaryActionHref?: string;
  secondaryActionText?: string;
  secondaryActionHref?: string;
  showBottomFade?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  badgeText = "PRODUCTS • ENGINEERING • INNOVATION",
  title = (
    <>
      We Build Technology That <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-amber-300 animate-gradient-x">
        Moves Businesses Forward.
      </span>
    </>
  ),
  description = "We build scalable digital products and engineer custom technology solutions that help businesses automate, grow and compete in a digital world.",
  primaryActionText = "Explore Our Products",
  primaryActionHref = "/products",
  secondaryActionText = "Explore Services",
  secondaryActionHref = "/services",
  showBottomFade = true,
}) => {
  return (
    <section
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0B1221] min-h-screen flex items-center"
    >
      <BackgroundLights />

      {/* Subtle topographic or grid overlay for tech feel */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04] z-0 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12">
        <div className="text-center lg:text-left max-w-2xl lg:w-1/2">
          {badgeText && (
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.02)]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"></span>
              <span className="text-slate-200 text-sm font-medium tracking-wide">
                {badgeText}
              </span>
            </div>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight mb-8 leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light font-sans">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            {primaryActionText && primaryActionHref && (
              <a
                href={primaryActionHref}
                className="w-full sm:w-auto relative group overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-cyan-400/50 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center font-sans"
              >
                <span className="relative z-10 flex items-center">
                  {primaryActionText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            )}
            {secondaryActionText && secondaryActionHref && (
              <a
                href={secondaryActionHref}
                className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/5 backdrop-blur-sm flex items-center justify-center hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] font-sans"
              >
                {secondaryActionText}
              </a>
            )}
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative flex justify-center mt-12 lg:mt-0">
           <video 
             autoPlay 
             loop 
             muted 
             playsInline 
             className="w-full max-w-lg lg:max-w-xl object-contain drop-shadow-[0_0_40px_rgba(37,99,235,0.2)] rounded-3xl"
           >
             <source src="/Assest/hero.mp4" type="video/mp4" />
             Your browser does not support the video tag.
           </video>
        </div>
      </div>

      {/* Bottom fade blending into the deep navy */}
      {showBottomFade && (
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B1221] to-transparent z-10"></div>
      )}
    </section>
  );
};

export default Hero;
