"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X, Phone, Mail, MessageCircle, Sparkles } from "lucide-react";

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      icon: <FaWhatsapp size={18} />,
      label: "WhatsApp",
      href: "https://wa.me/1234567890",
      color: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      bgGlow: "shadow-green-500/40 hover:shadow-green-500/60"
    },
    {
      icon: <Phone size={18} />,
      label: "Call Us",
      href: "tel:+1234567890",
      color: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      bgGlow: "shadow-blue-500/40 hover:shadow-blue-500/60"
    },
    {
      icon: <Mail size={18} />,
      label: "Email Us",
      href: "mailto:hello@agency.com",
      color: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      bgGlow: "shadow-purple-500/40 hover:shadow-purple-500/60"
    },
    {
      icon: <MessageCircle size={18} />,
      label: "Live Chat",
      href: "#",
      color: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
      bgGlow: "shadow-orange-500/40 hover:shadow-orange-500/60"
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 flex flex-col gap-3 items-end"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: -10, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="px-4 py-2 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-xl border border-white/15 rounded-full text-xs font-semibold text-white shadow-xl hidden sm:block"
                >
                  {contact.label}
                </motion.span>
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className={`w-11 h-11 bg-gradient-to-br ${contact.color} rounded-full flex items-center justify-center text-white shadow-lg ${contact.bgGlow} transition-all duration-300 border border-white/20`}
                >
                  {contact.icon}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-red-500/50 border-3 border-white/20 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-pattern-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/12 to-transparent animate-pulse" />
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0
          }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.div>
        <div className="absolute -top-1 -right-1">
          <Sparkles size={14} className="text-yellow-300 animate-ping" />
        </div>
      </motion.button>
    </div>
  );
};

export default FloatingContactWidget;
