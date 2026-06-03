"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import {
  Target,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  Award,
  Heart,
  Globe,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const milestones = [
  { year: "2018", title: "Founded", description: "Started with a vision" },
  { year: "2020", title: "Expansion", description: "Grew to 50+ team members" },
  { year: "2023", title: "Recognition", description: "Award-winning agency" },
  { year: "2026", title: "Global", description: "Serving clients worldwide" },
];

const values = [
  {
    icon: <Heart size={28} />,
    title: "Passion",
    description: "We love what we do and it shows in our work",
  },
  {
    icon: <Shield size={28} />,
    title: "Integrity",
    description: "Honesty and transparency in everything we do",
  },
  {
    icon: <Users size={28} />,
    title: "Collaboration",
    description: "Working together to achieve greatness",
  },
  {
    icon: <Zap size={28} />,
    title: "Innovation",
    description: "Always pushing boundaries and exploring new ideas",
  },
];

const teamMembers = [
  { name: "Sarah Johnson", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
  { name: "Mike Chen", role: "Lead Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
  { name: "Emma Williams", role: "Marketing Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      <Navbar />
      
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.10]" />
        <div className="absolute -top-32 left-[-6rem] w-[32rem] h-[32rem] rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-widest">
                  About Us
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 font-[Montserrat]">
                Our Story, Your{" "}
                <span className="gradient-text">Success</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                We're passionate about helping brands grow through creative design,
                strategic marketing, and cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: 500, label: "Projects Completed", suffix: "+" },
                { value: 98, label: "Client Satisfaction", suffix: "%" },
                { value: 10, label: "Years Experience", suffix: "+" },
                { value: 50, label: "Team Members", suffix: "+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center text-red-400 mx-auto mb-5">
                    <Award size={32} />
                  </div>
                  <p className="text-4xl font-black text-white mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  icon: <Target size={32} />,
                  title: "Our Mission",
                  description:
                    "To empower businesses with innovative digital solutions that drive growth and create lasting impact in their industries.",
                  color: "from-red-500/20 to-orange-500/20",
                },
                {
                  icon: <TrendingUp size={32} />,
                  title: "Our Vision",
                  description:
                    "To be the leading digital agency that transforms brands and redefines what's possible in the digital landscape.",
                  color: "from-blue-500/20 to-purple-500/20",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br p-10 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50`} />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-red-400 mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4 font-[Montserrat]">
                Our Core <span className="gradient-text">Values</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                These are the principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center text-red-400 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4 font-[Montserrat]">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The milestones that shaped our growth
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-transparent" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                        <div className="text-3xl font-black gradient-text mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/30 border-4 border-black">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4 font-[Montserrat]">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The talented individuals behind our success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-gray-300 text-sm">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 via-black to-gray-900 p-12 text-center"
            >
              <div className="absolute inset-0 bg-pattern-grid opacity-[0.15]" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-red-500/20 blur-3xl" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-6 font-[Montserrat]">
                  Ready to Work <span className="gradient-text">Together?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                  Let's create something amazing and take your brand to new heights
                </p>
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-red-500/40 transition-all flex items-center gap-3 mx-auto">
                  Get Started
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
