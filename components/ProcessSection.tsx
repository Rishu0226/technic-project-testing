"use client";
import React from "react";
import { Search, PenTool, Palette, Code, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Understand the business problem and analyze requirements.",
    icon: Search,
  },
  {
    num: "02",
    title: "Define",
    description: "Create the product and technical strategy.",
    icon: PenTool,
  },
  {
    num: "03",
    title: "Design",
    description: "Shape the experience, architecture, and delivery plan.",
    icon: Palette,
  },
  {
    num: "04",
    title: "Develop",
    description: "Engineer the solution using modern technology.",
    icon: Code,
  },
  {
    num: "05",
    title: "Launch",
    description: "Deploy, validate, and iterate in production.",
    icon: Rocket,
  },
  {
    num: "06",
    title: "Scale",
    description: "Improve performance, reliability, and capabilities.",
    icon: TrendingUp,
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-technic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-technic-cyan-deep tracking-[0.18em] uppercase mb-3 font-sans">
            Our Engineering Methodology
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-technic-text font-heading mb-6">
            How We Build
          </h3>
          <p className="text-technic-secondary text-lg leading-relaxed">
            A unified product and engineering process designed for both our proprietary platforms and custom client solutions.
          </p>
          <div className="mx-auto mt-6 h-1 w-40 rounded-full bg-brand-gradient" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            const orange = Number(step.num) >= 5;
            return (
              <div
                key={step.num}
                className="bg-white border border-technic-border p-6 rounded-2xl shadow-tn-sm hover:border-technic-cyan hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${orange ? "bg-technic-orange-soft" : "bg-technic-cyan-soft"}`}>
                    <Icon className={`w-6 h-6 ${orange ? "text-technic-orange" : "text-technic-cyan-deep"}`} />
                  </div>
                  <span className={`text-sm font-semibold ${orange ? "text-technic-orange" : "text-technic-cyan"}`}>
                    {step.num}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-technic-text mb-2 font-heading">{step.title}</h4>
                <p className="text-technic-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
