"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import {
  FaSearch,
  FaCode,
  FaShareAlt,
  FaCamera,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import Link from "next/link";

const serviceCategories = [
  {
    title: "SEO Services",
    icon: <FaSearch size={32} />,
    description: "Boost your visibility and rank higher on search engines",
    color: "from-red-500 to-orange-500",
    services: [
      { name: "SEO Strategy", href: "/services/seo/strategy" },
      { name: "One Page SEO", href: "/services/seo/one-page" },
      { name: "Off Page SEO", href: "/services/seo/off-page" },
      { name: "Technical SEO", href: "/services/seo/technical" },
    ],
  },
  {
    title: "Website Development",
    icon: <FaCode size={32} />,
    description: "Build stunning, high-performance websites and web apps",
    color: "from-blue-500 to-cyan-500",
    services: [
      { name: "WordPress Development", href: "/services/web-development/wordpress" },
      { name: "Next.js Development", href: "/services/web-development/nextjs" },
      { name: "React.js Development", href: "/services/web-development/react" },
      { name: "Shopify Development", href: "/services/web-development/shopify" },
    ],
  },
  {
    title: "Social Media Handling",
    icon: <FaShareAlt size={32} />,
    description: "Grow your brand and engage your audience across platforms",
    color: "from-purple-500 to-pink-500",
    services: [
      { name: "Meta Ads", href: "/services/social-media/meta-ads" },
      { name: "Social Posts", href: "/services/social-media/posts" },
      { name: "Reels Editing", href: "/services/social-media/reels" },
      { name: "Brand Identity", href: "/services/social-media/brand-identity" },
    ],
  },
  {
    title: "Photo Shoot",
    icon: <FaCamera size={32} />,
    description: "Professional photography and video production services",
    color: "from-green-500 to-emerald-500",
    services: [
      { name: "Product Photography", href: "/services/photo-shoot/product" },
      { name: "Brand Photoshoot", href: "/services/photo-shoot/brand" },
      { name: "Event Coverage", href: "/services/photo-shoot/event" },
      { name: "Video Production", href: "/services/photo-shoot/video" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      <Navbar />

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-pattern-grid opacity-100" />
        <div className="absolute -top-40 left-[-10rem] w-[40rem] h-[40rem] rounded-full bg-red-500/25 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-20rem] right-[-10rem] w-[45rem] h-[45rem] rounded-full bg-orange-500/20 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2.5 mb-7 backdrop-blur-xl mx-auto">
              <FaStar className="text-red-400" />
              <span className="text-xs uppercase tracking-[0.28em] text-red-400 font-semibold">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-7 font-[Montserrat] leading-tight">
              Comprehensive Digital Solutions for Your Brand
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-9">
              From SEO to web development, social media to photography, we offer
              end-to-end digital services to help your business thrive.
            </p>
          </motion.div>
        </section>

        {/* Service Categories Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid gap-8 lg:grid-cols-2">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-gray-950 via-black to-gray-900 p-8 hover:border-red-500/30 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-pattern-grid opacity-100" />
                <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-20 blur-3xl`} />

                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-red-500/40 to-orange-500/40 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-white font-[Montserrat]">
                    {category.title}
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="grid gap-3 mb-6">
                    {category.services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center justify-between px-4 py-3 rounded-[1.5rem] border border-white/5 bg-white/5 hover:border-red-500/30 hover:bg-red-500/10 transition-all group/link"
                      >
                        <span className="text-white font-medium">{service.name}</span>
                        <FaArrowRight className="text-red-400 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`/services/${category.title.toLowerCase().replace(/ /g, "-")}`}
                    className="inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 transition-colors"
                  >
                    View all {category.title}
                    <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
