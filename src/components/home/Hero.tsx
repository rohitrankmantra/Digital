"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden">
      <div className="absolute -top-32 left-[-6rem] w-[32rem] h-[32rem] rounded-full bg-red-500/20 blur-3xl" />
      <div className="absolute top-20 right-[-8rem] w-[28rem] h-[28rem] rounded-full bg-blue-500/12 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-1/2 w-[36rem] h-[36rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.12]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.85fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-8 top-0 hidden xl:block w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
              <span className="text-sm text-red-200 font-semibold tracking-[0.18em] uppercase">Digital growth studio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-black leading-[0.92] mb-6 max-w-4xl"
            >
              <span className="block text-white/80 text-lg md:text-xl font-semibold tracking-[0.3em] uppercase mb-5">
                Strategy, design, growth
              </span>
              We Build Brands That
              <span className="block gradient-text animate-pulse">Move Faster</span>
              <span className="block text-white/90">And Convert Better</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Premium digital marketing solutions combining cinematic design, performance-led SEO, and conversion-focused storytelling so your brand feels bigger from the first click.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex items-center gap-3 glow-red border border-white/10">
                Get Free Audit
                <motion.div whileHover={{ x: 5 }} className="w-5 h-5">
                  <ArrowRight size={20} />
                </motion.div>
              </button>
              <button className="px-8 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-lg transition-all duration-300 backdrop-blur-xl">
                Book Consultation
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8 max-w-2xl"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <p className="text-3xl font-bold text-white">
                  <AnimatedCounter target={500} suffix="+" />
                </p>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <p className="text-3xl font-bold text-white">
                  <AnimatedCounter target={98} suffix="%" />
                </p>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <p className="text-3xl font-bold text-white">
                  <AnimatedCounter target={10} suffix="+" />
                </p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:pl-10"
          >
            <div className="relative rounded-[2.5rem] border border-white/10 overflow-hidden h-[500px] md:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80"
                alt="AI and technology concept"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
