import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ApiClient } from "../../../lib/api";
import { markdownToHtml } from "../../../lib/markdown";

export const dynamic = "force-dynamic";

function formatDate(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

async function getBlog(slug: string) {
  try {
    return await ApiClient.get<any>(`/api/blogs/${slug}`);
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return { title: "Article Not Found | Technic Technologies" };
  }

  const description = blog.seo?.description || blog.excerpt;
  return {
    title: blog.seo?.title || `${blog.title} | Technic Technologies`,
    description,
    openGraph: {
      title: blog.seo?.title || blog.title,
      description,
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const published = formatDate(blog.publishedAt || blog.createdAt);

  return (
    <div className="min-h-screen bg-technic-bg font-sans text-technic-secondary flex flex-col">
      <Navbar />

      <main className="flex-grow relative overflow-hidden pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-technic-muted hover:text-technic-cyan-deep mb-10 transition-colors font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to insights
          </Link>

          <article className="bg-white border border-technic-border rounded-[2rem] p-8 md:p-12 shadow-tn-card">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-technic-orange-soft text-xs font-semibold text-technic-orange-deep mb-6">
              {blog.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-technic-text mb-6 font-heading">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-technic-secondary mb-8">
              <span className="flex items-center"><User className="w-4 h-4 mr-2 text-technic-cyan-deep" /> {blog.author}</span>
              {published ? (
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-technic-orange" /> {published}</span>
              ) : null}
            </div>

            <p className="text-lg text-technic-secondary leading-relaxed mb-10">{blog.excerpt}</p>

            {blog.featuredImage ? (
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden mb-10 border border-technic-border">
                <img src={blog.featuredImage} alt={blog.title} className="h-full w-full object-cover" />
              </div>
            ) : null}

            <div
              className="tn-prose max-w-none"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(blog.content || "") }}
            />

            {blog.tags?.length > 0 ? (
              <div className="mt-10 pt-10 border-t border-technic-border flex flex-wrap gap-3">
                {blog.tags.map((tag: string) => (
                  <span key={tag} className="px-4 py-2 rounded-lg bg-technic-bg border border-technic-border text-technic-secondary text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {blog.gallery?.length > 0 ? (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blog.gallery.map((image: string) => (
                  <div key={image} className="relative h-48 rounded-2xl overflow-hidden border border-technic-border">
                    <img src={image} alt={`${blog.title} gallery`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            ) : null}

            {blog.video ? (
              <div className="mt-10">
                <a href={blog.video} target="_blank" rel="noreferrer" className="text-technic-cyan-deep hover:text-technic-orange font-medium">
                  Watch related video
                </a>
              </div>
            ) : null}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
