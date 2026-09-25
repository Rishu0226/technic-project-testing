import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "../../../components/Services/ServiceDetail";
import { getPublishedService, getRelatedServices } from "../../../lib/getService";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getPublishedService(slug).catch(() => null);
  if (!service) return { title: "Service Not Found" };

  const title = service.seo?.metaTitle || service.title;
  const description = service.seo?.metaDescription || service.shortDescription || service.description;
  const image = service.heroImage || service.image;

  return {
    title,
    description,
    keywords: service.seo?.keywords,
    alternates: { canonical: `${siteUrl}/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/services/${service.slug}`,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getPublishedService(slug);
  if (!service) notFound();
  const related = await getRelatedServices(slug);

  return <ServiceDetail service={service} related={related} />;
}
