import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react";
import { experiences, educationAndLearning } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase size={14} />
            <span>Experience & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <br />
            <span className="gradient-text-cyan">Learning Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Hands-on work building mobile apps and backend billing features, supported by continuous learning.
          </p>
        </div>

        {/* 2-Column Layout: Work Experience (Left) & Education/Training (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Work History (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Briefcase className="text-cyan-400" size={20} />
              <span>Work & Project Experience</span>
            </h3>

            <div className="space-y-6 relative border-l-2 border-white/10 pl-6 ml-3">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all"
                >
                  {/* Timeline indicator dot */}
                  <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-cyan-400 border-4 border-[#07090e] shadow-glow" />

                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-cyan-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                      <Calendar size={12} className="text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 font-mono">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span className="text-emerald-400">{exp.type}</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-2 mb-4">
                    {exp.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[11px] font-mono border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Learning (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="text-purple-400" size={20} />
              <span>Education & Learning</span>
            </h3>

            <div className="space-y-4">
              {educationAndLearning.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg border text-[11px] font-mono font-medium bg-purple-500/10 text-purple-300 border-purple-500/20">
                      {item.institution}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

