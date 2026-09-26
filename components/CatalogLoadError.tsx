const retryClass =
  "mt-6 inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95";

export default function CatalogLoadError({ message, href }: { message: string; href: string }) {
  return (
    <div className="rounded-2xl border border-technic-border bg-white px-6 py-10 text-center shadow-tn-card">
      <p className="text-lg text-technic-text">{message}</p>
      <a href={href} className={retryClass}>
        Try Again
      </a>
    </div>
  );
}
