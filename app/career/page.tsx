import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Target, Users } from "lucide-react";
import BackgroundLights from "../../components/BackgroundLights";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ApiClient } from "../../lib/api";

export const metadata: Metadata = {
  title: "Careers | Technic Technologies",
  description: "Join our team of engineers, designers, and researchers to build the future of autonomous enterprise software.",
};

// Revalidate every hour or rely on dynamic fetching
export const revalidate = 3600;

export default async function CareerPage() {
  let publishedJobs: any[] = [];
  try {
    publishedJobs = await ApiClient.get<any[]>('/api/careers');
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
  }

  return (
    <div className="min-h-screen bg-[#0B1221] font-sans text-slate-300 scroll-smooth selection:bg-orange-500/30 selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow relative overflow-hidden pt-32 pb-20">
        <BackgroundLights />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-300 font-semibold text-sm mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)] uppercase tracking-widest">
              Join the team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight drop-shadow-md">
              Build the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Enterprise Tech
              </span>
            </h1>
            <p className="text-xl text-slate-300 font-light font-sans">
              We are always looking for passionate engineers, designers, and researchers to join our mission of solving complex problems with cutting-edge technology.
            </p>
          </div>

          {/* Why Work With Us Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center font-heading">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
                <p className="text-slate-400 font-light">Work on proprietary AI platforms and edge computing systems that push the boundaries of what's possible.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] transition-all">
                <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Big Impact</h3>
                <p className="text-slate-400 font-light">Your work will directly influence enterprise security and automation for global clients.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Exceptional Team</h3>
                <p className="text-slate-400 font-light">Collaborate with top-tier engineers and researchers in a culture that values continuous learning.</p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 font-heading border-b border-white/10 pb-6 text-center">
              Open Positions
            </h2>

            {publishedJobs.length === 0 ? (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <h3 className="text-xl font-medium text-white mb-2">No open positions right now</h3>
                <p className="text-slate-400">Check back later or follow us on our social channels for updates.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {publishedJobs.map((job) => (
                  <Link href={`/career/${job.slug}`} key={job._id} className="block group">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                            <div className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-2 text-slate-400" />
                              {job.department}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-slate-400" />
                              {job.employmentType}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all">
                            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-400" />
                          </div>
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
