"use client";

import RouteErrorState from "../../../components/RouteErrorState";

export default function SolutionError({ error, reset }: { error: Error; reset: () => void }) {
  return <RouteErrorState title="Unable to load solutions." error={error} reset={reset} />;
}
