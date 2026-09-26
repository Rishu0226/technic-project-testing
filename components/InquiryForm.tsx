"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { inquiryMessage, postInquiry, splitFullName, type FormStatus } from "../lib/inquiryContact";

type InquiryFormProps = {
  variant: "services" | "solutions";
  options: string[];
};

const labelClass = "text-sm font-medium text-technic-text";
const submitClass =
  "inline-flex items-center justify-center bg-brand-gradient text-white font-semibold rounded-full px-8 py-4 shadow-tn-md hover:opacity-95 disabled:opacity-60";

export default function InquiryForm({ variant, options }: InquiryFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const interestName = variant === "services" ? "service" : "solution";
  const selectOptions = variant === "solutions" ? [...options, "Other Inquiry"] : options;
  const defaultInterest = selectOptions[0] || "Other Inquiry";

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const { firstName, lastName } = splitFullName(String(data.get("name") || ""));

    setStatus("submitting");
    setMessage("");

    try {
      const result = await postInquiry({
        firstName,
        lastName,
        email: data.get("email"),
        phone: variant === "services" ? data.get("phone") : "—",
        interest: data.get(interestName),
        message: inquiryMessage(data.get("company"), data.get("details")),
      });
      setStatus("success");
      setMessage(result.message || "Message sent. We will be in touch shortly.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The message could not be sent.");
    }
  };

  if (variant === "solutions" && status === "success") {
    return (
      <p className="rounded-2xl border border-technic-border bg-white p-8 text-technic-success" role="status">
        {message}
      </p>
    );
  }

  const error = status === "error" && (
    <p className="rounded-xl bg-technic-error-soft px-4 py-3 text-sm text-technic-error" role="alert">
      {message}
    </p>
  );

  const fields = (
    <>
      <label className={`${variant === "services" ? "block " : ""}${labelClass}`}>
        {variant === "services" ? "Name" : "Full Name"}
        <input
          name="name"
          required
          autoComplete="name"
          className="tn-input mt-2"
          placeholder={variant === "services" ? "Your name" : undefined}
        />
      </label>
      <label className={`${variant === "services" ? "block " : ""}${labelClass}`}>
        Work Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="tn-input mt-2"
          placeholder={variant === "services" ? "name@company.com" : undefined}
        />
      </label>
      <label className={`${variant === "services" ? "block " : ""}${labelClass}`}>
        Company
        <input
          name="company"
          autoComplete="organization"
          className="tn-input mt-2"
          placeholder={variant === "services" ? "Company name" : undefined}
        />
      </label>
      {variant === "services" && (
        <label className={`block ${labelClass}`}>
          Phone
          <input name="phone" type="tel" autoComplete="tel" className="tn-input mt-2" placeholder="+91" />
        </label>
      )}
      <label className={`${variant === "services" ? "block sm:col-span-2 " : ""}${labelClass}`}>
        {variant === "services" ? "Service" : "Solution Interested In"}
        <select name={interestName} required className="tn-input mt-2" defaultValue={defaultInterest}>
          {selectOptions.map((option, index) => (
            <option key={`${option}-${index}`} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className={`${variant === "services" ? "block sm:col-span-2 " : ""}${labelClass}`}>
        Project Details
        <textarea
          name="details"
          required
          rows={4}
          className="tn-input mt-2 resize-none"
          placeholder={variant === "services" ? "What are you planning to build?" : undefined}
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className={variant === "services" ? `sm:col-span-2 ${submitClass}` : submitClass}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        {variant === "solutions" && <ArrowRight className="ml-2 h-4 w-4" />}
      </button>
    </>
  );

  if (variant === "services") {
    return (
      <div data-card className="bg-white border border-technic-border rounded-3xl p-6 md:p-8 shadow-tn-card">
        <h3 className="font-heading text-2xl font-bold text-technic-text mb-6">Send a Message</h3>
        {status === "success" ? (
          <p className="rounded-2xl bg-technic-success-soft px-4 py-3 text-technic-success" role="status">
            {message}
          </p>
        ) : (
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={onSubmit}>
            {error && <div className="sm:col-span-2">{error}</div>}
            {fields}
          </form>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-technic-border bg-white p-6 shadow-tn-card md:p-8">
      <h3 className="mb-6 font-heading text-2xl font-bold text-technic-text">Send a Message</h3>
      {error && <div className="mb-4">{error}</div>}
      <div className="grid gap-4">{fields}</div>
    </form>
  );
}
