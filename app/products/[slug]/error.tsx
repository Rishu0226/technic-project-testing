"use client";

import RouteErrorState from "../../../components/RouteErrorState";

export default function ProductError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <RouteErrorState
      title="Unable to load this product."
      error={error}
      reset={reset}
      href="/products"
      action="Back to Products"
    />
  );
}
