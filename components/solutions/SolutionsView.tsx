import Link from "next/link";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import IconMapper from "../IconMapper";
import IndustrySolutionCard from "./IndustrySolutionCard";
import SolutionVisual from "./SolutionVisual";
import SolutionsContact from "./SolutionsContact";
import { advantages, solutionProcess, solutionTechnologies, whyPoints } from "./solutionsContent";
import CompanyStats from "../About/CompanyStats";
import { solutionImages } from "./solutionImages";
import { publicImage } from "../../lib/publicImage";
import type { Solution } from "../../types/solution";

export default function SolutionsView({
  solutions,
  loadFailed,
  email,
  phone,
}: {
  solutions: Solution[];
  loadFailed: boolean;
  email?: string;
  phone?: string;
}) {
  const heroImage = publicImage(solutionImages.hero);
  const impactImage = publicImage("/Assest/about2.png");
  const globalImage = publicImage(solutionImages.global);
  const shared = solutions.find((item) => item.benefits?.some((benefit) => benefit.title)) || solutions[0];
  const advantageItems = (shared?.benefits || []).filter((item) => item.title);
  const processSteps = (shared?.process || []).filter((item) => item.title);
  const whyItems = (shared?.features || []).map((item) => item.title).filter(Boolean);
  const technologyItems = solutions.reduce<NonNullable<Solution["technologies"]>>((list, solution) => {
    for (const item of solution.technologies || []) {
      if (item.name && !list.some((entry) => entry.name === item.name)) list.push(item);
    }
    return list;
  }, []);
  const pageAdvantages = advantageItems.length ? advantageItems : advantages;
  const pageProcess = processSteps.length ? processSteps : solutionProcess;
  const pageWhy = whyItems.length ? whyItems : whyPoints;
  const pageTechnologies = technologyItems.length ? technologyItems : solutionTechnologies;
  const ctaTitle = shared?.cta?.title || "Have a Solution in Mind?";
  const ctaDescription = shared?.cta?.description || "Tell us about your requirements and our team will help you find the right technology solution.";
  const ctaButton = shared?.cta?.buttonText || "Schedule a Call";

  return (
    <main>
      <section className="bg-white pt-32 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p data-hero className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">Solutions</p>
            <h1 data-hero className="mb-6 font-heading text-4xl font-extrabold leading-tight text-technic-text sm:text-5xl md:text-6xl">
              Business Solutions for a Smarter{" "}
              <span className="text-technic-cyan">Digital</span>{" "}
              <span className="text-technic-orange">Future</span>
            </h1>
            <p data-hero className="mb-8 max-w-xl text-lg leading-relaxed text-technic-secondary">
              Technology solutions designed around real business challenges, helping organizations automate operations, improve efficiency, and achieve sustainable growth.
            </p>
            <div data-hero className="flex flex-col gap-4 sm:flex-row">
              <a href="#industries" className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-technic-border bg-white px-8 py-4 font-semibold text-technic-text hover:border-technic-cyan hover:text-technic-cyan-deep">
                Talk to Our Experts
              </a>
            </div>
          </div>
          <div data-hero-visual>
            <SolutionVisual image={heroImage} alt="TechNic business solutions" label="Smart Solutions" priority className="h-80 md:h-[420px]" />
          </div>
        </div>
      </section>

      <section data-reveal className="bg-technic-bg py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {pageAdvantages.map((item, index) => (
            <article key={item.title} data-card className="rounded-2xl border border-technic-border bg-white p-6 shadow-tn-card transition-all duration-300 hover:-translate-y-1 hover:border-technic-cyan">
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${index % 2 ? "bg-technic-orange-soft text-technic-orange" : "bg-technic-cyan-soft text-technic-cyan-deep"}`}>
                <IconMapper name={item.icon || "Layers"} className="h-7 w-7" />
              </div>
              <h2 className="font-heading text-xl font-bold text-technic-text md:text-2xl">{item.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-technic-secondary">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="industries" data-reveal className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-copy className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">Our Solutions</p>
            <h2 className="mb-4 font-heading text-3xl font-bold text-technic-text md:text-5xl">Industry-Focused Solutions</h2>
            <p className="text-lg leading-relaxed text-technic-secondary">From startups to enterprises, we build solutions that solve real-world business challenges.</p>
          </div>
          {loadFailed ? (
            <div className="rounded-2xl border border-technic-border bg-white px-6 py-10 text-center">
              <p className="text-lg text-technic-text">Unable to load solutions.</p>
              <a href="/solutions" className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95">Try Again</a>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution, index) => (
                <IndustrySolutionCard key={solution._id} solution={solution} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section data-reveal className="bg-technic-bg py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div data-copy>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">Why Our Solutions</p>
            <h2 className="mb-5 font-heading text-3xl font-bold leading-tight text-technic-text md:text-5xl">
              Built for Real <span className="text-technic-cyan">Business Impact</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-technic-secondary">
              We combine industry knowledge with modern technology to deliver solutions that fit the way a business already operates.
            </p>
            <ul className="space-y-3">
              {pageWhy.map((point) => (
                <li key={point} className="flex items-start gap-3 text-technic-secondary">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-technic-cyan-deep" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <SolutionVisual image={impactImage} alt="TechNic team reviewing business solutions" label="Business Impact" className="aspect-square h-auto w-full" />
        </div>
      </section>

      <section data-reveal className="border-y border-technic-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CompanyStats />
        </div>
      </section>

      <section data-reveal className="bg-technic-bg py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-copy className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-technic-text md:text-5xl">Our Solution Process</h2>
            <p className="text-lg text-technic-secondary">A systematic approach to delivering solutions that solve real business challenges.</p>
          </div>
          <ol className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            <div data-process-line className="pointer-events-none absolute left-0 right-0 top-7 hidden h-0.5 origin-left bg-technic-border lg:block" aria-hidden="true" />
            {pageProcess.map((step) => (
              <li key={step.step || step.title} data-card className="relative">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-technic-border bg-white font-heading text-sm font-bold text-technic-cyan-deep">{step.step}</span>
                <h3 className="font-heading text-xl font-bold text-technic-text">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-technic-secondary">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-reveal className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-copy className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-technic-text md:text-5xl">Technologies We Use</h2>
            <p className="text-lg text-technic-secondary">We leverage modern and proven technologies to build robust and scalable solutions.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {pageTechnologies.map((item) => (
              <span key={item.name} data-card className="inline-flex items-center gap-2 rounded-2xl border border-technic-border bg-white px-4 py-3 text-sm font-medium text-technic-text shadow-tn-sm">
                <IconMapper name={item.icon || "Layers"} className="h-4 w-4 text-technic-cyan-deep" />
                {item.name}
                <span className="text-xs text-technic-muted">{item.category}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="bg-technic-bg py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-copy className="mb-8 max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-technic-text md:text-5xl">Solutions Built for a Connected World</h2>
          </div>
          <SolutionVisual image={globalImage} alt="TechNic solutions across regions" label="Global Reach" className="h-72 md:h-96" />
        </div>
      </section>

      <section id="contact" data-reveal className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div data-copy>
            <h2 className="mb-4 font-heading text-3xl font-bold leading-tight text-technic-text md:text-5xl">
              {ctaTitle} <span className="text-technic-cyan">Let&apos;s Build It Together.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-technic-secondary">
              {ctaDescription}
            </p>
            <div className="space-y-4 text-technic-secondary">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95">{ctaButton}</Link>
              {email && (
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-technic-cyan-deep" /><a href={`mailto:${email}`} className="hover:text-technic-cyan-deep">{email}</a></p>
              )}
              {phone && (
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-technic-cyan-deep" /><a href={`tel:${phone}`} className="hover:text-technic-cyan-deep">{phone}</a></p>
              )}
            </div>
          </div>
          <SolutionsContact solutions={solutions} />
        </div>
      </section>
    </main>
  );
}
