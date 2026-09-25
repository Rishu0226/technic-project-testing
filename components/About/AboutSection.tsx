import React from "react";
import Image from "next/image";
import AboutGrid from "./AboutGrid";

const stats = [
  { value: "500+", label: "Projects Delivered", accent: "bg-technic-cyan" },
  { value: "50+", label: "Technology Experts", accent: "bg-technic-orange" },
  { value: "10+", label: "Industries", accent: "bg-technic-cyan" },
  { value: "99%", label: "Client Satisfaction", accent: "bg-technic-orange" },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-technic-bg text-technic-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-technic-cyan-deep font-semibold tracking-[0.18em] uppercase text-sm mb-3 font-sans">
              The TechNic Advantage
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-technic-text font-heading">
              We build products and engineer solutions.
            </h3>
            <p className="text-technic-secondary text-lg mb-6 leading-relaxed">
              We are a technology company that builds its own products and delivers high-quality technology services. Our dedicated research lab fuels our proprietary product development, ensuring our tools stay years ahead of the market.
            </p>
            <p className="text-technic-secondary text-lg mb-8 leading-relaxed">
              Simultaneously, our enterprise service division implements these cutting-edge insights directly into custom client projects. Building products makes our engineering sharper; executing custom solutions makes our products battle-tested.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-technic-border bg-white shadow-tn-lg">
              <Image
                src="/Assest/about2.png"
                alt="TechNic infrastructure and engineering workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-technic-border p-6 rounded-3xl shadow-tn-card hover:border-technic-cyan transition-colors"
            >
              <div className={`h-1 w-10 rounded-full mb-4 ${stat.accent}`} />
              <div className="text-4xl font-extrabold text-technic-text mb-2 font-heading">{stat.value}</div>
              <div className="text-technic-muted font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center mt-20">
          <AboutGrid />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
