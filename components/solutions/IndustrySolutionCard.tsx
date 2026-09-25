import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconMapper from "../IconMapper";
import SolutionVisual from "./SolutionVisual";
import { cardImageFor } from "./solutionImages";
import { publicImage } from "../../lib/publicImage";
import type { Solution } from "../../types/solution";

export default function IndustrySolutionCard({ solution, index }: { solution: Solution; index: number }) {
  const image = publicImage(solution.cardImage || solution.heroImage) || publicImage(cardImageFor(solution.slug));

  return (
    <article data-card className="group flex flex-col rounded-2xl border border-technic-border bg-white p-6 shadow-tn-card transition-all duration-300 hover:-translate-y-1 hover:border-technic-cyan">
      <SolutionVisual image={image} alt={solution.title} label={solution.industry || "Solution"} />
      <div className="mb-4 mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-technic-cyan-soft text-technic-cyan-deep">
        <IconMapper name={solution.icon || "Layers"} className="h-7 w-7" />
      </div>
      <p className="mb-2 text-sm font-medium text-technic-muted">{String(solution.order || index + 1).padStart(2, "0")}</p>
      <h3 className="mb-2 font-heading text-xl font-bold text-technic-text md:text-2xl">{solution.title}</h3>
      <p className="mb-5 flex-1 text-base leading-relaxed text-technic-secondary">{solution.shortDescription || solution.description}</p>
      <Link href={`/solutions/${solution.slug}`} className="inline-flex items-center text-sm font-semibold text-technic-cyan-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-technic-cyan">
        Learn More
        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
