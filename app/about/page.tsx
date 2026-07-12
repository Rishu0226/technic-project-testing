import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "About Us | TechNic Technologies",
  description: "Learn about our dual-threat innovation engine, combining a dedicated research lab with an enterprise service division.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B1221] font-sans text-slate-300 scroll-smooth selection:bg-orange-500/30 selection:text-white">
      <Navbar />
      <Hero 
        badgeText="Our Story"
        title={
          <>
            Dual-Threat <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Innovation.</span>
          </>
        }
        description="Most companies are either agencies or product studios. TechNic operates as both, bringing research-grade insights directly to enterprise clients."
        primaryActionText="Join Our Team"
        primaryActionHref="#careers"
        secondaryActionText="Read Our Mission"
        secondaryActionHref="#about"
      />
      <AboutSection />
      <Footer />
    </div>
  );
}
