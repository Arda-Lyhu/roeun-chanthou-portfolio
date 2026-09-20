import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Server,
  Globe,
  Cpu,
  CheckCircle2,
  Code,
  Sparkles
} from "lucide-react";
import { skillCategories as defaultSkillCategories } from "../data/portfolioData";

/**
 * Component: Skills
 * ---------------------------------------------------------------
 * Clean, modular skill matrix organized by domain categories.
 * 
 * Props:
 * - categories: (Optional) Array of categories. If not provided,
 *   reads from `src/data/portfolioData.js`.
 */
export default function Skills({ categories = defaultSkillCategories }) {
  // Helper to map category icon names to Lucide icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="text-cyan-400" size={20} />;
      case "Server":
        return <Server className="text-purple-400" size={20} />;
      case "Globe":
        return <Globe className="text-emerald-400" size={20} />;
      case "Cpu":
        return <Cpu className="text-amber-400" size={20} />;
      default:
        return <Code className="text-cyan-400" size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
            <Sparkles size={14} />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Competencies & <br />
            <span className="gradient-text-purple">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Practical skillset applied across mobile apps (iOS & Android) and ASP.NET backend systems.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {getIcon(cat.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base sm:text-lg">
                        {cat.category}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">
                        {cat.skills.length} Core Technologies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-full">
                        {skill.exp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Tag Badges */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="px-2.5 py-0.5 rounded-md bg-white/[0.03] text-[11px] font-mono text-slate-400 border border-white/[0.05]"
                  >
                    #{s.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
