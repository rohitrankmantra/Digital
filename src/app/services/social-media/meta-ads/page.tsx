"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import {
  FaFacebook,
  FaInstagram,
  FaStar,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";

const features = [
  {
    icon: <FaFacebook size={28} />,
    title: "Facebook Ads",
    description: "Targeted campaigns to reach your ideal audience",
  },
  {
    icon: <FaInstagram size={28} />,
    title: "Instagram Ads",
    description: "Visual ads that drive engagement and sales",
  },
  {
    icon: <FaStar size={28} />,
    title: "Campaign Strategy",
    description: "Data-driven strategies for maximum ROI",
  },
  {
    icon: <FaStar size={28} />,
    title: "Performance Optimization",
    description: "Continuous optimization to improve results",
  },
];

const process = [
  {
    step: "01",
    title: "Strategy",
    description: "Define goals, audience, and campaign strategy",
  },
  {
    step: "02",
    title: "Creative",
    description: "Design eye-catching ad creatives",
  },
  {
    step: "03",
    title: "Launch",
    description: "Set up and launch your campaigns",
  },
  {
    step: "04",
    title: "Optimize",
    description: "Monitor and optimize for better results",
  },
  {
    step: "05",
    title: "Report",
    description: "Regular reports and insights",
  },
];

const stats = [
  { value: 500, label: "Campaigns Launched", suffix: "+" },
  { value: 300, label: "ROI Generated", suffix: "%" },
  { value: 100, label: "Happy Clients", suffix: "+" },
  { value: 6, label: "Years Experience", suffix: "+" },
];

export default function MetaAdsPage() {
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
                <FaFacebook className="text-red-400" />
                <span className="text-xs uppercase tracking-[0.28em] text-red-400 font-semibold">
                  Meta Ads
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-7 font-[Montserrat] leading-tight">
                Drive Results with Facebook & Instagram Ads
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-9">
                Targeted, high-converting Facebook and Instagram ad campaigns that help you reach your ideal audience and grow your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-red-500/40 transition-all duration-300 border border-white/10"
              >
                Start Campaign
                <FaRocket />
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
