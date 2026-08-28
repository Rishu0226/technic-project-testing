import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import BackgroundLights from "./BackgroundLights";
import { services } from "../lib/data";

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 bg-[#0B1221] relative overflow-hidden"
    >
      <BackgroundLights />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-semibold tracking-widest uppercase text-sm mb-3 drop-shadow-sm font-sans">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
            Engineering Solutions
          </h3>
          <p className="text-lg text-slate-400 font-light font-sans">
            Leverage our elite engineering team to build custom websites, deploy
            mobile apps, and orchestrate modern DevOps architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]"
            >
              {/* Light flare effect on hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/30 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.2)]">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 relative z-10 font-heading">
                {service.title}
              </h4>
              <p className="text-slate-400 leading-relaxed mb-6 font-light relative z-10 group-hover:text-slate-200 transition-colors font-sans">
                {service.description}
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center text-orange-400 font-medium hover:text-rose-400 transition-colors relative z-10"
              >
                Learn more{" "}
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
