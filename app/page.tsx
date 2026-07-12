import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "TechNic Technologies | Architecting the Digital Future",
  description: "A comprehensive hybrid firm offering custom IT services, DevOps solutions, and proprietary AI enterprise software.",
};


export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1221] font-sans text-slate-300 scroll-smooth selection:bg-orange-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
