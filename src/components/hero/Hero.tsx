import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Terminal,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Layers,
  Cpu,
} from 'lucide-react';
import { resumeData } from '../../data/resume';
import { ParticleCanvas } from './ParticleCanvas';
import { ChakraWidget } from '../ui/ChakraWidget';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const { personal } = resumeData;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic interactive canvas */}
      <ParticleCanvas />

      {/* Atmospheric radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Availability / Status Pill & Chakra UI Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-mono text-emerald-400 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-widest font-semibold">{personal.status}</span>
          </div>

          <ChakraWidget />
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-xs sm:text-sm tracking-widest text-cyan-400 uppercase mb-3"
        >
          HELLO, I'M
        </motion.p>

        {/* Large Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4"
        >
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </motion.h1>

        {/* Professional Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2.5 text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-slate-300"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            {personal.title}
          </span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-sm sm:text-base font-mono text-slate-400 font-normal hidden sm:inline">
            TrackGenesis
          </span>
        </motion.div>

        {/* Summary Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 font-normal leading-relaxed mb-8"
        >
          {personal.shortBio}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-glow hover:shadow-glow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/80 hover:border-cyan-500/50 font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </button>

          <button
            onClick={onOpenTerminal}
            className="hidden sm:flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-950/70 hover:bg-slate-900 text-slate-400 hover:text-cyan-300 border border-slate-800 font-mono text-xs transition-colors"
            title="Launch developer console"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Terminal</span>
          </button>
        </motion.div>

        {/* Direct Connect Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors hover:text-slate-200"
          >
            <Github className="w-3.5 h-3.5 text-slate-300" />
            <span>github.com/Sarathkbalan</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors hover:text-cyan-400"
          >
            <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
            <span>linkedin/sarath-k-balan</span>
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors hover:text-emerald-400"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{personal.email}</span>
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors hover:text-teal-400"
          >
            <Phone className="w-3.5 h-3.5 text-teal-400" />
            <span>{personal.phone}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
