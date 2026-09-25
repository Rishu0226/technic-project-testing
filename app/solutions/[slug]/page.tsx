import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionDetail from "../../../components/solutions/SolutionDetail";
import { getPublishedSolution, getRelatedSolutions } from "../../../lib/getSolution";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = await getPublishedSolution(slug).catch(() => null);
  if (!solution) return { title: "Solution Not Found" };

  const title = solution.seo?.metaTitle || solution.title;
  const description = solution.seo?.metaDescription || solution.shortDescription || solution.description;
  const image = solution.heroImage || solution.cardImage;

  return {
    title,
    description,
    keywords: solution.seo?.keywords,
    alternates: { canonical: `${siteUrl}/solutions/${solution.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/solutions/${solution.slug}`,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function SolutionSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = await getPublishedSolution(slug);
  if (!solution) notFound();
  const related = await getRelatedSolutions(slug);
  return <SolutionDetail solution={solution} related={related} />;
}
