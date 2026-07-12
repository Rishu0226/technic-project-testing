import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ProductsSection from "../../components/ProductsSection";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Products | TechNic Technologies",
  description: "Discover our 5 proprietary AI platforms, including NicFlow AI, TechGuard Sentinel, and more.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#0B1221] font-sans text-slate-300 scroll-smooth selection:bg-orange-500/30 selection:text-white">
      <Navbar />
      <Hero 
        badgeText="Product Division"
        title={
          <>
            Proprietary AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Platforms.</span>
          </>
        }
        description="We don't just build for others; we build for the future. Discover our suite of enterprise tools designed to automate, secure, and accelerate operations."
        primaryActionText="Request Demo"
        primaryActionHref="/contact"
        secondaryActionText="Explore Products"
        secondaryActionHref="#products"
      />
      <ProductsSection />
      <Footer />
    </div>
  );
}
