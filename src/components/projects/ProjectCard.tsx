import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { ProjectItem } from '../../types';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-5 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow"
    >
      <div>
        {/* Visual Graphic Header */}
        <div className="mb-5 overflow-hidden rounded-xl">
          <ProjectVisual domain={project.domain} title={project.title} />
        </div>

        {/* Category & Title */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider">
            {project.category}
          </span>
          <div className="p-1.5 rounded-lg bg-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all">
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-xs text-slate-400 mb-4 leading-relaxed font-normal">
          {project.subtitle}
        </p>

        {/* Key Features bullet snippet */}
        <div className="mb-5 space-y-1.5">
          {project.features.slice(0, 2).map((feat, fIdx) => (
            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
              <span className="text-cyan-400 mt-0.5 flex-shrink-0">›</span>
              <span className="line-clamp-2">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Tags Footer */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-950/80 border border-slate-800 text-slate-300 group-hover:border-cyan-500/30"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 text-slate-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
