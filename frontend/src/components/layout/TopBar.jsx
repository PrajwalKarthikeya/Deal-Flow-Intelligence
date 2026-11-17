import React, { useState, useEffect } from 'react';

export default function TopBar() {
  const [backendStatus, setBackendStatus] = useState('checking...');

  useEffect(() => {
    fetch('/api/v1/health')
      .then((res) => res.json())
      .then((data) => {
        setBackendStatus(data.status || 'healthy');
      })
      .catch(() => {
        setBackendStatus('offline');
      });
  }, []);

  return (
    <header className="h-18 bg-[#0d0f14]/80 backdrop-blur-xl border-b border-white/[0.08] px-8 flex items-center justify-between sticky top-0 z-20">
      {/* Search / Breadcrumbs */}
      <div className="flex items-center gap-4 flex-1 max-w-lg">
        <div className="relative w-full group">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-sky-400 transition-colors">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search deals, companies, financial filings (⌘K)..."
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-10 pr-12 py-2.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-amber-500/10 transition-all shadow-inner"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-gray-400 bg-white/[0.05] border border-white/10 rounded">⌘K</kbd>
          </div>
        </div>
      </div>

      {/* Right Actions / Status */}
      <div className="flex items-center gap-4">
        {/* Backend health badge */}
        <div className="hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl glass-panel bg-white/[0.02] border border-white/10 text-xs">
          <span className="text-gray-400 font-medium">API Gateway:</span>
          <span
            className={`font-semibold capitalize flex items-center gap-1.5 ${
              backendStatus === 'healthy' ? 'text-emerald-500' : 'text-amber-500'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${backendStatus === 'healthy' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
            <span>{backendStatus}</span>
          </span>
        </div>

        {/* User profile avatar */}
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-sm shadow-md border border-amber-400/30">
          PA
        </div>
      </div>
    </header>
  );
}
