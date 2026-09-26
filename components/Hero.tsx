import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";

interface HeroProps {
  badgeText?: string;
  title?: React.ReactNode;
  description?: string;
  primaryActionText?: string;
  primaryActionHref?: string;
  secondaryActionText?: string;
  secondaryActionHref?: string;
  showBottomFade?: boolean;
  sideImage?: string;
  sideImageAlt?: string;
  sideImageWidth?: number;
  sideImageHeight?: number;
  side?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  badgeText = "TECHNOLOGY • INNOVATION • ENGINEERING",
  title = (
    <>
      We Build <span className="text-technic-cyan">Technology</span> That{" "}
      <br className="hidden md:block" />
      Moves Businesses <span className="text-technic-orange">Forward.</span>
    </>
  ),
  description = "We build scalable digital products and engineer custom technology solutions that help businesses automate, grow and compete in a digital world.",
  primaryActionText = "Explore Our Products",
  primaryActionHref = "/products",
  secondaryActionText = "Explore Services",
  secondaryActionHref = "/services",
  showBottomFade = true,
  sideImage,
  sideImageAlt = "",
  sideImageWidth = 1671,
  sideImageHeight = 941,
  side,
}) => {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/Home/background.png')] bg-cover bg-top bg-no-repeat opacity-60"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="text-center lg:text-left max-w-2xl lg:w-1/2">
          {badgeText && (
            <div data-hero className="inline-flex items-center space-x-2 bg-technic-cyan-soft border border-technic-cyan/20 rounded-full px-5 py-2 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-technic-cyan" />
              <span className="text-technic-cyan-deep text-xs sm:text-sm font-semibold tracking-[0.14em]">
                {badgeText}
              </span>
            </div>
          )}
          <h1 data-hero className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-technic-text tracking-tight mb-6 leading-tight">
            {title}
          </h1>
          <p data-hero className="text-lg md:text-xl text-technic-secondary mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {description}
          </p>
          <div data-hero className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            {primaryActionText && primaryActionHref && (
              <a
                href={primaryActionHref}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-gradient text-white px-8 py-4 rounded-full font-semibold text-base shadow-tn-md transition-opacity duration-200 hover:opacity-95"
              >
                {primaryActionText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            )}
            {secondaryActionText && secondaryActionHref && (
              <a
                href={secondaryActionHref}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-technic-border text-technic-text px-8 py-4 rounded-full font-semibold text-base transition-colors duration-200 hover:border-technic-cyan hover:text-technic-cyan-deep"
              >
                {secondaryActionText}
              </a>
            )}
          </div>
        </div>

        <div data-hero-visual className="relative flex w-full justify-center lg:w-1/2">
          {side ? (
            side
          ) : sideImage ? (
            <Image
              src={sideImage}
              alt={sideImageAlt}
              width={sideImageWidth}
              height={sideImageHeight}
              priority
              className="h-auto w-full"
            />
          ) : (
            <HeroVisual />
          )}
        </div>
      </div>

      {showBottomFade && (
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-technic-bg to-transparent z-10 pointer-events-none" />
      )}
    </section>
  );
};

export default Hero;
