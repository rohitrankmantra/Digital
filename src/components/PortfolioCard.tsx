"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { Globe } from "lucide-react";
import { useRef } from "react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  results: string;
  index: number;
}

export default function PortfolioCard({
  image,
  title,
  category,
  description,
  results,
  index,
}: PortfolioCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/70 border border-white/10 hover:border-red-500/30 transition-all duration-300"
    >
      {/* Digital Marketing Image with Parallax */}
      <div className="relative h-48 overflow-hidden">
        <motion.div style={{ y }}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 object-cover"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute inset-0 bg-black/30"
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <Globe size={16} className="text-red-400" />
              <span className="text-sm text-red-400 font-semibold">View Case Study</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold mb-3">
          {category}
        </span>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mb-4">{description}</p>

        <div className="pt-4 border-t border-white/10">
          <p className="text-sm font-semibold text-red-300">{results}</p>
        </div>
      </div>

      {/* Hover effect - animated gradient border - red theme */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
