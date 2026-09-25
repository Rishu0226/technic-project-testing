import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Services | TechNic Technologies",
  description: "Elite IT Services, Custom Website Development, Mobile Apps, and Cloud DevOps Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary scroll-smooth">
      <Navbar />
      <Hero 
        badgeText="TECHNOLOGY • INNOVATION • ENGINEERING"
        title={
          <>
            Elite IT <span className="text-technic-cyan">Engineering.</span>
          </>
        }
        description="We orchestrate modern web, mobile, and cloud architectures. Our service division implements cutting-edge insights directly into bespoke client projects."
        primaryActionText="Start a Project"
        primaryActionHref="/contact"
        secondaryActionText="Learn More"
        secondaryActionHref="#services"
      />
      <ServicesSection />
      <Footer />
    </div>
  );
}
