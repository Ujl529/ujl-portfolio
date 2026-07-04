"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="pt-24 min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-mono text-sm uppercase tracking-[0.2em]">Coming Soon</span>
          <h1 className="text-6xl md:text-8xl font-black mt-6 mb-8 tracking-tighter">
            <span className="bg-gradient-to-r from-accent to-purpleAccent bg-clip-text text-transparent">
              Engineering Insights
            </span>
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            Deep dives into enterprise AI architecture, predictive maintenance systems, 
            and the future of industrial intelligence. Join the waiting list to be notified 
            when we launch.
          </p>

          <div className="flex items-center justify-center gap-3 max-w-md mx-auto mb-12">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 bg-card border border-white/10 rounded-full outline-none focus:border-accent transition-colors text-sm"
              readOnly
            />
            <button className="px-6 py-3 bg-accent text-white rounded-full font-bold text-sm whitespace-nowrap opacity-50 cursor-not-allowed">
              Notify Me
            </button>
          </div>

          <p className="text-xs text-muted mb-8">
            No spam. Unsubscribe anytime. We'll only email about content launches.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { title: "AI Architecture", desc: "Enterprise ML system design patterns" },
              { title: "Predictive Maint.", desc: "LSTM & IoT in manufacturing" },
              { title: "SaaS Building", desc: "From MVP to enterprise product" },
            ].map((topic, i) => (
              <div
                key={i}
                className="p-4 bg-card border border-white/5 rounded-xl text-left"
              >
                <h3 className="font-bold text-sm mb-1">{topic.title}</h3>
                <p className="text-xs text-muted">{topic.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
