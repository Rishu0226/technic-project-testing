import type { Metadata } from "next";
import ComingSoon from "../../components/ComingSoon";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "This page is still being built.",
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
