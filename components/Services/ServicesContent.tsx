import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CompanyStats from "../About/CompanyStats";
import Hero from "../Hero";
import CatalogLoadError from "../CatalogLoadError";
import ServicesContact from "./ServicesContact";
import IconMapper from "../IconMapper";
import type { PublicService } from "../../lib/service";
import {
  capabilities,
  deliverySteps,
  reasons,
  stackGroups,
} from "./servicesData";

const cardClass =
  "group bg-white border border-technic-border rounded-2xl shadow-tn-card transition-all duration-300 hover:-translate-y-1 hover:border-technic-cyan/30 hover:shadow-tn-md";

export default function ServicesContent({
  services = [],
  loadFailed = false,
}: {
  services?: PublicService[];
  loadFailed?: boolean;
}) {
  return (
    <main>
      <Hero
        badgeText="TECHNOLOGY • ENGINEERING • INNOVATION"
        title={
          <>
            Technology Services Built for{" "}
            <span className="text-technic-cyan">Real-World</span>{" "}
            <span className="text-technic-orange">Business</span>
          </>
        }
        description="We design, build, and scale digital products that help businesses move faster, operate smarter, and create lasting value through technology."
        primaryActionText="Explore Our Services"
        primaryActionHref="#services"
        secondaryActionText="Talk to Our Team"
        secondaryActionHref="#contact"
        sideImage="/Assest/service.png"
        sideImageAlt="TechNic platform connecting cloud, web, mobile, data, AI, and security"
        sideImageWidth={1200}
        sideImageHeight={800}
      />

      <section data-reveal className="bg-technic-bg py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-copy className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">Capabilities</p>
            <h2 className="mb-5 font-heading text-3xl font-bold text-technic-text md:text-5xl">Technology Capabilities</h2>
            <p className="text-lg leading-relaxed text-technic-secondary">
              From product strategy to production engineering, we combine design, technology, and domain expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} data-card className={`${cardClass} p-7`}>
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.orange ? "bg-technic-orange-soft text-technic-orange" : "bg-technic-cyan-soft text-technic-cyan-deep"}`}>
                    <Icon className="h-7 w-7 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-technic-text transition-colors duration-300 group-hover:text-technic-cyan-deep">{item.title}</h3>
                  <p className="mb-6 text-technic-secondary leading-relaxed">{item.copy}</p>
                  <span className="inline-flex items-center text-sm font-medium text-technic-cyan-deep">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" data-reveal className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-copy className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">Services</p>
            <h2 className="mb-5 font-heading text-3xl font-bold text-technic-text md:text-5xl">Our Core Services</h2>
            <p className="text-lg leading-relaxed text-technic-secondary">
              Engineering work organized around the products, platforms, and operations businesses need to run.
            </p>
          </div>
          {loadFailed ? (
            <CatalogLoadError message="Unable to load services." href="/services" />
          ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const tags = (service.technologies || []).map((item) => item.name).filter(Boolean).slice(0, 3);
              return (
                <Link key={service._id} href={`/services/${service.slug}`} data-card className={`${cardClass} flex flex-col p-6`}>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-technic-muted">{String(service.order || index + 1).padStart(2, "0")}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-technic-cyan-soft text-technic-cyan-deep">
                      <IconMapper name={service.icon || "Code"} className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-technic-text transition-colors duration-300 group-hover:text-technic-cyan-deep">{service.title}</h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-technic-secondary">{service.shortDescription || service.description}</p>
                  {tags.length > 0 && (
                    <div className="mb-5 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-technic-border bg-white px-3 py-1 text-xs text-technic-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="inline-flex items-center text-sm font-medium text-technic-cyan-deep">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
          )}
        </div>
      </section>

      <section data-reveal className="relative overflow-hidden bg-technic-bg py-20 md:py-24">
        <div className="pointer-events-none absolute -right-6 top-8 hidden text-technic-border lg:block" aria-hidden="true">
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
            <circle cx="110" cy="110" r="78" stroke="currentColor" strokeWidth="18" />
            <circle cx="110" cy="110" r="36" stroke="currentColor" strokeWidth="14" />
            {Array.from({ length: 8 }).map((_, index) => (
              <rect key={index} x="98" y="8" width="24" height="28" rx="4" fill="currentColor" transform={`rotate(${index * 45} 110 110)`} />
            ))}
          </svg>
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div data-copy>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-technic-cyan-deep">Our process</p>
            <h2 className="mb-5 font-heading text-4xl font-extrabold leading-tight text-technic-text md:text-7xl">
              From Idea to
              <span className="mt-1 block text-technic-cyan">Production</span>
            </h2>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-technic-secondary">
              We follow a proven engineering process to turn ideas into scalable, high-quality digital solutions.
            </p>
            <Link href="#contact" className="inline-flex items-center rounded-full bg-brand-gradient px-7 py-3.5 font-semibold text-white shadow-tn-md hover:opacity-95">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <ol className="relative">
            <span
              className="absolute bottom-3 left-[7px] top-3 w-[3px] rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, var(--brand-cyan) 0 16%, var(--brand-orange) 16% 33%, var(--brand-cyan) 33% 50%, var(--brand-orange) 50% 67%, var(--brand-cyan) 67% 84%, var(--brand-orange) 84% 100%)",
              }}
              aria-hidden="true"
            />
            {deliverySteps.map((step, index) => (
              <li key={step.number} data-card className="relative flex gap-5 pb-7 last:pb-0">
                <span className={`relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full ${index % 2 === 0 ? "bg-technic-cyan" : "bg-technic-orange"}`} />
                <div className="flex gap-4">
                  <span className="w-8 pt-0.5 text-sm font-semibold text-technic-muted">{step.number}</span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-technic-text">{step.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-technic-muted">{step.copy}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-reveal className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-copy className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-technic-cyan-deep">Technology</p>
            <h2 className="mb-4 font-heading text-3xl font-bold text-technic-text md:text-5xl">Technology We Work With</h2>
            <p className="text-lg text-technic-secondary">We use modern and proven technologies to build secure, scalable and high-performance solutions.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {stackGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.label} data-card className="rounded-2xl border border-technic-border bg-white p-4 shadow-tn-sm">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${group.orange ? "bg-technic-orange-soft text-technic-orange" : "bg-technic-cyan-soft text-technic-cyan-deep"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 font-heading text-base font-bold text-technic-text">{group.label}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-technic-border bg-technic-bg px-2.5 py-1 text-xs text-technic-secondary">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section data-reveal className="border-y border-technic-border bg-technic-bg">
        <div className="mx-auto max-w-6xl">
          <CompanyStats />
        </div>
      </section>

      <section data-reveal className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div data-copy>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">Outcomes</p>
            <h2 className="mb-5 font-heading text-3xl font-bold text-technic-text md:text-5xl">
              Technology That <span className="text-technic-cyan">Creates Impact</span>
            </h2>
            <p className="text-lg leading-relaxed text-technic-secondary">
              We combine engineering, domain expertise, and a customer-focused approach to deliver measurable growth with modern technology.
            </p>
            <Link href="#contact" className="mt-8 inline-flex items-center rounded-full border border-technic-border bg-white px-8 py-4 font-semibold text-technic-text hover:border-technic-cyan hover:text-technic-cyan-deep">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div data-card>
            <Image
              src="/Assest/impact.png"
              alt="TechNic dashboards showing operational efficiency, product launches, and global reach"
              width={1200}
              height={800}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section data-reveal className="bg-technic-bg py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-copy className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-5 font-heading text-3xl font-bold text-technic-text md:text-5xl">Why Businesses Choose TechNic</h2>
            <p className="text-lg leading-relaxed text-technic-secondary">
              Engineering that stays close to the business problem, from the first release through the years after it.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} data-card className={`${cardClass} p-7`}>
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${reason.orange ? "bg-technic-orange-soft text-technic-orange" : "bg-technic-cyan-soft text-technic-cyan-deep"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-technic-text">{reason.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-technic-secondary">{reason.copy}</p>
                  <ArrowRight className="h-4 w-4 text-technic-cyan-deep transition-transform duration-300 group-hover:translate-x-1" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" data-reveal className="bg-technic-bg py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div data-copy>
            <h2 className="mb-5 font-heading text-3xl font-bold text-technic-text md:text-5xl">
              Have a Technology Challenge? <span className="text-technic-cyan">Let&apos;s Build It.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-technic-secondary">
              Tell us what you&apos;re building and our engineering team will help you turn the idea into a scalable digital solution.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact-form" className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95">
                Start a Conversation
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-technic-border bg-white px-8 py-4 font-semibold text-technic-text hover:border-technic-cyan hover:text-technic-cyan-deep">
                Explore Services
              </a>
            </div>
          </div>
          <div id="contact-form">
            <ServicesContact />
          </div>
        </div>
      </section>
    </main>
  );
}
