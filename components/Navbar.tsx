"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../lib/data";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#0B1221]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mr-3 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 to-rose-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-white font-bold text-xl relative z-10">
                TN
              </span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">
              TechNic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-amber-400">
                Technologies
              </span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block flex space-x-8 items-center bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="/#contact"
              className="relative group overflow-hidden bg-white/5 backdrop-blur-md border border-orange-500/30 hover:border-orange-400 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] flex items-center"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 bg-white/10 rounded-lg backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors"
            >
              {mobileMenuOpen ? (
               <X className="w-6 h-6" />
              ) : (
               <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0B1221]/95 backdrop-blur-2xl border-t border-white/10 py-4 px-4 flex flex-col space-y-4 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 font-medium hover:text-white hover:pl-2 hover:bg-white/5 text-lg py-3 px-4 rounded-xl transition-all border border-transparent hover:border-white/10"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-gradient-to-r from-orange-600 to-rose-500 text-center text-white px-5 py-3 rounded-xl font-semibold mt-4 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
