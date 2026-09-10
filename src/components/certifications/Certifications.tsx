import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { resumeData } from '../../data/resume';
import { SectionHeader } from '../ui/SectionHeader';

export const Certifications: React.FC = () => {
  const { certifications } = resumeData;
  const [selectedIssuer, setSelectedIssuer] = useState<string>('all');

  const issuers = ['all', 'AWS', 'IBM', 'Google', 'Kerala Blockchain Academy'];

  const filteredCerts = certifications.filter((cert) => {
    if (selectedIssuer === 'all') return true;
    return cert.issuer.toLowerCase().includes(selectedIssuer.toLowerCase());
  });

  const getIssuerBadgeColor = (issuer: string) => {
    switch (issuer) {
      case 'AWS':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'IBM':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Google':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      default:
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="06 // CERTIFICATIONS"
          title="Verified Professional Certifications"
          description="Industry-recognized credentials in Artificial Intelligence, Cloud Infrastructure, Machine Learning, and Blockchain Development."
        />

        {/* Issuer Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {issuers.map((issuer) => (
            <button
              key={issuer}
              onClick={() => setSelectedIssuer(issuer)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedIssuer === issuer
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {issuer === 'all' ? `All Certifications (${certifications.length})` : issuer}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between backdrop-blur-md transition-all group hover:-translate-y-1 hover:shadow-glow"
            >
              <div>
                {/* Header with Issuer Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${getIssuerBadgeColor(
                      cert.issuer
                    )}`}
                  >
                    {cert.issuer}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-800/80 text-cyan-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                  {cert.name}
                </h3>

                <p className="text-xs font-mono text-slate-400 mb-4">
                  Domain: {cert.domain}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>
                <span>Resume Source</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
