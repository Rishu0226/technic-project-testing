"use client";

import React, { useState } from "react";
import { ApiClient } from "../lib/api";

const fieldClass = "tn-input";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[\d\s().-]{7,20}$/;
const resumePattern = /\.(pdf|doc|docx)$/i;
const maxResumeBytes = 5 * 1024 * 1024;

type ApplicationField = {
  name: string;
  label?: string;
  type?: string;
  required?: boolean;
  active?: boolean;
};

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function fieldError(field: ApplicationField, value: string, file: File | null, options: string[]) {
  const label = field.label || field.name || "This field";
  const required = field.required !== false;
  const trimmed = value.trim();

  if (field.type === "file") {
    if (required && !file) return `${label} is required.`;
    if (!file) return "";
    if (!resumePattern.test(file.name)) return `${label} must be a PDF or Word file.`;
    if (file.size > maxResumeBytes) return `${label} must be 5 MB or smaller.`;
    return "";
  }

  if (required && !trimmed) return `${label} is required.`;
  if (!trimmed) return "";
  if (field.type === "email" && !emailPattern.test(trimmed)) return `${label} must be a valid email address.`;
  if (field.type === "tel" && !phonePattern.test(trimmed)) return `${label} must be a valid phone number.`;
  if (field.type === "link" && !isHttpUrl(trimmed)) return `${label} must be a valid link starting with http:// or https://.`;
  if (field.type === "select" && field.name === "experience" && options.length > 0 && !options.includes(trimmed)) {
    return `Choose a listed option for ${label}.`;
  }
  return "";
}

function applicationFormData(data: Record<string, string>, files: Map<string, File>) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));
  files.forEach((file, key) => formData.append(key, file));
  return formData;
}

function readFieldValue(form: HTMLFormElement, field: ApplicationField) {
  const element = form.elements.namedItem(field.name);
  if (field.type === "file") {
    const input = element instanceof HTMLInputElement ? element : null;
    const file = input?.files?.[0] || null;
    return { value: file?.name || "", file };
  }
  if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement) {
    return { value: element.value, file: null };
  }
  return { value: "", file: null };
}

