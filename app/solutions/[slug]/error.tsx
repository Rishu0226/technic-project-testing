"use client";

export default function SolutionError({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-3xl font-bold text-technic-text">Unable to load solutions.</h1>
      <button type="button" onClick={reset} className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-tn-md hover:opacity-95">Try Again</button>
    </main>
  );
}
