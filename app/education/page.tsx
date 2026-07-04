"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap, MapPin } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">Academic</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-16 tracking-tighter">
            Education <span className="text-accent">Journey</span>
          </h1>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 md:-translate-x-px" />

          <div className="space-y-12">
            {education.map((edu, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={edu.school + edu.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 mt-6 z-10" />

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all">
                      <div className="flex items-center gap-2 text-accent mb-3">
                        <GraduationCap size={18} />
                        <span className="text-sm font-mono">{edu.degree}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{edu.school}</h3>
                      {edu.field && (
                        <p className="text-sm text-muted mb-2">{edu.field}</p>
                      )}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                        <span className="font-mono">{edu.year}</span>
                        {edu.score && <span className="text-accent font-bold">{edu.score}</span>}
                        {edu.location && (
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {edu.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
