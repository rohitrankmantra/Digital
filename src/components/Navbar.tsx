"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { 
  FaSearch, FaCode, FaShareAlt, FaCamera, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-900/80 to-black border-b border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between text-sm text-white/90">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaEnvelope size={14} />
                <span>admin@brightfundingsolution.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt size={14} />
                <span>350 Fifth Avenue, Floor 21 New York, NY 10118</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>Mon - Fri: 09:00 - 18:00</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone size={14} />
                <span>(888) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.35)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 font-bold text-lg tracking-[0.2em] uppercase">
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-orange-500 shadow-[0_0_30px_rgba(239,68,68,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_55%)]" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-black text-base">D</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="block text-white text-base tracking-[0.18em] font-[Montserrat]">Digital Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] text-sm">
            {/* Services with Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu("services")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1 rounded-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/8 transition-all font-[Montserrat] font-semibold">
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMegaMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-4xl mt-4 rounded-[28px] bg-black/95 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl glow-red overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-pattern-grid opacity-30 pointer-events-none" />
                    <div className="grid grid-cols-[3fr_1fr] gap-8 relative z-10">
                      {/* Main Services Grid */}
                      <div className="grid grid-cols-2 gap-8">
                        {megaMenuItems.map((section) => (
                          <div key={section.category}>
                            <h3 className="font-bold text-white mb-6 flex items-center gap-3 text-lg font-[Montserrat]">
                              <span className="p-3 rounded-2xl bg-white/10 text-red-400">
                                {section.icon}
                              </span>
                              {section.category}
                            </h3>
                            <div className="space-y-4">
                              {section.items.map((item) => (
                                <a
                                  key={item.name}
                                  href="#"
                                  className="block group"
                                >
                                  <p className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                                    {item.name}
                                  </p>
                                  <p className="text-xs text-gray-400">{item.desc}</p>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Sidebar */}
                      <div className="border-l border-white/10 pl-8 flex flex-col justify-between">
                        <div className="bg-gradient-to-br from-red-900/50 to-black/50 p-6 rounded-2xl border border-red-500/30">
                          <h3 className="font-bold text-white text-lg mb-4 font-[Montserrat]">
                            Need Funding?
                          </h3>
                          <p className="text-white/80 text-sm mb-4">
                            Get Up To $500K
                          </p>
                          <p className="text-gray-300 text-xs mb-6">
                            Quick approval, same-day funding available for qualified businesses.
                          </p>
                          <img
                            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=400&q=80"
                            alt="Business"
                            className="w-full h-48 object-cover rounded-xl mb-4"
                          />
                          <button className="w-full px-4 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-all font-[Montserrat]">
                            Apply Now <ArrowRight size={16} className="inline ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#portfolio" className="rounded-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/8 transition-all font-[Montserrat] font-semibold">
              Portfolio
            </Link>
            <Link href="#about" className="rounded-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/8 transition-all font-[Montserrat] font-semibold">
              About Us
            </Link>
            <Link href="#contact" className="rounded-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/8 transition-all font-[Montserrat] font-semibold">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <FaPhone size={16} />
            </div>
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all glow-red border border-white/10 font-[Montserrat]">
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
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
            >
              <div className="px-6 py-6 space-y-4">
                {megaMenuItems.map((section) => (
                  <div key={section.category} className="space-y-3">
                    <div className="flex items-center gap-2 text-white font-semibold font-[Montserrat]">
                      <span className="p-2 rounded-xl bg-white/10 text-red-400">
                        {section.icon}
                      </span>
                      {section.category}
                    </div>
                    <div className="pl-4 space-y-2">
                      {section.items.map((item) => (
                        <a
                          key={item.name}
                          href="#services"
                          className="block rounded-lg px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                <a href="#portfolio" className="block rounded-xl px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-[Montserrat]">
                  Portfolio
                </a>
                <a href="#blog" className="block rounded-xl px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-[Montserrat]">
                  About Us
                </a>
                <a href="#contact" className="block rounded-xl px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-[Montserrat]">
                  Contact
                </a>
                <button className="w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white text-sm font-semibold border border-white/10 font-[Montserrat]">
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
