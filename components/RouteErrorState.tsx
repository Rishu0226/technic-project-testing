"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function RouteErrorState({
  title,
  error,
  reset,
  href,
  action,
}: {
  title: string;
  error?: Error;
  reset: () => void;
  href?: string;
  action?: string;
}) {
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-3xl font-bold text-technic-text">{title}</h1>
      <button
        type="button"
        onClick={reset}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95"
      >
        Try Again
      </button>
      {href && action && (
        <Link href={href} className="mt-4 text-sm font-semibold text-technic-cyan-deep hover:text-technic-cyan">
          {action}
        </Link>
      )}
    </main>
  );
}
