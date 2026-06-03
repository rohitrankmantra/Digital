"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FaSearch, FaCode, FaShareAlt, FaCamera } from "react-icons/fa";

const allServices = [
  {
    id: "seo",
    category: "SEO Services",
    shortName: "SEO",
    icon: <FaSearch size={24} />,
    description: "Comprehensive SEO solutions to boost your search rankings and drive organic traffic",
    services: [
      { name: "SEO Strategy", desc: "Comprehensive SEO Services", icon: "📊" },
      { name: "One Page SEO", desc: "Single Page Optimization", icon: "📄" },
      { name: "Off Page SEO", desc: "Backlink Building & Authority", icon: "🔗" },
      { name: "Technical SEO", desc: "Site Architecture & Performance", icon: "⚡" },
    ],
  },
  {
    id: "web",
    category: "Website Development",
    shortName: "Dev",
    icon: <FaCode size={24} />,
    description: "Modern, responsive websites built with cutting-edge technologies",
    services: [
      { name: "WordPress Development", desc: "Custom WP Sites", icon: "💻" },
      { name: "Next.js Development", desc: "Modern Web Apps", icon: "🚀" },
      { name: "React.js Development", desc: "Interactive Experiences", icon: "⚛️" },
      { name: "Shopify Development", desc: "E-Commerce Solutions", icon: "🛒" },
    ],
  },
  {
    id: "social",
    category: "Social Media Handling",
    shortName: "Social",
    icon: <FaShareAlt size={24} />,
    description: "Engaging social media campaigns to grow your brand presence",
    services: [
      { name: "Meta Ads", desc: "Facebook & Instagram Campaigns", icon: "📱" },
      { name: "Social Posts", desc: "Content Creation", icon: "📝" },
      { name: "Reels Editing", desc: "Video Content", icon: "🎬" },
      { name: "Brand Identity", desc: "Logo & Catalogue Design", icon: "🎨" },
    ],
  },
  {
    id: "media",
    category: "Photo Shoot",
    shortName: "Media",
    icon: <FaCamera size={24} />,
    description: "Professional photography and video production for your brand",
    services: [
      { name: "Product Photography", desc: "Professional Product Shots", icon: "📷" },
      { name: "Brand Photoshoot", desc: "Brand Story Visuals", icon: "✨" },
      { name: "Event Coverage", desc: "Corporate & Social Events", icon: "🎉" },
      { name: "Video Production", desc: "Video Content Creation", icon: "🎥" },
    ],
  },
];

const ServicesSlider = () => {
  const [activeTab, setActiveTab] = useState(allServices[0].id);
  const activeCategory = allServices.find(cat => cat.id === activeTab) || allServices[0];

  return (
    <div className="relative">
      {/* Background Decorations for whole section */}
      <div className="absolute -inset-8 overflow-hidden">
        <div className="absolute -top-32 -left-8 w-[32rem] h-[32rem] rounded-full bg-red-500/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-8 w-[28rem] h-[28rem] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.08]" />
        <div className="absolute inset-0 bg-pattern-diagonal opacity-[0.06]" />
        <div className="absolute inset-0 bg-pattern-dots opacity-[0.04]" />
      </div>

      {/* Tab Navigation */}
      <div className="mb-10 relative z-10">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {allServices.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`
                group relative px-8 py-4 rounded-2xl transition-all duration-300
                ${activeTab === category.id 
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 shadow-lg shadow-red-500/30' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'}
              `}
            >
              <div className="absolute inset-0 bg-pattern-grid opacity-10 rounded-2xl" />
              <div className="relative flex items-center gap-3">
                <div className={`
                  w-10 h-10 rounded-xl flex items-center justify-center transition-colors
                  ${activeTab === category.id ? 'bg-white/20 text-white' : 'text-gray-400 group-hover:text-white'}
                `}>
                  {category.icon}
                </div>
                <div className="text-left">
                  <p className={`font-bold text-lg transition-colors ${activeTab === category.id ? 'text-white' : 'text-gray-300'}`}>
                    {category.shortName}
                  </p>
                  <p className={`text-xs transition-colors ${activeTab === category.id ? 'text-red-100' : 'text-gray-500'}`}>
                    {category.category}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl">
              {/* Background Decorations */}
              <div className="absolute inset-0 bg-pattern-grid opacity-[0.18]" />
              <div className="absolute inset-0 bg-pattern-diagonal opacity-[0.10]" />
              <div className="absolute -top-32 -right-32 w-[24rem] h-[24rem] rounded-full bg-red-500/12 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 w-[24rem] h-[24rem] rounded-full bg-orange-500/8 blur-3xl" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-red-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-orange-500/20 to-transparent" />

              <div className="relative p-10">
                {/* Category Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                      {activeCategory.icon}
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-white font-[Montserrat] mb-2">
                        {activeCategory.category}
                      </h3>
                      <p className="text-gray-400 text-lg max-w-xl">
                        {activeCategory.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-5 py-2 rounded-full">
                    <CheckCircle2 size={20} />
                    <span className="font-semibold">Expert Services</span>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {activeCategory.services.map((service, idx) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/50 transition-all duration-300"
                    >
                      {/* Background Patterns */}
                      <div className="absolute inset-0 bg-pattern-grid opacity-[0.12]" />
                      <div className="absolute inset-0 bg-pattern-dots opacity-[0.06]" />
                      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative p-6">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                          <div className="absolute inset-0 bg-pattern-grid opacity-20" />
                          <span className="relative">{service.icon}</span>
                        </div>
                        
                        {/* Content */}
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                          {service.desc}
                        </p>
                        
                        {/* CTA Button */}
                        <button className="flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition-all group-hover:gap-3">
                          Learn More 
                          <ArrowRight size={16} className="transition-transform" />
                        </button>
                      </div>
                      
                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesSlider;
