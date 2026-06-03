"use client";
import React from "react";
import { Linkedin, Twitter, Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
          alt="AI Development Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-black/80" />
      </div>
      <div className="absolute inset-0 bg-pattern-grid opacity-[0.18]" />
      <div className="absolute inset-0 bg-pattern-diagonal opacity-[0.12]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center">
                <span className="text-white font-black text-3xl">D</span>
              </div>
              <span className="text-4xl font-black">Digital Agency</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600/30 transition-all flex items-center justify-center">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-white mb-6">Quick Links</h4>
                <div className="space-y-3 text-gray-400">
                  <a href="#" className="block hover:text-red-400 transition-colors">Home</a>
                  <a href="#services" className="block hover:text-red-400 transition-colors">Services</a>
                  <a href="#blog" className="block hover:text-red-400 transition-colors">Our Blog</a>
                  <a href="#faq" className="block hover:text-red-400 transition-colors">FAQ</a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-6">Contact</h4>
                <div className="space-y-3 text-gray-400">
                  <a href="mailto:hello@agency.com" className="block hover:text-red-400 transition-colors flex items-center gap-2">
                    <Mail size={16} />
                    hello@agency.com
                  </a>
                  <a href="tel:+1234567890" className="block hover:text-red-400 transition-colors flex items-center gap-2">
                    <Phone size={16} />
                    +23 8976-098-345
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-6">Locations</h4>
                <div className="space-y-6 text-gray-400">
                  <div>
                    <p className="font-semibold text-white mb-2">California</p>
                    <p className="text-sm leading-relaxed">211 Treutel Parks, Port Delia<br />California 43448</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Carolina</p>
                    <p className="text-sm leading-relaxed">503 Block Ridge, Manchester<br />Carolina 591-909</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright © 2024 Digital Agency | Powered by Digital Agency
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-red-400 transition-colors">Terms & Condition</a>
            <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
