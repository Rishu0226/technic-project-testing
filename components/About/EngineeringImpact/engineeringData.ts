export type EngineeringCardData = {
  id: string;
  title: string;
  description: string;
  /** Top row spans half the card area. Bottom row shares the width in three. */
  row: "top" | "bottom";
};

export const engineeringIntro = {
  eyebrow: "Our Approach",
  headingLead: "Building Technology for Real-World",
  highlight: "Impact",
  description:
    "TechNic Technologies builds high-quality software products and delivers reliable digital solutions across web, mobile, cloud, AI, and custom software development.",
  cta: "Explore Our Services",
  href: "/services",
};

export const engineeringCards: EngineeringCardData[] = [
  {
    id: "product-engineering",
    title: "Product Engineering",
    description:
      "We transform ideas into high-quality digital products designed for performance, usability, scalability, and long-term business value.",
    row: "top",
  },
  {
    id: "modern-technology",
    title: "Modern Technology",
    description:
      "We leverage modern web, mobile, cloud, and AI technologies to create secure, scalable, and future-ready digital solutions.",
    row: "top",
  },
  {
    id: "engineering-excellence",
    title: "Engineering Excellence",
    description:
      "Our development process emphasizes clean architecture, quality assurance, security, and maintainable code to deliver reliable production-ready solutions.",
    row: "bottom",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "We integrate AI and intelligent automation into products and business workflows to improve efficiency, enhance experiences, and unlock new possibilities.",
    row: "bottom",
  },
  {
    id: "built-to-scale",
    title: "Built to Scale",
    description:
      "From MVPs and mobile applications to enterprise platforms, we build solutions that evolve with your business and growing user needs.",
    row: "bottom",
  },
];
