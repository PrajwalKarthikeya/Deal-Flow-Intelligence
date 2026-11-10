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
    <aside className="w-64 bg-[#11151e] border-r border-[#262d3c] flex flex-col h-screen sticky top-0">
      {/* Brand Header */}
      <div className="p-6 border-b border-[#262d3c] flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
          <span className="text-white font-bold text-lg">DF</span>
        </div>
        <div>
          <h1 className="font-bold text-white text-base tracking-tight">DealFlow</h1>
          <p className="text-xs text-gray-400 font-medium">Intelligence v0.1</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        <div className="px-3 pb-2 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
          Navigation
        </div>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-[#1a202c]'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* System Status Footer */}
      <div className="p-4 border-t border-[#262d3c] m-4 rounded-xl bg-[#171c28]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-400">System Status</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>
        <p className="text-[11px] text-gray-400">Foundation Phase 1 Active</p>
      </div>
    </aside>
  );
}
