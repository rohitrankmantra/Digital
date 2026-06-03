"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Briefcase, Send, CheckCircle2, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-diagonal opacity-[0.5]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-32">
              <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Get in Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let&apos;s Start Your <span className="gradient-text">Project</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Ready to take your digital presence to the next level? Drop us a message and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: <Phone size={24} />, title: "Call Us", value: "+1 (234) 567-890" },
                  { icon: <Mail size={24} />, title: "Email Us", value: "hello@agency.com" },
                  { icon: <MapPin size={24} />, title: "Location", value: "123 Business Ave, Tech City" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-red-500/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{item.title}</p>
                      <p className="text-white text-lg font-semibold mt-1">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-red-900/20 to-red-800/20">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 size={24} className="text-green-400" />
                  <span className="text-lg font-bold text-white">Quick Response Guaranteed</span>
                </div>
                <p className="text-gray-400 text-sm">We typically respond within 24 hours on working days.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern-grid opacity-10" />
              <div className="relative z-10">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">First Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                          type="text"
                          placeholder="Doe"
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                      <input
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Service Interested In</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                      <select className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                        <option value="">Select a service</option>
                        <option value="seo">SEO Services</option>
                        <option value="web">Web Development</option>
                        <option value="social">Social Media & Branding</option>
                        <option value="marketing">Performance Marketing</option>
                        <option value="content">Content Strategy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Your Message</label>
                    <textarea
                      placeholder="Tell us about your project and goals..."
                      rows={5}
                      className="w-full px-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-red-500 focus:bg-white/10 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center gap-3 glow-red"
                  >
                    Send Message
                    <Send size={20} />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
