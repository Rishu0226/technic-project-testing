"use client";

import type { Solution } from "../../types/solution";
import InquiryForm from "../InquiryForm";

export default function SolutionsContact({ solutions }: { solutions: Solution[] }) {
  return <InquiryForm variant="solutions" options={solutions.map((item) => item.title)} />;
}
