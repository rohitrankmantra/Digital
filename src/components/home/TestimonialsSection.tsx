"use client";
import React from "react";
import { motion } from "framer-motion";
import TestimonialSlider from "@/components/TestimonialSlider";

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-1" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by Our Clients
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what our satisfied clients have to say about working with us
          </p>
        </motion.div>

        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialsSection;
