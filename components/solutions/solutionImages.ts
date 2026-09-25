export const solutionImages = {
  hero: "/assets/solutions/solutions-hero.png",
  healthcare: "/assets/solutions/solution-healthcare.png",
  education: "/assets/solutions/solution-education.png",
  retail: "/assets/solutions/solution-retail.png",
  manufacturing: "/assets/solutions/solution-manufacturing.png",
  logistics: "/assets/solutions/solution-logistics.png",
  finance: "/assets/solutions/solution-finance.png",
  impact: "/assets/solutions/solutions-impact.png",
  global: "/assets/solutions/solutions-global.png",
};

const slugImages: Record<string, string> = {
  healthcare: solutionImages.healthcare,
  education: solutionImages.education,
  "retail-ecommerce": solutionImages.retail,
  manufacturing: solutionImages.manufacturing,
  logistics: solutionImages.logistics,
  "finance-fintech": solutionImages.finance,
};

export function cardImageFor(slug: string, uploaded?: string) {
  return uploaded || slugImages[slug] || "";
}
