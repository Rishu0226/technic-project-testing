export const solutionImages = {
  hero: "/Solution/solution.png",
  healthcare: "/Solution/healthcare.png",
  education: "/Solution/education.png",
  retail: "/Solution/retail.png",
  manufacturing: "/Solution/manufacturing.png",
  logistics: "/Solution/logistics.png",
  finance: "/Solution/finance.png",
  global: "/Solution/global.png",
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
