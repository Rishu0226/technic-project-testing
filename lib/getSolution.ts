import { cache } from "react";
import { API_BASE_URL } from "./api";
import type { Solution } from "../types/solution";

export const getPublishedSolution = cache(async (slug: string) => {
  const response = await fetch(`${API_BASE_URL}/api/solutions/${slug}`, { cache: "no-store" });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Unable to load this solution.");
  const solution = (await response.json()) as Solution;
  if (solution.status === "Draft") return null;
  return solution;
});

export async function getRelatedSolutions(slug: string) {
  const response = await fetch(`${API_BASE_URL}/api/solutions`, { cache: "no-store" });
  if (!response.ok) return [];
  const solutions = (await response.json()) as Solution[];
  return (Array.isArray(solutions) ? solutions : []).filter((item) => item.slug !== slug).slice(0, 3);
}
