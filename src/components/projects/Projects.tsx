import React, { useState } from 'react';
import { resumeData } from '../../data/resume';
import { ProjectItem } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = resumeData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filterDomain, setFilterDomain] = useState<'all' | 'ai' | 'blockchain' | 'web'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filterDomain === 'all') return true;
    return p.domain === filterDomain;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04 // PROJECTS"
          title="Flagship Engineering Deployments"
          description="Production and decentralized systems developed across full-stack MERN, artificial intelligence, blockchain, and enterprise stacks."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setFilterDomain('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
              filterDomain === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Flagship Projects ({projects.length})
          </button>

          <button
            onClick={() => setFilterDomain('ai')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
              filterDomain === 'ai'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            MERN & AI Platform
          </button>

          <button
            onClick={() => setFilterDomain('blockchain')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
              filterDomain === 'blockchain'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            Web3 / Blockchain dApp
          </button>

          <button
            onClick={() => setFilterDomain('web')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
              filterDomain === 'web'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            Enterprise .NET & SQL
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Deep-dive Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
