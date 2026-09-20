import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  GitFork,
  Github,
  Smartphone,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";
import { projectCategories, projects } from "../data/portfolioData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Smartphone size={14} />
              <span>Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Mobile & <br />
              <span className="gradient-text-cyan">Full-Stack Projects</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Production mobile apps engineered with Flutter, Clean
              Architecture, and high-performance backend systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 glass-panel rounded-2xl border border-white/10 self-start md:self-auto">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-glow font-bold"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 group relative"
              >
                {/* Top Image Preview with Device Frame Look */}
                <div
                  className="relative h-56 w-full overflow-hidden bg-slate-950/80 cursor-pointer border-b border-white/10 group"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3">
                    <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-mono text-cyan-300 border border-white/15">
                      {project.category}
                    </span>
                  </div>

                  {/* Quick Inspect Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 shadow-lg">
                      <span>Inspect Details</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <Star
                            size={12}
                            className="text-amber-400 fill-amber-400"
                          />
                          {project.stats.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={12} />
                          {project.stats.forks}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs font-medium text-cyan-400/90 font-mono mb-2">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-medium border border-white/10 transition-colors"
                      >
                        <Github size={14} />
                        <span>Source Code</span>
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-colors"
                      >
                        <span>Details</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 z-10"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/30">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Released {selectedProject.stats.year}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-cyan-300 font-mono mb-6">
                {selectedProject.subtitle}
              </p>

              {/* Modal Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-white/15 mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Project Overview
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Technical Highlights */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Engineering & Architecture Highlights
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-cyan-400 shrink-0 mt-0.5"
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm shadow-glow flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Github size={16} />
                  <span>View Repository on GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
