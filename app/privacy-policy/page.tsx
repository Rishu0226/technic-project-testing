import type { Metadata } from "next";
import LegalLayout from "../../components/legal/LegalLayout";
import { legalImages, legalUpdated, privacySections } from "../../components/legal/legalContent";
import { API_BASE_URL } from "../../lib/api";
import { publicImage } from "../../lib/publicImage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how TechNic Technologies collects, uses, protects and handles personal information.",
  alternates: { canonical: `${siteUrl}/privacy-policy` },
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

export default async function PrivacyPolicyPage() {
  const email = await contactEmail();

  return (
    <LegalLayout
      current="Privacy Policy"
      titleLead="Privacy"
      titleAccent="Policy"
      description="Your privacy is important to us. This policy explains how TechNic Technologies collects, uses, protects, and handles your personal information."
      updated={legalUpdated}
      image={publicImage(legalImages.privacyHero)}
      imageAlt="Privacy and security illustration for the TechNic privacy policy"
      sections={privacySections}
      ctaTitle="Have Questions About Your Data?"
      ctaDescription="If you have questions about this Privacy Policy or how we handle your information, please contact our team."
      email={email}
    />
  );
}
