import { notFound } from "next/navigation";
import { getPublishedService } from "../../../lib/getService";

export default async function ServiceSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getPublishedService(slug);
  if (!service) notFound();
  return children;
}
