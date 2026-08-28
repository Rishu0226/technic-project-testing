import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import BackgroundLights from "./BackgroundLights";
import { products } from "../lib/data";

const ProductsSection: React.FC = () => {
  return (
    <section
      id="products"
      className="py-24 bg-[#0B1221] relative overflow-hidden"
    >
      <BackgroundLights />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-semibold tracking-widest uppercase text-sm mb-3 drop-shadow-sm font-sans">
              Our Products
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
              Proprietary Platforms
            </h3>
            <p className="text-lg text-slate-400 font-light font-sans">
              Technology products built to solve real-world business problems.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <Link
              href="/#contact"
              className="hidden lg:inline-flex items-center justify-center px-6 py-3 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-base font-medium rounded-full text-white bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all"
            >
              Request Platform Demo
            </Link>
          </div>
        </div>

        <div className="space-y-16">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row gap-12 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.15)] transition-all duration-700 relative overflow-hidden ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
            >
              {/* Abstract fluid background glow inside product card */}
              <div
                className={`absolute ${idx % 2 === 0 ? "-left-20" : "-right-20"} top-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-br from-orange-600/10 to-rose-600/10 rounded-full blur-[100px] pointer-events-none`}
              ></div>

              <div className="flex-1 w-full relative z-10">
                {/* Glassmorphic product illustration with dark navy/slate base */}
                <div className="aspect-video bg-[#131C31]/60 border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent"></div>

                  {/* Animated scanning line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 group-hover:animate-[scan_3s_ease-in-out_infinite]"></div>

                  <div className="relative z-10 w-28 h-28 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(249,115,22,0.15)] group-hover:shadow-[0_0_70px_rgba(249,115,22,0.3)] transition-all duration-500 group-hover:scale-110">
                    {product.icon}
                  </div>

                  {/* Decorative UI elements mimicking AI software */}
                  <div className="absolute top-5 left-5 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-600/80 border border-white/10"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600/80 border border-white/10"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600/80 border border-white/10"></div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 h-32 bg-[#0B1221]/70 backdrop-blur-xl rounded-2xl border border-white/10 p-5 flex flex-col justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-center mb-2">
                      <div className="h-2 w-1/3 bg-orange-500/60 rounded-full"></div>
                      <div className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,1)] animate-pulse"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-gradient-to-r from-orange-500 to-rose-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative z-10">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-300 font-semibold text-sm mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                  <Sparkles className="w-4 h-4 mr-2 text-amber-400" />
                  {product.name}
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md font-heading">
                  {product.tagline}
                </h4>
                <p className="text-lg text-slate-300 mb-8 font-light font-sans">
                  {product.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-center text-slate-200 font-medium"
                    >
                      <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-3 flex-shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.03)]">
                        <CheckCircle2 className="w-4 h-4 text-orange-400" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className="inline-flex items-center text-white bg-white/5 backdrop-blur-md border border-white/20 hover:border-cyan-500/60 px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:bg-white/10 font-sans"
                >
                  Explore {product.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(220px); }
          100% { transform: translateY(0); }
        }
      `,
        }}
      />
    </section>
  );
};

export default ProductsSection;
