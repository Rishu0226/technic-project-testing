import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Services | TechNic Technologies",
  description: "Elite IT Services, Custom Website Development, Mobile Apps, and Cloud DevOps Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0B1221] font-sans text-slate-300 scroll-smooth selection:bg-orange-500/30 selection:text-white">
      <Navbar />
      <Hero 
        badgeText="Service Division"
        title={
          <>
            Elite IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Engineering.</span>
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
