"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter bg-gradient-to-b from-accent/20 to-transparent bg-clip-text text-transparent"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            404
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 -mt-8">Page Not Found</h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved to a different location.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-bold hover:scale-105 transition-transform"
          >
            <ArrowLeft size={18} />
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
