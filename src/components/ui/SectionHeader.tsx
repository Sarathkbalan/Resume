import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  index: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  title,
  description,
  className = '',
  align = 'left',
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-400 uppercase mb-3"
      >
        <span className="w-6 h-[1px] bg-cyan-500/60 inline-block"></span>
        <span>{index}</span>
        <span className="w-2 h-2 rounded-full bg-cyan-400/40 inline-block"></span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 font-sans"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-sm md:text-base text-slate-400 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
