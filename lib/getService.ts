import { cache } from "react";
import { API_BASE_URL } from "./api";
import type { PublicService } from "./service";

export const getPublishedService = cache(async (slug: string) => {
  const response = await fetch(`${API_BASE_URL}/api/services/${slug}`, { cache: "no-store" });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Unable to load this service.");
  const service = (await response.json()) as PublicService;
  if (service.status === "Draft") return null;
  return service;
});

export async function getRelatedServices(slug: string) {
  const response = await fetch(`${API_BASE_URL}/api/services`, { cache: "no-store" });
  if (!response.ok) return [];
  const services = (await response.json()) as PublicService[];
  return (Array.isArray(services) ? services : []).filter((item) => item.slug !== slug).slice(0, 3);
}
