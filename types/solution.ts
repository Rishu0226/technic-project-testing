export type SolutionBenefit = {
  title: string;
  description: string;
  icon?: string;
};

export type SolutionFeature = SolutionBenefit;

export type SolutionUseCase = {
  title: string;
  description: string;
};

export type SolutionProcessStep = {
  step?: string;
  title: string;
  description?: string;
};

export type SolutionTechnology = {
  name: string;
  category?: string;
  icon?: string;
};

export type SolutionMetric = {
  value: string;
  label: string;
};

export type SolutionFAQ = {
  question: string;
  answer: string;
};

export type SolutionCTA = {
  title?: string;
  description?: string;
  buttonText?: string;
};

export type SolutionSEO = {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
};

export type Solution = {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  longDescription?: string;
  description: string;
  icon?: string;
  industry?: string;
  cardImage?: string;
  heroImage?: string;
  heroTitle?: string;
  heroDescription?: string;
  overview?: { title?: string; description?: string };
  overviewImage?: string;
  benefits?: SolutionBenefit[];
  features?: SolutionFeature[];
  useCases?: SolutionUseCase[];
  process?: SolutionProcessStep[];
  technologies?: SolutionTechnology[];
  metrics?: SolutionMetric[];
  faqs?: SolutionFAQ[];
  cta?: SolutionCTA;
  seo?: SolutionSEO;
  order?: number;
  status?: "Draft" | "Published";
};
