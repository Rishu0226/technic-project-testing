"use client";
import React, { useEffect, useState } from "react";
import { Globe, Mail, MessageCircle, Phone } from "lucide-react";
import { ApiClient } from "../../lib/api";

type SiteSettings = {
  companyName?: string;
  address?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
};

const fallbackSettings: SiteSettings = {
  companyName: "Global Headquarters",
  address: "100 Innovation Drive\nTech District, CA 94043",
  email: "hello@technic.dev",
};

function whatsappHref(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : undefined;
}

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [settings, setSettings] = useState<SiteSettings>(fallbackSettings);

  useEffect(() => {
    let cancelled = false;

    ApiClient.get<SiteSettings>("/api/settings")
      .then((data) => {
        if (cancelled || !data) return;
        setSettings({
          companyName: data.companyName || fallbackSettings.companyName,
          address: data.address || fallbackSettings.address,
          email: data.email || fallbackSettings.email,
          phone: data.phone || "",
          whatsapp: data.whatsapp || "",
        });
      })
      .catch(() => {
        if (!cancelled) setSettings(fallbackSettings);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const whatsappLink = settings.whatsapp ? whatsappHref(settings.whatsapp) : undefined;

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
      const result = await ApiClient.post<{ message?: string }>('/api/contact', data);

      setStatus('success');
      setMessage(result.message || 'Message sent successfully. We will be in touch shortly.');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error('Contact error:', err);
      setStatus('error');
      setMessage(err.message || 'A network error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-technic-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-technic-border rounded-[2rem] shadow-tn-lg overflow-hidden flex flex-col lg:flex-row">
          <div className="p-10 md:p-16 lg:w-2/5 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-technic-border bg-technic-bg">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-technic-cyan/10 blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-technic-orange/10 blur-3xl" aria-hidden="true" />

            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-technic-border text-xs font-semibold tracking-wider text-technic-cyan-deep mb-8 uppercase">
                Contact
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-technic-text font-heading">
                Ready to <span className="text-technic-cyan">accelerate?</span>
              </h3>
              <p className="text-technic-secondary text-lg mb-12 leading-relaxed">
                Request a demo of our platforms or discuss a custom engineering
                project with our solution architects.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-technic-cyan-soft flex items-center justify-center mr-5 flex-shrink-0">
                    <Globe className="w-6 h-6 text-technic-cyan-deep" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-technic-text">{settings.companyName}</h4>
                    <p className="text-technic-secondary mt-1 whitespace-pre-line">{settings.address}</p>
                  </div>
                </div>
                {settings.email && (
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-2xl bg-technic-orange-soft flex items-center justify-center mr-5 flex-shrink-0">
                      <Mail className="w-6 h-6 text-technic-orange" />
                    </div>
                    <a href={`mailto:${settings.email}`} className="text-lg text-technic-secondary hover:text-technic-cyan-deep">
                      {settings.email}
                    </a>
                  </div>
                )}
                {settings.phone && (
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-2xl bg-technic-cyan-soft flex items-center justify-center mr-5 flex-shrink-0">
                      <Phone className="w-6 h-6 text-technic-cyan-deep" />
                    </div>
                    <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="text-lg text-technic-secondary hover:text-technic-cyan-deep">
                      {settings.phone}
                    </a>
                  </div>
                )}
                {whatsappLink && (
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-2xl bg-technic-orange-soft flex items-center justify-center mr-5 flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-technic-orange" />
                    </div>
                    <a
                      href={whatsappLink}
                      className="text-lg text-technic-secondary hover:text-technic-cyan-deep"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {settings.whatsapp}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-10 md:p-16 lg:w-3/5 bg-white">
            <h3 className="text-2xl font-bold text-technic-text mb-8 font-heading">Send a message</h3>

            {status === 'success' ? (
              <div className="bg-technic-success-soft border border-technic-success/20 text-technic-success p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4" role="status">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-technic-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-technic-text">Message sent</h4>
                <p>{message}</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2 bg-white border border-technic-border rounded-full text-technic-text hover:border-technic-cyan transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="bg-technic-error-soft border border-technic-error/20 text-technic-error px-4 py-3 rounded-xl text-sm" role="alert">
                    {message}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-technic-text mb-2">
                      First Name
                    </label>
                    <input type="text" id="firstName" name="firstName" required className="tn-input" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-technic-text mb-2">
                      Last Name
                    </label>
                    <input type="text" id="lastName" name="lastName" required className="tn-input" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-technic-text mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" required className="tn-input" placeholder="john@company.com" autoComplete="email" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-technic-text mb-2">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" name="phone" className="tn-input" placeholder="+1 (555) 000-0000" autoComplete="tel" />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-technic-text mb-2">
                    I am interested in...
                  </label>
                  <select id="interest" name="interest" className="tn-input">
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
                  <label htmlFor="message" className="block text-sm font-medium text-technic-text mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" required rows={4} className="tn-input resize-none" placeholder="Tell us about your objectives..." />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-gradient text-white font-semibold py-4 rounded-2xl shadow-tn-sm transition-opacity hover:opacity-95 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit'}
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
