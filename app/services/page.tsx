"use client";

import { motion } from "framer-motion";
import { Cpu, BarChart3, Rocket, MessageSquare, Zap } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu size={40} />,
  "bar-chart": <BarChart3 size={40} />,
  rocket: <Rocket size={40} />,
  "message-square": <MessageSquare size={40} />,
  zap: <Zap size={40} />,
  activity: <BarChart3 size={40} />,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">Services</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter">
            Strategic <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mb-16">
            Enterprise-grade AI solutions designed for industrial environments, from predictive
            analytics to full-stack SaaS development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 md:p-12 bg-card border border-white/5 rounded-[2.5rem] hover:border-accent/40 transition-all duration-500"
            >
              <div className="mb-8 text-accent group-hover:scale-110 transition-transform">
                {iconMap[s.icon] || <Cpu size={40} />}
              </div>
              <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
              <p className="text-lg text-muted leading-relaxed mb-6">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 text-xs font-mono bg-background border border-white/5 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
