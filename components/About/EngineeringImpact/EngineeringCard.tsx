import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { EngineeringCardData } from "./engineeringData";

export default function EngineeringCard({ card }: { card: EngineeringCardData }) {
  return (
    <article
      data-card-id={card.id}
      className={`ei-card flex h-full flex-col rounded-2xl border border-technic-border bg-white p-5 sm:p-6 ${
        card.row === "top" ? "lg:col-span-3" : "lg:col-span-2"
      }`}
    >
      <h4 className="ei-title font-heading text-base font-semibold text-technic-text">{card.title}</h4>
      <p className="mt-2 text-sm leading-6 text-technic-secondary">{card.description}</p>
      <Link
        href="/services"
        className="ei-arrow mt-5 ml-auto grid h-9 w-9 place-items-center rounded-full bg-technic-cyan-soft text-technic-cyan-deep"
        aria-label={`Explore services related to ${card.title}`}
      >
        <ArrowRight className="ei-arrow-icon" size={16} strokeWidth={2} aria-hidden />
      </Link>
    </article>
  );
}
