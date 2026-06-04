"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import { User, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export default function BlogPage() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      <Navbar />

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-pattern-grid opacity-100" />
        <div className="absolute -top-40 left-[-10rem] w-[40rem] h-[40rem] rounded-full bg-red-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-20rem] right-[-10rem] w-[45rem] h-[45rem] rounded-full bg-orange-500/15 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-red-400 font-semibold text-sm uppercase tracking-[0.28em] mb-6">
              ( OUR BLOG )
            </p>
            <h1 className="text-4xl md:text-6xl font-black mb-6 font-[Montserrat]">
              Insights, Tips & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Stories</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover valuable insights, practical tips, and inspiring stories to help you grow your brand and business.
            </p>
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all"
              >
                <Link href={`/blog/${post.slug}`} passHref>
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 rounded-full bg-red-500/90 text-white text-sm font-semibold backdrop-blur-xl">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-gray-400 text-xs">
                      <div className="flex items-center gap-1.5">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors leading-snug font-[Montserrat]">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
