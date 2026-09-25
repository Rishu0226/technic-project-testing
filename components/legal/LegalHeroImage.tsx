"use client";

import { useState } from "react";
import Image from "next/image";
import { Shield } from "lucide-react";

export default function LegalHeroImage({ image, alt }: { image?: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const show = Boolean(image) && !failed;

  return (
    <div className="flex aspect-[5/4] items-center justify-center overflow-hidden rounded-3xl border border-technic-border bg-white shadow-tn-card">
      {show ? (
        <Image
          src={image as string}
          alt={alt}
          width={1200}
          height={900}
          priority
          onError={() => setFailed(true)}
          className="h-full w-full object-contain p-4"
        />
      ) : (
        <div className="px-6 text-center">
          <Shield className="mx-auto h-8 w-8 text-technic-cyan-deep" aria-hidden="true" />
          <p className="mt-3 text-sm text-technic-muted">Image uploads here</p>
        </div>
      )}
    </div>
  );
}