export default function CareerApplicationForm({ job }: { job: any }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const activeFields: ApplicationField[] = Array.isArray(job.applicationFields)
    ? job.applicationFields.filter((field: ApplicationField) => field.active !== false && field.name)
    : [];
  const experienceOptions: string[] = Array.isArray(job.experienceOptions) ? job.experienceOptions : [];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const nextErrors: Record<string, string> = {};
    const data: Record<string, string> = {};
    const files = new Map<string, File>();

    activeFields.forEach((field) => {
      const { value, file } = readFieldValue(form, field);
      const error = fieldError(field, value, file, experienceOptions);
      if (error) nextErrors[field.name] = error;
      else if (file) files.set(field.name, file);
      else if (value.trim()) data[field.name] = value.trim();
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setMessage("Check the highlighted fields and try again.");
      const firstInvalid = activeFields.find((field) => nextErrors[field.name]);
      if (firstInvalid) form.querySelector<HTMLElement>(`#${CSS.escape(firstInvalid.name)}`)?.focus();
      return;
    }

    setStatus("submitting");
    setMessage("");
    setErrors({});

    try {
      const result = files.size > 0
        ? await ApiClient.postForm<{ message?: string }>(`/api/careers/${job.slug}/applications`, applicationFormData(data, files))
        : await ApiClient.post<{ message?: string }>(`/api/careers/${job.slug}/applications`, data);
      setStatus("success");
      setMessage(result.message || "Application submitted successfully. We will review it shortly.");
      form.reset();
    } catch (err: any) {
      console.error("Application error:", err);
      setStatus("error");
      setMessage(err.message || "A network error occurred. Please try again.");
    }
  };

  if (activeFields.length === 0) {
    return (
      <div className="mt-16 pt-8 border-t border-technic-border text-center text-technic-muted">
        This position is currently not accepting applications online. Please email your resume to {job.applicationEmail || "careers@technic.dev"}.
      </div>
    );
  }

  return (
    <div className="mt-16 pt-16 border-t border-technic-border" id="apply">
      <h2 className="text-3xl font-bold text-technic-text mb-8 font-heading text-center">
        Apply for {job.title}
      </h2>

      {status === "success" ? (
        <div className="bg-technic-success-soft border border-technic-success/20 text-technic-success p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-4 max-w-2xl mx-auto" role="status">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-technic-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-technic-text">Application received</h3>
          <p className="text-lg">{message}</p>
        </div>
      ) : (
        <div className="bg-white border border-technic-border rounded-3xl p-8 shadow-tn-md max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            {status === "error" && message && (
              <div className="bg-technic-error-soft border border-technic-error/20 text-technic-error px-6 py-4 rounded-xl text-sm mb-6" role="alert">
                {message}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeFields.map((field, idx) => {
                const isFullWidth = field.type === "textarea" || field.type === "file" || field.type === "link" || field.name === "portfolio" || field.name === "linkedin";
                const error = errors[field.name];
                const inputClass = error ? `${fieldClass} border-technic-error` : fieldClass;
                const describedBy = error ? `${field.name}-error` : undefined;
                const label = (
                  <label htmlFor={field.name} className="block text-sm font-medium text-technic-text mb-2">
                    {field.label} {field.required !== false && <span className="text-technic-error">*</span>}
                  </label>
                );
                const errorText = error ? (
                  <p id={`${field.name}-error`} className="mt-2 text-sm text-technic-error" role="alert">{error}</p>
                ) : null;

                let control: React.ReactNode;
                if (field.type === "select") {
                  const options = field.name === "experience" ? experienceOptions : [];
                  control = (
                    <select id={field.name} name={field.name} required={field.required !== false} aria-invalid={Boolean(error)} aria-describedby={describedBy} className={inputClass} defaultValue="">
                      <option value="">Select {field.label || "an option"}</option>
                      {options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  );
                } else if (field.type === "textarea") {
                  control = (
                    <textarea id={field.name} name={field.name} required={field.required !== false} rows={4} aria-invalid={Boolean(error)} aria-describedby={describedBy} className={`${inputClass} resize-y`} />
                  );
                } else if (field.type === "file") {
                  control = (
                    <>
                      <input id={field.name} name={field.name} type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required={field.required !== false} aria-invalid={Boolean(error)} aria-describedby={describedBy} className={inputClass} />
                      <p className="mt-2 text-sm text-technic-muted">PDF or Word, up to 5 MB.</p>
                    </>
                  );
                } else if (field.type === "link") {
                  control = (
                    <input id={field.name} name={field.name} type="url" inputMode="url" placeholder="https://" required={field.required !== false} aria-invalid={Boolean(error)} aria-describedby={describedBy} className={inputClass} />
                  );
                } else if (field.type === "email") {
                  control = (
                    <input id={field.name} name={field.name} type="email" autoComplete="email" inputMode="email" required={field.required !== false} aria-invalid={Boolean(error)} aria-describedby={describedBy} className={inputClass} />
                  );
                } else if (field.type === "tel") {
                  control = (
                    <input id={field.name} name={field.name} type="tel" autoComplete="tel" inputMode="tel" placeholder="+1 555 000 0000" required={field.required !== false} aria-invalid={Boolean(error)} aria-describedby={describedBy} className={inputClass} />
                  );
                } else {
                  control = (
                    <input id={field.name} name={field.name} type="text" required={field.required !== false} aria-invalid={Boolean(error)} aria-describedby={describedBy} className={inputClass} />
                  );
                }

                return (
                  <div key={`${field.name}-${idx}`} className={isFullWidth ? "col-span-1 md:col-span-2" : ""}>
                    {label}
                    {control}
                    {errorText}
                  </div>
                );
              })}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-brand-gradient text-white font-semibold py-4 rounded-2xl shadow-tn-sm transition-opacity hover:opacity-95 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Submitting Application..." : "Submit Application"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
