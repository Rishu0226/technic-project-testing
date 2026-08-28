"use client";
import React, { useState } from "react";
import { Globe } from "lucide-react";
import BackgroundLights from "./BackgroundLights";

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;
    
    setStatus('submitting');
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      interest: formData.get('interest'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(result.message || 'Message sent successfully. We will be in touch shortly.');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage(result.error || 'Failed to send message.');
      }
    } catch (err) {
      console.error('Contact error:', err);
      setStatus('error');
      setMessage('A network error occurred. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0B1221] relative overflow-hidden"
    >
      <BackgroundLights />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-[0_15px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row relative">
          <div className="p-10 md:p-16 lg:w-2/5 text-white flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent border-r border-white/10">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-orange-500/20 blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-rose-500/20 blur-[80px]"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider text-slate-200 mb-8 uppercase shadow-inner">
                Initiate Connect
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  accelerate?
                </span>
              </h3>
              <p className="text-slate-300 text-lg mb-12 font-light leading-relaxed">
                Request a demo of our platforms or discuss a custom engineering
                project with our solution architects.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mr-5 flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <Globe className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">
                      Global Headquarters
                    </h4>
                    <p className="text-slate-400 font-light mt-1">
                      100 Innovation Drive
                      <br />
                      Tech District, CA 94043
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mr-5 flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <svg
                      className="w-6 h-6 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-slate-300 font-light">
                    hello@technic.dev
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-16 lg:w-3/5 bg-transparent">
            <h3 className="text-2xl font-bold text-white mb-8">
              Send a secure message
            </h3>
            
            {status === 'success' ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">Message Transmitted</h4>
                <p>{message}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {status === 'error' && (
                <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 px-4 py-3 rounded-xl text-sm">
                  {message}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-[#0B1221]/50 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all backdrop-blur-md shadow-inner"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-[#0B1221]/50 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all backdrop-blur-md shadow-inner"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-[#0B1221]/50 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all backdrop-blur-md shadow-inner"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-5 py-4 rounded-2xl bg-[#0B1221]/50 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all backdrop-blur-md shadow-inner"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  I am interested in...
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-5 py-4 rounded-2xl bg-[#0B1221] border border-white/10 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all shadow-inner appearance-none"
                >
                  <option value="Service: Custom Website/App">Service: Custom Website/App</option>
                  <option value="Service: DevOps & Cloud">Service: DevOps & Cloud</option>
                  <option value="Product: NicFlow AI">Product: NicFlow AI</option>
                  <option value="Product: TechGuard Sentinel">Product: TechGuard Sentinel</option>
                  <option value="Product: DataStream Nexus">Product: DataStream Nexus</option>
                  <option value="Product: NicOps Deployer">Product: NicOps Deployer</option>
                  <option value="Product: SiteCrafter">Product: SiteCrafter</option>
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-[#0B1221]/50 border border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none backdrop-blur-md shadow-inner"
                  placeholder="Tell us about your objectives..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full relative group overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 text-lg">
                  {status === 'submitting' ? 'Transmitting...' : 'Transmit Message'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
