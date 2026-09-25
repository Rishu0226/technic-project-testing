import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ApiClient } from "../lib/api";
import IconMapper from "./IconMapper";

export default async function ServicesSection() {
  let services: any[] = [];
  try {
    const data = await ApiClient.get<any[]>('/api/services');
    services = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch services:", error);
  }

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-technic-cyan-deep font-semibold tracking-[0.18em] uppercase text-sm mb-3 font-sans">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-technic-text mb-6 font-heading">
            Engineering Solutions
          </h3>
          <p className="text-lg text-technic-secondary font-sans">
            Leverage our elite engineering team to build custom websites, deploy
            mobile apps, and orchestrate modern DevOps architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const accentOrange = idx % 3 === 2;
            return (
              <div
                key={service._id || idx}
                className="bg-white rounded-2xl p-8 border border-technic-border shadow-tn-card hover:border-technic-cyan hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${accentOrange ? "bg-technic-orange-soft" : "bg-technic-cyan-soft"}`}>
                  <IconMapper
                    name={service.icon}
                    className={`w-7 h-7 ${accentOrange ? "text-technic-orange" : "text-technic-cyan-deep"}`}
                  />
                </div>
                <h4 className="text-xl font-bold text-technic-text mb-3 font-heading">
                  {service.title}
                </h4>
                <p className="text-technic-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-technic-cyan-deep font-medium hover:text-technic-orange transition-colors"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
