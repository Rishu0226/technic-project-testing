import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import IconMapper from "../IconMapper";
import RichContent from "../RichContent";
import ServicesMotion from "../Services/ServicesMotion";
import { externalHref } from "../../lib/html";
import { productFeatures, productSummary, type PublicProduct } from "../../types/product";

function mediaSrc(value?: string) {
  if (!value) return "";
  if (value.startsWith("/") && !value.startsWith("//")) return value;
  return externalHref(value);
}

function ProductMedia({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  const href = mediaSrc(src);
  if (!href) return null;
  return <img src={href} alt={alt} className={className} />;
}

function ProductActions({ product }: { product: PublicProduct }) {
  const website = product.type === "website" || product.type === "both" ? externalHref(product.websiteUrl) : "";
  const play = product.type === "app" || product.type === "both" ? externalHref(product.playStoreUrl) : "";
  const apple = product.type === "app" || product.type === "both" ? externalHref(product.appStoreUrl) : "";
  if (!website && !play && !apple) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-6 py-3 font-semibold text-white shadow-tn-sm hover:opacity-95">
          Visit Website
        </a>
      )}
      {play && (
        <a href={play} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-technic-border bg-white px-6 py-3 font-semibold text-technic-text hover:border-technic-cyan hover:text-technic-cyan-deep">
          Get it on Google Play
        </a>
      )}
      {apple && (
        <a href={apple} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-technic-border bg-white px-6 py-3 font-semibold text-technic-text hover:border-technic-cyan hover:text-technic-cyan-deep">
          Download on the App Store
        </a>
      )}
    </div>
  );
}

function typeLabel(type?: PublicProduct["type"]) {
  if (type === "app") return "App";
  if (type === "website") return "Website";
  if (type === "both") return "App & Website";
  return "Product";
}

