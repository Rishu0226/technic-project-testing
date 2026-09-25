import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Target, Users } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ApiClient } from "../../lib/api";

export const metadata: Metadata = {
  title: "Careers | Technic Technologies",
  description: "Join our team of engineers, designers, and researchers to build the future of autonomous enterprise software.",
};

export const dynamic = "force-dynamic";

export default async function CareerPage() {
  let publishedJobs: any[] = [];
  let loadFailed = false;
  try {
    const data = await ApiClient.get<any[]>('/api/careers');
    publishedJobs = Array.isArray(data) ? data : [];
  } catch (error) {
    loadFailed = true;
    console.error("Failed to fetch jobs:", error);
  }

  const reasons = [
    {
      title: "Innovation First",
      copy: "Work on proprietary AI platforms and edge computing systems that push the boundaries of what's possible.",
      icon: Zap,
      soft: "bg-technic-cyan-soft",
      color: "text-technic-cyan-deep",
    },
    {
      title: "Big Impact",
      copy: "Your work will directly influence enterprise security and automation for global clients.",
      icon: Target,
      soft: "bg-technic-orange-soft",
      color: "text-technic-orange",
    },
    {
      title: "Exceptional Team",
      copy: "Collaborate with top-tier engineers and researchers in a culture that values continuous learning.",
      icon: Users,
      soft: "bg-technic-cyan-soft",
      color: "text-technic-cyan-deep",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary flex flex-col">
      <Navbar />

      <main className="flex-grow relative overflow-hidden pt-32 pb-20 bg-technic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-technic-cyan-soft text-technic-cyan-deep font-semibold text-sm mb-6 uppercase tracking-widest">
              Join the team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-technic-text mb-6 font-heading leading-tight">
              Build the Future of <span className="text-technic-orange">Enterprise Tech</span>
            </h1>
            <p className="text-xl text-technic-secondary">
              We are always looking for passionate engineers, designers, and researchers to join our mission of solving complex problems with cutting-edge technology.
            </p>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-technic-text mb-12 text-center font-heading">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="bg-white border border-technic-border rounded-2xl p-8 shadow-tn-card hover:border-technic-cyan hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-12 h-12 ${reason.soft} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className={`w-6 h-6 ${reason.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-technic-text mb-4">{reason.title}</h3>
                    <p className="text-technic-secondary">{reason.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-technic-text mb-10 font-heading border-b border-technic-border pb-6 text-center">
              Open Positions
            </h2>

            {loadFailed ? (
              <div className="bg-white border border-technic-border rounded-2xl p-12 text-center shadow-tn-card">
                <h3 className="text-xl font-medium text-technic-text mb-2">Open positions could not be loaded</h3>
                <p className="text-technic-muted">Refresh the page to load the latest careers from the server.</p>
              </div>
            ) : publishedJobs.length === 0 ? (
              <div className="bg-white border border-technic-border rounded-2xl p-12 text-center shadow-tn-card">
                <h3 className="text-xl font-medium text-technic-text mb-2">No open positions right now</h3>
                <p className="text-technic-muted">Check back later or follow us on our social channels for updates.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {publishedJobs.map((job) => (
                  <Link href={`/career/${job.slug}`} key={job._id} className="block group">
                    <div className="bg-white border border-technic-border rounded-2xl p-6 md:p-8 shadow-tn-card hover:border-technic-cyan hover:-translate-y-1 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-technic-text mb-3 group-hover:text-technic-cyan-deep transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-technic-secondary">
                            <div className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-2 text-technic-cyan-deep" />
                              {job.department}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2 text-technic-cyan-deep" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-technic-orange" />
                              {job.employmentType}
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-technic-cyan-soft text-technic-cyan-deep group-hover:bg-brand-gradient group-hover:text-white transition-all">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
