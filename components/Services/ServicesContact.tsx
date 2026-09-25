"use client";

import { FormEvent, useState } from "react";
import { ApiClient } from "../../lib/api";
import { serviceOptions } from "./servicesData";

export default function ServicesContact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const parts = name.split(/\s+/);
    const firstName = parts[0] || name;
    const lastName = parts.slice(1).join(" ") || "—";

    setStatus("submitting");
    setMessage("");

    try {
      const result = await ApiClient.post<{ message?: string }>("/api/contact", {
        firstName,
        lastName,
        email: data.get("email"),
        phone: data.get("phone"),
        interest: data.get("service"),
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

  return (
    <div data-card className="bg-white border border-technic-border rounded-3xl p-6 md:p-8 shadow-tn-card">
      <h3 className="font-heading text-2xl font-bold text-technic-text mb-6">Send a Message</h3>
      {status === "success" ? (
        <p className="rounded-2xl bg-technic-success-soft px-4 py-3 text-technic-success" role="status">
          {message}
        </p>
      ) : (
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={onSubmit}>
          {status === "error" && (
            <p className="sm:col-span-2 rounded-xl bg-technic-error-soft px-4 py-3 text-sm text-technic-error" role="alert">
              {message}
            </p>
          )}
          <label className="block text-sm font-medium text-technic-text">
            Name
            <input name="name" required autoComplete="name" className="tn-input mt-2" placeholder="Your name" />
          </label>
          <label className="block text-sm font-medium text-technic-text">
            Work Email
            <input name="email" type="email" required autoComplete="email" className="tn-input mt-2" placeholder="name@company.com" />
          </label>
          <label className="block text-sm font-medium text-technic-text">
            Company
            <input name="company" autoComplete="organization" className="tn-input mt-2" placeholder="Company name" />
          </label>
          <label className="block text-sm font-medium text-technic-text">
            Phone
            <input name="phone" type="tel" autoComplete="tel" className="tn-input mt-2" placeholder="+91" />
          </label>
          <label className="block text-sm font-medium text-technic-text sm:col-span-2">
            Service
            <select name="service" required className="tn-input mt-2" defaultValue={serviceOptions[0]}>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium text-technic-text sm:col-span-2">
            Project Details
            <textarea name="details" required rows={4} className="tn-input mt-2 resize-none" placeholder="What are you planning to build?" />
          </label>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="sm:col-span-2 inline-flex items-center justify-center bg-brand-gradient text-white font-semibold rounded-full px-8 py-4 shadow-tn-md hover:opacity-95 disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
