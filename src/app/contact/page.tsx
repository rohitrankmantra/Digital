"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/home/Footer";
import { Mail, Phone, MapPin, Clock, Send, Sparkles, ArrowRight } from "lucide-react";

export default function ContactPage() {
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
        {/* Hero & Form Section */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2.5 mb-7 backdrop-blur-xl">
                <Sparkles className="text-red-400" size={20} />
                <span className="text-xs uppercase tracking-[0.28em] text-red-400 font-semibold">
                  Contact Us
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-7 font-[Montserrat] leading-tight">
                Let's build your next <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">digital success story.</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-9">
                Ready to launch a high-converting website, grow your brand, or scale your campaigns? Send us a message and our team will reach out within one business day.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {[
                  {
                    icon: <Phone size={20} className="text-red-400" />, 
                    title: "Call Us",
                    detail: "(888) 123-4567",
                  },
                  {
                    icon: <Mail size={20} className="text-red-400" />,
                    title: "Email",
                    detail: "hello@agency.com",
                  },
                  {
                    icon: <MapPin size={20} className="text-red-400" />,
                    title: "Location",
                    detail: "New York, NY",
                  },
                  {
                    icon: <Clock size={20} className="text-red-400" />,
                    title: "Hours",
                    detail: "Mon–Fri 9AM–6PM",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 hover:border-red-500/30 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-[1.5rem] bg-gradient-to-br from-red-500/30 to-orange-500/30 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-red-400 font-semibold">{item.title}</p>
                      </div>
                    </div>
                    <p className="text-white text-lg font-semibold">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 via-black/30 to-black/40 p-8 backdrop-blur-2xl shadow-2xl shadow-red-500/20"
            >
              <div className="rounded-[2rem] bg-black/80 p-8 border border-white/10">
                <SectionHeading
                  title="Start your project"
                  description="Share a few details below and we will get back to you with a bespoke strategy."
                  centered={false}
                />
                <form className="space-y-5" action="#">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm text-gray-300">
                      <span className="mb-2 block text-white font-semibold">Full Name</span>
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-xl px-5 py-3.5 text-white outline-none transition focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30"
                      />
                    </label>
                    <label className="block text-sm text-gray-300">
                      <span className="mb-2 block text-white font-semibold">Email Address</span>
                      <input
                        type="email"
                        placeholder="jane@company.com"
                        className="w-full rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-xl px-5 py-3.5 text-white outline-none transition focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30"
                      />
                    </label>
                  </div>
                  <label className="block text-sm text-gray-300">
                    <span className="mb-2 block text-white font-semibold">Service</span>
                    <select className="w-full rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-xl px-5 py-3.5 text-white outline-none transition focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30">
                      <option value="" className="bg-gray-900 text-white">Select a service</option>
                      <option value="website" className="bg-gray-900 text-white">Website Development</option>
                      <option value="marketing" className="bg-gray-900 text-white">Digital Marketing</option>
                      <option value="brand" className="bg-gray-900 text-white">Brand Strategy</option>
                      <option value="seo" className="bg-gray-900 text-white">SEO & Growth</option>
                    </select>
                  </label>
                  <label className="block text-sm text-gray-300">
                    <span className="mb-2 block text-white font-semibold">How can we help?</span>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project goals"
                      className="w-full rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-xl px-5 py-3.5 text-white outline-none transition focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30"
                    />
                  </label>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-red-500/25 transition hover:brightness-110 w-full"
                  >
                    <Send size={18} />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-red-500/15"
          >
            <div className="grid gap-0 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="p-12 bg-gradient-to-br from-black/90 to-black/70">
                <p className="text-red-400 uppercase text-xs tracking-[0.28em] font-semibold mb-5">Schedule a consultation</p>
                <h2 className="text-3xl md:text-4xl font-black mb-7 leading-tight">Your brand deserves a marketing partner that moves fast and thinks bigger.</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-10">
                  Our team combines design, performance marketing, and conversion-driven strategy so your business can win online. Let's connect and shape a campaign that feels premium, powerful, and uniquely your own.
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-red-400 mb-2.5 font-semibold">Fast response</p>
                    <p className="text-white text-lg font-semibold">Within 24 hours</p>
                  </div>
                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-red-400 mb-2.5 font-semibold">Transparent pricing</p>
                    <p className="text-white text-lg font-semibold">Custom quotes, no surprise fees</p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[350px] bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-2xl p-7">
                    <p className="text-xs uppercase tracking-[0.28em] text-red-400 mb-4 font-semibold">Our promise</p>
                    <p className="text-white text-lg font-semibold leading-tight">
                      Every project is treated like a launch campaign — strategic, polished, and built to scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
