"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import TestimonialSlider from "@/components/TestimonialSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
  TrendingUp,
  User,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Plus,
  Minus,
  Clock,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

// FAQ Data
const faqs = [
  {
    question: "How quickly can you start my project?",
    answer: "We can start your project within 48 hours of initial consultation and agreement on the scope of work.",
  },
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of digital marketing services including SEO, Web Development, Social Media Marketing, and Brand Strategy.",
  },
  {
    question: "Do you offer SEO services?",
    answer: "Yes! We provide full-service SEO including technical SEO, content strategy, and link building to help you rank higher.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and PayPal. We also offer payment plans for larger projects.",
  },
  {
    question: "Can you help with social media marketing?",
    answer: "Absolutely! We specialize in creating tailored social media strategies for platforms like Instagram, LinkedIn, Facebook, and TikTok.",
  },
];

// Blog Data
const blogs = [
  {
    id: "1",
    title: "From Concept To Market: The Journey Of Brand Development",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
    author: "Digital Agency",
    date: "March 4, 2025",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "Brand Activation Ideas To Spark Consumer Engagement",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    author: "Digital Agency",
    date: "March 4, 2025",
    readTime: "5 min read",
  },
  {
    id: "3",
    title: "Social Media In 2025: How To Leverage Them For Your Brand",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    author: "Digital Agency",
    date: "March 4, 2025",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "How To Run A Successful Google Ads Campaign: A Step-By-Step",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    author: "Digital Agency",
    date: "March 4, 2025",
    readTime: "10 min read",
  },
  {
    id: "5",
    title: "How To Build A Strong Brand Identity",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=80",
    author: "Digital Agency",
    date: "March 4, 2025",
    readTime: "7 min read",
  },
];

