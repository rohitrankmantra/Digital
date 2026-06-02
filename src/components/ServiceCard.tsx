"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
  gradient: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  items,
  gradient,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
      className={`group relative p-8 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 transition-all duration-300`}
    >
      {/* Animated gradient border - subtle red */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-red-600/50 to-red-700/50`}
        style={{ padding: "1px" }}
      />

      {/* Card content */}
      <div className="relative z-10 bg-gray-900/80 rounded-[calc(1rem-1px)] p-6 h-full flex flex-col">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-5xl mb-4 text-red-500"
        >
          {icon}
        </motion.div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-all duration-300">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mb-6 flex-grow">{description}</p>

        <div className="space-y-2">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gray-500 to-gray-400" />
              {item}
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ x: 5 }}
          className="mt-6 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors flex items-center gap-2"
        >
          Learn More →
        </motion.button>
      </div>
    </motion.div>
  );
}
