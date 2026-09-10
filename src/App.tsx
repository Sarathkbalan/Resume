import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useActiveSection } from './hooks/useActiveSection';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Toast } from './components/ui/Toast';
import { CommandPalette } from './components/ui/CommandPalette';
import { TerminalEasterEgg } from './components/ui/TerminalEasterEgg';
import { ResumeModal } from './components/resume/ResumeModal';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Education } from './components/education/Education';
import { Certifications } from './components/certifications/Certifications';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';

const AppContent: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const sectionIds = [
    'hero',
    'about',
    'experience',
    'skills',
    'projects',
    'education',
    'certifications',
    'contact',
  ];

  const activeSection = useActiveSection(sectionIds, 'hero');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Keyboard shortcuts (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Indicator Bar */}
      <ScrollProgress />

      {/* Global Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact
          onShowToast={showToast}
          onOpenResume={() => setResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Official Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        pdfUrl="/resume.pdf"
      />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onShowToast={showToast}
      />

      {/* Developer Terminal Easter Egg */}
      <TerminalEasterEgg
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Feedback Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
