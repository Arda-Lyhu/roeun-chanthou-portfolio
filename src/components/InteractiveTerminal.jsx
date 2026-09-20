import { CornerDownLeft, Terminal as TerminalIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  experiences,
  profileData,
  projects,
  skillCategories,
} from "../data/portfolioData";

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "👋 Welcome to Roeun Chanthou's Interactive Developer Terminal (v2.4)",
    },
    {
      type: "system",
      text: "Type 'help' to view all available commands, or click any quick command button below.",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "user", text: `$ ${cmdStr}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available Commands:
  • about        - Brief summary of Roeun Chanthou
  • skills       - List technical competencies & frameworks
  • projects     - Overview of key mobile & full-stack apps
  • experience   - Career milestones & work history
  • contact      - Email, phone, and direct links
  • hire         - Check availability & schedule a call
  • clear        - Clear the terminal console screen`,
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          text: `🧑 Name: ${profileData.name} (${profileData.preferredName})
📍 Location: ${profileData.location}
💼 Title: ${profileData.title}
⚡ Focus: Flutter Mobile Apps & ASP.NET MVC / Core Backend Systems
📄 Bio: ${profileData.bio}`,
        });
        break;

      case "skills":
        const skillList = skillCategories
          .map(
            (cat) =>
              `\n[${cat.category}]\n  ` +
              cat.skills.map((s) => s.name).join(", "),
          )
          .join("\n");
        newHistory.push({
          type: "output",
          text: `🛠️ Technical Skill Matrix:${skillList}`,
        });
        break;

      case "projects":
        const projList = projects
          .map(
            (p, i) =>
              `${i + 1}. ${p.title} (${p.category}) -> [${p.tech.slice(0, 4).join(", ")}]`,
          )
          .join("\n");
        newHistory.push({
          type: "output",
          text: `📱 Shipped Featured Projects:\n${projList}\n\nType 'github' to visit repositories.`,
        });
        break;

      case "experience":
        const expList = experiences
          .map(
            (e) =>
              `• ${e.role} @ ${e.company} (${e.period})\n  - ${e.description}`,
          )
          .join("\n\n");
        newHistory.push({
          type: "output",
          text: `💼 Work Experience:\n${expList}`,
        });
        break;

      case "contact":
      case "email":
        newHistory.push({
          type: "output",
          text: `📬 Contact Information:
• Email: ${profileData.email}
• Phone: ${profileData.phone}
• GitHub: https://github.com/Roeun-Chanthou
• LinkedIn: https://linkedin.com/in/roeun-chanthou`,
        });
        break;

      case "hire":
        newHistory.push({
          type: "output",
          text: `🎉 Great! Roeun Chanthou is currently "${profileData.status}".
Please reach out directly at: ${profileData.email} or click the 'Hire Me' button in the navigation!`,
        });
        break;

      case "github":
        window.open("https://github.com/Roeun-Chanthou", "_blank");
        newHistory.push({
          type: "output",
          text: "🚀 Opening GitHub profile...",
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `bash: command not found: ${cmd}. Type 'help' for valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
            <TerminalIcon size={14} />
            <span>Interactive CLI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Developer Sandbox
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Query details directly through an interactive bash terminal.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl glass-panel border border-white/15 overflow-hidden shadow-2xl">
          {/* macOS Top Bar */}
          <div className="px-4 py-3 bg-slate-950/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600"></div>
              <span className="text-xs text-slate-400 font-mono ml-2">
                chanthou@macbook-pro: ~
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              zsh
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 bg-[#06080d]/90 font-mono text-xs sm:text-sm min-h-[300px] max-h-[380px] overflow-y-auto space-y-3">
            {history.map((line, i) => (
              <div key={i} className="leading-relaxed">
                {line.type === "system" && (
                  <p className="text-slate-400">{line.text}</p>
                )}
                {line.type === "user" && (
                  <p className="text-cyan-400 font-semibold">{line.text}</p>
                )}
                {line.type === "output" && (
                  <pre className="text-slate-200 whitespace-pre-wrap font-mono text-xs sm:text-sm">
                    {line.text}
                  </pre>
                )}
                {line.type === "error" && (
                  <p className="text-rose-400">{line.text}</p>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Form */}
          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-t border-white/10"
          >
            <span className="text-cyan-400 font-mono text-sm font-bold">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'skills', 'projects', 'contact'..."
              className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 font-mono text-xs sm:text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
            >
              <CornerDownLeft size={14} />
            </button>
          </form>

          {/* Quick Command Suggestions */}
          <div className="p-2.5 bg-slate-950/60 border-t border-white/5 flex flex-wrap items-center gap-1.5 text-xs font-mono">
            <span className="text-slate-500 text-[11px] mr-1">Quick:</span>
            {[
              "skills",
              "projects",
              "experience",
              "contact",
              "hire",
              "clear",
            ].map((btnCmd) => (
              <button
                key={btnCmd}
                type="button"
                onClick={() => handleCommand(btnCmd)}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 text-[11px] transition-colors"
              >
                {btnCmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
