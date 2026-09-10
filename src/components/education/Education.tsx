import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Building2, CheckCircle } from 'lucide-react';
import { resumeData } from '../../data/resume';
import { SectionHeader } from '../ui/SectionHeader';

export const Education: React.FC = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05 // EDUCATION"
          title="Academic Background & Specialized Studies"
          description="Formal engineering education combined with postgraduate blockchain and distributed systems studies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 p-7 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Degree & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
                  {item.degree}
                </h3>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-4">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>{item.institution}</span>
                </div>

                {item.cgpa && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-4">
                    <Award className="w-3.5 h-3.5" />
                    <span className="font-bold">CGPA: {item.cgpa}</span>
                  </div>
                )}

                {item.details && (
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>DEGREE VERIFIED</span>
                <span className="text-cyan-400 font-semibold">ACCREDITED INSTITUTION</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
