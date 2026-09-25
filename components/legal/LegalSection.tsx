import type { LegalSectionData } from "./legalContent";

export default function LegalSection({ section, email }: { section: LegalSectionData; email?: string }) {
  const accent = section.accent === "orange";

  return (
    <article id={section.id} data-card className="scroll-mt-[110px] rounded-2xl border border-technic-border bg-white p-5 shadow-tn-card sm:p-8">
      <div className="mb-4 flex items-center gap-4">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-heading text-sm font-bold ${accent ? "border-technic-orange bg-technic-orange-soft text-technic-orange" : "border-technic-cyan bg-technic-cyan-soft text-technic-cyan-deep"}`}>
          {section.number}
        </span>
        <h2 className="font-heading text-xl font-bold text-technic-text md:text-2xl">{section.title}</h2>
      </div>
      <div className="space-y-4 text-base leading-relaxed text-technic-secondary md:text-lg">
        {section.blocks.map((block, index) => (
          block.type === "list" ? (
            <ul key={index} className="list-disc space-y-2 pl-5">
              {block.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ) : (
            <p key={index}>{block.text}</p>
          )
        ))}
        {section.id === "contact-us" && email && (
          <p>
            Email: <a href={`mailto:${email}`} className="font-medium text-technic-cyan-deep hover:text-technic-cyan">{email}</a>
          </p>
        )}
      </div>
    </article>
  );
}
