"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Cpu, Zap, MessageSquare } from "lucide-react";
import { personalInfo, projects } from "@/lib/data";

export default function Home() {
  const featuredProject = projects.find((p) => p.id === "predictive-maintenance");
  const otherProjects = projects.filter((p) => p.id !== "predictive-maintenance");

  return (
    <div className="flex flex-col">
      <Hero />

      {/* Trust Bar */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-muted uppercase tracking-[0.2em] font-mono mb-8">
            Trusted by forward-thinking enterprises
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40">
            {["Industry 4.0", "IIoT", "Smart Manufacturing", "AI/ML", "Predictive Analytics"].map(
              (item) => (
                <span key={item} className="text-lg font-bold text-muted">
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">
                The Mission
              </span>
              <h2 className="text-4xl md:text-6xl font-black mt-4 mb-8 tracking-tighter">
                Engineering the <br />
                <span className="text-accent">Next Industrial</span> Revolution
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">{personalInfo.vision}</p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Predictive Models", value: "94%", desc: "Accuracy Rate" },
                { label: "Cost Reduction", value: "30%", desc: "Downtime Decrease" },
                { label: "Enterprise ROI", value: "12 mo", desc: "Payback Period" },
                { label: "Data Pipeline", value: "Real-time", desc: "IoT Processing" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 bg-card border border-white/5 rounded-2xl hover:border-accent/30 transition-all"
                >
                  <div className="text-3xl font-black text-accent">{stat.value}</div>
                  <div className="text-lg font-bold mt-1">{stat.label}</div>
                  <div className="text-sm text-muted">{stat.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="py-24 md:py-32 bg-card/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">
                FLAGSHIP PROJECT
              </span>
              <h2 className="text-4xl md:text-6xl font-black mt-4 tracking-tighter">
                {featuredProject.title}
              </h2>
              <p className="text-muted text-lg max-w-2xl mt-4">{featuredProject.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-white/5 rounded-[2rem]">
                <h3 className="text-xl font-bold mb-4">Architecture</h3>
                <p className="text-muted text-sm leading-relaxed">{featuredProject.architecture}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {featuredProject.techStack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-background border border-white/5 rounded-full text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/case-studies/predictive-maintenance"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-bold hover:scale-105 transition-transform"
                >
                  View Case Study <ArrowRight size={16} />
                </Link>
              </div>
              <div className="p-8 bg-card border border-white/5 rounded-[2rem]">
                <h3 className="text-xl font-bold mb-4">Business Impact</h3>
                <p className="text-muted text-sm leading-relaxed">{featuredProject.businessImpact}</p>
                <div className="mt-6 space-y-4">
                  {featuredProject.highlights?.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-sm text-muted">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Preview */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">
                Services
              </span>
              <h2 className="text-4xl md:text-6xl font-black mt-4 tracking-tighter">
                Enterprise <span className="text-accent">Capabilities</span>
              </h2>
            </motion.div>
            <Link
              href="/services"
              className="hidden md:flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
            >
              All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Cpu size={28} />,
                title: "AI Solutions",
                desc: "Custom ML systems for industrial environments",
              },
              {
                icon: <BarChart3 size={28} />,
                title: "Predictive Analytics",
                desc: "Time-series forecasting & anomaly detection",
              },
              {
                icon: <Zap size={28} />,
                title: "Industrial IoT",
                desc: "Real-time telemetry & edge AI",
              },
              {
                icon: <MessageSquare size={28} />,
                title: "AI Consultation",
                desc: "Strategic roadmaps for AI adoption",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card border border-white/5 rounded-2xl hover:border-accent/30 transition-all group"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              More <span className="text-accent">Projects</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-card border border-white/5 rounded-[2rem] hover:border-accent/30 transition-all"
              >
                <span className="text-xs font-mono text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech) => (
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
                  View Details <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">
              Ready to Build Something <span className="text-accent">Extraordinary?</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
              Let's discuss how AI can transform your enterprise operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-white rounded-full font-bold hover:scale-105 transition-transform text-lg"
            >
              Start the Conversation <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
