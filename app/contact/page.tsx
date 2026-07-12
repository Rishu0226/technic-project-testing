import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Contact | TechNic Technologies",
  description: "Initiate connect with our global headquarters to discuss your enterprise IT needs or request a product demo.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0B1221] font-sans text-slate-300 scroll-smooth selection:bg-orange-500/30 selection:text-white">
      <Navbar />
      <Hero 
        badgeText="Initiate Connect"
        title={
          <>
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">accelerate?</span>
          </>
        }
        description="Request a demo of our platforms or discuss a custom engineering project with our solution architects at our Global Headquarters."
        primaryActionText="Send a Message"
        primaryActionHref="#contact"
        secondaryActionText="Email Us"
        secondaryActionHref="mailto:hello@technic.dev"
        showBottomFade={false}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
