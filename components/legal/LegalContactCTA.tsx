import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LegalContactCTA({
  title,
  description,
  email,
}: {
  title: string;
  description: string;
  email?: string;
}) {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-card className="rounded-3xl bg-technic-bg px-6 py-10 text-center sm:px-10">
          <h2 className="font-heading text-3xl font-bold text-technic-text md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-technic-secondary">{description}</p>
          {email && (
            <p className="mt-4 text-technic-secondary">
              <a href={`mailto:${email}`} className="font-medium text-technic-cyan-deep hover:text-technic-cyan">{email}</a>
            </p>
          )}
          <Link href="/contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95 sm:w-auto">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
