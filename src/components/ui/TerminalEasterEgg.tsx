import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { resumeData } from '../../data/resume';

interface TerminalEasterEggProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalEasterEgg: React.FC<TerminalEasterEggProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">Sarath K Balan - Developer Console [v1.0.0]</p>
          <p className="text-xs text-slate-400">
            Type <span className="text-emerald-400 font-mono">help</span> to view available commands.
          </p>
        </div>
      ),
    },
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300 my-1 font-mono">
            <div><span className="text-cyan-400 font-semibold">bio</span> : Display summary & profile</div>
            <div><span className="text-cyan-400 font-semibold">experience</span> : Current role at TrackGenesis</div>
            <div><span className="text-cyan-400 font-semibold">skills</span> : Verified technical stack</div>
            <div><span className="text-cyan-400 font-semibold">projects</span> : Flagship portfolio projects</div>
            <div><span className="text-cyan-400 font-semibold">education</span> : Academic background</div>
            <div><span className="text-cyan-400 font-semibold">certs</span> : Verified certifications</div>
            <div><span className="text-cyan-400 font-semibold">contact</span> : Email, phone & socials</div>
            <div><span className="text-cyan-400 font-semibold">clear</span> : Clear terminal output</div>
            <div><span className="text-cyan-400 font-semibold">exit</span> : Close terminal</div>
          </div>
        );
        break;

      case 'bio':
      case 'info':
      case 'about':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-bold">{resumeData.personal.name} — {resumeData.personal.title}</p>
            <p className="text-slate-400">{resumeData.personal.summary}</p>
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="text-xs space-y-2">
            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-cyan-500 pl-3">
                <p className="text-cyan-300 font-bold">{exp.role} @ {exp.company}</p>
                <p className="text-slate-400">{exp.period}</p>
                <ul className="mt-1 space-y-0.5 text-slate-300">
                  {exp.description.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="text-xs space-y-2">
            {resumeData.skills.map((cat) => (
              <div key={cat.key}>
                <span className="text-cyan-400 font-semibold">{cat.title}: </span>
                <span className="text-slate-300">{cat.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs space-y-2">
            {resumeData.projects.map((proj) => (
              <div key={proj.id} className="border-l-2 border-emerald-500 pl-3">
                <p className="text-emerald-400 font-bold">{proj.title} <span className="text-slate-400 text-[10px]">[{proj.category}]</span></p>
                <p className="text-slate-300">{proj.subtitle}</p>
                <p className="text-slate-400 text-[11px]">Stack: {proj.tags.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="text-xs space-y-2">
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-amber-500 pl-3">
                <p className="text-amber-300 font-bold">{edu.degree} — {edu.institution}</p>
                <p className="text-slate-400">{edu.period} {edu.cgpa ? `| CGPA: ${edu.cgpa}` : ''}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        output = (
          <div className="text-xs space-y-1">
            {resumeData.certifications.map((c) => (
              <div key={c.id}>
                <span className="text-cyan-300">✓ {c.name}</span> <span className="text-slate-400">({c.issuer})</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs space-y-1 font-mono">
            <p>Email: <a href={`mailto:${resumeData.personal.email}`} className="text-cyan-400 underline">{resumeData.personal.email}</a></p>
            <p>Phone: <span className="text-emerald-400">{resumeData.personal.phone}</span></p>
            <p>LinkedIn: <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{resumeData.personal.linkedin}</a></p>
            <p>GitHub: <a href={resumeData.personal.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{resumeData.personal.github}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output = (
          <p className="text-xs text-rose-400 font-mono">
            Command not recognized: "{cmd}". Type <span className="text-cyan-400 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className={`relative flex flex-col rounded-xl bg-slate-950/95 border border-slate-700 shadow-2xl overflow-hidden z-10 transition-all duration-200 ${
              isMaximized ? 'w-full h-full max-w-5xl max-h-[85vh]' : 'w-full max-w-2xl h-[480px]'
            }`}
          >
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 mr-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer hover:opacity-80" onClick={onClose} />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <TerminalIcon className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs text-slate-300">sarath@developer-shell:~</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="hover:text-slate-200 p-1"
                  aria-label="Toggle full screen terminal"
                >
                  {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={onClose}
                  className="hover:text-slate-200 p-1"
                  aria-label="Close terminal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Output Area */}
            <div
              className="flex-1 p-4 font-mono text-sm overflow-y-auto space-y-3 select-text cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-emerald-400 font-bold">guest@sarath-portfolio:~$</span>
                    <span className="text-slate-200">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Input Line */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3 bg-slate-900/60 border-t border-slate-800/80 font-mono text-xs"
            >
              <span className="text-emerald-400 font-bold flex-shrink-0">guest@sarath-portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command ('help')..."
                className="w-full bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none"
              />
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
