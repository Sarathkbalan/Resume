import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  Download,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { resumeData } from '../../data/resume';
import { SectionHeader } from '../ui/SectionHeader';

interface ContactProps {
  onShowToast: (msg: string) => void;
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast, onOpenResume }) => {
  const { personal } = resumeData;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form state for direct email drafting
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onShowToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject || 'Inquiry regarding Full-Stack / MERN Developer Opportunities'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    onShowToast('Opening default email client...');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="07 // CONTACT"
          title="Let's build something impactful together."
          description="Interested in collaborating, hiring for full-stack MERN roles, or discussing software architecture? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Direct Email</span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {personal.email}
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personal.email, 'Email')}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-300 hover:bg-slate-700 transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'Email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline pt-2"
              >
                <span>Compose email in client</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-500/40 backdrop-blur-md transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Phone & WhatsApp</span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                      {personal.phone}
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personal.phone, 'Phone number')}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-teal-300 hover:bg-slate-700 transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'Phone number' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-400 hover:underline pt-2"
              >
                <span>Direct dial / call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-300" />
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white">
                    GitHub
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </a>
            </div>

            {/* Resume Action Bar */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-cyan-500/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400">PDF RESUME</span>
                <h5 className="text-xs font-bold text-slate-200">Official Document</h5>
              </div>
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>View & Download</span>
              </button>
            </div>
          </motion.div>

          {/* Quick Message Drafter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <h3 className="text-lg font-bold text-slate-100">Send a Quick Dispatch</h3>
            </div>
            <p className="text-xs text-slate-400 mb-6 font-normal">
              Type your message below to immediately launch your email client with your message pre-populated.
            </p>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Full-Stack Developer Role / Project Consultation"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Message Content
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Sarath, I came across your portfolio and would like to connect regarding..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 text-sm font-bold shadow-glow hover:shadow-glow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message Directly</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
