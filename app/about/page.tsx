import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import AboutSection from "../../components/About/AboutSection";
import Footer from "../../components/Footer";
import CompanyJourney from "../../components/About/CompanyJourney";


export const metadata: Metadata = {
  title: "About Us | TechNic Technologies",
  description: "Learn about our dual-threat innovation engine, combining a dedicated research lab with an enterprise service division.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary scroll-smooth">
      <Navbar />
      {/* <Hero
        badgeText="Our Story"
        title={
          <>
            Dual-Threat <span className="text-technic-orange">Innovation.</span>
          </>
        }
        description="Most companies are either agencies or product studios. TechNic operates as both, bringing research-grade insights directly to enterprise clients."
        primaryActionText="Join Our Team"
        primaryActionHref="#careers"
        secondaryActionText="Read Our Mission"
        secondaryActionHref="#about"
      /> */}

      <div className="mt-10">
        <CompanyJourney />
      </div>
      <AboutSection />


      <Footer />
    </div>
  );
}
