"use client";

import { useState } from "react";
import Image from "next/image";

export default function SolutionVisual({
  image,
  alt,
  label,
  priority = false,
  className = "h-44",
}: {
  image?: string;
  alt: string;
  label: string;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(image) && !failed;

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-technic-border bg-technic-bg ${className}`}>
      {showImage ? (
        <Image
          src={image as string}
          alt={alt}
          width={1200}
          height={800}
          priority={priority}
          onError={() => setFailed(true)}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-technic-cyan-deep">{label}</p>
          <p className="mt-2 text-sm text-technic-muted">Image uploads here</p>
        </div>
      )}
    </div>
  );
}
