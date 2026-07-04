"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FolderGit2, Globe, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function AnimatedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-accent">
              UJL<span className="text-foreground"></span>
            </Link>
            <p className="mt-4 text-muted max-w-md leading-relaxed">
              Building AI solutions for modern enterprises. Predictive maintenance, industrial IoT, and
              scalable machine learning systems.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-white/10 rounded-lg hover:border-accent/40 transition-all"
              >
                <FolderGit2 size={20} className="text-muted hover:text-accent transition-colors" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-white/10 rounded-lg hover:border-accent/40 transition-all"
              >
                <Globe size={20} className="text-muted hover:text-accent transition-colors" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-card border border-white/10 rounded-lg hover:border-accent/40 transition-all"
              >
                <Mail size={20} className="text-muted hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase tracking-widest text-sm">Navigate</h3>
            <ul className="space-y-3">
              {["About", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase tracking-widest text-sm">Enterprise</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/case-studies" className="text-muted hover:text-accent transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-muted hover:text-accent transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-muted hover:text-accent transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Engineered for the AI Era.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-card border border-white/10 rounded-full hover:border-accent/40 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={18} className="text-muted group-hover:text-accent transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
