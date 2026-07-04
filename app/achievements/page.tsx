"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { Award, Briefcase, Users, Trophy, Code } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  certificate: <Award size={28} />,
  briefcase: <Briefcase size={28} />,
  users: <Users size={28} />,
  trophy: <Trophy size={28} />,
  code: <Code size={28} />,
};

export default function AchievementsPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">
            Milestones
          </span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter">
            Key <span className="text-accent">Achievements</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mb-16">
            Certifications, leadership roles, and enterprise-grade project milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-white/5 rounded-2xl p-8 hover:border-accent/30 transition-all"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                {iconMap[a.icon] || <Award size={28} />}
              </div>
              <h3 className="text-lg font-bold mb-2">{a.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{a.description}</p>
              {a.year && (
                <span className="text-xs font-mono text-accent">{a.year}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
