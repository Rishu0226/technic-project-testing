import { ApiClient } from "./api";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export function splitFullName(name: string) {
  const trimmed = name.trim();
  const parts = trimmed.split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || trimmed,
    lastName: parts.slice(1).join(" ") || "—",
  };
}

export function inquiryMessage(company: FormDataEntryValue | null, details: FormDataEntryValue | null) {
  return `Company: ${company || "—"}\n\n${details || ""}`;
}

export function postInquiry(body: {
  firstName: string;
  lastName: string;
  email: FormDataEntryValue | null;
  phone: FormDataEntryValue | string | null;
  interest: FormDataEntryValue | null;
  message: string;
}) {
  return ApiClient.post<{ message?: string }>("/api/contact", body);
}
