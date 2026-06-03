"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Calendar, Clock, Sparkles, ArrowUpRight } from "lucide-react";

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

const BlogSection = () => {
  return (
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">
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
  );
};

export default BlogSection;
