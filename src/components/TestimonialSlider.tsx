"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  tags: string[];
  testimonialImage: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Anderson",
    role: "Marketing Director",
    company: "TechStartup Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    testimonialImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    content: "Their team transformed our digital presence completely. Our conversion rate increased by 150% in just 3 months. Truly exceptional work!",
    tags: ["SEO", "Web Design"],
  },
  {
    name: "James Mitchell",
    role: "CEO",
    company: "E-Commerce Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    testimonialImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
    content: "Best investment we made for our business. The SEO strategy they implemented brought us from page 5 to page 1 rankings. Highly recommended!",
    tags: ["SEO", "E-Commerce"],
  },
  {
    name: "Emily Chen",
    role: "Product Manager",
    company: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    testimonialImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    content: "Outstanding service and support. They understood our vision and delivered beyond expectations. Can't wait to work on phase 2!",
    tags: ["Web Development", "SaaS"],
  },
  {
    name: "Michael Roberts",
    role: "Founder",
    company: "Digital Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    testimonialImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    content: "Professional, creative, and results-driven. They built us a modern website that actually converts visitors into customers.",
    tags: ["Branding", "Web Design"],
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const paginate = (newDirection: number) => {
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative py-12">
      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all backdrop-blur-xl"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all backdrop-blur-xl"
      >
        <ChevronRight size={28} className="text-white" />
      </button>

      {/* Cards Container */}
      <div className="relative h-[550px] flex items-center justify-center">
        {testimonials.map((testimonial, index) => {
          const offset = index - current;
          let translateX = 0;
          let scale = 1;
          let opacity = 1;
          let zIndex = 0;

          if (offset === 0) {
            // Current card (center)
            translateX = 0;
            scale = 1;
            opacity = 1;
            zIndex = 10;
          } else if (offset === 1 || offset === -(testimonials.length - 1)) {
            // Next card (right)
            translateX = 320;
            scale = 0.8;
            opacity = 0.5;
            zIndex = 5;
          } else if (offset === -1 || offset === testimonials.length - 1) {
            // Previous card (left)
            translateX = -320;
            scale = 0.8;
            opacity = 0.5;
            zIndex = 5;
          } else {
            // Hidden cards
            opacity = 0;
            zIndex = 0;
          }

          return (
            <motion.div
              key={testimonial.name}
              initial={false}
              animate={{
                x: translateX,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
              className="absolute w-[400px] bg-white/10 rounded-[2rem] border border-white/20 backdrop-blur-xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
            >
              {/* Testimonial Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={testimonial.testimonialImage}
                  alt={testimonial.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimonial Content */}
              <div className="p-8">
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {testimonial.tags.map((tag, idx) => (
                    <span key={idx} className="px-4 py-1 rounded-full bg-red-500/20 text-red-300 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
