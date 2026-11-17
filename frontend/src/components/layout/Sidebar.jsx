import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Deals', path: '/deals', icon: '💼' },
    { name: 'Pipeline', path: '/pipeline', icon: '📈' },
    { name: 'Analytics', path: '/analytics', icon: '📉' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-68 bg-[#0d0f14]/80 backdrop-blur-xl border-r border-white/[0.08] flex flex-col h-screen sticky top-0 z-20">
      {/* Brand Header */}
      <div className="p-6 border-b border-white/[0.06] flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 border border-sky-400/30">
          <span className="text-white font-extrabold text-base tracking-wider">DF</span>
        </div>
        <div>
          <h1 className="font-bold text-white text-base tracking-tight flex items-center gap-1.5">
            <span>DealFlow</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-400 font-mono">PRO</span>
          </h1>
          <p className="text-[11px] text-gray-400 font-medium">Intelligence Terminal</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
          Core Workspaces
        </div>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-sky-500/10 text-sky-400 border border-sky-500/25 shadow-lg shadow-sky-500/5'
                  : 'text-gray-400 hover:text-gray-100 hover:bg-white/[0.04]'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* System Status Footer */}
      <div className="p-4 border-t border-white/[0.06] m-4 rounded-2xl glass-panel bg-white/[0.02]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-semibold text-gray-300">Terminal Node</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>
        <p className="text-[11px] text-gray-400 font-mono">pgvector • Active</p>
      </div>
    </aside>
  );
}
