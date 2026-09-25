import type { Metadata } from "next";
import LegalLayout from "../../components/legal/LegalLayout";
import { legalImages, legalUpdated, termsSections } from "../../components/legal/legalContent";
import { API_BASE_URL } from "../../lib/api";
import { publicImage } from "../../lib/publicImage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the Terms & Conditions governing the use of the TechNic Technologies website and services.",
  alternates: { canonical: `${siteUrl}/terms-of-service` },
};

async function contactEmail() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/settings`, { cache: "no-store" });
    if (!response.ok) return "";
    const data = await response.json() as { email?: string };
    return data.email || "";
  } catch {
    return "";
  }
}

export default async function TermsOfServicePage() {
  const email = await contactEmail();

  return (
    <LegalLayout
      current="Terms & Conditions"
      titleLead="Terms &"
      titleAccent="Conditions"
      description="These Terms & Conditions outline the rules and guidelines for using TechNic Technologies' website and services."
      updated={legalUpdated}
      image={publicImage(legalImages.termsHero)}
      imageAlt="Terms and conditions illustration for TechNic Technologies"
      sections={termsSections}
      ctaTitle="Still Have Questions?"
      ctaDescription="If you need clarification about these Terms & Conditions, our team is here to help."
      email={email}
    />
  );
}
