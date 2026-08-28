import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductServicesRelationship from "../components/ProductServicesRelationship";
import ServicesSection from "../components/ServicesSection";
import ProductsSection from "../components/ProductsSection";
import ProcessSection from "../components/ProcessSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1221] font-sans text-slate-300 scroll-smooth selection:bg-orange-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <ProductServicesRelationship />
      <ProductsSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
