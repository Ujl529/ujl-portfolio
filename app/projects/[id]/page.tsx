"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FolderGit2, CheckCircle2, Calendar } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="pt-24 min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted mb-8">The project you're looking for doesn't exist.</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-bold"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-accent/5 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
            {project.featured && (
              <span className="block mb-4 text-xs font-mono text-accent uppercase tracking-[0.2em]">
                FLAGSHIP PROJECT
              </span>
            )}
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted max-w-3xl leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border border-white/10 rounded-full text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-white/10 rounded-full font-bold hover:border-accent/40 transition-all"
                >
                  <FolderGit2 size={18} />
                  View on GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-bold hover:scale-105 transition-transform"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {project.problem && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 text-accent">The Problem</h2>
                <p className="text-muted leading-relaxed text-lg">{project.problem}</p>
              </motion.section>
            )}

            {project.solution && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 text-accent">The Solution</h2>
                <p className="text-muted leading-relaxed text-lg">{project.solution}</p>
              </motion.section>
            )}

            {project.architecture && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-white/5 rounded-[2rem] p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-accent">Architecture</h2>
                <p className="text-muted leading-relaxed">{project.architecture}</p>
              </motion.section>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 text-accent">Challenges</h2>
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

            {project.futureScope && project.futureScope.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 text-accent">Future Scope</h2>
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

          <div className="space-y-8">
            {project.businessImpact && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-white/5 rounded-[2rem] p-8"
              >
                <h3 className="text-lg font-bold mb-4 text-accent">Business Impact</h3>
                <p className="text-muted text-sm leading-relaxed">{project.businessImpact}</p>
              </motion.div>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-white/5 rounded-[2rem] p-8"
              >
                <h3 className="text-lg font-bold mb-4 text-accent">Key Highlights</h3>
                <div className="space-y-3">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 rounded-[2rem] p-8"
            >
              <h3 className="text-lg font-bold mb-4 text-accent">Category</h3>
              <span className="text-muted">{project.category}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
