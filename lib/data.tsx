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
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];


export const services: ServiceType[] = [
  {
    title: "Custom Website Development",
    description:
      "Highly customized, responsive, and performant web applications tailored to your specific business requirements and brand identity.",
    icon: <Layout className="w-8 h-8 text-orange-400" />,
  },
  {
    title: "Mobile App Engineering",
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.",
    icon: <Smartphone className="w-8 h-8 text-rose-400" />,
  },
  {
    title: "Cloud & DevOps Solutions",
    description:
      "Automated CI/CD pipelines, containerization, and scalable cloud infrastructure to accelerate your software delivery lifecycle.",
    icon: <Terminal className="w-8 h-8 text-amber-400" />,
  },
  {
    title: "Generative AI & ML Models",
    description:
      "Integrating intelligent algorithms and custom LLMs into your existing workflows to automate complex decision-making processes.",
    icon: <Sparkles className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Custom Enterprise Software",
    description:
      "Scalable, high-performance backend systems and microservices architectures designed for complex organizational needs.",
    icon: <Code className="w-8 h-8 text-rose-500" />,
  },
  {
    title: "Data & Database Engineering",
    description:
      "Robust data pipelines, database optimization, and analytics engines to turn your raw data into actionable business insights.",
    icon: <Server className="w-8 h-8 text-amber-500" />,
  },
];

export const products: ProductType[] = [
  {
    name: "NicFlow AI",
    tagline: "The Autonomous Enterprise Core.",
    description:
      "Our flagship ERP platform enhanced with generative AI. It predicts supply chain disruptions, automates financial reporting, and provides conversational HR interfaces.",
    features: [
      "Predictive Resource Allocation",
      "Conversational AI Assistant",
      "Automated Workflows",
      "Quantum-Safe Encryption",
    ],
    icon: <Bot className="w-12 h-12 text-orange-400" />,
  },
  {
    name: "TechGuard Sentinel",
    tagline: "Self-healing security architecture.",
    description:
      "A proprietary cybersecurity product that uses deep learning to identify zero-day vulnerabilities and autonomously patches systems in real-time.",
    features: [
      "Neural Network Threat Detection",
      "Automated Remediation",
      "Zero-Trust Architecture",
      "Compliance Autopilot",
    ],
    icon: <ShieldCheck className="w-12 h-12 text-rose-400" />,
  },
  {
    name: "DataStream Nexus",
    tagline: "Edge AI processing engine.",
    description:
      "Designed for the IoT ecosystem, Nexus processes massive data streams at the edge, running lightweight ML models without roundtripping to the cloud.",
    features: [
      "Sub-millisecond Inference",
      "Edge-to-Cloud Sync",
      "Decentralized Architecture",
      "Hardware Agnostic",
    ],
    icon: <Cpu className="w-12 h-12 text-amber-400" />,
  },
  {
    name: "NicOps Deployer",
    tagline: "Next-gen CI/CD & DevOps Automation.",
    description:
      "A comprehensive DevOps toolchain product that visualizes infrastructure, automates deployments, and provides AI-driven bottleneck analysis for engineering teams.",
    features: [
      "Visual Pipeline Builder",
      "AI Bottleneck Analysis",
      "One-Click Rollbacks",
      "Multi-Cloud Support",
    ],
    icon: <Rocket className="w-12 h-12 text-orange-500" />,
  },
  {
    name: "SiteCrafter Headless",
    tagline: "Intelligent Content Management.",
    description:
      "An API-first headless CMS built for modern web teams. Features built-in SEO automation, real-time collaboration, and instant global edge caching.",
    features: [
      "API-First Architecture",
      "Automated SEO Optimization",
      "Real-time Co-editing",
      "Global Edge CDN",
    ],
    icon: <Layers className="w-12 h-12 text-rose-500" />,
  },
];
