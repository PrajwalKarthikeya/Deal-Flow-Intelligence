import React from 'react';
import { motion } from 'motion/react';
import ReactECharts from 'echarts-for-react';

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };

export default function Dashboard() {
  const valuationTrendOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(10, 12, 16, 0.95)',
      borderColor: 'rgba(56, 189, 248, 0.25)',
      borderWidth: 1,
      textStyle: { color: '#e2e8f0', fontSize: 12, fontFamily: 'system-ui' },
      axisPointer: { lineStyle: { color: 'rgba(56, 189, 248, 0.2)' } }
    },
    grid: { top: 32, right: 24, bottom: 28, left: 0, containLabel: true },
    xAxis: {
      type: 'category',
      data: ['Q1 24', 'Q2 24', 'Q3 24', 'Q4 24', 'Q1 25', 'Q2 25'],
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.06)' } },
      axisTick: { show: false },
      axisLabel: { color: '#64748b', fontSize: 11, fontFamily: 'ui-monospace, monospace' },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.04)', type: 'dashed' } },
      axisLabel: { color: '#64748b', fontSize: 11, fontFamily: 'ui-monospace, monospace' },
    },
    series: [
      {
        data: [1.2, 1.5, 1.8, 2.3, 2.9, 3.6],
        type: 'line',
        smooth: 0.4,
        symbol: 'none',
        lineStyle: { width: 2.5, color: '#38bdf8' },
        areaStyle: {
          color: {
            type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(56, 189, 248, 0.2)' },
              { offset: 0.6, color: 'rgba(56, 189, 248, 0.05)' },
              { offset: 1, color: 'rgba(56, 189, 248, 0)' }
            ]
          }
        }
      },
      {
        data: [0.8, 1.1, 1.3, 1.6, 2.1, 2.5],
        type: 'line',
        smooth: 0.4,
        symbol: 'none',
        lineStyle: { width: 2, color: '#818cf8', type: 'dashed' },
        areaStyle: {
          color: {
            type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(129, 140, 248, 0.1)' },
              { offset: 1, color: 'rgba(129, 140, 248, 0)' }
            ]
          }
        }
      }
    ]
  };

  const sectorOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(10, 12, 16, 0.95)',
      borderColor: 'rgba(129, 140, 248, 0.25)',
      borderWidth: 1,
      textStyle: { color: '#e2e8f0', fontSize: 12 },
    },
    legend: { show: false },
    series: [{
      name: 'Sector',
      type: 'pie',
      radius: ['58%', '78%'],
      center: ['50%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: { borderRadius: 8, borderColor: '#0a0c10', borderWidth: 3 },
      label: { show: false },
      emphasis: {
        scale: true,
        scaleSize: 6,
        itemStyle: { shadowBlur: 20, shadowColor: 'rgba(56, 189, 248, 0.3)' }
      },
      data: [
        { value: 38, name: 'Fintech', itemStyle: { color: '#38bdf8' } },
        { value: 24, name: 'B2B SaaS', itemStyle: { color: '#818cf8' } },
        { value: 18, name: 'Consumer', itemStyle: { color: '#c084fc' } },
        { value: 12, name: 'DeepTech', itemStyle: { color: '#34d399' } },
        { value: 8, name: 'Logistics', itemStyle: { color: '#fbbf24' } }
      ]
    }]
  };

  const sectorLegend = [
    { name: 'Fintech & Lending', pct: '38%', color: '#38bdf8' },
    { name: 'B2B SaaS / Infra', pct: '24%', color: '#818cf8' },
    { name: 'D2C / Consumer', pct: '18%', color: '#c084fc' },
    { name: 'DeepTech / AI', pct: '12%', color: '#34d399' },
    { name: 'Logistics', pct: '8%', color: '#fbbf24' },
  ];

  const metrics = [
    { label: 'Indexed Companies', value: '42', sub: '+12 this month', color: '#38bdf8' },
    { label: 'Documents Parsed', value: '318', sub: '100% extraction rate', color: '#818cf8' },
    { label: 'RAG Embeddings', value: '14.2K', sub: 'pgvector indexed', color: '#34d399' },
    { label: 'Citation Precision', value: '99.4%', sub: 'Evidence-backed', color: '#c084fc' },
  ];

  const feeds = [
    { company: 'Zepto', sector: 'Quick Commerce', action: 'Series G Financial Deck — 48 pages parsed, 312 data points extracted', time: '14m', verified: true },
    { company: 'PhysicsWallah', sector: 'EdTech', action: 'Annual Report FY25 — Revenue, EBITDA, and unit economics structured', time: '1h', verified: true },
    { company: 'Razorpay', sector: 'Fintech', action: 'Q2 2025 Revenue Metrics — Payment volume and take rate updated', time: '3h', verified: true },
    { company: 'Ather Energy', sector: 'EV / Mobility', action: 'Cap Table & Shareholding — 14 investor entities mapped', time: '5h', verified: true },
  ];

  const quickActions = [
    { label: 'Company Database', desc: 'Browse 42 indexed startups', icon: '🏢' },
    { label: 'RAG Copilot', desc: 'Ask questions across all docs', icon: '🧠' },
    { label: 'Compare Companies', desc: 'Side-by-side analysis', icon: '⚖️' },
    { label: 'Upload Documents', desc: 'Ingest new financial data', icon: '📤' },
    { label: 'Relationship Map', desc: 'Investor & sector networks', icon: '🔗' },
    { label: 'Research Reports', desc: 'Generate evidence-backed briefs', icon: '📋' },
  ];

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8 pb-16">

      {/* Hero */}
      <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-sky-500/[0.08] blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-24 left-1/3 w-[400px] h-[400px] bg-indigo-500/[0.06] blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 p-10 md:p-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[11px] font-semibold tracking-wider uppercase font-mono">
              Intelligence Terminal
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live · 42 companies
            </span>
          </div>

          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-white leading-[1.1] mb-5 max-w-2xl">
            Private markets intelligence,{' '}
            <span className="text-gradient-cyan">structured.</span>
          </h1>

          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-xl">
            Upload financial decks, annual reports, and cap tables. Get structured company profiles, cross-company analysis, and evidence-backed research — all citations traceable to source documents.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-[#07080a] font-semibold text-sm transition-all duration-200 shadow-lg shadow-sky-500/25 flex items-center gap-2 active:scale-[0.97]">
              <span>Explore Database</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-200 font-medium text-sm transition-all duration-200 border border-white/10 active:scale-[0.97]">
              Launch Copilot
            </button>
          </div>
        </div>
      </motion.div>

      {/* Metrics */}
      <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="group relative p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: `radial-gradient(circle at 50% 0%, ${m.color}10, transparent 70%)`}}></div>
            <div className="relative z-10">
              <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider font-mono mb-3">{m.label}</p>
              <p className="text-2xl font-bold text-white tracking-tight mb-1">{m.value}</p>
              <p className="text-[11px] text-gray-500">{m.sub}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Charts Row */}
      <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3 rounded-xl bg-white/[0.02] border border-white/[0.06] p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-semibold text-white">Valuation Trajectory</h3>
              <p className="text-[11px] text-gray-500 mt-0.5">Avg valuation · Indian early-to-growth stage</p>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-sky-400 rounded-full"></span><span className="text-gray-400">Top quartile</span></span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-indigo-400 rounded-full"></span><span className="text-gray-400">Median</span></span>
            </div>
          </div>
          <div className="h-[260px]">
            <ReactECharts option={valuationTrendOption} style={{ height: '100%', width: '100%' }} />
          </div>
        </div>

        <div className="lg:col-span-2 rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 flex flex-col">
          <h3 className="text-sm font-semibold text-white mb-1">Sector Allocation</h3>
          <p className="text-[11px] text-gray-500 mb-4">By portfolio weight</p>
          <div className="h-[160px] mb-4">
            <ReactECharts option={sectorOption} style={{ height: '100%', width: '100%' }} />
          </div>
          <div className="space-y-2 mt-auto">
            {sectorLegend.map((s, i) => (
              <div key={i} className="flex items-center justify-between text-[12px]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: s.color}}></span>
                  <span className="text-gray-300">{s.name}</span>
                </span>
                <span className="font-mono text-gray-400">{s.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={fadeUp}>
        <h3 className="text-sm font-semibold text-white mb-4">Intelligence Modules</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickActions.map((qa, i) => (
            <button key={i} className="group text-left p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-500/30 hover:bg-sky-500/[0.04] transition-all duration-300">
              <span className="text-xl mb-2.5 block">{qa.icon}</span>
              <p className="text-[13px] font-semibold text-white mb-0.5">{qa.label}</p>
              <p className="text-[11px] text-gray-500 leading-snug">{qa.desc}</p>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Intelligence Feed */}
      <motion.div variants={fadeUp} className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
          <div>
            <h3 className="text-sm font-semibold text-white">Recent Extractions</h3>
            <p className="text-[11px] text-gray-500">Document ingestion and financial data pipeline</p>
          </div>
          <button className="text-[11px] text-sky-400 hover:text-sky-300 font-medium transition-colors font-mono">
            View all →
          </button>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {feeds.map((f, i) => (
            <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-sky-500/[0.08] border border-sky-500/15 flex items-center justify-center text-sky-400 font-bold text-xs font-mono">
                  {f.company.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[13px] font-semibold text-white">{f.company}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.04] text-gray-500 font-mono">{f.sector}</span>
                  </div>
                  <p className="text-[12px] text-gray-400 leading-snug">{f.action}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-4">
                {f.verified && (
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Verified
                  </span>
                )}
                <span className="text-[11px] text-gray-500 font-mono">{f.time}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
