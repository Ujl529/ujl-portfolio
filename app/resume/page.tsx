"use client";

import { motion } from "framer-motion";
import { personalInfo, skills, education, experiences, achievements } from "@/lib/data";
import { Download, MapPin, Mail, Briefcase, GraduationCap, Award, Code } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end mb-8"
        >
          <a
            href="/assets/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-bold hover:scale-105 transition-transform"
          >
            <Download size={18} />
            Download PDF
          </a>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-white/5 rounded-[2rem] p-8 md:p-12"
        >
          {/* Header */}
          <div className="border-b border-white/10 pb-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter">{personalInfo.name}</h1>
            <p className="text-xl text-accent mt-2">{personalInfo.title}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted">
              <span className="flex items-center gap-1">
                <Mail size={14} />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {personalInfo.location}
              </span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-accent">
              <Briefcase size={18} />
              Professional Summary
            </h2>
            <p className="text-muted leading-relaxed">{personalInfo.vision}</p>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-accent">
              <Code size={18} />
              Technical Skills
            </h2>
            <div className="space-y-4">
              {["Programming", "Machine Learning", "Deep Learning", "DevOps", "Backend", "Database", "Frontend", "Enterprise"].map(
                (cat) => {
                  const catSkills = skills.filter((s) => s.category === cat);
                  if (catSkills.length === 0) return null;
                  return (
                    <div key={cat}>
                      <h3 className="text-sm font-mono text-muted mb-2 uppercase tracking-wider">
                        {cat}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {catSkills.map((skill) => (
                          <span
                            key={skill.name}
                            className="px-3 py-1.5 text-xs font-mono bg-background border border-white/5 rounded-full"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-accent">
              <Briefcase size={18} />
              Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.role + exp.company} className="border-l-2 border-accent/30 pl-4">
                  <h3 className="font-bold">{exp.role}</h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                  <p className="text-xs text-muted font-mono mt-1">{exp.period}</p>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{exp.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-accent">
              <GraduationCap size={18} />
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.school} className="border-l-2 border-accent/30 pl-4">
                  <h3 className="font-bold">{edu.school}</h3>
                  <p className="text-sm text-muted">
                    {edu.degree}
                    {edu.field ? ` - ${edu.field}` : ""}
                  </p>
                  <p className="text-xs text-accent font-mono mt-1">
                    {edu.year}
                    {edu.score ? ` | ${edu.score}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-accent">
              <Award size={18} />
              Key Achievements
            </h2>
            <div className="space-y-3">
              {achievements.map((a) => (
                <div key={a.title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="text-xs text-muted">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
