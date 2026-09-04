import React from "react";
import {
  Code,
  Server,
  ShieldCheck,
  Sparkles,
  Layers,
  Cpu,
  Bot,
  Layout,
  Smartphone,
  Terminal,
  Rocket,
} from "lucide-react";

// --- Types ---
export type NavItem = {
  label: string;
  href: string;
};

export type ServiceType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type ProductType = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
};

// --- Data ---
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact" },
];
