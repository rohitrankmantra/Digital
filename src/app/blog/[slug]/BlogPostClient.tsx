"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import { User, Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blogData";

interface BlogPostClientProps {
  post: BlogPost;
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

export default function BlogPostClient({ post, prevPost, nextPost }: BlogPostClientProps) {
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      <Navbar />

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-pattern-grid opacity-100" />
        <div className="absolute -top-40 left-[-10rem] w-[40rem] h-[40rem] rounded-full bg-red-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-20rem] right-[-10rem] w-[45rem] h-[45rem] rounded-full bg-orange-500/15 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <article className="relative z-10 pt-32 pb-24">
        {/* Back to blog */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <Link href="/blog" className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Blog</span>
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-red-500/90 text-white text-sm font-semibold backdrop-blur-xl">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">•</span>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-[Montserrat] mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="font-semibold text-white">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto px-6 mb-16"
        >
          <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto px-6 mb-16"
        >
          <div
            className="text-gray-300 text-lg leading-relaxed [&>h2]:text-white [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:font-[Montserrat] [&>h3]:text-white [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-4 [&>p:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Navigation */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Previous Post */}
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} passHref>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: -4 }}
                  className="group flex items-center gap-6 p-6 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-red-500/40 to-orange-500/40 flex items-center justify-center text-red-400">
                      <ArrowLeft size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider">Previous Article</p>
                    <p className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {prevPost.title}
                    </p>
                  </div>
                </motion.div>
              </Link>
            )}

            {/* Next Post */}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} passHref>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="group flex items-center gap-6 p-6 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl transition-all"
                >
                  <div className="flex-1 text-right">
                    <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider">Next Article</p>
                    <p className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {nextPost.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-red-500/40 to-orange-500/40 flex items-center justify-center text-red-400">
                      <ArrowRight size={28} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
