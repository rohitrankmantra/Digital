"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import {
  Zap,
  Shield,
  CheckCircle2,
  Target,
  Rocket,
  TrendingUp,
  Sparkles,
  Globe,
  Users,
} from "lucide-react";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";

const features = [
  {
    icon: <Zap size={28} />,
    title: "Site Speed Optimization",
    description: "Improve page load times for better user experience and SEO",
  },
  {
    icon: <Shield size={28} />,
    title: "Technical Audit",
    description: "Comprehensive audit to identify and fix technical issues",
  },
  {
    icon: <Globe size={28} />,
    title: "Mobile Optimization",
    description: "Ensure your site is mobile-friendly and responsive",
  },
  {
    icon: <Target size={28} />,
    title: "Schema Markup",
    description: "Implement structured data for better search visibility",
  },
];

const process = [
  {
    step: "01",
    title: "Audit",
    description: "Comprehensive technical audit of your website",
  },
  {
    step: "02",
    title: "Analysis",
    description: "Identify technical issues and prioritize fixes",
  },
  {
    step: "03",
    title: "Fixes",
    description: "Implement technical improvements and optimizations",
  },
  {
    step: "04",
    title: "Testing",
    description: "Verify all fixes and ensure everything is working",
  },
  {
    step: "05",
    title: "Monitoring",
    description: "Ongoing monitoring and maintenance",
  },
];

const stats = [
  { value: 400, label: "Technical Audits", suffix: "+" },
  { value: 50, label: "Avg Speed Increase", suffix: "%" },
  { value: 95, label: "Mobile Usability Score", suffix: "%" },
  { value: 10, label: "Years Experience", suffix: "+" },
];

export default function TechnicalSeoPage() {
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
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2.5 mb-7 backdrop-blur-xl">
                <Zap className="text-red-400" size={18} />
                <span className="text-xs uppercase tracking-[0.28em] text-red-400 font-semibold">
                  Technical SEO
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-7 font-[Montserrat] leading-tight">
                Optimize Your Site's Technical Foundation
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-9">
                Ensure your website is technically sound, fast, and search-engine-friendly with our comprehensive technical SEO services.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-red-500/40 transition-all duration-300 border border-white/10"
              >
                Get Technical Audit
                <Rocket size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-gray-950 via-black to-gray-900 shadow-xl shadow-red-500/20 p-8"
            >
              <div className="absolute inset-0 bg-pattern-grid opacity-100" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-[1.5rem] border border-white/5 bg-white/5 text-center"
                  >
                    <div className="text-4xl font-black text-red-400 mb-2">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 font-[Montserrat] text-white">
              What You'll Get
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-gray-950 via-black to-gray-900 p-8 hover:border-red-500/30 transition-all"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-red-500/40 to-orange-500/40 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white font-[Montserrat]">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 font-[Montserrat] text-white">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto" />
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-center"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-black text-2xl">
                  {item.step}
                </div>
                <div className="flex-1 p-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-gray-950 via-black to-gray-900">
                  <h3 className="text-xl font-bold mb-2 text-white font-[Montserrat]">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
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
