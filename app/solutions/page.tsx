import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SolutionsMotion from "../../components/solutions/SolutionsMotion";
import SolutionsView from "../../components/solutions/SolutionsView";
import { API_BASE_URL } from "../../lib/api";
import type { Solution } from "../../types/solution";

export const metadata: Metadata = {
  title: "Business Solutions",
  description: "Industry-focused technology solutions for healthcare, education, retail, manufacturing, logistics, and finance.",
};

export default async function SolutionsPage() {
  let solutions: Solution[] = [];
  let loadFailed = false;
  let email = "";
  let phone = "";

  try {
    const response = await fetch(`${API_BASE_URL}/api/solutions`, { cache: "no-store" });
    if (!response.ok) loadFailed = true;
    else {
      const data = await response.json();
      solutions = Array.isArray(data) ? data : [];
    }
  } catch {
    loadFailed = true;
  }

  try {
    const settings = await fetch(`${API_BASE_URL}/api/settings`, { cache: "no-store" });
    if (settings.ok) {
      const data = await settings.json() as { email?: string; phone?: string };
      email = data.email || "";
      phone = data.phone || "";
    }
  } catch {
    email = "";
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-technic-secondary">
      <Navbar />
      <SolutionsMotion>
        <SolutionsView solutions={solutions} loadFailed={loadFailed} email={email} phone={phone} />
      </SolutionsMotion>
      <Footer />
    </div>
  );
}
