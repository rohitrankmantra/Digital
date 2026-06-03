"use client";
import React from "react";
import { motion } from "framer-motion";
import ServicesSlider from "./ServicesSlider";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute -top-32 left-[-6rem] w-[32rem] h-[32rem] rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-500/8 blur-3xl" />
        
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.4]" />
        <div className="absolute inset-0 bg-pattern-dots opacity-[0.08]" />
        
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
            alt="Abstract background" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-red-400 font-semibold text-xs uppercase tracking-[0.28em] mb-4">
            ( OUR SERVICES )
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Premium Services That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to transform your brand and accelerate your business growth.
          </p>
        </motion.div>

        <ServicesSlider />
      </div>
    </section>
  );
};

export default ServicesSection;
