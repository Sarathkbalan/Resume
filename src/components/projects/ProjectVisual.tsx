import React from 'react';

interface ProjectVisualProps {
  domain: 'ai' | 'blockchain' | 'web';
  title: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ domain, title }) => {
  if (domain === 'ai') {
    return (
      <div className="relative w-full h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
        {/* Abstract Neural Energy Grid */}
        <svg className="w-full h-full opacity-70" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Energy Flow Wave */}
          <path
            d="M10 75 Q 75 20, 150 75 T 290 75"
            stroke="url(#energy-grad)"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            className="animate-pulse"
          />
          <path
            d="M10 75 Q 75 130, 150 75 T 290 75"
            stroke="url(#energy-grad-2)"
            strokeWidth="1.5"
          />

          {/* Core Telemetry Nodes */}
          <circle cx="50" cy="55" r="7" fill="#06b6d4" fillOpacity="0.8" />
          <circle cx="50" cy="55" r="14" stroke="#06b6d4" strokeOpacity="0.3" strokeWidth="1.5" />
          <circle cx="150" cy="75" r="9" fill="#10b981" fillOpacity="0.9" />
          <circle cx="150" cy="75" r="18" stroke="#10b981" strokeOpacity="0.3" strokeWidth="1.5" />
          <circle cx="250" cy="95" r="7" fill="#38bdf8" fillOpacity="0.8" />
          <circle cx="250" cy="95" r="14" stroke="#38bdf8" strokeOpacity="0.3" strokeWidth="1.5" />

          {/* Telemetry Indicator lines */}
          <line x1="50" y1="55" x2="150" y2="75" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="1" />
          <line x1="150" y1="75" x2="250" y2="95" stroke="#10b981" strokeOpacity="0.4" strokeWidth="1" />

          {/* Floating Data Bars */}
          <rect x="25" y="105" width="6" height="25" rx="3" fill="#06b6d4" fillOpacity="0.7" />
          <rect x="35" y="95" width="6" height="35" rx="3" fill="#10b981" fillOpacity="0.7" />
          <rect x="45" y="115" width="6" height="15" rx="3" fill="#38bdf8" fillOpacity="0.7" />

          <rect x="235" y="25" width="6" height="30" rx="3" fill="#10b981" fillOpacity="0.7" />
          <rect x="245" y="15" width="6" height="40" rx="3" fill="#06b6d4" fillOpacity="0.7" />
          <rect x="255" y="30" width="6" height="25" rx="3" fill="#38bdf8" fillOpacity="0.7" />

          <defs>
            <linearGradient id="energy-grad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset="0.5" stopColor="#10b981" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="energy-grad-2" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute bottom-2.5 right-3 font-mono text-[10px] text-cyan-400/80 bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-500/20">
          AI // ENERGY MARKET ENGINE
        </span>
      </div>
    );
  }

  if (domain === 'blockchain') {
    return (
      <div className="relative w-full h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
        {/* Abstract Web3 Cryptographic Block Mesh */}
        <svg className="w-full h-full opacity-70" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blocks */}
          <g transform="translate(30, 45)">
            <rect width="60" height="55" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
            <text x="30" y="32" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="monospace">GENESIS</text>
          </g>

          <line x1="90" y1="72" x2="120" y2="72" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" />

          <g transform="translate(120, 45)">
            <rect width="60" height="55" rx="8" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
            <text x="30" y="27" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="monospace">0xSEPOLIA</text>
            <text x="30" y="42" textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="monospace">VERIFIED</text>
          </g>

          <line x1="180" y1="72" x2="210" y2="72" stroke="#a78bfa" strokeWidth="2" strokeDasharray="3 3" />

          <g transform="translate(210, 45)">
            <rect width="60" height="55" rx="8" fill="#1e1b4b" stroke="#06b6d4" strokeWidth="1.5" />
            <text x="30" y="32" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">IPFS HASH</text>
          </g>

          {/* Connected Hash Lines */}
          <path d="M60 45 L150 20 L240 45" stroke="#6366f1" strokeOpacity="0.4" strokeWidth="1" />
          <circle cx="150" cy="20" r="4" fill="#a855f7" />
        </svg>
        <span className="absolute bottom-2.5 right-3 font-mono text-[10px] text-indigo-400/80 bg-slate-950/80 px-2 py-0.5 rounded border border-indigo-500/20">
          SOLIDITY // ETHEREUM DAPP
        </span>
      </div>
    );
  }

  // Enterprise Web & SQL
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
      {/* Enterprise Architecture Schema Diagram */}
      <svg className="w-full h-full opacity-70" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Frontend Layer */}
        <g transform="translate(25, 30)">
          <rect width="70" height="40" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
          <text x="35" y="24" textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="monospace">React UI</text>
        </g>

        {/* Arrow to Backend */}
        <line x1="95" y1="50" x2="135" y2="50" stroke="#10b981" strokeWidth="1.5" />
        <polygon points="135,47 140,50 135,53" fill="#10b981" />

        {/* REST API & ASP.NET */}
        <g transform="translate(140, 30)">
          <rect width="80" height="40" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="40" y="20" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">ASP.NET Core</text>
          <text x="40" y="32" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">JWT AUTH</text>
        </g>

        {/* Arrow to SQL Server */}
        <line x1="180" y1="70" x2="180" y2="95" stroke="#06b6d4" strokeWidth="1.5" />
        <polygon points="177,95 180,100 183,95" fill="#06b6d4" />

        {/* SQL Server Database Node */}
        <g transform="translate(140, 100)">
          <rect width="80" height="36" rx="6" fill="#1e1b4b" stroke="#a855f7" strokeWidth="1.5" />
          <text x="40" y="22" textAnchor="middle" fill="#c084fc" fontSize="9" fontFamily="monospace">SQL Server</text>
        </g>

        {/* Role tags */}
        <text x="30" y="115" fill="#64748b" fontSize="9" fontFamily="monospace">RBAC: Admin | Seller | Customer</text>
      </svg>
      <span className="absolute bottom-2.5 right-3 font-mono text-[10px] text-emerald-400/80 bg-slate-950/80 px-2 py-0.5 rounded border border-emerald-500/20">
        ASP.NET CORE // SQL SERVER
      </span>
    </div>
  );
};
