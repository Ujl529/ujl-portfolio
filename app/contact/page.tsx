"use client";

import Navbar from "@/components/Navbar";
import { Mail, Globe, ExternalLink, Send } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.location.href = `mailto:${personalInfo.email}`;
  };

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">Contact</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tighter">
            Let's Build <br />
            the <span className="text-accent">Future.</span>
          </h1>
          <p className="text-xl text-muted mb-12 max-w-lg leading-relaxed">
            Available for high-stakes AI consultancy, enterprise architecture roles, and SaaS
            partnerships.
          </p>
          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 text-xl md:text-2xl font-bold hover:text-accent transition-colors group"
            >
              <span className="p-3 bg-card border border-white/10 rounded-full group-hover:border-accent/40 transition-all">
                <Mail size={20} />
              </span>
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl md:text-2xl font-bold hover:text-accent transition-colors group"
            >
              <span className="p-3 bg-card border border-white/10 rounded-full group-hover:border-accent/40 transition-all">
                <Globe size={20} />
              </span>
              LinkedIn Profile
              <ExternalLink size={18} className="text-muted" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl md:text-2xl font-bold hover:text-accent transition-colors group"
            >
              <span className="p-3 bg-card border border-white/10 rounded-full group-hover:border-accent/40 transition-all">
                <Globe size={20} />
              </span>
              GitHub Profile
              <ExternalLink size={18} className="text-muted" />
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-8 py-4 bg-accent text-white w-fit rounded-full font-bold hover:scale-105 transition-transform"
            >
              Download Executive Resume
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-10 bg-card border border-white/10 rounded-[3rem] shadow-2xl"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Send size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
              <p className="text-muted">Thank you for reaching out. I'll respond promptly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted font-mono">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-background border-b border-white/20 p-4 outline-none focus:border-accent transition-colors"
                  placeholder="Executive Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted font-mono">
                  Enterprise Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-background border-b border-white/20 p-4 outline-none focus:border-accent transition-colors"
                  placeholder="name@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted font-mono">
                  Inquiry
                </label>
                <textarea
                  required
                  className="w-full bg-background border-b border-white/20 p-4 h-32 outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Project scope or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-foreground text-background dark:bg-white dark:text-black font-black rounded-2xl hover:bg-accent hover:text-white transition-all"
              >
                Transmit Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
