"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Briefcase, Users } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">Career</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-16 tracking-tighter">
            Strategic <span className="text-accent">Impact</span>
          </h1>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative p-10 bg-card border border-white/5 rounded-[2rem] hover:border-accent/30 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-accent/10 group-hover:text-accent/20 transition-all">
                {exp.type === "leadership" ? <Users size={80} /> : <Briefcase size={80} />}
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full uppercase tracking-wider mb-4">
                  {exp.period}
                </span>
                <h3 className="text-3xl font-bold mb-2">{exp.role}</h3>
                <p className="text-accent text-lg mb-4">{exp.company}</p>
                <p className="text-muted max-w-3xl text-lg leading-relaxed">{exp.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