// Services for marquee
const marqueeServices = [
  "Website Development",
  "Digital Marketing",
  "Brand Identity",
  "SEO Services",
  "Social Media",
  "Content Strategy",
  "Performance Marketing",
  "UI/UX Design",
];

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 bg-pattern-grid opacity-[0.18]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.12] mix-blend-soft-light" />

      {/* =============== HERO SECTION =============== */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden">
        <div className="absolute -top-32 left-[-6rem] w-[32rem] h-[32rem] rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute top-20 right-[-8rem] w-[28rem] h-[28rem] rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/2 w-[36rem] h-[36rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-pattern-dots opacity-[0.12]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
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
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.92] mb-6 max-w-4xl"
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
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)] overflow-hidden">
                <div className="absolute inset-0 bg-pattern-diagonal opacity-10 pointer-events-none" />
                <div className="grid gap-4">
                  <div className="relative rounded-[1.75rem] overflow-hidden min-h-[28rem] border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
                      alt="Marketing analytics workspace"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/90 backdrop-blur-xl">Live SEO</span>
                      <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/90 backdrop-blur-xl">Paid Ads</span>
                      <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/90 backdrop-blur-xl">Brand System</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="rounded-[1.5rem] border border-white/15 bg-black/50 backdrop-blur-xl p-5"
                      >
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.24em] text-gray-400">Performance snapshot</p>
                            <h3 className="text-2xl font-bold text-white mt-2">Conversion Stack</h3>
                          </div>
                          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                            <TrendingUp size={22} className="text-white" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <div className="rounded-2xl bg-white/6 p-3 text-center border border-white/10">
                            <p className="text-lg font-bold text-white">+312%</p>
                            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Traffic</p>
                          </div>
                          <div className="rounded-2xl bg-white/6 p-3 text-center border border-white/10">
                            <p className="text-lg font-bold text-white">+189%</p>
                            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Leads</p>
                          </div>
                          <div className="rounded-2xl bg-white/6 p-3 text-center border border-white/10">
                            <p className="text-lg font-bold text-white">+245%</p>
                            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Revenue</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="rounded-[1.5rem] border border-white/15 bg-black/50 backdrop-blur-xl p-5"
                      >
                        <p className="text-xs uppercase tracking-[0.24em] text-gray-400 mb-3">Brand note</p>
                        <p className="text-xl font-semibold text-white leading-snug">
                          Sharp visuals, clear structure, and motion that actually earns attention.
                        </p>
                        <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-red-500 to-orange-400" />
                        </div>
                        <p className="mt-2 text-sm text-gray-400">Signal strength: 74%</p>
                      </motion.div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-[1.5rem] overflow-hidden border border-white/10 relative min-h-44"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80"
                        alt="Creative design team"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-sm font-semibold text-white">Creative direction</p>
                        <p className="text-xs text-gray-300">A premium visual layer for the brand story</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex flex-col justify-between min-h-44"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-gray-400 mb-3">Focus areas</p>
                        <div className="space-y-3 text-sm text-gray-300">
                          <div className="flex items-center justify-between border-b border-white/10 pb-2"><span>SEO architecture</span><span className="text-red-300">92</span></div>
                          <div className="flex items-center justify-between border-b border-white/10 pb-2"><span>Paid media</span><span className="text-red-300">88</span></div>
                          <div className="flex items-center justify-between"><span>Conversion UX</span><span className="text-red-300">95</span></div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-4">A compact dashboard-style visual to make the hero feel less like a banner and more like a product story.</p>
                    </motion.div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-5 -left-4 md:-left-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-4 shadow-2xl max-w-xs border border-white/10"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-white/70 mb-2">Client growth</p>
                <p className="text-white font-bold text-lg">450% ROI Increase</p>
                <p className="text-sm text-white/70 mt-1">Across search, paid, and conversion layers.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============== SERVICES/FEATURES SECTION =============== */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-[-6rem] w-[32rem] h-[32rem] rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full bg-red-500/10 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.10]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
              ( OUR FEATURES )
            </p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Best Features, Email With <span className="gradient-text">Relations</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Website Development",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. tellus, luctus nec ullamcorper.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
                category: "Website",
              },
              {
                title: "Digital Marketing",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. tellus, luctus nec ullamcorper.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
                category: "Advertising",
              },
              {
                title: "Brand Identity",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. tellus, luctus nec ullamcorper.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
                category: "Branding",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/30 transition-all duration-300 backdrop-blur-xl"
              >
                <div className="p-2">
                  <div className="relative rounded-[2rem] overflow-hidden mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  <div className="px-4 pb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-6 py-2 rounded-full bg-white/10 text-white font-semibold text-sm">
                        {service.category}
                      </span>
                      <button className="flex items-center gap-2 text-gray-300 hover:text-white font-semibold text-sm transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== SERVICES MARQUEE =============== */}
      <section className="py-10 relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-black/50 to-black/30">
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.15]" />
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeServices, ...marqueeServices].map((service, index) => (
              <div key={index} className="flex items-center gap-12 px-8 flex-shrink-0">
                <span className="text-red-400 text-2xl font-bold">✦</span>
                <span className="text-white text-xl font-semibold uppercase tracking-widest">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== WHY CHOOSE US SECTION =============== */}
      <WhyChooseUs />

      {/* =============== TESTIMONIALS SECTION =============== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-[0.08]" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Testimonials
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Loved by Our Clients
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See what our satisfied clients have to say about working with us
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* =============== FAQ SECTION =============== */}
      <section id="faq" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-[-6rem] w-[32rem] h-[32rem] rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full bg-red-500/10 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-pattern-diagonal opacity-[0.08]" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
              ( FREQUENTLY ASKED QUESTIONS )
            </p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Questions? We&apos;ve Got <span className="gradient-text">Answers</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our FAQ section to find answers to common questions about our services and processes
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-red-400">
                    {expandedFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== BLOG SECTION =============== */}
      <section id="blog" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-[-6rem] w-[32rem] h-[32rem] rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full bg-red-500/10 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.08]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
              ( OUR BLOG )
            </p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Latest Articles & <span className="gradient-text">Insights</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            {/* Left - Main Blog */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
              >
                <div className="p-2">
                  <div className="relative rounded-[2rem] overflow-hidden mb-6">
                    <img
                      src={blogs[0].image}
                      alt={blogs[0].title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  <div className="px-6 pb-6">
                    <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span className="font-semibold text-white">{blogs[0].author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{blogs[0].date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{blogs[0].readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4 group-hover:text-red-400 transition-colors">
                      {blogs[0].title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {blogs[0].excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-red-400 font-semibold text-lg hover:gap-3 transition-all">
                      Read Full Article <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Second blog in left column for balance */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex gap-6"
              >
                <div className="relative w-48 h-36 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={blogs[4].image}
                    alt={blogs[4].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2 text-gray-400 text-xs">
                    <span className="font-semibold text-white">by {blogs[4].author}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span>{blogs[4].date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors leading-snug">
                    {blogs[4].title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {blogs[4].excerpt}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Recent Blogs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles size={24} className="text-red-400" />
                  Recent Posts
                </h3>
                <div className="space-y-6">
                  {blogs.slice(1, 4).map((blog, index) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="group flex gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="relative w-32 h-28 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-2 text-gray-400 text-xs">
                          <span className="font-semibold text-white">by {blog.author}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-600" />
                          <span>{blog.date}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors leading-snug">
                          {blog.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {blog.excerpt}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Newsletter signup */}
              <div className="p-6 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-red-900/30 to-red-800/30 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Newsletter</h3>
                <p className="text-gray-400 mb-4">Get the latest articles and resources in your inbox weekly.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/10 text-white placeholder-gray-400 focus:border-red-500 focus:bg-white/20 transition-all"
                  />
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold hover:shadow-lg hover:shadow-red-500/40 transition-all">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============== CONTACT FORM SECTION =============== */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-diagonal opacity-[0.08]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-32">
                <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
                  Get in Touch
                </p>
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  Let&apos;s Start Your <span className="gradient-text">Project</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Ready to take your digital presence to the next level? Drop us a message and we&apos;ll get back to you within 24 hours.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: <Phone size={24} />, title: "Call Us", value: "+1 (234) 567-890" },
                    { icon: <Mail size={24} />, title: "Email Us", value: "hello@agency.com" },
                    { icon: <MapPin size={24} />, title: "Location", value: "123 Business Ave, Tech City" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-red-500/30 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium">{item.title}</p>
                        <p className="text-white text-lg font-semibold mt-1">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-red-900/20 to-red-800/20">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 size={24} className="text-green-400" />
                    <span className="text-lg font-bold text-white">Quick Response Guaranteed</span>
                  </div>
                  <p className="text-gray-400 text-sm">We typically respond within 24 hours on working days.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern-grid opacity-10" />
                <div className="relative z-10">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">First Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                          <input
                            type="text"
                            placeholder="John"
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Last Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                          <input
                            type="text"
                            placeholder="Doe"
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                          type="tel"
                          placeholder="+1 (234) 567-890"
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Service Interested In</label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <select className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                          <option value="">Select a service</option>
                          <option value="seo">SEO Services</option>
                          <option value="web">Web Development</option>
                          <option value="social">Social Media & Branding</option>
                          <option value="marketing">Performance Marketing</option>
                          <option value="content">Content Strategy</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Your Message</label>
                      <textarea
                        placeholder="Tell us about your project and goals..."
                        rows={5}
                        className="w-full px-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center gap-3 glow-red"
                    >
                      Send Message
                      <Send size={20} />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============== FOOTER =============== */}
      <footer className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
            alt="AI Development Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-black/80" />
        </div>
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.18]" />
        <div className="absolute inset-0 bg-pattern-diagonal opacity-[0.12]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-black text-3xl">D</span>
                </div>
                <span className="text-4xl font-black">Digital Agency</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex gap-3">
                {[Linkedin, Twitter, Github].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600/30 transition-all flex items-center justify-center">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-white mb-6">Quick Links</h4>
                  <div className="space-y-3 text-gray-400">
                    <a href="#" className="block hover:text-red-400 transition-colors">Home</a>
                    <a href="#services" className="block hover:text-red-400 transition-colors">Services</a>
                    <a href="#blog" className="block hover:text-red-400 transition-colors">Our Blog</a>
                    <a href="#faq" className="block hover:text-red-400 transition-colors">FAQ</a>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-6">Contact</h4>
                  <div className="space-y-3 text-gray-400">
                    <a href="mailto:hello@agency.com" className="block hover:text-red-400 transition-colors flex items-center gap-2">
                      <Mail size={16} />
                      hello@agency.com
                    </a>
                    <a href="tel:+1234567890" className="block hover:text-red-400 transition-colors flex items-center gap-2">
                      <Phone size={16} />
                      +23 8976-098-345
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-6">Locations</h4>
                  <div className="space-y-6 text-gray-400">
                    <div>
                      <p className="font-semibold text-white mb-2">California</p>
                      <p className="text-sm leading-relaxed">211 Treutel Parks, Port Delia<br />California 43448</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">Carolina</p>
                      <p className="text-sm leading-relaxed">503 Block Ridge, Manchester<br />Carolina 591-909</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright © 2024 Digital Agency | Powered by Digital Agency
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition-colors">Terms & Condition</a>
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* =============== INLINE MARQUEE CSS =============== */}
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          flex-shrink: 0;
          min-width: 200%;
        }
      `}</style>
    </div>
  );
}
