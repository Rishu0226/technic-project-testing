import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import BackgroundLights from "../../../components/BackgroundLights";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CareerApplicationForm from "../../../components/CareerApplicationForm";
import { ApiClient } from "../../../lib/api";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  let job: any = null;
  try {
    job = await ApiClient.get(`/api/careers/${resolvedParams.slug}`);
  } catch (e) {
    //
  }

  if (!job) {
    return {
      title: "Job Not Found | Technic Technologies",
    };
  }

  return {
    title: `${job.title} - Careers | Technic Technologies`,
    description: job.description?.substring(0, 160),
    openGraph: {
      title: `${job.title} | Technic Technologies`,
      description: job.description?.substring(0, 160),
      type: "website",
    },
  };
}

export default async function CareerDetailPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await Promise.resolve(params);
  let job: any = null;
  try {
    job = await ApiClient.get(`/api/careers/${resolvedParams.slug}`);
  } catch (e) {
    //
  }

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1221] font-sans text-slate-300 scroll-smooth selection:bg-orange-500/30 selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow relative overflow-hidden pt-32 pb-20">
        <BackgroundLights />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <Link 
            href="/career" 
            className="inline-flex items-center text-slate-400 hover:text-white mb-10 transition-colors font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all positions
          </Link>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
            {/* Decorative glow inside card */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-orange-600/20 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading drop-shadow-md">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-slate-300 mb-10 pb-10 border-b border-white/10">
                <div className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Briefcase className="w-4 h-4 mr-2 text-orange-400" />
                  {job.department}
                </div>
                <div className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4 mr-2 text-rose-400" />
                  {job.location}
                </div>
                <div className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Clock className="w-4 h-4 mr-2 text-amber-400" />
                  {job.employmentType}
                </div>
              </div>

              <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white prose-headings:font-heading prose-li:text-slate-300">
                <h2 className="text-2xl font-semibold mb-4">About the Role</h2>
                <p className="text-lg leading-relaxed mb-10">{job.description}</p>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mr-3">
                        <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                      </span>
                      Responsibilities
                    </h3>
                    <ul className="space-y-4 list-none pl-0">
                      {job.responsibilities?.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mr-3">
                        <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                      </span>
                      Requirements
                    </h3>
                    <ul className="space-y-4 list-none pl-0">
                      {job.requirements?.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-rose-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {job.skills && job.skills.length > 0 && (
                  <div className="mt-10 pt-10 border-t border-white/10">
                    <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {job.skills.map((skill: string, idx: number) => (
                        <span key={idx} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dynamic Application Form */}
              <CareerApplicationForm job={job} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
