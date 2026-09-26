"use client";

import RouteErrorState from "../../components/RouteErrorState";

export default function SolutionsError({ error, reset }: { error: Error; reset: () => void }) {
  return <RouteErrorState title="Unable to load solutions." error={error} reset={reset} />;
}
