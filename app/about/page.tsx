"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">01. My Mission</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tighter">
            Pioneering AI for the <br />
            <span className="text-accent">Enterprise Frontier.</span>
          </h1>
        </motion.div>

        <div className="space-y-6 text-lg text-muted leading-relaxed">
          {personalInfo.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            <div className="p-8 bg-card border border-white/5 rounded-[2rem] hover:border-accent/30 transition-all">
              <h3 className="text-xl font-bold mb-3">The Vision</h3>
              <p className="text-muted leading-relaxed">{personalInfo.vision}</p>
            </div>
            <div className="p-8 bg-card border border-white/5 rounded-[2rem] hover:border-accent/30 transition-all">
              <h3 className="text-xl font-bold mb-3">The Mission</h3>
              <p className="text-muted leading-relaxed">{personalInfo.mission}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              My entrepreneurial journey is just beginning. I'm building the AI infrastructure
              that powers the next industrial revolution — where unplanned downtime becomes a thing
              of the past and every machine operates at peak efficiency.
            </p>
            <Link
              href="/case-studies/predictive-maintenance"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-bold hover:scale-105 transition-transform"
            >
              View Flagship Project <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
