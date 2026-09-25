import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesContent from "../../components/Services/ServicesContent";
import ServicesMotion from "../../components/Services/ServicesMotion";
import { API_BASE_URL } from "../../lib/api";
import type { PublicService } from "../../lib/service";

export const metadata: Metadata = {
  title: "Technology Services",
  description:
    "TechNic Technologies delivers custom software development, web and mobile applications, cloud solutions, AI automation, data engineering, and scalable digital products.",
};

export default async function ServicesPage() {
  let services: PublicService[] = [];
  let loadFailed = false;

  try {
    const response = await fetch(`${API_BASE_URL}/api/services`, { cache: "no-store" });
    if (!response.ok) {
      loadFailed = true;
    } else {
      const data = await response.json();
      services = Array.isArray(data) ? data : [];
    }
  } catch {
    loadFailed = true;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary">
      <Navbar />
      <ServicesMotion>
        <ServicesContent services={services} loadFailed={loadFailed} />
      </ServicesMotion>
      <Footer />
    </div>
  );
}
