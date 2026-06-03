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
  Sparkles,
  Rocket,
  Palette,
  LineChart,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Footer from "@/components/home/Footer";

const milestones = [
  { year: "2018", title: "Founded", description: "Started with a bold vision to redefine digital excellence" },
  { year: "2020", title: "Expansion", description: "Grew our team to 50+ passionate creators and strategists" },
  { year: "2023", title: "Recognition", description: "Named top digital agency by multiple industry awards" },
  { year: "2026", title: "Global", description: "Serving 500+ clients across 30+ countries worldwide" },
];

const values = [
  {
    icon: <Heart size={28} />,
    title: "Passion",
    description: "We love what we do and it shows in every pixel of our work",
    color: "from-red-500 to-rose-600"
  },
  {
    icon: <Shield size={28} />,
    title: "Integrity",
    description: "Honesty and transparency in every partnership we build",
    color: "from-red-600 to-orange-600"
  },
  {
    icon: <Users size={28} />,
    title: "Collaboration",
    description: "Working together to turn ideas into extraordinary realities",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: <Zap size={28} />,
    title: "Innovation",
    description: "Always exploring new frontiers and pushing creative boundaries",
    color: "from-rose-500 to-red-600"
  },
];

const teamMembers = [
  { 
    name: "Sarah Johnson", 
    role: "Creative Director", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" 
  },
  { 
    name: "Mike Chen", 
    role: "Lead Developer", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
  },
  { 
    name: "Emma Williams", 
    role: "Marketing Lead", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80" 
  },
  { 
    name: "David Park", 
    role: "Brand Strategist", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" 
  },
];

const stats = [
  { value: 500, label: "Projects Completed", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 10, label: "Years Experience", suffix: "+" },
  { value: 50, label: "Team Members", suffix: "+" },
];

const features = [
  {
    icon: <Palette size={28} />,
    title: "Creative Excellence",
    description: "Stunning designs that capture attention and drive results"
  },
  {
    icon: <LineChart size={28} />,
    title: "Data-Driven Results",
    description: "Every decision backed by analytics and performance insights"
  },
  {
    icon: <Rocket size={28} />,
    title: "Rapid Innovation",
    description: "Quick iteration and cutting-edge technology implementation"
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      <Navbar />
      
      {/* Background Patterns */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-pattern-grid opacity-100" />
        <div className="absolute -top-40 left-[-8rem] w-[36rem] h-[36rem] rounded-full bg-red-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-20rem] right-[-8rem] w-[40rem] h-[40rem] rounded-full bg-orange-500/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        {/* Hero Section with Image Background */}
        <section className="relative pt-32 pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-red-500/30 bg-red-500/10 mb-7 backdrop-blur-xl">
                <Sparkles className="text-red-400" size={18} />
                <span className="text-xs uppercase tracking-[0.28em] text-red-400 font-semibold">
                  About Our Journey
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-7 font-[Montserrat] leading-tight">
                Building Brands That <br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                  Stand the Test of Time
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                We are a collective of passionate creators, strategists, and technologists dedicated to transforming brands into digital powerhouses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-9 py-4.5 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
                  Work With Us
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-18 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="group rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-7 text-center hover:border-red-500/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-red-500/30 to-orange-500/30 flex items-center justify-center text-red-400 mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <Award size={32} />
                  </div>
                  <p className="text-4xl font-black text-white mb-2.5">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-gray-300 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Why Choose Us */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-7">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-9 relative overflow-hidden hover:border-orange-500/30 transition-all"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-red-500/30 to-orange-500/30 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3.5">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-11">
              {[
                {
                  icon: <Target size={36} />,
                  title: "Our Mission",
                  description:
                    "To empower businesses with innovative digital solutions that drive growth, create lasting impact, and set new industry standards.",
                  color: "from-red-500/30 to-orange-500/30",
                  bgPattern: "bg-pattern-grid"
                },
                {
                  icon: <TrendingUp size={36} />,
                  title: "Our Vision",
                  description:
                    "To be the leading global digital agency that transforms brands and redefines what's possible in the digital landscape.",
                  color: "from-orange-500/30 to-red-600/30",
                  bgPattern: "bg-pattern-grid"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group rounded-[2.5rem] border border-white/10 bg-gradient-to-br p-10 relative overflow-hidden hover:scale-[1.02] transition-transform"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-100 ${item.bgPattern}`} />
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-[1.75rem] bg-white/10 backdrop-blur-xl flex items-center justify-center text-red-400 mb-7 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-5">{item.title}</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-18"
            >
              <h2 className="text-3xl md:text-4xl font-black mb-5 font-[Montserrat]">
                Our Core <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 relative overflow-hidden cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="py-20 relative">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-18"
            >
              <h2 className="text-3xl md:text-4xl font-black mb-5 font-[Montserrat]">
                Our <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                The milestones that shaped who we are today
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-red-500 via-orange-500 to-red-600 rounded-full" />
              
              <div className="space-y-14">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`flex items-center gap-11 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-7 hover:border-orange-500/30 transition-all"
                      >
                        <div className="text-4xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2.5">{milestone.title}</h3>
                        <p className="text-gray-400 text-base">{milestone.description}</p>
                      </motion.div>
                    </div>
                    <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-xl shadow-red-500/50 border-3 border-black">
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
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-18"
            >
              <h2 className="text-3xl md:text-4xl font-black mb-5 font-[Montserrat]">
                Meet Our <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                The talented individuals behind our exceptional work
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-xl font-black text-white mb-2">{member.name}</h3>
                      <p className="text-gray-300 text-xs uppercase tracking-wider">{member.role}</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 via-black to-gray-900 p-12 text-center"
            >
              <div className="absolute inset-0 bg-pattern-grid opacity-100" />
              <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-red-500/20 blur-3xl animate-pulse" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-7 font-[Montserrat] leading-tight">
                  Ready to Create Something <br />
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                    Extraordinary Together?
                  </span>
                </h2>
                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                  Let's collaborate to bring your vision to life with premium design and strategic excellence.
                </p>
                <button className="px-10 py-4.5 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all transform hover:-translate-y-1.5 flex items-center gap-3 mx-auto">
                  Let's Start Your Project
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
