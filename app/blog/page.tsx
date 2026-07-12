import React from "react";
import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackgroundLights from "../../components/BackgroundLights";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "TechNic Insights | Blog",
  description: "Perspectives, engineering deep-dives, and industry analysis from our elite team of architects and researchers.",
};

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Resource Planning",
    excerpt: "How generative AI is moving beyond chatbots to orchestrate entire supply chains autonomously.",
    date: "July 10, 2026",
    author: "Elena Rodriguez",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Zero-Trust Architecture: A 2026 Perspective",
    excerpt: "Why traditional perimeter defense is obsolete and how self-healing networks are taking over.",
    date: "June 28, 2026",
    author: "Marcus Chen",
    readTime: "6 min read",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Edge Computing vs Cloud: Finding the Balance",
    excerpt: "Optimizing your infrastructure by processing data closer to the source without losing global sync.",
    date: "June 15, 2026",
    author: "Sarah Jenkins",
    readTime: "10 min read",
    category: "Cloud Infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0B1221] font-sans text-slate-300 selection:bg-orange-500/30 selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        <BackgroundLights />
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              TechNic <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-amber-300 animate-gradient-x">Insights</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Perspectives, engineering deep-dives, and industry analysis from our elite team of architects and researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 hover:border-orange-500/30 overflow-hidden group transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] flex flex-col">
                
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] to-transparent opacity-60 z-10"></div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-semibold text-orange-400">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center space-x-4 text-xs font-medium text-slate-400 mb-4">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-rose-400 transition-all">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 font-light mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center text-sm font-medium text-slate-300">
                      <User className="w-4 h-4 mr-2 text-amber-400" />
                      {post.author}
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:border-orange-400 transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors shadow-inner flex items-center">
              Load More Insights
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
