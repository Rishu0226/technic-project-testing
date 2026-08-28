"use client";
import React from "react";
import { Search, PenTool, Code, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Understand the business problem and analyze requirements.",
    icon: <Search className="w-6 h-6 text-blue-400" />,
  },
  {
    num: "02",
    title: "Define",
    description: "Create the product and technical strategy.",
    icon: <PenTool className="w-6 h-6 text-blue-400" />,
  },
  {
    num: "03",
    title: "Build",
    description: "Engineer the solution using modern technology.",
    icon: <Code className="w-6 h-6 text-cyan-400" />,
  },
  {
    num: "04",
    title: "Launch",
    description: "Deploy, validate, and iterate in production.",
    icon: <Rocket className="w-6 h-6 text-cyan-400" />,
  },
  {
    num: "05",
    title: "Scale",
    description: "Improve performance, reliability, and capabilities.",
    icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B1221] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-3 font-sans">
            Our Engineering Methodology
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white font-heading mb-6">
            How We Build
          </h3>
          <p className="text-slate-400 text-lg font-sans font-light leading-relaxed">
            A unified product and engineering process designed for both our proprietary platforms and custom client solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (hidden on mobile) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-white/10 group-hover:bg-blue-500/30 transition-colors z-0"></div>
              )}
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl relative z-10 h-full flex flex-col items-start md:items-center text-left md:text-center hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 shadow-inner">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-heading flex items-center md:flex-col md:items-center">
                  <span className="text-sm text-blue-400 mr-2 md:mr-0 md:mb-1 font-technical">{step.num} —</span>
                  {step.title}
                </h4>
                <p className="text-slate-400 font-sans text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
