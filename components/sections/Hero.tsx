"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import HeroCanvas from "../3d/HeroCanvas";
import { ArrowRight, Eye, FileText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll(".char");
      gsap.fromTo(
        chars,
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.04,
          duration: 1,
          ease: "power4.out",
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32">
      <HeroCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-accent bg-accent/10 rounded-full border border-accent/20">
              Enterprise AI Engineer & Solution Architect
            </span>
          </motion.div>

          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.9]"
          >
            {"Building AI".split("").map((char, i) => (
              <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <br />
            <span className="text-accent">
              {"Solutions".split("").map((char, i) => (
                <span key={i} className="char inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <br />
            {"for Modern".split("").map((char, i) => (
              <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <br />
            {"Enterprises".split("").map((char, i) => (
              <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            AI Engineer &middot; Enterprise Solution Developer &middot; Freelance Consultant
            &middot; Future Startup Founder
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Hire Me</span>
              <ArrowRight
                size={18}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
              <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-white/10 rounded-full font-bold hover:bg-white/5 hover:border-accent/40 transition-all group"
            >
              <Eye size={18} />
              View Projects
            </Link>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-white/10 rounded-full font-bold hover:bg-white/5 hover:border-accent/40 transition-all group"
            >
              <FileText size={18} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-muted"
            >
              <span className="text-xs uppercase tracking-[0.2em] font-mono">Scroll to explore</span>
              <div className="w-5 h-8 border-2 border-muted/30 rounded-full flex justify-center pt-1.5">
                <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
