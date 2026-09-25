import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowRight, Calendar, User } from "lucide-react";
import { ApiClient } from "../../lib/api";

export const metadata: Metadata = {
  title: "TechNic Insights | Blog",
  description: "Perspectives, engineering deep-dives, and industry analysis from our elite team of architects and researchers.",
};

export const dynamic = "force-dynamic";

function formatDate(value?: string) {
  if (!value) return "Recently published";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently published";
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function Blog() {
  let posts: any[] = [];
  try {
    posts = await ApiClient.get<any[]>("/api/blogs");
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }

  return (
    <div className="min-h-screen bg-white font-sans text-technic-secondary flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 relative overflow-hidden bg-technic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-technic-cyan-deep font-semibold tracking-[0.18em] uppercase text-sm mb-4">Insights</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-technic-text tracking-tight mb-6 leading-tight font-heading">
              TechNic <span className="text-technic-orange">Insights</span>
            </h1>
            <p className="text-xl text-technic-secondary leading-relaxed">
              Perspectives, engineering deep-dives, and industry analysis from our elite team of architects and researchers.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="bg-white border border-technic-border rounded-2xl p-12 text-center shadow-tn-card">
              <h2 className="text-xl font-medium text-technic-text mb-2">No published articles yet</h2>
              <p className="text-technic-muted">New insights will appear here after they are published.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post._id || post.slug} className="bg-white rounded-3xl border border-technic-border overflow-hidden group transition-all duration-300 shadow-tn-card hover:border-technic-cyan hover:-translate-y-1 flex flex-col">
                  <Link href={`/blog/${post.slug}`} className="flex flex-col flex-grow">
                    <div className="h-56 overflow-hidden relative bg-technic-cyan-soft">
                      {post.featuredImage ? (
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                      ) : null}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-technic-orange-soft text-xs font-semibold text-technic-orange-deep">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center space-x-4 text-xs font-medium text-technic-muted mb-4">
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1 text-technic-cyan-deep" /> {formatDate(post.publishedAt || post.createdAt)}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-technic-text mb-3 font-heading group-hover:text-technic-cyan-deep transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-technic-secondary mb-6 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-technic-border mt-auto">
                        <div className="flex items-center text-sm font-medium text-technic-secondary">
                          <User className="w-4 h-4 mr-2 text-technic-orange" />
                          {post.author}
                        </div>
                        <span className="w-10 h-10 rounded-full bg-technic-cyan-soft flex items-center justify-center text-technic-cyan-deep group-hover:bg-brand-gradient group-hover:text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
