"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, FolderGit2, CheckCircle2 } from "lucide-react";
import { projects, personalInfo } from "@/lib/data";

const categories = ["All", "Enterprise AI", "Full Stack", "AI/ML"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter">
            Featured <span className="text-accent">Projects</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mb-10">
            Enterprise-grade AI solutions and full-stack applications built with modern
            architectures.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "bg-card border border-white/10 text-muted hover:border-accent/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card border border-white/5 rounded-[2rem] p-8 md:p-12 hover:border-accent/30 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full uppercase tracking-wider mb-4">
                      FLAGSHIP PROJECT
                    </span>
                  )}
                  <span className="text-xs font-mono text-muted uppercase tracking-wider ml-3">
                    {project.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{project.title}</h2>
                  <p className="text-muted leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-mono bg-background border border-white/5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.highlights && (
                    <div className="space-y-2 mb-6">
                      {project.highlights.slice(0, 3).map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm text-muted">
                          <CheckCircle2 size={14} className="text-accent shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between">
                  <div className="space-y-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                      >
                        <FolderGit2 size={16} />
                        GitHub Repository
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-bold hover:scale-105 transition-transform w-fit"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all"
          >
            <FolderGit2 size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
