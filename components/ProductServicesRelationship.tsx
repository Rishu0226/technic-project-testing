"use client";
import React from "react";
import { Plus, Equal, Layers, Code2 } from "lucide-react";

const ProductServicesRelationship: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B1221] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-3 font-sans">
            Our Hybrid Model
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
            The Technic Advantage
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Products Block */}
          <div className="flex-1 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 text-center hover:border-blue-500/30 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-500/20 blur-[50px] transition-all group-hover:bg-blue-500/40"></div>
            <div className="mx-auto w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
              <Layers className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4 font-heading">Products</h4>
            <p className="text-slate-400 font-sans mb-6 text-sm">
              We build our own proprietary software products to solve complex business challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['SaaS', 'Platforms', 'AI', 'Automation', 'Applications'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-sans">{tag}</span>
              ))}
            </div>
          </div>

          {/* Plus Icon */}
          <div className="hidden lg:flex flex-shrink-0 w-12 h-12 bg-white/5 rounded-full items-center justify-center border border-white/10 shadow-lg">
            <Plus className="w-6 h-6 text-slate-400" />
          </div>
          <div className="lg:hidden flex-shrink-0">
            <Plus className="w-8 h-8 text-slate-500" />
          </div>

          {/* Services Block */}
          <div className="flex-1 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 text-center hover:border-cyan-500/30 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-cyan-500/20 blur-[50px] transition-all group-hover:bg-cyan-500/40"></div>
            <div className="mx-auto w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 text-cyan-400">
              <Code2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4 font-heading">Services</h4>
            <p className="text-slate-400 font-sans mb-6 text-sm">
              We engineer custom technology solutions, infrastructure, and bespoke platforms for clients.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Software', 'Cloud', 'Mobile', 'APIs', 'Consulting'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-sans">{tag}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Equals and Result */}
        <div className="flex flex-col items-center justify-center mt-8 lg:mt-12">
          <div className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center mb-8">
            <Equal className="w-8 h-8 text-slate-500" />
          </div>
          
          <div className="w-full max-w-2xl bg-gradient-to-r from-blue-900/40 via-[#0B1221] to-cyan-900/40 border border-blue-500/20 rounded-[2rem] p-8 md:p-10 text-center shadow-[0_0_50px_rgba(37,99,235,0.1)] relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-50"></div>
             <h4 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-heading relative z-10 mb-4">
                Technic Technologies
             </h4>
             <p className="text-slate-300 font-sans relative z-10 text-lg">
               A modern technology partner capable of building standalone products and delivering enterprise-grade engineering.
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductServicesRelationship;
