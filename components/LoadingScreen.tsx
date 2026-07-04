"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-background"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-black tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              UD<span className="text-accent">.AI</span>
            </motion.h1>
            <motion.div
              className="mt-6 h-0.5 bg-accent/20 rounded-full overflow-hidden w-48 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 192 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.p
              className="mt-4 text-sm text-muted font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Initializing Enterprise AI Systems...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
