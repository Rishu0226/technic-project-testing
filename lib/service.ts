export type ServiceItem = {
  title: string;
  description: string;
  icon?: string;
};

export type PublicService = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  longDescription?: string;
  icon?: string;
  image?: string;
  heroImage?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  benefits?: ServiceItem[];
  overview?: { title?: string; description?: string; image?: string };
  features?: ServiceItem[];
  technologies?: { name: string; category?: string; icon?: string }[];
  process?: { step?: string; title: string; description?: string }[];
  deliverables?: string[];
  useCases?: { title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
  cta?: { title?: string; description?: string; buttonText?: string };
  seo?: { metaTitle?: string; metaDescription?: string; keywords?: string };
  order?: number;
  status?: "Draft" | "Published";
  updatedAt?: string;
};

export const defaultProcess = [
  { step: "01", title: "Discover", description: "Understand the goal, users, and constraints." },
  { step: "02", title: "Design", description: "Shape the experience, architecture, and plan." },
  { step: "03", title: "Develop", description: "Build the product with production-ready engineering." },
  { step: "04", title: "Test", description: "Check quality, performance, and the real user path." },
  { step: "05", title: "Launch", description: "Release with monitoring and a clear handover." },
  { step: "06", title: "Scale", description: "Improve the product after it is in use." },
];
