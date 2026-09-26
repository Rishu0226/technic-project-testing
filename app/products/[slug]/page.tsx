import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "../../../components/products/ProductDetail";
import { getPublishedProduct, getRelatedProducts } from "../../../lib/getProduct";
import { productSummary } from "../../../types/product";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getPublishedProduct(slug).catch(() => null);
  if (!product) return { title: "Product Not Found" };

  const title = product.seo?.metaTitle || `${product.name} | TechNic Technologies`;
  const description = product.seo?.metaDescription || productSummary(product);
  const image = product.heroImage || product.image;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/products/${product.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/products/${product.slug}`,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function ProductSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getPublishedProduct(slug);
  if (!product) notFound();
  const related = await getRelatedProducts(slug);
  return <ProductDetail product={product} related={related} />;
}
