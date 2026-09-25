import React from "react";
import Link from "next/link";
import { ApiClient } from "../lib/api";
import IconMapper from "./IconMapper";

export default async function ProductsSection() {
  let products: any[] = [];
  try {
    const data = await ApiClient.get<any[]>('/api/products');
    products = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <section id="products" className="py-24 bg-technic-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-technic-cyan-deep font-semibold tracking-[0.18em] uppercase text-sm mb-3 font-sans">
              Our Products
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-technic-text mb-6 font-heading">
              Proprietary Platforms
            </h3>
            <p className="text-lg text-technic-secondary font-sans">
              Technology products built to solve real-world business problems.
            </p>
          </div>
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center px-6 py-3 border border-technic-border text-base font-medium rounded-full text-technic-text bg-white shadow-tn-sm hover:border-technic-cyan hover:text-technic-cyan-deep transition-colors"
          >
            Request Platform Demo
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, idx) => {
            const orangeBadge = idx % 2 === 1;
            return (
              <article
                key={product._id || idx}
                className="bg-white border border-technic-border rounded-3xl p-8 shadow-tn-card hover:border-technic-cyan hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${orangeBadge ? "bg-technic-orange-soft" : "bg-technic-cyan-soft"}`}>
                    <IconMapper
                      name={product.icon}
                      className={`w-7 h-7 ${orangeBadge ? "text-technic-orange" : "text-technic-cyan-deep"}`}
                    />
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${orangeBadge ? "bg-technic-orange-soft text-technic-orange-deep" : "bg-technic-cyan-soft text-technic-cyan-deep"}`}>
                    Product
                  </span>
                </div>
                <p className="text-sm font-medium text-technic-muted mb-2">{product.name}</p>
                <h4 className="text-2xl font-bold text-technic-text mb-3 font-heading">
                  {product.tagline}
                </h4>
                <p className="text-technic-secondary mb-6 leading-relaxed">
                  {product.description}
                </p>
                {product.features?.length > 0 && (
                  <div className="mb-8">
                    <p className="text-xs font-semibold tracking-wide uppercase text-technic-muted mb-3">Technology</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature: string, fIdx: number) => (
                        <span
                          key={fIdx}
                          className="px-3 py-1 rounded-full bg-technic-bg border border-technic-border text-sm text-technic-secondary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <Link
                  href="/contact"
                  className="mt-auto inline-flex items-center justify-center bg-brand-gradient text-white px-6 py-3 rounded-full font-semibold shadow-tn-sm hover:opacity-95 transition-opacity w-fit"
                >
                  Explore {product.name}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
