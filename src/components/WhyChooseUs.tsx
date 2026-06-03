"use client";

import { motion } from "framer-motion";
import { Users, Zap, Award } from "lucide-react";

export default function WhyChooseUs() {
  const stats = [
    {
      number: "173",
      suffix: "K+",
      label: "Project Complete",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      number: "472",
      suffix: "+",
      label: "Client Relations",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      number: "235",
      suffix: "K+",
      label: "Multi-Channel Expertise",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      number: "250",
      suffix: "+",
      label: "Best Customer Service",
      description: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-[-6rem] w-[32rem] h-[32rem] rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full bg-red-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                {stat.number}
                <span className="text-red-400 ml-1">{stat.suffix}</span>
              </h3>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 mb-4" />
              <p className="text-white font-semibold mb-2">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Content */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4578660/pexels-photo-4578660.jpeg"
                alt="Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Floating card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="absolute bottom-8 left-8 max-w-xs p-6 rounded-[1.75rem] bg-white/95 backdrop-blur-xl shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Community Building</h4>
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-red-400 font-semibold text-xs uppercase tracking-[0.28em] mb-4">
              ( WHY CHOOSE US )
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              Proven Strategies And
              <br />
              <span className="gradient-text">Business</span> Growth
            </h2>
            <p className="text-gray-400 text-base mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap size={32} />,
                  title: "Digital Marketing",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                  icon: <Award size={32} />,
                  title: "Expertise Across Platforms",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group p-6 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
