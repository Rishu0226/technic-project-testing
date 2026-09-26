import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowLeft, CheckCircle2, BadgeIndianRupee, Award } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CareerApplicationForm from "../../../components/CareerApplicationForm";
import RichContent from "../../../components/RichContent";
import { ApiClient } from "../../../lib/api";

export const dynamic = "force-dynamic";

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
    description: (job.shortDescription || job.description || "").substring(0, 160),
    openGraph: {
      title: `${job.title} | Technic Technologies`,
      description: (job.shortDescription || job.description || "").substring(0, 160),
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
    <div className="min-h-screen bg-technic-bg font-sans text-technic-secondary flex flex-col">
      <Navbar />

      <main className="flex-grow relative overflow-hidden pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <Link
            href="/career"
            className="inline-flex items-center text-technic-muted hover:text-technic-cyan-deep mb-10 transition-colors font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all positions
          </Link>

          <div className="bg-white border border-technic-border rounded-[2rem] p-8 md:p-12 shadow-tn-card">
            <h1 className="text-3xl md:text-5xl font-bold text-technic-text mb-6 font-heading">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-3 text-sm text-technic-secondary mb-10 pb-10 border-b border-technic-border">
              <div className="flex items-center bg-technic-bg px-4 py-2 rounded-full border border-technic-border">
                <Briefcase className="w-4 h-4 mr-2 text-technic-cyan-deep" />
                {job.department}
              </div>
              <div className="flex items-center bg-technic-bg px-4 py-2 rounded-full border border-technic-border">
                <MapPin className="w-4 h-4 mr-2 text-technic-cyan-deep" />
                {job.location}
              </div>
              <div className="flex items-center bg-technic-bg px-4 py-2 rounded-full border border-technic-border">
                <Clock className="w-4 h-4 mr-2 text-technic-orange" />
                {job.employmentType}
              </div>
              {job.experience ? (
                <div className="flex items-center bg-technic-bg px-4 py-2 rounded-full border border-technic-border">
                  <Award className="w-4 h-4 mr-2 text-technic-orange" />
                  {job.experience}
                </div>
              ) : null}
              {job.salary ? (
                <div className="flex items-center bg-technic-bg px-4 py-2 rounded-full border border-technic-border">
                  <BadgeIndianRupee className="w-4 h-4 mr-2 text-technic-success" />
                  {job.salary}
                </div>
              ) : null}
            </div>

            <div className="tn-prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-technic-text">About the Role</h2>
              {job.shortDescription && <p className="text-lg leading-relaxed mb-6 text-technic-secondary">{job.shortDescription}</p>}
              {job.longDescription ? (
                <div className="mb-10"><RichContent html={job.longDescription} /></div>
              ) : (
                <p className="text-lg leading-relaxed mb-10 text-technic-secondary">{job.description}</p>
              )}

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center text-technic-text">
                    <span className="w-8 h-8 rounded-lg bg-technic-cyan-soft flex items-center justify-center mr-3">
                      <span className="w-2 h-2 rounded-full bg-technic-cyan" />
                    </span>
                    Responsibilities
                  </h3>
                  <ul className="space-y-4 list-none pl-0">
                    {job.responsibilities?.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-technic-cyan-deep mr-3 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-technic-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center text-technic-text">
                    <span className="w-8 h-8 rounded-lg bg-technic-orange-soft flex items-center justify-center mr-3">
                      <span className="w-2 h-2 rounded-full bg-technic-orange" />
                    </span>
                    Requirements
                  </h3>
                  <ul className="space-y-4 list-none pl-0">
                    {job.requirements?.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-technic-orange mr-3 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-technic-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {job.skills && job.skills.length > 0 && (
                <div className="mt-10 pt-10 border-t border-technic-border">
                  <h3 className="text-xl font-semibold mb-6 text-technic-text">Skills & Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {job.skills.map((skill: string, idx: number) => (
                      <span key={idx} className="px-4 py-2 rounded-lg bg-technic-bg border border-technic-border text-technic-secondary text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <CareerApplicationForm job={job} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
