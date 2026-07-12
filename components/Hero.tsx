import React from "react";
import { ArrowRight } from "lucide-react";
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
  badgeText = "5 Proprietary Products & Elite IT Services",
  title = (
    <>
      Architecting the <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-amber-300 animate-gradient-x">
        Digital Future.
      </span>
    </>
  ),
  description = "TechNic Technologies is a comprehensive hybrid firm. We build highly customized websites, apps, and DevOps solutions, while licensing out our 5 industry-leading proprietary technology platforms.",
  primaryActionText = "Explore Services",
  primaryActionHref = "/services",
  secondaryActionText = "View Our Products",
  secondaryActionHref = "/products",
  showBottomFade = true,
}) => {
  return (
    <section
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0B1221] min-h-screen flex items-center"
    >
      <BackgroundLights />

      {/* Subtle topographic or grid overlay for tech feel */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04] z-0 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {badgeText && (
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.02)]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-pulse"></span>
              <span className="text-slate-200 text-sm font-medium tracking-wide">
                {badgeText}
              </span>
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {primaryActionText && primaryActionHref && (
              <a
                href={primaryActionHref}
                className="w-full sm:w-auto relative group overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-orange-400/50 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center">
                  {primaryActionText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-rose-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            )}
            {secondaryActionText && secondaryActionHref && (
              <a
                href={secondaryActionHref}
                className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/5 backdrop-blur-sm flex items-center justify-center hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                {secondaryActionText}
              </a>
            )}
          </div>
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
