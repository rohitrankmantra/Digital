"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import {
  FaCamera,
  FaBox,
  FaCalendar,
  FaVideo,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import Link from "next/link";

const subServices = [
  {
    title: "Product Photography",
    description: "Professional product photos that sell",
    icon: <FaBox size={32} />,
    href: "/services/photo-shoot/product",
  },
  {
    title: "Brand Photoshoot",
    description: "Visuals that tell your brand's story",
    icon: <FaCamera size={32} />,
    href: "/services/photo-shoot/brand",
  },
  {
    title: "Event Coverage",
    description: "Capture your special events and moments",
    icon: <FaCalendar size={32} />,
    href: "/services/photo-shoot/event",
  },
  {
    title: "Video Production",
    description: "High-quality video content for your brand",
    icon: <FaVideo size={32} />,
    href: "/services/photo-shoot/video",
  },
];

const benefits = [
  {
    icon: <FaCamera size={24} />,
    title: "Professional Quality",
    description: "High-quality visuals that elevate your brand",
  },
  {
    icon: <FaStar size={24} />,
    title: "Creative Direction",
    description: "Expert guidance to bring your vision to life",
  },
  {
    icon: <FaBox size={24} />,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality",
  },
  {
    icon: <FaVideo size={24} />,
    title: "Full Service",
    description: "From concept to final delivery, we handle everything",
  },
];

export default function PhotoShootPage() {
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
                <FaCamera className="text-red-400" />
                <span className="text-xs uppercase tracking-[0.28em] text-red-400 font-semibold">
                  Photo Shoot
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-7 font-[Montserrat] leading-tight">
                Capture Your Brand in Stunning Detail
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-9">
                Professional photography and video production services to elevate your brand and tell your story.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-red-500/40 transition-all duration-300 border border-white/10"
              >
                Book a Shoot
                <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-gray-950 via-black to-gray-900 shadow-xl shadow-red-500/20 p-8"
            >
              <div className="absolute inset-0 bg-pattern-grid opacity-100" />
              <div className="relative z-10 grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-[1.5rem] border border-white/5 bg-white/5"
                  >
                    <div className="w-12 h-12 rounded-[1.5rem] bg-gradient-to-br from-red-500/40 to-orange-500/40 flex items-center justify-center text-red-400 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sub Services Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 font-[Montserrat] text-white">
              Our Photography & Video Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {subServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-gray-950 via-black to-gray-900 p-8 hover:border-red-500/30 transition-all"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-red-500/40 to-orange-500/40 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white font-[Montserrat]">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 transition-colors"
                >
                  Learn More
                  <FaArrowRight size={18} />
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
