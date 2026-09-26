import { cache } from "react";
import { API_BASE_URL } from "./api";
import type { PublicProduct } from "../types/product";

export const getPublishedProduct = cache(async (slug: string) => {
  const response = await fetch(`${API_BASE_URL}/api/products/${slug}`, { cache: "no-store" });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Unable to load this product.");
  const product = (await response.json()) as PublicProduct;
  if (product.status === "Draft") return null;
  return product;
});

export async function getRelatedProducts(slug: string) {
  const response = await fetch(`${API_BASE_URL}/api/products`, { cache: "no-store" });
  if (!response.ok) return [];
  const products = (await response.json()) as PublicProduct[];
  return (Array.isArray(products) ? products : []).filter((item) => item.slug && item.slug !== slug);
}
