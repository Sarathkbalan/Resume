import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  Code,
  Sparkles,
  Wrench,
  Boxes,
  Search,
} from 'lucide-react';
import { resumeData } from '../../data/resume';
import { SectionHeader } from '../ui/SectionHeader';
import { TechLogo } from '../ui/TechLogo';

export const Skills: React.FC = () => {
  const { skills } = resumeData;
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap: Record<string, React.ElementType> = {
    Layout,
    Server,
    Database,
    Code,
    Sparkles,
    Wrench,
    Boxes,
  };

  const flagshipTechs = [
    { name: 'JavaScript', category: 'Core Language' },
    { name: 'Chakra UI', category: 'UI Component System' },
    { name: 'React.js', category: 'Frontend Library' },
    { name: 'Node.js', category: 'Backend Runtime' },
    { name: 'MongoDB', category: 'Document Database' },
    { name: 'Express.js', category: 'Web Framework' },
    { name: 'NestJS', category: 'Enterprise Backend' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Python', category: 'AI & Scripting' },
    { name: 'Solidity', category: 'Smart Contracts' },
    { name: 'Ethereum', category: 'Blockchain Protocol' },
    { name: 'Git', category: 'Version Control' },
  ];

  const filteredCategories = skills.map((cat) => {
    if (activeCategoryKey !== 'all' && cat.key !== activeCategoryKey) {
      return null;
    }
    const matchingSkills = cat.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery && matchingSkills.length === 0) {
      return null;
    }
    return {
      ...cat,
      skills: searchQuery ? matchingSkills : cat.skills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03 // SKILLS"
          title="Technical Capabilities & Engineering Stack"
          description="Verified toolsets and technologies spanning modern JavaScript & Chakra UI design systems, full-stack MERN, AI integration, and blockchain."
        />

        {/* Featured Tech Stack Bar with Official Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Featured Technologies & Frameworks
            </span>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              Interactive Brand Badges
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {flagshipTechs.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 transition-all group"
              >
                <TechLogo name={item.name} size={22} className="group-hover:scale-110 transition-transform" />
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                    {item.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategoryKey('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                activeCategoryKey === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All Categories ({skills.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>

            {skills.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategoryKey(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeCategoryKey === cat.key
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64 flex-shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. JavaScript, Chakra UI)..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((cat) => {
              if (!cat) return null;
              const IconComponent = iconMap[cat.icon] || Code;
              return (
                <motion.div
                  key={cat.key}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 p-6 flex flex-col justify-between backdrop-blur-md transition-all group hover:shadow-lg"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {cat.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {cat.skills.length} competencies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Skill Pills with Authentic Logos */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-950/80 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-900 transition-all"
                        >
                          <TechLogo name={skill} size={15} />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STATUS: VERIFIED</span>
                    <span className="text-emerald-400">● PRODUCTION READY</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
