import { notFound } from "next/navigation";
import { getPublishedSolution } from "../../../lib/getSolution";

export default async function SolutionSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = await getPublishedSolution(slug);
  if (!solution) notFound();
  return children;
}
