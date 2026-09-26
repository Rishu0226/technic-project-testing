export type ProductFeature = {
  title: string;
  description: string;
  icon: string;
};

export type ProductMetric = { value: string; label: string };
export type ProductBenefit = { title: string; description: string; icon?: string };
export type ProductTechnology = { name: string; icon?: string };
export type ProductScreenshot = { image: string; platform?: string };

export type PublicProduct = {
  _id?: string;
  name: string;
  slug: string;
  tagline?: string;
  shortDescription?: string;
  description?: string;
  longDescription?: string;
  category?: string;
  heroDescription?: string;
  heroImage?: string;
  logo?: string;
  dashboardImage?: string;
  websitePreviewImage?: string;
  gallery?: string[];
  featureSectionTitle?: string;
  featureSectionDescription?: string;
  showcaseTitle?: string;
  showcaseDescription?: string;
  features?: Array<string | { title?: string; description?: string; icon?: string }>;
  metrics?: ProductMetric[];
  benefits?: ProductBenefit[];
  technologyStack?: ProductTechnology[];
  mobileScreenshots?: ProductScreenshot[];
  ctaTitle?: string;
  ctaDescription?: string;
  icon?: string;
  image?: string;
  type?: "app" | "website" | "both";
  playStoreUrl?: string;
  appStoreUrl?: string;
  websiteUrl?: string;
  seo?: { metaTitle?: string; metaDescription?: string };
  order?: number;
  status?: "Draft" | "Published";
};

export function productFeatures(value: PublicProduct["features"]): ProductFeature[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (typeof item === "string") return { title: item, description: "", icon: "" };
      return {
        title: item?.title?.trim() || "",
        description: item?.description?.trim() || "",
        icon: item?.icon?.trim() || "",
      };
    })
    .filter((item) => item.title);
}

export function productSummary(product: Pick<PublicProduct, "shortDescription" | "description" | "tagline">) {
  return product.shortDescription || product.description || product.tagline || "";
}
