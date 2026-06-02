"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, ChevronRight, Sparkles, Zap, Rocket, Layers, Target, TrendingUp } from "lucide-react";
import { 
  FaSearch, FaCode, FaShareAlt, FaCamera, FaPhone, FaEnvelope, FaMapMarkerAlt 
} from "react-icons/fa";

const marqueeServices = [
  { name: "Website Development", icon: <Zap size={18} /> },
  { name: "Digital Marketing", icon: <TrendingUp size={18} /> },
  { name: "Brand Identity", icon: <Sparkles size={18} /> },
  { name: "SEO Services", icon: <Target size={18} /> },
  { name: "Social Media", icon: <Layers size={18} /> },
  { name: "Content Strategy", icon: <Rocket size={18} /> },
  { name: "Performance Marketing", icon: <Zap size={18} /> },
  { name: "UI/UX Design", icon: <Sparkles size={18} /> },
];

const megaMenuItems = [
  {
    category: "SEO Services",
    icon: <FaSearch size={24} />,
    items: [
      { name: "SEO Strategy", desc: "Comprehensive SEO Services" },
      { name: "One Page SEO", desc: "Single Page Optimization" },
      { name: "Off Page SEO", desc: "Backlink Building & Authority" },
      { name: "Technical SEO", desc: "Site Architecture & Performance" },
    ],
  },
  {
    category: "Website Development",
    icon: <FaCode size={24} />,
    items: [
      { name: "WordPress Development", desc: "Custom WP Sites" },
      { name: "Next.js Development", desc: "Modern Web Apps" },
      { name: "React.js Development", desc: "Interactive Experiences" },
      { name: "Shopify Development", desc: "E-Commerce Solutions" },
    ],
  },
  {
    category: "Social Media Handling",
    icon: <FaShareAlt size={24} />,
    items: [
      { name: "Meta Ads", desc: "Facebook & Instagram Campaigns" },
      { name: "Social Posts", desc: "Content Creation" },
      { name: "Reels Editing", desc: "Video Content" },
      { name: "Brand Identity", desc: "Logo & Catalogue Design" },
    ],
  },
  {
    category: "Photo Shoot",
    icon: <FaCamera size={24} />,
    items: [
      { name: "Product Photography", desc: "Professional Product Shots" },
      { name: "Brand Photoshoot", desc: "Brand Story Visuals" },
      { name: "Event Coverage", desc: "Corporate & Social Events" },
      { name: "Video Production", desc: "Video Content Creation" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      {/* Beautiful Services Marquee */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-white/5 py-2.5">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-pattern-dots opacity-[0.08]" />
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl" />
        
        {/* Animated Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeServices, ...marqueeServices, ...marqueeServices].map((service, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 px-8 flex-shrink-0 group"
              >
                <div className="flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-red-500/30">
                  <span className="text-red-400 group-hover:text-red-300 transition-colors">
                    {service.icon}
                  </span>
                  <span className="text-white/90 text-sm font-semibold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                    {service.name}
                  </span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-black/80 border-b border-white/5 py-2.5 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between text-xs text-gray-300">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaEnvelope size={12} className="text-red-400" />
                <span>admin@brightfundingsolution.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt size={12} className="text-red-400" />
                <span>New York, NY</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>Mon-Fri: 9AM-6PM</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone size={12} className="text-red-400" />
                <span>(888) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 font-bold text-lg tracking-[0.2em] uppercase">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-orange-500 shadow-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle at top left,rgba(255,255,255,0.35),transparent_55%)]" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-black text-base">D</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="block text-white text-base tracking-[0.18em] font-[Montserrat]">Digital Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/5 bg-white/5 px-4 py-2 backdrop-blur-xl text-sm">
            {/* Services with Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu("services")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1.5 rounded-full px-5 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 transition-all font-[Montserrat] font-semibold">
                Services
                <ChevronDown size={16} className={`transition-transform ${activeMegaMenu === "services" ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMegaMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-3 w-[950px] rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-3xl border border-red-500/30 p-8 shadow-2xl overflow-hidden shadow-red-500/10"
                    style={{ transformOrigin: "top left" }}
                  >
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-pattern-grid opacity-15 pointer-events-none" />
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Main Services Grid */}
                        {megaMenuItems.map((section) => (
                          <div key={section.category} className="space-y-4">
                            <h3 className="font-bold text-white mb-2 flex items-center gap-3 text-base font-[Montserrat]">
                              <span className="p-2.5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-red-400 shadow-inner border border-white/5">
                                {section.icon}
                              </span>
                              {section.category}
                            </h3>
                            <div className="space-y-2.5">
                              {section.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href="#services"
                                  className="block group/link p-2.5 -ml-2.5 -mr-2.5 rounded-xl hover:bg-white/5 transition-all"
                                >
                                  <p className="text-sm font-semibold text-white group-hover/link:text-red-400 transition-colors flex items-center gap-2">
                                    {item.name}
                                    <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                  </p>
                                  <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <p className="text-gray-400 text-sm">Ready to transform your digital presence?</p>
                          <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-red-500/40 transition-all border border-white/10 font-[Montserrat] flex items-center gap-2">
                            Start Your Project
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#portfolio" className="rounded-full px-5 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 transition-all font-[Montserrat] font-semibold">
              Portfolio
            </Link>
            <Link href="#about" className="rounded-full px-5 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 transition-all font-[Montserrat] font-semibold">
              About Us
            </Link>
            <Link href="#contact" className="rounded-full px-5 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 transition-all font-[Montserrat] font-semibold">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-red-500/40 transition-all border border-white/10 font-[Montserrat]">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 text-white hover:bg-white/10 rounded-xl transition-colors border border-white/10 bg-white/5"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="lg:hidden bg-black/98 backdrop-blur-2xl border-t border-white/10"
            >
              <div className="px-4 sm:px-6 py-6 space-y-2">
                {/* Services Accordion */}
                {megaMenuItems.map((section) => (
                  <div key={section.category} className="border-b border-white/5 last:border-0 pb-4 last:pb-0">
                    <button
                      onClick={() => setMobileExpandedSection(
                        mobileExpandedSection === section.category ? null : section.category
                      )}
                      className="w-full flex items-center justify-between py-3 text-left"
                    >
                      <div className="flex items-center gap-3 text-white font-semibold font-[Montserrat]">
                        <span className="p-2 rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-red-400 border border-white/5">
                          {section.icon}
                        </span>
                        {section.category}
                      </div>
                      <ChevronRight 
                        size={20} 
                        className={`text-gray-400 transition-transform ${
                          mobileExpandedSection === section.category ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {mobileExpandedSection === section.category && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-14 pr-2 py-2 space-y-1">
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                href="#services"
                                onClick={() => setIsOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="pt-4 space-y-2">
                  <Link 
                    href="#portfolio" 
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all font-[Montserrat] font-medium"
                  >
                    Portfolio
                  </Link>
                  <Link 
                    href="#about" 
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all font-[Montserrat] font-medium"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="#contact" 
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all font-[Montserrat] font-medium"
                  >
                    Contact
                  </Link>
                </div>
                
                <button className="w-full mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white text-sm font-semibold border border-white/10 font-[Montserrat] shadow-lg shadow-red-500/25">
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
