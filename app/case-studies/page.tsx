"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";

export default function CaseStudiesPage() {
  const featured = projects.find((p) => p.id === "predictive-maintenance");
  const others = projects.filter((p) => p.id !== "predictive-maintenance");

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">Analysis</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter">
            Enterprise <span className="text-accent">Case Studies</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mb-16 leading-relaxed">
            In-depth analysis of enterprise AI implementations — from problem identification to
            deployed solutions with measurable business impact.
          </p>
        </motion.div>

        {/* Featured Case Study */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-gradient-to-br from-accent/10 via-card to-card border border-white/5 rounded-[2rem] p-10 md:p-16 mb-12 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 text-xs font-mono bg-accent text-white rounded-full uppercase tracking-wider mb-4">
                FLAGSHIP CASE STUDY
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                {featured.title}
              </h2>
              <p className="text-lg text-muted max-w-2xl mb-8">{featured.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <BarChart3 size={24} className="text-accent shrink-0" />
                  <div>
                    <div className="text-2xl font-black text-accent">94%</div>
                    <div className="text-xs text-muted">Prediction Accuracy</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-accent shrink-0" />
                  <div>
                    <div className="text-2xl font-black text-accent">30%</div>
                    <div className="text-xs text-muted">Downtime Reduction</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 size={24} className="text-accent shrink-0" />
                  <div>
                    <div className="text-2xl font-black text-accent">$2.4M</div>
                    <div className="text-xs text-muted">Annual Savings</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.techStack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono bg-background border border-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href="/case-studies/predictive-maintenance"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-bold hover:scale-105 transition-transform"
              >
                Read Full Case Study <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-white/5 rounded-[2rem] p-8 hover:border-accent/30 transition-all group"
            >
              <span className="text-xs font-mono text-accent uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
              <p className="text-sm text-muted mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-[10px] font-mono bg-background border border-white/5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 text-sm text-accent font-bold group-hover:gap-4 transition-all"
              >
                View Project <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
