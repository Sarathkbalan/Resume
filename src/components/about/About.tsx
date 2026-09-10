import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  Server,
  Workflow,
  CheckCircle2,
} from 'lucide-react';
import { resumeData } from '../../data/resume';
import { SectionHeader } from '../ui/SectionHeader';

export const About: React.FC = () => {
  const { summary } = resumeData.personal;

  const corePillars = [
    {
      title: 'Full-Stack MERN Architecture',
      description:
        'End-to-end development of production web apps with React.js, Node.js, Express.js, and MongoDB, covering REST API design, schema modeling, and state management.',
      icon: Layers,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
    },
    {
      title: 'AI & LLM Integration',
      description:
        'Empowering web dashboards with AI APIs, prompt engineering, and automated workflows to deliver intelligent insights and operational automation.',
      icon: Sparkles,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
    },
    {
      title: 'Cross-Platform & Mobile (NestJS / React Native)',
      description:
        'Extending feature parity and APIs across web and mobile ecosystems using NestJS structured backend patterns and React Native components.',
      icon: Workflow,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
    },
    {
      title: 'Web3 & Enterprise Stacks',
      description:
        'Hands-on experience developing decentralized dApps (Solidity, Ethereum, IPFS) alongside enterprise C#, ASP.NET Core, and SQL Server platforms.',
      icon: ShieldCheck,
      color: 'text-teal-400',
      bg: 'bg-teal-500/10',
      border: 'border-teal-500/20',
    },
  ];

  const verifiedHighlights = [
    { value: 'TrackGenesis', label: 'Current Company', sub: 'MERN Software Developer' },
    { value: '3 Flagship', label: 'Full-Stack Projects', sub: 'MERN, Web3 & Enterprise' },
    { value: '6 Verified', label: 'Certifications', sub: 'AWS, IBM, Google & KBA' },
    { value: 'B.Tech + Diploma', label: 'Academic Degrees', sub: 'CET & KBA' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01 // ABOUT"
          title="Engineering resilient, full-stack systems with modern AI & Web3 capabilities."
          description="A synthesis of software engineering practices, scalable component design, and end-to-end web architectures."
        />

        {/* Narrative Feature Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span className="text-cyan-400 font-mono">01.1</span>
              <span>Professional Summary</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-6">
              {summary}
            </p>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 font-mono flex items-start gap-3">
              <Code2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-cyan-300 font-semibold">Engineering Philosophy:</span>{' '}
                Maintain rigorous separation of concerns, robust type safety, modular component systems, and end-to-end API reliability from database query to client state.
              </div>
            </div>
          </motion.div>

          {/* Quick Metrics from Resume */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {verifiedHighlights.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <span className="text-xs font-mono text-cyan-400/90 uppercase tracking-wider mb-2">
                  {stat.label}
                </span>
                <span className="text-2xl font-bold text-slate-100 tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 font-normal">
                  {stat.sub}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${pillar.bg} ${pillar.color} ${pillar.border} border`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
