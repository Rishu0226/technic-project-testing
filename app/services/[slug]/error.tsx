"use client";

import RouteErrorState from "../../../components/RouteErrorState";

export default function ServiceError({ error, reset }: { error: Error; reset: () => void }) {
  return <RouteErrorState title="Unable to load this service." error={error} reset={reset} />;
}
