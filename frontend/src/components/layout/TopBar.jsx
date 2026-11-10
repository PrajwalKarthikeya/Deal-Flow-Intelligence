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
    <header className="h-16 bg-[#11151e] border-b border-[#262d3c] px-8 flex items-center justify-between sticky top-0 z-10">
      {/* Search / Breadcrumbs */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search deals, companies, or partners..."
            className="w-full bg-[#171c28] border border-[#262d3c] rounded-xl pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Right Actions / Status */}
      <div className="flex items-center gap-4">
        {/* Backend health badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#171c28] border border-[#262d3c] text-xs">
          <span className="text-gray-400">API:</span>
          <span
            className={`font-semibold capitalize ${
              backendStatus === 'healthy' ? 'text-emerald-400' : 'text-amber-400'
            }`}
          >
            {backendStatus}
          </span>
        </div>

        {/* User profile avatar */}
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
          PA
        </div>
      </div>
    </header>
  );
}
