import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DetailNotFound({
  title,
  description,
  href,
  action,
  eyebrow,
}: {
  title: string;
  description: string;
  href: string;
  action: string;
  eyebrow?: string;
}) {
  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary">
      <Navbar />
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 pt-32 text-center">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-technic-cyan-deep">{eyebrow}</p>
        )}
        <h1 className="font-heading text-4xl font-extrabold text-technic-text">{title}</h1>
        <p className="mt-4 text-lg text-technic-secondary">{description}</p>
        <Link
          href={href}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95"
        >
          {action}
        </Link>
      </main>
      <Footer />
    </div>
  );
}
