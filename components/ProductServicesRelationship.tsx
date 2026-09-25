"use client";
import React from "react";
import { Plus, Equal, Layers, Code2 } from "lucide-react";

const ProductServicesRelationship: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-technic-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-technic-cyan-deep tracking-[0.18em] uppercase mb-3 font-sans">
            Our Hybrid Model
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-technic-text font-heading">
            The Technic Advantage
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 max-w-5xl mx-auto">
          <div className="flex-1 w-full bg-white border border-technic-border rounded-[1.5rem] p-8 md:p-10 text-center shadow-tn-card hover:border-technic-cyan hover:-translate-y-1 transition-all duration-300">
            <div className="mx-auto w-16 h-16 bg-technic-cyan-soft rounded-2xl flex items-center justify-center mb-6 text-technic-cyan-deep">
              <Layers className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-technic-text mb-4 font-heading">Products</h4>
            <p className="text-technic-secondary mb-6 text-sm">
              We build our own proprietary software products to solve complex business challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["SaaS", "Platforms", "AI", "Automation", "Applications"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-technic-cyan-soft rounded-full text-xs text-technic-cyan-deep">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full items-center justify-center border border-technic-border shadow-tn-sm hidden lg:flex">
            <Plus className="w-6 h-6 text-technic-orange" />
          </div>
          <div className="lg:hidden">
            <Plus className="w-8 h-8 text-technic-orange" />
          </div>

          <div className="flex-1 w-full bg-white border border-technic-border rounded-[1.5rem] p-8 md:p-10 text-center shadow-tn-card hover:border-technic-cyan hover:-translate-y-1 transition-all duration-300">
            <div className="mx-auto w-16 h-16 bg-technic-orange-soft rounded-2xl flex items-center justify-center mb-6 text-technic-orange">
              <Code2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-technic-text mb-4 font-heading">Services</h4>
            <p className="text-technic-secondary mb-6 text-sm">
              We engineer custom technology solutions, infrastructure, and bespoke platforms for clients.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Software", "Cloud", "Mobile", "APIs", "Consulting"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-technic-orange-soft rounded-full text-xs text-technic-orange-deep">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 lg:mt-12">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-8">
            <Equal className="w-8 h-8 text-technic-muted" />
          </div>

          <div className="w-full max-w-2xl bg-white border border-technic-border rounded-[1.5rem] p-8 md:p-10 text-center shadow-tn-md relative overflow-hidden">
            <div className="absolute left-0 top-0 h-1 w-full bg-brand-gradient" aria-hidden="true" />
            <h4 className="text-3xl md:text-4xl font-extrabold text-technic-text font-heading mb-4">
              Technic Technologies
            </h4>
            <p className="text-technic-secondary text-lg">
              A modern technology partner capable of building standalone products and delivering enterprise-grade engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductServicesRelationship;
