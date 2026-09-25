import Link from "next/link";

export default function LegalBreadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" data-breadcrumb className="mb-8 text-sm text-technic-muted">
      <Link href="/" className="transition-colors duration-200 hover:text-technic-cyan-deep">Home</Link>
      <span className="mx-2" aria-hidden="true">&gt;</span>
      <span className="text-technic-text">{current}</span>
    </nav>
  );
}
