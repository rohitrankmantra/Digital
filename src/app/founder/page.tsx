"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Award, Heart, Sparkles, Users, ArrowRight, Star, Send, MessageSquare, X } from "lucide-react";
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

const initialReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    rating: 5,
    review: "Working with Rohan was an absolute game-changer for our brand. His vision and execution are unparalleled.",
    date: "Jan 2026"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GrowthHub",
    rating: 5,
    review: "Rohan's strategic approach and creative leadership transformed our digital presence completely.",
    date: "Jan 2026"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, BrandCo",
    rating: 5,
    review: "Everything was handled in a very systematic way.",
    date: "Jan 2026"
  },
  {
    id: 4,
    name: "Kirti Oberoi",
    role: "CEO, DesignHub",
    rating: 5,
    review: "Very smooth and transparent process.",
    date: "Jan 2026"
  },
  {
    id: 5,
    name: "Rajat Arora",
    role: "Founder, Innovate",
    rating: 5,
    review: "Rohan and team are extremely supportive and responsive.",
    date: "Jan 2026"
  },
  {
    id: 6,
    name: "Shomic",
    role: "CEO, StartupX",
    rating: 5,
    review: "Excellent service and great communication throughout.",
    date: "Jan 2026"
  }
];

const colors = [
  "from-red-500 to-orange-500",
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-emerald-500",
  "from-yellow-500 to-orange-500",
  "from-indigo-500 to-purple-500"
];

export default function FounderPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !reviewText) return;

    const newReview = {
      id: reviews.length + 1,
      name,
      role: "Happy Client",
      rating,
      review: reviewText,
      date: "Just now"
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setEmail("");
    setReviewText("");
    setRating(5);
    setIsModalOpen(false);
  };

  const RatingStars = ({ rating, interactive = false, onRate }: { rating: number, interactive?: boolean, onRate?: (r: number) => void }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={`cursor-${interactive ? "pointer" : "default"} transition-colors ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-500"}`}
          onClick={() => interactive && onRate && onRate(star)}
        />
      ))}
    </div>
  );

  const Avatar = ({ name, index }: { name: string; index: number }) => {
    const firstLetter = name.charAt(0).toUpperCase();
    const colorClass = colors[index % colors.length];
    
    return (
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white font-bold text-lg`}
      >
        {firstLetter}
      </motion.div>
    );
  };

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
                  className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-red-400 mb-2.5 font-semibold">Experience</p>
                  <p className="text-3xl font-bold text-white">12+ Years</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6"
                >
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
        <section className="max-w-7xl mx-auto px-6 mb-24">
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
                <h3 className="text-xl font-bold mb-3 text-white">{strength.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founder Message Section */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
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
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Design, growth, and authenticity are the catalyst for every project.</h2>
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

        {/* Reviews Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-[Montserrat] text-white">
              Customer Reviews
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6" />
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-300 font-semibold">5.0 Rating</span>
              <span className="text-gray-500">• Trusted by our clients</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-950 via-black to-gray-900 rounded-[2rem] p-8 border border-white/10 hover:border-red-500/30 transition-all shadow-xl hover:shadow-red-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Avatar name={review.name} index={index} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <RatingStars rating={review.rating} />
                      <span className="text-sm text-gray-400 font-semibold">5.0</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-4 leading-relaxed font-medium">
                  "{review.review}"
                </p>
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Write a Review Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-red-500/40 transition-all duration-300 border border-white/10"
            >
              <MessageSquare size={24} />
              Write a Review
            </motion.button>
          </div>
        </section>
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative bg-gradient-to-br from-gray-950 via-black to-gray-900 rounded-[2rem] border border-white/10 shadow-2xl max-w-2xl w-full p-8"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black font-[Montserrat] text-white mb-2">
                  Share Your Experience
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Your Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-[1.5rem] border border-white/10 bg-gray-900/80 backdrop-blur-xl px-5 py-4 text-white outline-none transition focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-[1.5rem] border border-white/10 bg-gray-900/80 backdrop-blur-xl px-5 py-4 text-white outline-none transition focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-3 text-sm font-medium">Your Rating</label>
                  <div className="flex items-center justify-center gap-2">
                    {[1,2,3,4,5].map(star => (
                      <Star
                        key={star}
                        size={32}
                        className={`cursor-pointer transition-all hover:scale-110 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Tell us about your experience</label>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows={4}
                    className="w-full rounded-[1.5rem] border border-white/10 bg-gray-900/80 backdrop-blur-xl px-5 py-4 text-white outline-none transition focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 resize-none"
                    placeholder="Share your experience working with our founder..."
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold py-4 px-6 rounded-[1.5rem] shadow-lg hover:shadow-red-500/40 transition-all duration-300 border border-white/10"
                >
                  <Send size={18} />
                  Submit Review
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
