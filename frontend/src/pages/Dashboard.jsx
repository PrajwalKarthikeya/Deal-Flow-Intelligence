import React from 'react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-900/40 via-[#171c28] to-[#11151e] border border-indigo-500/20 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10">
          <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Phase 1 Foundation Complete
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-3 tracking-tight">
            DealFlow Intelligence
          </h1>
          <p className="text-gray-400 text-sm mt-2 max-w-2xl leading-relaxed">
            The project foundation is fully established with FastAPI, PostgreSQL + pgvector backend,
            Vite React Tailwind CSS frontend, and robust development architecture.
          </p>
        </div>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#11151e] border border-[#262d3c] shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-400">Active Deals</span>
            <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 text-sm">💼</span>
          </div>
          <div className="text-3xl font-bold text-white mt-4">0</div>
          <p className="text-xs text-gray-400 mt-1">Ready for pipeline ingestion</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#11151e] border border-[#262d3c] shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-400">Database Connection</span>
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 text-sm">🗄️</span>
          </div>
          <div className="text-3xl font-bold text-emerald-400 mt-4">PostgreSQL</div>
          <p className="text-xs text-gray-400 mt-1">SQLAlchemy + Alembic ready</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#11151e] border border-[#262d3c] shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-400">Frontend Stack</span>
            <span className="p-2 rounded-xl bg-violet-500/10 text-violet-400 text-sm">⚡</span>
          </div>
          <div className="text-3xl font-bold text-violet-400 mt-4">React 19</div>
          <p className="text-xs text-gray-400 mt-1">Vite + Tailwind CSS v4</p>
        </div>
      </div>
    </div>
  );
}
