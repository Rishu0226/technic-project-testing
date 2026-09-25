"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "../lib/data";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      className={`fixed w-full z-50 border-b border-technic-border bg-white transition-shadow duration-300 ${
        isScrolled ? "py-3 shadow-tn-sm" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Technic Technologies home">
            <Image
              src="/Assest/logo-brand.png"
              alt="Technic Technologies"
              width={220}
              height={60}
              className="h-14 w-auto sm:h-14"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-technic-cyan"
                    : "text-technic-text hover:text-technic-cyan"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center bg-brand-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-tn-sm transition-opacity duration-200 hover:opacity-95"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-technic-text p-2 rounded-lg border border-technic-border bg-white hover:border-technic-cyan transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-technic-border py-4 px-4 flex flex-col space-y-2 shadow-tn-md">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium text-lg py-3 px-4 rounded-xl transition-colors ${
                isActive(item.href)
                  ? "text-technic-cyan bg-technic-cyan-soft"
                  : "text-technic-text hover:text-technic-cyan hover:bg-technic-bg"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-brand-gradient text-center text-white px-5 py-3 rounded-xl font-semibold mt-2 shadow-tn-sm"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
