import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { resumeData } from '../../data/resume';
import { SectionHeader } from '../ui/SectionHeader';
import { TechLogo } from '../ui/TechLogo';

export const Experience: React.FC = () => {
  const { experience } = resumeData;
  const [expandedId, setExpandedId] = useState<string | null>('trackgenesis');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02 // EXPERIENCE"
          title="Professional Engineering Timeline"
          description="Track record of building full-stack applications, robust backend APIs, and AI-driven workflows in agile team environments."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Axis Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-[2px] bg-gradient-to-b from-cyan-500 via-emerald-500/50 to-transparent pointer-events-none hidden sm:block" />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const isExpanded = expandedId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-4 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-glow z-10 hidden sm:flex">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  </div>

                  {/* Main Card */}
                  <div className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 backdrop-blur-md transition-all overflow-hidden shadow-lg">
                    {/* Card Header Banner */}
                    <div
                      onClick={() => toggleExpand(item.id)}
                      className="p-6 sm:p-7 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-slate-800/30 transition-colors"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                            {item.company}
                          </span>
                          {item.current && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              CURRENT
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                          {item.role}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 text-slate-400">
                        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                        <div
                          className={`p-1.5 rounded-lg bg-slate-800 text-slate-300 transform transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-cyan-400' : ''
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 sm:px-7 pb-7 border-t border-slate-800/80 pt-5 space-y-6"
                        >
                          {/* Key Highlights */}
                          {item.highlights && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {item.highlights.map((highlight, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-medium text-slate-300"
                                >
                                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Detailed Responsibilities */}
                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                              Core Engineering Scope & Impact
                            </h4>
                            <ul className="space-y-3">
                              {item.description.map((point, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Stack Chips */}
                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                              Technologies Utilized
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/70 border border-slate-700/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                                >
                                  <TechLogo name={tech} size={14} />
                                  <span>{tech}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
