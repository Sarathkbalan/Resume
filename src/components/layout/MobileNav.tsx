import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Terminal, Sun, Moon, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { resumeData } from '../../data/resume';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  navLinks: { name: string; href: string; id: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  activeSection,
  onOpenResume,
  onOpenTerminal,
  navLinks,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm z-50 bg-slate-950/95 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-slate-200">SARATH K BALAN</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-cyan-500/15 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-800/80 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold shadow-glow transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Digital Resume</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenTerminal();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Terminal</span>
                </button>

                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs transition-colors"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Dark</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-3 text-xs text-slate-400">
                <a
                  href={resumeData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 flex items-center gap-1"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
                <span>•</span>
                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 flex items-center gap-1"
                >
                  LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
