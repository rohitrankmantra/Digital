"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Award, Heart, Sparkles, Users, ArrowRight } from "lucide-react";
import Footer from "@/components/home/Footer";
import SectionHeading from "@/components/SectionHeading";

const strengths = [
  {
    title: "Bold Vision",
    description: "A founder who believes great brands begin with unforgettable ideas.",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Growth Mindset",
    description: "A relentless focus on measurable results and scalable campaigns.",
    icon: <ArrowRight size={24} />,
  },
  {
    title: "Creative Leadership",
    description: "Leading teams that craft premium experiences across web, brand, and media.",
    icon: <Heart size={24} />,
  },
  {
    title: "Trusted Partner",
    description: "Guiding clients with transparency, empathy, and strategic clarity.",
    icon: <Users size={24} />,
  },
];

export default function FounderPage() {
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
        <section className="max-w-7xl mx-auto px-6 mb-18">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2.5 mb-7 backdrop-blur-xl">
                <Sparkles className="text-red-400" size={18} />
                <span className="text-xs uppercase tracking-[0.28em] text-red-400 font-semibold">
                  Founder Story
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-7 font-[Montserrat] leading-tight">
                Meet the founder behind our ambitious digital journey.
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-9">
                A builder, strategist, and creative leader who turns brand challenges into polished digital experiences.
                This is the story of how passion, persistence, and smart design created a standout agency.
              </p>
              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-red-400 mb-2.5 font-semibold">Experience</p>
                  <p className="text-3xl font-bold text-white">12+ Years</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-red-400 mb-2.5 font-semibold">Clients Served</p>
                  <p className="text-3xl font-bold text-white">150+ Global Brands</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-black/80 via-black/70 to-gray-900 shadow-xl shadow-red-500/20"
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
                alt="Founder portrait"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-2xl p-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-red-400 mb-3 font-semibold">Founder</p>
                  <h2 className="text-2xl font-black mb-2">Rohan Patel</h2>
                  <p className="text-gray-300 text-base">A visionary leader crafting premium digital solutions with heart, strategy, and focus.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strengths Section */}
        <section className="max-w-7xl mx-auto px-6 mb-18">
          <SectionHeading
            title="What drives our founder"
            description="A set of principles that shape every project, campaign, and client relationship."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-red-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-[1.5rem] bg-gradient-to-br from-red-500/40 to-orange-500/40 flex items-center justify-center text-red-400 mb-5 group-hover:scale-110 transition-transform">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{strength.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founder Message Section */}
        <section className="max-w-6xl mx-auto px-6 mb-10">
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-gray-950 via-black to-gray-900 p-10 shadow-xl shadow-red-500/15 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-grid opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/15 via-transparent to-orange-500/10" />
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-red-400 uppercase tracking-[0.28em] text-xs mb-4 font-semibold">Founder message</p>
                <h2 className="text-3xl md:text-4xl font-black mb-6">Design, growth, and authenticity are the catalyst for every project.</h2>
                <p className="text-gray-400 leading-relaxed mb-5 text-lg">
                  "I started this agency to help brands stand out with modern digital design and marketing that feels iconic, not generic.
                  Every decision is guided by what will help our clients grow, connect, and compete at the highest level."
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our founder believes the strongest partnerships are built on clarity, consistency, and bold creativity. That is why we aim to deliver craft-driven experiences with real business impact.
                </p>
              </motion.div>

              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-pattern-grid opacity-100" />
                  <div className="relative z-10 flex items-center gap-3 mb-3">
                    <Award className="text-red-400" size={28} />
                    <p className="text-xs uppercase tracking-[0.28em] text-red-400 font-semibold">Recognition</p>
                  </div>
                  <p className="text-white font-semibold text-base">Awarded top growth agency for creative strategy and ROI-driven campaigns.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-pattern-grid opacity-100" />
                  <div className="relative z-10 flex items-center gap-3 mb-3">
                    <Users className="text-red-400" size={28} />
                    <p className="text-xs uppercase tracking-[0.28em] text-red-400 font-semibold">Collaboration</p>
                  </div>
                  <p className="text-white font-semibold text-base">Partnering with founders, marketing teams, and ambitious businesses across the globe.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
