import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import IconMapper from "../IconMapper";
import ServiceFaqs from "../Services/ServiceFaqs";
import SolutionsMotion from "./SolutionsMotion";
import SolutionVisual from "./SolutionVisual";
import { cardImageFor } from "./solutionImages";
import { publicImage } from "../../lib/publicImage";
import { solutionProcess } from "./solutionsContent";
import type { Solution } from "../../types/solution";
import RichContent from "../RichContent";

export default function SolutionDetail({ solution, related }: { solution: Solution; related: Solution[] }) {
  const hero = publicImage(solution.heroImage) || publicImage(cardImageFor(solution.slug));
  const process = solution.process?.length ? solution.process : solutionProcess;
  const benefits = (solution.benefits || []).filter((item) => item.title);
  const features = (solution.features || []).filter((item) => item.title);
  const technologies = (solution.technologies || []).filter((item) => item.name);
  const useCases = (solution.useCases || []).filter((item) => item.title);
  const faqs = (solution.faqs || []).filter((item) => item.question);
  const metrics = (solution.metrics || []).filter((item) => item.value);

  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary">
      <Navbar />
      <SolutionsMotion>
        <main className="pt-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" data-hero className="mb-8 text-sm text-technic-muted">
              <Link href="/" className="hover:text-technic-cyan-deep">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/solutions" className="hover:text-technic-cyan-deep">Solutions</Link>
              <span className="mx-2">/</span>
              <span className="text-technic-text">{solution.title}</span>
            </nav>
          </div>
          <section className="pb-16">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
              <div data-hero>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">{solution.industry || "Solution"}</p>
                <h1 className="mb-5 font-heading text-4xl font-extrabold leading-tight text-technic-text md:text-6xl">{solution.heroTitle || solution.title}</h1>
                <p className="mb-8 text-lg leading-relaxed text-technic-secondary">{solution.heroDescription || solution.shortDescription || solution.description}</p>
                <Link href="/solutions#contact" className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95">
                  {solution.cta?.buttonText || "Talk to Our Experts"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div data-hero-visual>
                {hero ? (
                  <SolutionVisual image={hero} alt={solution.title} label={solution.industry || "Solution"} priority className="h-80" />
                ) : null}
              </div>
            </div>
          </section>

          {benefits.length > 0 && (
            <section data-reveal className="bg-technic-bg py-24">
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
                {benefits.map((item) => (
                  <article key={item.title} data-card className="rounded-2xl border border-technic-border bg-white p-6 shadow-tn-card">
                    <IconMapper name={item.icon || solution.icon || "Layers"} className="mb-4 h-6 w-6 text-technic-cyan-deep" />
                    <h2 className="mb-2 font-heading text-xl font-bold text-technic-text">{item.title}</h2>
                    <p className="text-sm text-technic-secondary">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section data-reveal className="bg-white py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
              <div data-copy>
                <h2 className="mb-4 font-heading text-3xl font-bold text-technic-text md:text-5xl">{solution.overview?.title || "What We Build"}</h2>
                <p className="text-lg leading-relaxed text-technic-secondary">{solution.overview?.description || solution.description}</p>
              </div>
              <SolutionVisual image={publicImage(solution.overviewImage) || hero} alt={solution.overview?.title || solution.title} label="Overview" className="h-72" />
            </div>
          </section>

          {solution.longDescription && (
            <section className="bg-technic-bg py-20">
              <div className="mx-auto max-w-3xl px-4 lg:px-8">
                <RichContent html={solution.longDescription} />
              </div>
            </section>
          )}

          {features.length > 0 && (
            <section data-reveal className="bg-technic-bg py-24">
              <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <h2 data-copy className="mb-8 font-heading text-3xl font-bold text-technic-text md:text-5xl">Capabilities</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {features.map((item) => (
                    <article key={item.title} data-card className="rounded-2xl border border-technic-border bg-white p-6 shadow-tn-card">
                      <h3 className="mb-2 font-heading text-xl font-bold text-technic-text">{item.title}</h3>
                      <p className="text-sm text-technic-secondary">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section data-reveal className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <h2 data-copy className="mb-8 font-heading text-3xl font-bold text-technic-text">Solution Process</h2>
              <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {process.map((step, index) => (
                  <li key={`${step.title}-${index}`} data-card className="rounded-2xl border border-technic-border p-5">
                    <p className="text-sm font-semibold text-technic-cyan-deep">{step.step || String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 font-heading text-lg font-bold text-technic-text">{step.title}</h3>
                    {step.description && <p className="mt-2 text-sm text-technic-secondary">{step.description}</p>}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {technologies.length > 0 && (
            <section className="bg-technic-bg py-24">
              <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 lg:px-8">
                {technologies.map((item) => (
                  <span key={`${item.category}-${item.name}`} className="rounded-full border border-technic-border bg-white px-4 py-2 text-sm text-technic-secondary">
                    {item.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {useCases.length > 0 && (
            <section className="bg-white py-24">
              <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:px-8">
                {useCases.map((item) => (
                  <article key={item.title} className="rounded-2xl border border-technic-border p-6">
                    <h3 className="mb-2 flex items-center gap-2 font-heading text-xl font-bold text-technic-text"><Check className="h-4 w-4 text-technic-cyan-deep" />{item.title}</h3>
                    <p className="text-technic-secondary">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {metrics.length > 0 && (
            <section className="bg-technic-bg py-24">
              <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 lg:grid-cols-4 lg:px-8">
                {metrics.map((item) => (
                  <div key={item.label}>
                    <p className="font-heading text-3xl font-extrabold text-technic-text">{item.value}</p>
                    <p className="text-sm text-technic-secondary">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {faqs.length > 0 && (
            <section className="bg-white py-24">
              <div className="mx-auto max-w-3xl px-4">
                <h2 className="mb-8 font-heading text-3xl font-bold text-technic-text">FAQ</h2>
                <ServiceFaqs items={faqs} />
              </div>
            </section>
          )}

          <section className="bg-technic-bg py-24 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-technic-text">{solution.cta?.title || "Have a Solution in Mind?"}</h2>
            <p className="mb-8 text-lg text-technic-secondary">{solution.cta?.description}</p>
            <Link href="/solutions#contact" className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95">{solution.cta?.buttonText || "Talk to Our Experts"}</Link>
          </section>

          {related.length > 0 && (
            <section className="bg-white py-24">
              <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 lg:px-8">
                {related.map((item) => (
                  <Link key={item._id} href={`/solutions/${item.slug}`} className="rounded-2xl border border-technic-border p-6 shadow-tn-card transition-all duration-300 hover:-translate-y-1 hover:border-technic-cyan">
                    <h3 className="font-heading text-xl font-bold text-technic-text">{item.title}</h3>
                    <p className="mt-2 text-sm text-technic-secondary">{item.shortDescription || item.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
        <Footer />
      </SolutionsMotion>
    </div>
  );
}
