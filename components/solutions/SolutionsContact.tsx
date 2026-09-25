"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ApiClient } from "../../lib/api";
import type { Solution } from "../../types/solution";

export default function SolutionsContact({ solutions }: { solutions: Solution[] }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const options = solutions.map((item) => item.title);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const parts = name.split(/\s+/);

    setStatus("submitting");
    setMessage("");
    try {
      const result = await ApiClient.post<{ message?: string }>("/api/contact", {
        firstName: parts[0] || name,
        lastName: parts.slice(1).join(" ") || "—",
        email: data.get("email"),
        phone: "—",
        interest: data.get("solution"),
        message: `Company: ${data.get("company") || "—"}\n\n${data.get("details") || ""}`,
      });
      setStatus("success");
      setMessage(result.message || "Message sent. We will be in touch shortly.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The message could not be sent.");
    }
  };

  if (status === "success") {
    return <p className="rounded-2xl border border-technic-border bg-white p-8 text-technic-success" role="status">{message}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-technic-border bg-white p-6 shadow-tn-card md:p-8">
      <h3 className="mb-6 font-heading text-2xl font-bold text-technic-text">Send a Message</h3>
      {status === "error" && <p className="mb-4 rounded-xl bg-technic-error-soft px-4 py-3 text-sm text-technic-error" role="alert">{message}</p>}
      <div className="grid gap-4">
        <label className="text-sm font-medium text-technic-text">Full Name
          <input name="name" required autoComplete="name" className="tn-input mt-2" />
        </label>
        <label className="text-sm font-medium text-technic-text">Work Email
          <input name="email" type="email" required autoComplete="email" className="tn-input mt-2" />
        </label>
        <label className="text-sm font-medium text-technic-text">Company
          <input name="company" autoComplete="organization" className="tn-input mt-2" />
        </label>
        <label className="text-sm font-medium text-technic-text">Solution Interested In
          <select name="solution" required className="tn-input mt-2" defaultValue={options[0] || "Other Inquiry"}>
            {options.map((option) => <option key={option} value={option}>{option}</option>)}
            <option value="Other Inquiry">Other Inquiry</option>
          </select>
        </label>
        <label className="text-sm font-medium text-technic-text">Project Details
          <textarea name="details" required rows={4} className="tn-input mt-2 resize-none" />
        </label>
        <button type="submit" disabled={status === "submitting"} className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white disabled:opacity-60">
          {status === "submitting" ? "Sending..." : "Send Message"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
