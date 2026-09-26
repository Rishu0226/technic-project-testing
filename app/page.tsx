import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductServicesRelationship from "../components/ProductServicesRelationship";
import ServicesSection from "../components/ServicesSection";
import ProductsSection from "../components/ProductsSection";
import ProcessSection from "../components/ProcessSection";
import AboutSection from "../components/About/AboutSection";
import ContactSection from "../components/Contact/ContactSection";
import Footer from "../components/Footer";

export const dynamic = "force-dynamic";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary scroll-smooth">
      <Navbar />
      <Hero
        sideImage="/Home/homepagehero.png"
        sideImageAlt="TechNic dashboard showing business growth, 120+ projects, 98+ active clients, and a 99% success rate"
      />
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
