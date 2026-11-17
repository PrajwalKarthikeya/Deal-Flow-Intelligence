import { motion } from 'motion/react';
import ReactECharts from 'echarts-for-react';
import { ANIMATION_VARIANTS, hoverEffect } from '../lib/motion';

export default function Dashboard() {
  const valuationTrendOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(20, 20, 20, 0.95)',
      borderColor: 'rgba(212, 175, 55, 0.3)',
      textStyle: { color: '#e5e5e5', fontSize: 12 },
    },
    grid: { top: 30, right: 20, bottom: 30, left: 55, containLabel: true },
    xAxis: {
      type: 'category',
      data: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'],
      axisLine: { lineStyle: { color: '#404040' } },
      axisLabel: { color: '#a3a3a3', fontSize: 11 },
    },
    yAxis: {
      type: 'value',
      name: 'Avg Valuation ($B)',
      nameTextStyle: { color: '#a3a3a3', fontSize: 11 },
      axisLine: { show: false },
      splitLine: { lineStyle: { color: 'rgba(212, 175, 55, 0.1)', type: 'dashed' } },
      axisLabel: { color: '#a3a3a3', fontSize: 11 },
    },
    series: [
      {
        data: [1.2, 1.5, 1.8, 2.3, 2.9, 3.6],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: { color: '#d4af37' },
        lineStyle: { width: 3, color: '#d4af37' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(212, 175, 55, 0.2)' },
              { offset: 1, color: 'rgba(212, 175, 55, 0)' }
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
      backgroundColor: 'rgba(20, 20, 20, 0.95)',
      borderColor: 'rgba(184, 134, 11, 0.3)',
      textStyle: { color: '#e5e5e5', fontSize: 12 },
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      textStyle: { color: '#a3a3a3', fontSize: 11 },
      itemWidth: 10,
      itemHeight: 10,
    },
    series: [
      {
        name: 'Sector Breakdown',
        type: 'pie',
        radius: ['55%', '75%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 6,
          borderColor: '#090909',
          borderWidth: 2
        },
        label: { show: false },
        data: [
          { value: 38, name: 'Fintech & Lending', itemStyle: { color: '#d4af37' } },
          { value: 24, name: 'B2B SaaS / Infra', itemStyle: { color: '#b8860b' } },
          { value: 18, name: 'D2C / Consumer', itemStyle: { color: '#a16207' } },
          { value: 12, name: 'DeepTech / AI', itemStyle: { color: '#f59e0b' } },
          { value: 8, name: 'Logistics / Supply', itemStyle: { color: '#eab308' } }
        ]
      }
    ]
  };

  return (
    <motion.div 
      variants={ANIMATION_VARIANTS.staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8 pb-12"
    >
      {/* Cinematic Hero Section */}
      <motion.div 
        variants={ANIMATION_VARIANTS.fadeUp}
        className="relative rounded-3xl glass-panel-glow p-8 md:p-12 overflow-hidden"
      >
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute right-40 -bottom-20 w-80 h-80 bg-gold-500/5 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-semibold tracking-wider uppercase">
              Private Markets Intelligence Terminal
            </span>
            <span className="flex items-center space-x-1.5 text-xs text-emerald-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>System Live • 42 Startups Indexed</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Unveiling <span className="text-gradient-gold">Indian Startup</span> Intelligence.
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Transforming unstructured financial presentations, annual reports, and cap tables into structured, verifiable company intelligence with evidence-backed citations and semantic cross-company analysis.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-all shadow-lg shadow-amber-900/20 flex items-center space-x-2">
              <span>Explore Company Database</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="px-6 py-3 rounded-xl glass-panel hover:bg-white/[0.06] text-gray-200 font-medium text-sm transition-all border border-white/10">
              Launch RAG Research Copilot
            </button>
          </div>
        </div>
      </motion.div>

      {/* Live Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {[
          { label: 'Indexed Companies', value: '42', change: '+12 this month', icon: '🏢' },
          { label: 'Extracted Documents', value: '318', change: '100% Parsed', icon: '📄' },
          { label: 'Active RAG Embeddings', value: '14,280', change: 'pgvector active', icon: '⚡' },
          { label: 'Evidence Citations', value: '99.4%', change: 'Verified precision', icon: '🛡️' },
        ].map((metric, idx) => (
          <motion.div
            key={idx}
            variants={ANIMATION_VARIANTS.fadeUp}
            {...hoverEffect}
            className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-amber-500/30 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-400">{metric.label}</span>
              <span className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-base">{metric.icon}</span>
            </div>
            <div className="text-3xl font-bold text-white tracking-tight mb-1">{metric.value}</div>
            <div className="text-xs text-amber-500 font-medium">
              <span>{metric.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Analytics Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-6 rounded-2xl lg:col-span-2 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Private Market Valuation Trajectory</h3>
              <p className="text-xs text-gray-400">Average valuation trends across tracked Indian early-to-growth stage startups</p>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-500 text-xs font-mono font-medium">USD Billions</span>
          </div>
          <div className="h-[280px] w-full">
            <ReactECharts option={valuationTrendOption} style={{ height: '100%', width: '100%' }} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-panel p-6 rounded-2xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">Sector Distribution</h3>
            <p className="text-xs text-gray-400">Portfolio allocation by industry vertical</p>
          </div>
          <div className="h-[240px] w-full my-2">
            <ReactECharts option={sectorOption} style={{ height: '100%', width: '100%' }} />
          </div>
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
            <span>Total Dataset Coverage</span>
            <span className="text-white font-medium">100% Verified</span>
          </div>
        </motion.div>
      </div>

      {/* Recent Intelligence Stream */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glass-panel p-6 rounded-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Latest Ingested Intelligence Feeds</h3>
            <p className="text-xs text-gray-400">Real-time document extractions and financial filings analysis</p>
          </div>
          <button className="text-xs text-amber-500 hover:text-amber-400 font-medium transition-colors">
            View All Feeds →
          </button>
        </div>

        <div className="space-y-3">
          {[
            { company: 'Zepto', sector: 'Quick Commerce', action: 'Series G Financial Deck Parsed', time: '14 mins ago', status: 'Verified' },
            { company: 'PhysicsWallah', sector: 'EdTech', action: 'Annual Report 2025 Extracted', time: '1 hour ago', status: 'Verified' },
            { company: 'Razorpay', sector: 'Fintech', action: 'Quarterly Revenue Metrics Updated', time: '3 hours ago', status: 'Verified' },
            { company: 'Ather Energy', sector: 'EV / Mobility', action: 'Cap Table & Shareholding Structure', time: '5 hours ago', status: 'Verified' },
          ].map((feed, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between hover:bg-white/[0.04] transition-all">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-bold text-sm">
                  {feed.company.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-white text-sm">{feed.company}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-white/[0.05] text-gray-400">{feed.sector}</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-0.5">{feed.action}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-right">
                <div>
                  <span className="text-xs text-emerald-500 font-medium flex items-center justify-end space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{feed.status}</span>
                  </span>
                  <span className="text-[11px] text-gray-400">{feed.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}