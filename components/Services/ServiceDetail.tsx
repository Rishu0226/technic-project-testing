import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import IconMapper from "../IconMapper";
import ServiceFaqs from "./ServiceFaqs";
import ServicesMotion from "./ServicesMotion";
import RichContent from "../RichContent";
import { defaultProcess, type PublicService } from "../../lib/service";

export default function ServiceDetail({
  service,
  related,
}: {
  service: PublicService;
  related: PublicService[];
}) {
  const heroImage = service.heroImage || service.image || "/Assest/service.png";
  const process = service.process?.length ? service.process : defaultProcess;
  const benefits = (service.benefits || []).filter((item) => item.title);
  const features = (service.features || []).filter((item) => item.title);
  const technologies = (service.technologies || []).filter((item) => item.name);
  const useCases = (service.useCases || []).filter((item) => item.title);
  const faqs = (service.faqs || []).filter((item) => item.question);
  const deliverables = (service.deliverables || []).filter(Boolean);

  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary">
      <Navbar />
      <ServicesMotion>
      <main className="pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" data-hero className="mb-8 text-sm text-technic-muted">
            <Link href="/" className="hover:text-technic-cyan-deep">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-technic-cyan-deep">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-technic-text">{service.title}</span>
          </nav>
        </div>

        <section className="bg-white pb-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div data-hero>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">
                {service.heroEyebrow || "Service"}
              </p>
              <h1 className="mb-5 font-heading text-4xl font-extrabold leading-tight text-technic-text md:text-6xl">
                {service.heroTitle || service.title}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-technic-secondary">
                {service.heroDescription || service.shortDescription || service.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95">
                  {service.cta?.buttonText || "Get a Free Consultation"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/#products" className="inline-flex items-center justify-center rounded-full border border-technic-border bg-white px-8 py-4 font-semibold text-technic-text hover:border-technic-cyan hover:text-technic-cyan-deep">
                  View Our Work
                </Link>
              </div>
            </div>
            <div data-hero-visual>
            <Image
              src={heroImage}
              alt={service.heroTitle || service.title}
              width={1200}
              height={800}
              priority
              className="h-auto w-full"
            />
            </div>
          </div>
        </section>

        {benefits.length > 0 && (
          <section data-reveal className="bg-technic-bg py-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
              {benefits.map((item) => (
                <article key={item.title} data-card className="rounded-2xl border border-technic-border bg-white p-6 shadow-tn-card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-technic-cyan-soft text-technic-cyan-deep">
                    <IconMapper name={item.icon || service.icon || "Code"} className="h-6 w-6" />
                  </div>
                  <h2 className="mb-2 font-heading text-xl font-bold text-technic-text">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-technic-secondary">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {(service.overview?.title || service.overview?.description || service.description) && (
          <section data-reveal className="bg-white py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
              <div data-copy>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">Overview</p>
                <h2 className="mb-5 font-heading text-3xl font-bold text-technic-text md:text-5xl">
                  {service.overview?.title || "What We Build"}
                </h2>
                <p className="text-lg leading-relaxed text-technic-secondary">
                  {service.overview?.description || service.description}
                </p>
                {deliverables.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-technic-secondary">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-technic-cyan-deep" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Image
                src={service.overview?.image || heroImage}
                alt={service.overview?.title || service.title}
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </section>
        )}

        {features.length > 0 && (
          <section data-reveal className="bg-technic-bg py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 data-copy className="mb-10 font-heading text-3xl font-bold text-technic-text md:text-5xl">Key Capabilities</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((item) => (
                  <article key={item.title} data-card className="rounded-2xl border border-technic-border bg-white p-6 shadow-tn-card">
                    <h3 className="mb-2 font-heading text-xl font-bold text-technic-text">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-technic-secondary">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section data-reveal className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 data-copy className="mb-10 font-heading text-3xl font-bold text-technic-text md:text-5xl">Development Process</h2>
            <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((step, index) => (
                <li key={`${step.title}-${index}`} data-card className="rounded-2xl border border-technic-border bg-white p-5 shadow-tn-sm">
                  <p className="text-sm font-semibold text-technic-cyan-deep">{step.step || String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 font-heading text-xl font-bold text-technic-text">{step.title}</h3>
                  {step.description && <p className="mt-2 text-sm text-technic-secondary">{step.description}</p>}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {technologies.length > 0 && (
          <section className="bg-technic-bg py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-8 font-heading text-3xl font-bold text-technic-text md:text-5xl">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((item) => (
                  <span key={`${item.category}-${item.name}`} className="rounded-full border border-technic-border bg-white px-4 py-2 text-sm text-technic-secondary">
                    {item.category ? `${item.category}: ` : ""}{item.name}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {useCases.length > 0 && (
          <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-10 font-heading text-3xl font-bold text-technic-text md:text-5xl">Use Cases</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {useCases.map((item) => (
                  <article key={item.title} className="rounded-2xl border border-technic-border bg-white p-6 shadow-tn-card">
                    <h3 className="mb-2 font-heading text-xl font-bold text-technic-text">{item.title}</h3>
                    <p className="text-technic-secondary">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {service.longDescription && (
          <section className="bg-white py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <RichContent html={service.longDescription} />
            </div>
          </section>
        )}

        {faqs.length > 0 && (
          <section className="bg-technic-bg py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-8 font-heading text-3xl font-bold text-technic-text md:text-5xl">FAQ</h2>
              <ServiceFaqs items={faqs} />
            </div>
          </section>
        )}

        <section className="bg-technic-bg py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="mb-4 font-heading text-3xl font-bold text-technic-text md:text-5xl">
              {service.cta?.title || "Ready to Build Your Solution?"}
            </h2>
            <p className="mb-8 text-lg text-technic-secondary">
              {service.cta?.description || "Tell us what you are building and our engineering team will help you turn it into a scalable product."}
            </p>
            <Link href="/contact" className="inline-flex items-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95">
              {service.cta?.buttonText || "Start a Conversation"}
            </Link>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-8 font-heading text-3xl font-bold text-technic-text">Explore More Services</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {related.map((item) => (
                  <Link key={item._id} href={`/services/${item.slug}`} className="rounded-2xl border border-technic-border bg-white p-6 shadow-tn-card transition-all duration-300 hover:-translate-y-1 hover:border-technic-cyan">
                    <h3 className="mb-2 font-heading text-xl font-bold text-technic-text">{item.title}</h3>
                    <p className="text-sm text-technic-secondary">{item.shortDescription || item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      </ServicesMotion>
    </div>
  );
}