export default function ProductDetail({ product, related }: { product: PublicProduct; related: PublicProduct[] }) {
  const features = productFeatures(product.features);
  const detailedFeatures = features.filter((item) => item.description);
  const metrics = (product.metrics || []).filter((item) => item.value || item.label);
  const benefits = (product.benefits || []).filter((item) => item.title);
  const technologies = (product.technologyStack || []).filter((item) => item.name);
  const screenshots = (product.mobileScreenshots || []).filter((item) => mediaSrc(item.image));
  const gallery = (product.gallery || []).map(mediaSrc).filter(Boolean);
  const heroImage = mediaSrc(product.heroImage) || mediaSrc(product.image);
  const summary = product.heroDescription || productSummary(product);
  const showAppShots = (product.type === "app" || product.type === "both") && screenshots.length > 0;
  const showWebsite = (product.type === "website" || product.type === "both") && Boolean(mediaSrc(product.websitePreviewImage) || externalHref(product.websiteUrl));
  const hasLinks = Boolean(
    ((product.type === "website" || product.type === "both") && externalHref(product.websiteUrl))
    || ((product.type === "app" || product.type === "both") && (externalHref(product.playStoreUrl) || externalHref(product.appStoreUrl))),
  );
  const showShowcase = Boolean(mediaSrc(product.dashboardImage) || product.showcaseTitle || product.showcaseDescription || metrics.length || benefits.length);

  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary">
      <Navbar />
      <ServicesMotion>
        <main>
          <section className="relative overflow-hidden bg-technic-bg pt-32 pb-16">
            <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-technic-cyan-soft blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute right-0 top-10 h-48 w-48 rounded-full bg-technic-orange-soft blur-3xl" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
              <div>
                <nav aria-label="Breadcrumb" data-hero className="mb-8 text-sm text-technic-muted">
                  <Link href="/" className="hover:text-technic-cyan-deep">Home</Link>
                  <span className="mx-2">/</span>
                  <Link href="/products" className="hover:text-technic-cyan-deep">Products</Link>
                  <span className="mx-2">/</span>
                  <span className="text-technic-text">{product.name}</span>
                </nav>
                <p data-hero className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">
                  {product.category || "Product"}
                </p>
                <h1 data-hero className="font-heading text-4xl font-extrabold leading-tight text-technic-text sm:text-5xl md:text-6xl">
                  {product.name}
                </h1>
                {product.tagline && (
                  <p data-hero className="mt-3 font-heading text-2xl font-bold text-technic-orange md:text-3xl">{product.tagline}</p>
                )}
                {summary && <p data-hero className="mt-6 max-w-xl text-lg leading-relaxed text-technic-secondary">{summary}</p>}
                <div data-hero className="mt-8">
                  <ProductActions product={product} />
                </div>
                {features.length > 0 && (
                  <div data-hero className="mt-8 flex flex-wrap gap-2">
                    {features.map((feature) => (
                      <span key={feature.title} className="rounded-full border border-technic-border bg-white px-3 py-1 text-sm text-technic-secondary">
                        {feature.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div data-hero-visual className="flex min-h-72 items-center justify-center rounded-[2rem] border border-technic-border bg-white p-6 shadow-tn-card">
                {heroImage ? (
                  <ProductMedia src={heroImage} alt={product.name} className="max-h-[28rem] w-full object-contain" />
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-technic-cyan-soft">
                      <IconMapper name={product.icon || "Layers"} className="h-8 w-8 text-technic-cyan-deep" />
                    </span>
                    <p className="font-heading text-xl font-bold text-technic-text">{product.name}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {detailedFeatures.length > 0 && (
            <section data-reveal className="bg-white py-24">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div data-copy className="mb-12 max-w-3xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">Key features</p>
                  <h2 className="font-heading text-3xl font-bold text-technic-text md:text-5xl">
                    {product.featureSectionTitle || "Everything you need"}
                  </h2>
                  {product.featureSectionDescription && (
                    <p className="mt-4 text-lg text-technic-secondary">{product.featureSectionDescription}</p>
                  )}
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {detailedFeatures.map((feature) => (
                    <article key={feature.title} data-card className="rounded-[1.25rem] border border-technic-border bg-white p-6 shadow-tn-card transition-all duration-300 hover:-translate-y-1 hover:border-technic-cyan">
                      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-technic-cyan-soft">
                        <IconMapper name={feature.icon || product.icon || "Sparkles"} className="h-6 w-6 text-technic-cyan-deep" />
                      </span>
                      <h3 className="mb-2 font-heading text-xl font-bold text-technic-text">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-technic-secondary">{feature.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {showShowcase && (
            <section data-reveal className="bg-technic-bg py-24">
              <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div data-card className="overflow-hidden rounded-[1.25rem] border border-technic-border bg-white p-4 shadow-tn-card">
                  {mediaSrc(product.dashboardImage) ? (
                    <ProductMedia src={product.dashboardImage} alt={`${product.name} dashboard`} className="w-full rounded-2xl object-contain" />
                  ) : (
                    <div className="flex min-h-64 items-center justify-center rounded-2xl bg-technic-bg">
                      <IconMapper name={product.icon || "Layout"} className="h-10 w-10 text-technic-cyan-deep" />
                    </div>
                  )}
                </div>
                <div data-copy>
                  <h2 className="font-heading text-3xl font-bold text-technic-text md:text-5xl">
                    {product.showcaseTitle || product.tagline || product.name}
                  </h2>
                  {(product.showcaseDescription || product.description) && (
                    <p className="mt-4 text-lg leading-relaxed text-technic-secondary">{product.showcaseDescription || product.description}</p>
                  )}
                  {metrics.length > 0 && (
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {metrics.map((metric) => (
                        <div key={`${metric.value}-${metric.label}`}>
                          <p className="font-heading text-3xl font-extrabold text-technic-cyan-deep">{metric.value}</p>
                          <p className="text-sm text-technic-muted">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {benefits.length > 0 && (
                    <ul className="mt-8 space-y-3">
                      {benefits.map((benefit) => (
                        <li key={benefit.title} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-technic-cyan-soft">
                            <IconMapper name={benefit.icon || "ShieldCheck"} className="h-4 w-4 text-technic-cyan-deep" />
                          </span>
                          <span>
                            <span className="block font-semibold text-technic-text">{benefit.title}</span>
                            {benefit.description && <span className="text-sm text-technic-secondary">{benefit.description}</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          )}

          {product.longDescription && (
            <section className="bg-white py-24">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <RichContent html={product.longDescription} />
              </div>
            </section>
          )}

          {technologies.length > 0 && (
            <section data-reveal className="bg-white py-24">
              <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h2 data-copy className="font-heading text-3xl font-bold text-technic-text md:text-5xl">Built with modern technologies</h2>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  {technologies.map((item) => (
                    <span key={item.name} data-card className="inline-flex items-center gap-2 rounded-full border border-technic-border bg-white px-4 py-2 text-sm font-medium text-technic-text shadow-tn-sm">
                      <IconMapper name={item.icon || "Code"} className="h-4 w-4 text-technic-cyan-deep" />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {showAppShots && (
            <section data-reveal className="bg-technic-bg py-24">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 data-copy className="mb-10 font-heading text-3xl font-bold text-technic-text md:text-5xl">Mobile experience</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {screenshots.map((shot) => (
                    <figure key={shot.image} data-card className="overflow-hidden rounded-[1.25rem] border border-technic-border bg-white p-4 shadow-tn-card">
                      <ProductMedia src={shot.image} alt={shot.platform || product.name} className="mx-auto max-h-[32rem] w-full object-contain" />
                      {shot.platform && <figcaption className="mt-3 text-center text-sm capitalize text-technic-muted">{shot.platform}</figcaption>}
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          )}

          {showWebsite && (
            <section data-reveal className="bg-white py-24">
              <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div data-copy>
                  <h2 className="font-heading text-3xl font-bold text-technic-text md:text-5xl">Website experience</h2>
                  <p className="mt-4 text-lg text-technic-secondary">Open the live product from the link saved for this product.</p>
                  <div className="mt-8">
                    <ProductActions product={product} />
                  </div>
                </div>
                {mediaSrc(product.websitePreviewImage) && (
                  <div data-card className="overflow-hidden rounded-[1.25rem] border border-technic-border bg-white p-4 shadow-tn-card">
                    <ProductMedia src={product.websitePreviewImage} alt={`${product.name} website`} className="w-full object-contain" />
                  </div>
                )}
              </div>
            </section>
          )}

          {gallery.length > 0 && (
            <section className="bg-technic-bg py-24">
              <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:px-8">
                {gallery.map((src) => (
                  <ProductMedia key={src} src={src} alt={product.name} className="w-full rounded-[1.25rem] border border-technic-border bg-white object-contain shadow-tn-card" />
                ))}
              </div>
            </section>
          )}

          {(hasLinks || product.ctaTitle || product.ctaDescription) && (
            <section className="bg-technic-bg py-20">
              <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                <h2 className="font-heading text-3xl font-bold text-technic-text md:text-5xl">
                  {product.ctaTitle || "Ready to see it in action?"}
                </h2>
                {product.ctaDescription && <p className="mt-4 text-lg text-technic-secondary">{product.ctaDescription}</p>}
                <div className="mt-8 flex justify-center">
                  <ProductActions product={product} />
                </div>
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section className="bg-white py-24">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex items-end justify-between gap-4">
                  <h2 className="font-heading text-3xl font-bold text-technic-text md:text-5xl">Other products</h2>
                  <Link href="/products" className="text-sm font-semibold text-technic-cyan-deep hover:text-technic-cyan">View all products</Link>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {related.map((item) => (
                    <article key={item.slug} className="flex flex-col rounded-[1.25rem] border border-technic-border bg-white p-6 shadow-tn-card transition-all duration-300 hover:-translate-y-1 hover:border-technic-cyan">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-technic-cyan-soft">
                          {mediaSrc(item.logo) ? (
                            <ProductMedia src={item.logo} alt="" className="h-8 w-8 object-contain" />
                          ) : (
                            <IconMapper name={item.icon || "Layers"} className="h-6 w-6 text-technic-cyan-deep" />
                          )}
                        </span>
                        <span className="rounded-full bg-technic-cyan-soft px-3 py-1 text-xs font-semibold text-technic-cyan-deep">{typeLabel(item.type)}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-technic-text">{item.name}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-technic-secondary">{productSummary(item)}</p>
                      <Link href={`/products/${item.slug}`} className="mt-6 text-sm font-semibold text-technic-cyan-deep hover:text-technic-cyan">
                        View Details
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </ServicesMotion>
      <Footer />
    </div>
  );
}
