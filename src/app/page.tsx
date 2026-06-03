"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 bg-pattern-grid opacity-[0.18]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.12] mix-blend-soft-light" />

      {/* Page Sections */}
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
