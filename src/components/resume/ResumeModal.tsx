import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  pdfUrl = '/resume.pdf',
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative flex flex-col w-full max-w-5xl h-[90vh] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-label="Official Resume Document"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-slate-950/80 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100">Official Resume Document</h3>
                  <p className="text-xs text-slate-400 font-mono">Sarath_K_Balan_MERN_Resume.pdf</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  download="Sarath_K_Balan_MERN_Resume.pdf"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition-colors ml-1"
                  aria-label="Close resume viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 w-full bg-slate-950 relative overflow-hidden">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0`}
                className="w-full h-full border-0"
                title="Sarath K Balan Resume"
              />
              <noscript>
                <div className="p-6 text-center text-slate-300">
                  <p>Your browser does not support inline PDF viewing.</p>
                  <a
                    href={pdfUrl}
                    download
                    className="mt-3 inline-block px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold"
                  >
                    Download Resume PDF
                  </a>
                </div>
              </noscript>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
