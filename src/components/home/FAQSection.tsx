"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you start my project?",
    answer: "We can start your project within 48 hours of initial consultation and agreement on the scope of work.",
  },
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of digital marketing services including SEO, Web Development, Social Media Marketing, and Brand Strategy.",
  },
  {
    question: "Do you offer SEO services?",
    answer: "Yes! We provide full-service SEO including technical SEO, content strategy, and link building to help you rank higher.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and PayPal. We also offer payment plans for larger projects.",
  },
  {
    question: "Can you help with social media marketing?",
    answer: "Absolutely! We specialize in creating tailored social media strategies for platforms like Instagram, LinkedIn, Facebook, and TikTok.",
  },
];

const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-[-6rem] w-[32rem] h-[32rem] rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full bg-red-500/10 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-pattern-diagonal opacity-[0.08]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
            ( FREQUENTLY ASKED QUESTIONS )
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Questions? We&apos;ve Got <span className="gradient-text">Answers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our FAQ section to find answers to common questions about our services and processes
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-red-400">
                  {expandedFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
