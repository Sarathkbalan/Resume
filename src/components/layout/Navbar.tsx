import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Sun, Moon, Command, FileText, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { resumeData } from '../../data/resume';
import { MobileNav } from './MobileNav';

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenResume,
  onOpenCommandPalette,
  onOpenTerminal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-cyan-500/50 shadow-sm transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono font-black text-sm tracking-wider text-cyan-400 group-hover:text-cyan-300">
                SKB
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
                {resumeData.personal.name}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                  MERN STACK
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 p-1 rounded-full bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 hover:border-slate-600 text-slate-400 hover:text-slate-200 text-xs transition-colors"
              title="Command Palette (Ctrl + K)"
              aria-label="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-[11px]">⌘K</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 hover:border-slate-600 text-slate-400 hover:text-slate-200 transition-colors"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-400" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 text-xs font-bold shadow-glow hover:shadow-glow-lg transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Resume</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 lg:hidden hover:text-white"
              aria-label="Open Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        activeSection={activeSection}
        onOpenResume={onOpenResume}
        onOpenTerminal={onOpenTerminal}
        navLinks={navLinks}
      />
    </>
  );
};
