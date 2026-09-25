"use client";

import React, { useState } from "react";
import { ApiClient } from "../lib/api";

const fieldClass = "tn-input";

export default function CareerApplicationForm({ job }: { job: any }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const result = await ApiClient.post<{ message?: string }>(`/api/careers/${job.slug}/applications`, data);

      setStatus('success');
      setMessage(result.message || 'Application submitted successfully. We will review it shortly.');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error('Application error:', err);
      setStatus('error');
      setMessage(err.message || 'A network error occurred. Please try again.');
    }
  };

  if (!job.applicationFields || job.applicationFields.length === 0) {
    return (
      <div className="mt-16 pt-8 border-t border-technic-border text-center text-technic-muted">
        This position is currently not accepting applications online. Please email your resume to {job.applicationEmail || 'careers@technic.dev'}.
      </div>
    );
  }

  return (
    <div className="mt-16 pt-16 border-t border-technic-border" id="apply">
      <h2 className="text-3xl font-bold text-technic-text mb-8 font-heading text-center">
        Apply for {job.title}
      </h2>

      {status === 'success' ? (
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            {status === 'error' && (
              <div className="bg-technic-error-soft border border-technic-error/20 text-technic-error px-6 py-4 rounded-xl text-sm mb-6" role="alert">
                {message}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {job.applicationFields.filter((f: any) => f.active !== false).map((field: any, idx: number) => {
                const isFullWidth = field.type === 'textarea' || field.type === 'file' || field.name === 'portfolio' || field.name === 'linkedin';
                const label = (
                  <label htmlFor={field.name} className="block text-sm font-medium text-technic-text mb-2">
                    {field.label} {field.required && <span className="text-technic-error">*</span>}
                  </label>
                );

                if (field.type === 'select' && field.name === 'experience') {
                  return (
                    <div key={idx} className="col-span-1 md:col-span-2">
                      {label}
                      <select id={field.name} name={field.name} required={field.required} className={fieldClass}>
                        <option value="">Select Experience</option>
                        {job.experienceOptions?.map((opt: string, i: number) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  );
                }

                if (field.type === 'textarea') {
                  return (
                    <div key={idx} className="col-span-1 md:col-span-2">
                      {label}
                      <textarea id={field.name} name={field.name} required={field.required} rows={4} className={`${fieldClass} resize-y`} />
                    </div>
                  );
                }

                return (
                  <div key={idx} className={isFullWidth ? "col-span-1 md:col-span-2" : ""}>
                    {label}
                    <input type={field.type} id={field.name} name={field.name} required={field.required} className={fieldClass} />
                  </div>
                );
              })}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-brand-gradient text-white font-semibold py-4 rounded-2xl shadow-tn-sm transition-opacity hover:opacity-95 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Submitting Application...' : 'Submit Application'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
