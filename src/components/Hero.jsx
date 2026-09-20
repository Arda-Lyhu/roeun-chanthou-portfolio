import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Code2,
  Download,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { heroRoles, profileData } from "../data/portfolioData";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  // Role cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Phnom Penh Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Phnom_Penh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: profileData.yearsExperience,
      label: "Experience",
      desc: "Flutter & ASP.NET",
    },
    {
      value: profileData.completedProjects,
      label: "Key Projects",
      desc: "Mobile Apps & Web Systems",
    },
    {
      value: profileData.repositories,
      label: "Repositories",
      desc: "GitHub Projects",
    },
    {
      value: profileData.contributions,
      label: "Contributions",
      desc: "Active Coding",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profileData.status}</span>
          </div>

          {/* Location & Time */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono backdrop-blur-md">
            <MapPin size={12} className="text-cyan-400" />
            <span>Phnom Penh</span>
            <span className="text-slate-600">•</span>
            <Clock size={12} className="text-slate-400" />
            <span className="text-cyan-300">
              {currentTime || "09:00 PM"} (ICT)
            </span>
          </div>
        </motion.div>

        {/* Main Grid: Info + Avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols): Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-sm sm:text-base font-semibold tracking-wide text-cyan-400 uppercase font-mono mb-2 flex items-center gap-2">
                <Sparkles size={16} className="text-cyan-400" />
                Hello World, I'm Roeun Chanthou
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
                Building <br className="hidden sm:block" />
                <span className="gradient-text-cyan">
                  Mobile Apps & Web Systems
                </span>
                .
              </h1>

              {/* Dynamic Role Switcher */}
              <div className="h-9 flex items-center gap-2">
                <span className="text-slate-400 text-base sm:text-lg">
                  Working on
                </span>
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-semibold text-base sm:text-lg text-cyan-300 border-b-2 border-cyan-500/50 pb-0.5"
                >
                  {heroRoles[roleIndex]}
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              Junior / Mid-level developer with 11–12 months of practical
              experience building and deploying cross-platform mobile apps with{" "}
              <strong>Flutter (iOS & Android)</strong> and backend/web modules
              with <strong>ASP.NET Core Web API & ASP.NET MVC</strong> (billing,
              invoicing, and accounting reporting functions).
            </motion.p>

            {/* CTAs & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-black font-bold text-sm shadow-glow hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>View Shipped Apps</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href={profileData.resumeUrl}
                download="roeun_chanthou_flutter_developer.pdf"
                className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 font-semibold text-sm border border-white/10 hover:border-cyan-400/40 transition-all flex items-center gap-2"
              >
                <Download size={16} className="text-cyan-400" />
                <span>Download CV (PDF)</span>
              </a>

              {/* Social Quick Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/Roeun-Chanthou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/roeun-chanthou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-cyan-400 border border-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:roeunchanthou1401@gmail.com"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-emerald-400 border border-white/10 transition-all"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Glowing Profile Card & Interactive Snapshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[340px] sm:max-w-[380px]">
              {/* Glow backdrop ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>

              {/* Main Card */}
              <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/15 p-5 shadow-2xl">
                {/* Photo frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group mb-4">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.src =
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Floating Badges inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="glass-pill px-3 py-1.5 rounded-xl text-xs text-white font-medium flex items-center gap-1.5 shadow-lg border border-white/20">
                      <Code2 size={14} className="text-cyan-400" />
                      <span>Flutter & ASP.NET Core</span>
                    </div>

                    <div className="glass-pill px-2.5 py-1.5 rounded-xl text-[11px] font-mono text-cyan-300 border border-cyan-400/30">
                      .NET 8 / C#
                    </div>
                  </div>
                </div>

                {/* Profile Footer Inside Card */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h3 className="font-bold text-white text-lg tracking-tight">
                      Roeun Chanthou
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      Mobile & .NET Developer
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                    <Layers size={13} />
                    <span>MVC • Web API</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/[0.08]"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/[0.06] hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
