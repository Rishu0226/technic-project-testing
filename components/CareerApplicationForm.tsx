"use client";

import React, { useState } from "react";
import { ApiClient } from "../lib/api";

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
    
    // We send form data dynamically based on the configured fields
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
      <div className="mt-16 pt-8 border-t border-white/10 text-center text-slate-400">
        This position is currently not accepting applications online. Please email your resume to {job.applicationEmail || 'careers@technic.dev'}.
      </div>
    );
  }

  return (
    <div className="mt-16 pt-16 border-t border-white/10" id="apply">
      <h2 className="text-3xl font-bold text-white mb-8 font-heading text-center">
        Apply for {job.title}
      </h2>
      
      {status === 'success' ? (
        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-4 max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">Application Received</h3>
          <p className="text-lg">{message}</p>
        </div>
      ) : (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_15px_50px_rgba(0,0,0,0.3)] max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {status === 'error' && (
              <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 px-6 py-4 rounded-xl text-sm mb-6">
                {message}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {job.applicationFields.map((field: any, idx: number) => {
                const isFullWidth = field.type === 'textarea' || field.type === 'file' || field.name === 'portfolio' || field.name === 'linkedin';
                
                if (field.type === 'select' && field.name === 'experience') {
                  return (
                    <div key={idx} className="col-span-1 md:col-span-2">
                      <label htmlFor={field.name} className="block text-sm font-medium text-slate-300 mb-2">
                        {field.label} {field.required && '*'}
                      </label>
                      <select
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        className="w-full px-5 py-4 rounded-2xl bg-[#0B1221] border border-white/10 text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all shadow-inner appearance-none"
                      >
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
                      <label htmlFor={field.name} className="block text-sm font-medium text-slate-300 mb-2">
                        {field.label} {field.required && '*'}
                      </label>
                      <textarea
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        rows={4}
                        className="w-full px-5 py-4 rounded-2xl bg-[#0B1221]/50 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none backdrop-blur-md shadow-inner"
                      ></textarea>
                    </div>
                  );
                }

                return (
                  <div key={idx} className={isFullWidth ? "col-span-1 md:col-span-2" : ""}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-slate-300 mb-2">
                      {field.label} {field.required && '*'}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      className="w-full px-5 py-4 rounded-2xl bg-[#0B1221]/50 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all backdrop-blur-md shadow-inner"
                    />
                  </div>
                );
              })}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full relative group overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 text-lg">
                {status === 'submitting' ? 'Submitting Application...' : 'Submit Application'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
