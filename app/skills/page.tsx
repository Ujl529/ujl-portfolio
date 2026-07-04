"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const skillCategories = [
  "Programming",
  "Machine Learning",
  "Deep Learning",
  "Data",
  "DevOps",
  "Backend",
  "Database",
  "Frontend",
  "Enterprise",
];

export default function SkillsPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">Expertise</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter">
            Technical <span className="text-accent">Arsenal</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mb-16">
            Deep expertise across the AI stack, from data engineering to deployment.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((cat, ci) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (catSkills.length === 0) return null;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
              >
                <h2 className="text-xl font-bold text-accent mb-6 uppercase tracking-widest">
                  {cat}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {catSkills.map((skill, si) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + si * 0.03 }}
                      className="group relative px-6 py-3 bg-card border border-white/10 rounded-full font-mono text-sm hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 cursor-default"
                    >
                      {skill.name}
                      {skill.level && (
                        <span className="ml-2 text-[10px] opacity-40 group-hover:opacity-80">
                          {skill.level}%
                        </span>
                      )}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
