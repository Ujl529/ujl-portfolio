"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Briefcase, FileText, MessageSquare } from "lucide-react";
import Link from "next/link";

const actions = [
  { icon: Briefcase, label: "Projects", href: "/projects" },
  { icon: FileText, label: "Resume", href: "/assets/resume.pdf", external: true },
  { icon: MessageSquare, label: "Contact", href: "/contact" },
];

export default function FAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {isOpen &&
          actions.map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ delay: i * 0.05 }}
            >
              {action.external ? (
                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-card border border-white/10 px-4 py-2 rounded-full hover:border-accent/40 transition-all shadow-xl"
                >
                  <action.icon size={16} className="text-accent" />
                  <span className="text-sm">{action.label}</span>
                </a>
              ) : (
                <Link
                  href={action.href}
                  className="flex items-center gap-2 bg-card border border-white/10 px-4 py-2 rounded-full hover:border-accent/40 transition-all shadow-xl"
                >
                  <action.icon size={16} className="text-accent" />
                  <span className="text-sm">{action.label}</span>
                </Link>
              )}
            </motion.div>
          ))}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 bg-accent text-white rounded-full shadow-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageSquare size={20} />
            </motion.button>
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-card border border-white/10 rounded-full hover:border-accent/40 transition-all shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={16} className="text-muted" />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
