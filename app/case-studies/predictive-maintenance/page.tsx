"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function PredictiveMaintenanceCaseStudy() {
  const project = projects.find((p) => p.id === "predictive-maintenance");

  if (!project) {
    return (
      <div className="pt-24 min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted mb-8">The requested case study is not available.</p>
          <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-bold">
            <ArrowLeft size={16} /> Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Executive Summary Hero */}
      <section className="relative bg-gradient-to-b from-accent/10 via-card to-background border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              All Case Studies
            </Link>
            <span className="block mb-4 text-xs font-mono text-accent uppercase tracking-[0.2em]">
              FLAGSHIP ENTERPRISE CASE STUDY
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
              AI Predictive Maintenance
              <br />
              <span className="text-accent">for Manufacturing</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl leading-relaxed mb-8">
              Transforming unplanned downtime into strategic advantage using LSTM-based deep learning
              and Industrial IoT sensor fusion. Enterprise-grade solution delivering measurable ROI.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border border-white/10 rounded-full text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Executive Summary Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-card border border-white/5 rounded-[2rem]">
              {[
                { value: "94%", label: "Prediction Accuracy" },
                { value: "30%", label: "Downtime Reduction" },
                { value: "$2.4M", label: "Annual Savings" },
                { value: "<12 mo", label: "ROI Payback" },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-accent">{m.value}</div>
                  <div className="text-xs text-muted mt-1 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Problem */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 text-accent">Executive Summary</h2>
              <p className="text-muted leading-relaxed text-lg">{project.problem}</p>
            </motion.section>

            {/* Solution */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 text-accent">The Solution</h2>
              <p className="text-muted leading-relaxed text-lg">{project.solution}</p>
            </motion.section>

            {/* Architecture */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 rounded-[2rem] p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-accent">AI Pipeline Architecture</h2>
              <p className="text-muted leading-relaxed">{project.architecture}</p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "LSTM", role: "Time-Series Prediction" },
                  { name: "XGBoost", role: "Failure Classification" },
                  { name: "Isolation Forest", role: "Anomaly Detection" },
                  { name: "Ensemble", role: "Model Fusion" },
                ].map((m) => (
                  <div key={m.name} className="p-4 bg-background border border-white/5 rounded-xl text-center">
                    <div className="text-sm font-bold text-accent">{m.name}</div>
                    <div className="text-[10px] text-muted mt-1">{m.role}</div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Business Impact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 text-accent">Business Value & ROI</h2>
              <p className="text-muted leading-relaxed text-lg">{project.businessImpact}</p>
            </motion.section>

            {/* Challenges */}
            {project.challenges && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 text-accent">Technical Challenges</h2>
                <div className="space-y-3">
                  {project.challenges.map((c) => (
                    <div key={c} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent/50 mt-2 shrink-0" />
                      <span className="text-muted">{c}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Future Scope */}
            {project.futureScope && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 text-accent">Future Roadmap</h2>
                <div className="space-y-3">
                  {project.futureScope.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-muted">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 rounded-[2rem] p-8"
            >
              <h3 className="text-lg font-bold mb-6 text-accent">Key Highlights</h3>
              <div className="space-y-4">
                {project.highlights?.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 rounded-[2rem] p-8"
            >
              <h3 className="text-lg font-bold mb-4 text-accent">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono bg-background border border-white/5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 rounded-[2rem] p-8"
            >
              <h3 className="text-lg font-bold mb-4 text-accent">Resources</h3>
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                  >
                    View Source Code
                  </a>
                )}
                <a
                  href="/assets/case-study-v2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-bold text-sm hover:scale-105 transition-transform mt-4"
                >
                  Download PDF <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
