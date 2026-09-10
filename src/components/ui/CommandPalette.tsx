import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  User,
  Briefcase,
  Layers,
  FolderGit2,
  GraduationCap,
  Award,
  Mail,
  FileDown,
  Terminal,
  SunMoon,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { resumeData } from '../../data/resume';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  onShowToast: (msg: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenTerminal,
  onShowToast,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onShowToast(`Copied ${label} to clipboard!`);
    onClose();
  };

  const commands: CommandItem[] = [
    {
      id: 'about',
      title: 'Navigate to About & Summary',
      category: 'Navigation',
      icon: User,
      action: () => scrollTo('about'),
    },
    {
      id: 'experience',
      title: 'Navigate to Experience',
      category: 'Navigation',
      icon: Briefcase,
      action: () => scrollTo('experience'),
    },
    {
      id: 'skills',
      title: 'Navigate to Technical Skills',
      category: 'Navigation',
      icon: Layers,
      action: () => scrollTo('skills'),
    },
    {
      id: 'projects',
      title: 'Navigate to Featured Projects',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => scrollTo('projects'),
    },
    {
      id: 'education',
      title: 'Navigate to Education',
      category: 'Navigation',
      icon: GraduationCap,
      action: () => scrollTo('education'),
    },
    {
      id: 'certifications',
      title: 'Navigate to Certifications',
      category: 'Navigation',
      icon: Award,
      action: () => scrollTo('certifications'),
    },
    {
      id: 'contact',
      title: 'Navigate to Contact Information',
      category: 'Navigation',
      icon: Mail,
      action: () => scrollTo('contact'),
    },
    {
      id: 'resume-view',
      title: 'View Digital Resume (PDF Viewer)',
      category: 'Actions',
      icon: FileDown,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'resume-download',
      title: 'Download Official Resume PDF',
      category: 'Actions',
      icon: FileDown,
      action: () => {
        onClose();
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Sarath_K_Balan_MERN_Resume.pdf';
        link.click();
        onShowToast('Downloading official resume PDF...');
      },
    },
    {
      id: 'terminal',
      title: 'Launch Interactive Developer Terminal',
      category: 'Developer Tools',
      icon: Terminal,
      action: () => {
        onClose();
        onOpenTerminal();
      },
    },
    {
      id: 'theme',
      title: 'Toggle Light / Dark Mode',
      category: 'Preferences',
      icon: SunMoon,
      action: () => {
        toggleTheme();
        onClose();
      },
    },
    {
      id: 'copy-email',
      title: `Copy Email (${resumeData.personal.email})`,
      category: 'Actions',
      icon: Copy,
      action: () => copyText(resumeData.personal.email, 'Email address'),
    },
    {
      id: 'copy-phone',
      title: `Copy Phone (${resumeData.personal.phone})`,
      category: 'Actions',
      icon: Copy,
      action: () => copyText(resumeData.personal.phone, 'Phone number'),
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      category: 'Socials',
      icon: ExternalLink,
      action: () => {
        window.open(resumeData.personal.github, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Socials',
      icon: ExternalLink,
      action: () => {
        window.open(resumeData.personal.linkedin, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
              <Search className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-slate-100 placeholder-slate-400 text-sm focus:outline-none"
              />
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
                ESC
              </kbd>
            </div>

            {/* Command Results */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-800/40">
              {filteredCommands.length === 0 ? (
                <div className="p-8 text-center text-sm text-slate-400">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors text-sm ${
                        isSelected
                          ? 'bg-cyan-500/15 text-cyan-300'
                          : 'text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                        <span>{cmd.title}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {cmd.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer helper */}
            <div className="flex items-center justify-between px-4 py-2 text-[11px] font-mono text-slate-400 bg-slate-950/60 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
              </div>
              <span className="text-cyan-400/80">Cmd+K / Ctrl+K</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
