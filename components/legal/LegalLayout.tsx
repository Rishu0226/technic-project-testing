import { Calendar } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LegalBreadcrumb from "./LegalBreadcrumb";
import LegalContactCTA from "./LegalContactCTA";
import LegalHeroImage from "./LegalHeroImage";
import LegalMotion from "./LegalMotion";
import LegalSection from "./LegalSection";
import LegalSidebar from "./LegalSidebar";
import type { LegalSectionData } from "./legalContent";

export default function LegalLayout({
  current,
  titleLead,
  titleAccent,
  description,
  updated,
  image,
  imageAlt,
  sections,
  ctaTitle,
  ctaDescription,
  email,
}: {
  current: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  updated: string;
  image?: string;
  imageAlt: string;
  sections: LegalSectionData[];
  ctaTitle: string;
  ctaDescription: string;
  email?: string;
}) {
  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-technic-secondary">
      <Navbar />
      <LegalMotion>
        <main className="pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <LegalBreadcrumb current={current} />
            <section className="grid items-center gap-12 pb-16 md:grid-cols-2">
              <div>
                <p data-hero className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">Legal</p>
                <h1 data-hero className="mb-5 font-heading text-4xl font-extrabold leading-tight text-technic-text sm:text-5xl md:text-6xl">
                  {titleLead} <span className="text-technic-cyan">{titleAccent}</span>
                </h1>
                <p data-hero className="mb-6 max-w-xl text-lg leading-relaxed text-technic-secondary">{description}</p>
                <p data-hero className="inline-flex items-center gap-2 text-sm text-technic-muted">
                  <Calendar className="h-4 w-4 text-technic-cyan-deep" aria-hidden="true" />
                  Last updated: {updated}
                </p>
              </div>
              <div data-hero-visual className="lg:max-w-[600px] lg:justify-self-end">
                <LegalHeroImage image={image} alt={imageAlt} />
              </div>
            </section>
          </div>

          <section className="bg-technic-bg py-24">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:gap-14 lg:px-8">
              <LegalSidebar sections={sections} />
              <div className="min-w-0 flex-1 space-y-6">
                {/* <p className="rounded-2xl border border-technic-orange/30 bg-technic-orange-soft px-5 py-4 text-sm font-medium text-technic-text">
                  Legal content requires review. This page is draft copy and is not an approved company policy.
                </p> */}
                {sections.map((section) => (
                  <LegalSection key={section.id} section={section} email={email} />
                ))}
              </div>
            </div>
          </section>

          <LegalContactCTA title={ctaTitle} description={ctaDescription} email={email} />
        </main>
      </LegalMotion>
      <Footer />
    </div>
  );
}
