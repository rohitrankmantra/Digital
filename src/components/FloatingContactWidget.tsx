"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X, Phone, MessageSquare, Mail, MessageCircle } from "lucide-react";

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
      href: "https://wa.me/1234567890",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: <Phone size={24} />,
      label: "Call Us",
      href: "tel:+1234567890",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: <Mail size={24} />,
      label: "Email Us",
      href: "mailto:hello@agency.com",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      icon: <MessageCircle size={24} />,
      label: "Live Chat",
      href: "#",
      color: "bg-orange-500 hover:bg-orange-600",
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3"
              >
                <span className="px-4 py-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full text-sm font-medium text-white shadow-lg">
                  {contact.label}
                </span>
                <div className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300`}>
                  {contact.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white shadow-2xl shadow-red-500/50 border-4 border-white/10"
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </motion.button>
    </div>
  );
};

export default FloatingContactWidget;
