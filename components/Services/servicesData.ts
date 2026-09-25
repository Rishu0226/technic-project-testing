import {
  BarChart3,
  Boxes,
  Cloud,
  Code2,
  Cpu,
  Database,
  Handshake,
  Laptop,
  Layers,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export const capabilities = [
  {
    title: "Product Engineering",
    copy: "End-to-end product teams that turn a business problem into a reliable digital platform.",
    icon: Boxes,
    orange: false,
  },
  {
    title: "Cloud & Infrastructure",
    copy: "Secure cloud foundations, environments, and operations built for production traffic.",
    icon: Cloud,
    orange: true,
  },
  {
    title: "AI & Automation",
    copy: "Practical automation and AI features that remove manual work from real workflows.",
    icon: Cpu,
    orange: false,
  },
  {
    title: "Data & Digital Platforms",
    copy: "Data products and platforms that give teams a clear view of operations and customers.",
    icon: Database,
    orange: true,
  },
];

export const coreServices = [
  {
    number: "01",
    title: "Custom Software Development",
    copy: "Scalable software platforms designed around your business workflows and operational needs.",
    tags: ["React", "Next.js", "Node.js"],
    icon: Code2,
  },
  {
    number: "02",
    title: "Web Application Development",
    copy: "Fast, accessible web applications with clear interfaces and a stable engineering base.",
    tags: ["TypeScript", "Next.js", "API"],
    icon: Layers,
  },
  {
    number: "03",
    title: "Mobile Application Development",
    copy: "Mobile products that stay consistent with your web platform and day-to-day operations.",
    tags: ["iOS", "Android", "React"],
    icon: Smartphone,
  },
  {
    number: "04",
    title: "Cloud Solutions",
    copy: "Cloud architecture, migration, and managed environments sized for how you actually run.",
    tags: ["AWS", "Docker", "Kubernetes"],
    icon: Cloud,
  },
  {
    number: "05",
    title: "AI & Automation",
    copy: "Assistants, workflow automation, and decision support placed where teams already work.",
    tags: ["Python", "OpenAI", "Automation"],
    icon: Workflow,
  },
  {
    number: "06",
    title: "Data & Analytics",
    copy: "Pipelines, models, and reporting that turn operational data into something teams can use.",
    tags: ["PostgreSQL", "Redis", "Analytics"],
    icon: BarChart3,
  },
  {
    number: "07",
    title: "UI/UX Engineering",
    copy: "Interface systems that stay clear, consistent, and ready for the product to grow.",
    tags: ["Design systems", "Figma", "Accessibility"],
    icon: Palette,
  },
  {
    number: "08",
    title: "DevOps & Infrastructure",
    copy: "Delivery pipelines, environments, and monitoring so releases stay predictable.",
    tags: ["CI/CD", "Docker", "Observability"],
    icon: Server,
  },
];

export const deliverySteps = [
  { number: "01", title: "Discover", copy: "Understand your goals, users and business requirements." },
  { number: "02", title: "Design", copy: "Create detailed architecture, UI/UX and technical roadmap." },
  { number: "03", title: "Engineer", copy: "Build with modern technologies and best practices." },
  { number: "04", title: "Validate", copy: "Test, refine and ensure quality and performance." },
  { number: "05", title: "Launch", copy: "Deploy to production with monitoring and support." },
  { number: "06", title: "Scale", copy: "Continuous improvement and long-term partnership." },
];

export const stackGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], icon: Layers, orange: false },
  { label: "Backend", items: ["Node.js", "NestJS", "Express.js", "Python"], icon: Laptop, orange: false },
  { label: "Mobile", items: ["React Native", "Flutter", "iOS", "Android"], icon: Smartphone, orange: false },
  { label: "Cloud", items: ["AWS", "Azure", "Docker", "Kubernetes"], icon: Cloud, orange: true },
  { label: "Data", items: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"], icon: BarChart3, orange: false },
  { label: "AI", items: ["OpenAI", "LangChain", "Python", "TensorFlow"], icon: Cpu, orange: false },
  { label: "DevOps", items: ["GitHub Actions", "CI/CD", "Nginx", "Linux"], icon: Server, orange: false },
  { label: "Microservices", items: ["NestJS", "gRPC", "RabbitMQ", "Docker"], icon: Boxes, orange: true },
];

export const reasons = [
  {
    title: "Engineering Excellence",
    copy: "Senior engineers stay close to the work, from the first architecture decision through release.",
    icon: ShieldCheck,
    orange: false,
  },
  {
    title: "Scalable Architecture",
    copy: "Systems are structured so new features, teams, and traffic can be added without a rewrite.",
    icon: Layers,
    orange: true,
  },
  {
    title: "AI-Ready Solutions",
    copy: "Products are prepared for automation and AI where they improve a real business process.",
    icon: Cpu,
    orange: false,
  },
  {
    title: "Long-Term Partnership",
    copy: "We stay after launch to improve performance, reliability, and the next set of capabilities.",
    icon: Handshake,
    orange: true,
  },
];

export const serviceOptions = coreServices.map((service) => service.title);
