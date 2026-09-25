import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ContactSection from "../../components/Contact/ContactSection";
import Footer from "../../components/Footer";
import ContactHero from "../../components/Contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact | TechNic Technologies",
  description: "Initiate connect with our global headquarters to discuss your enterprise IT needs or request a product demo.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary scroll-smooth">
      <Navbar />
      {/* <Hero 
        badgeText="Initiate Connect"
        title={
          <>
            Ready to <span className="text-technic-cyan">accelerate?</span>
          </>
        }
        description="Request a demo of our platforms or discuss a custom engineering project with our solution architects at our Global Headquarters."
        primaryActionText="Send a Message"
        primaryActionHref="#contact"
        secondaryActionText="Email Us"
        secondaryActionHref="mailto:hello@technic.dev"
        showBottomFade={false}
      /> */}
      <ContactHero />
      <ContactSection />
      <Footer />
    </div>
  );
}
