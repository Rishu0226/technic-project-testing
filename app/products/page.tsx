import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ProductsSection from "../../components/ProductsSection";
import Footer from "../../components/Footer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Products | TechNic Technologies",
  description: "Discover our 5 proprietary AI platforms, including NicFlow AI, TechGuard Sentinel, and more.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary scroll-smooth">
      <Navbar />
      <Hero 
        badgeText="TECHNOLOGY • INNOVATION • ENGINEERING"
        title={
          <>
            Proprietary AI <span className="text-technic-orange">Platforms.</span>
          </>
        }
        description="We don't just build for others; we build for the future. Discover our suite of enterprise tools designed to automate, secure, and accelerate operations."
        primaryActionText="Request Demo"
        primaryActionHref="/contact"
        secondaryActionText="Explore Products"
        secondaryActionHref="#products"
        sideImage="/Products/producthero.png"
        sideImageAlt="TechNic platform connecting cloud, web, mobile, data, AI, and security"
        sideImageWidth={1200}
        sideImageHeight={800}
      />
      <ProductsSection />
      <Footer />
    </div>
  );
}
