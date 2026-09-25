"use client";

import { useEffect } from "react";

export default function ServiceError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-3xl font-bold text-technic-text">Unable to load this service.</h1>
      <button type="button" onClick={reset} className="mt-6 rounded-full bg-brand-gradient px-8 py-3 font-semibold text-white">
        Try Again
      </button>
    </main>
  );
}
