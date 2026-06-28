/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Business Impact Section
   Interactive Startup Pitch Dashboard & Investor Report.
   Fully responsive layout with custom interactive SVG charts:
   Doughnut charts, progress bar charts, and data toggles.
   ══════════════════════════════════════════════════════ */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  BarChart3,
  PieChart,
  Globe,
  Shield,
  Zap,
  Users,
  Award,
  Activity,
  FileText,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

/* ── Chart Segment Constants ── */
const marketSegments = [
  { label: 'Defence & Security', value: 35, color: '#3b82f6' },      // Blue
  { label: 'Industrial Inspection', value: 25, color: '#10b981' },   // Green
  { label: 'Disaster Management', value: 15, color: '#f97316' },     // Orange
  { label: 'Agriculture', value: 15, color: '#eab308' },             // Yellow
  { label: 'Research & Others', value: 10, color: '#a855f7' },       // Purple
];

const revenueSegments = [
  { label: 'Hardware Sales', value: 45, color: '#3b82f6' },
  { label: 'Software Licensing', value: 20, color: '#10b981' },
  { label: 'Mission Services', value: 15, color: '#f97316' },
  { label: 'Maintenance Contracts', value: 12, color: '#eab308' },
  { label: 'Analytics Services', value: 8, color: '#a855f7' },
];

const operationalImprovements = [
  { label: 'Situational Awareness', value: 80, desc: 'Live multi-drone feeds' },
  { label: 'Response Time Improvement', value: 70, desc: '60-70% faster victim search' },
  { label: 'Mission Efficiency', value: 65, desc: 'Swarm path optimization' },
  { label: 'Manpower Reduction', value: 55, desc: 'Autonomous patrol fleets' },
  { label: 'Inspection Cost Reduction', value: 50, desc: '40-50% lower logistics' },
];

const techCapabilities = [
  { label: 'RAIC Ecosystem', value: 90, color: 'from-electric to-cyan-400' },
  { label: 'Skydio', value: 85, color: 'from-blue-600 to-blue-400' },
  { label: 'DJI Enterprise', value: 75, color: 'from-slate-600 to-slate-400' },
  { label: 'Parrot ANAFI AI', value: 70, color: 'from-slate-700 to-slate-500' },
];

export default function BusinessImpact() {
  const [activeChartTab, setActiveChartTab] = useState('market'); // 'market' | 'performance'
  const [activeReportTab, setActiveReportTab] = useState('problems'); // 'problems' | 'employment' | 'strategic'
  const [hoveredMarketSeg, setHoveredMarketSeg] = useState(null);
  const [hoveredRevenueSeg, setHoveredRevenueSeg] = useState(null);

  /* ── Donut Arc Calculation Helper ── */
  const circumference = 2 * Math.PI * 40; // 251.33

  return (
    <section id="business-impact" className="relative py-24 md:py-32 overflow-hidden bg-navy-950">
      {/* Background grids */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/50 to-navy-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric/30 bg-electric/5 text-electric text-[11px] font-mono tracking-widest uppercase mb-4"
          >
            <TrendingUp size={12} />
            Commercial Viability
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white tracking-wider"
          >
            Business Impact & <span className="gradient-text bg-gradient-to-r from-electric to-cyan-400 bg-clip-text text-transparent">Commercial Potential</span>
          </motion.h2>
        </div>

        {/* ─── Main Two-Column Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ══════════════════════════════════════════════
              LEFT COLUMN: Interactive Charts Dashboard
              ══════════════════════════════════════════════ */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between p-1 glass rounded-xl border border-white/5">
              <button
                onClick={() => setActiveChartTab('market')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-heading text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeChartTab === 'market'
                    ? 'bg-electric text-navy-950 font-bold shadow-glow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <PieChart size={14} />
                Market & Revenues
              </button>
              <button
                onClick={() => setActiveChartTab('performance')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-heading text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeChartTab === 'performance'
                    ? 'bg-electric text-navy-950 font-bold shadow-glow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <BarChart3 size={14} />
                Metrics & Comparisons
              </button>
            </div>

            <GlassCard className="relative overflow-hidden p-6 md:p-8">
              <AnimatePresence mode="wait">
                {activeChartTab === 'market' ? (
                  <motion.div
                    key="market-charts"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {/* Donut 1: Market Distribution */}
                    <div>
                      <h4 className="font-heading text-white text-sm tracking-wider uppercase mb-1">
                        Potential Market Distribution
                      </h4>
                      <p className="text-xs text-white/40 mb-6">
                        Illustrative distribution of potential customer sectors for the RAIC ecosystem.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                        {/* SVG Donut */}
                        <div className="relative flex justify-center">
                          <svg width="160" height="160" viewBox="0 0 160 160" className="select-none">
                            {/* Inner circle (hole background) */}
                            <circle cx="80" cy="80" r="40" className="fill-navy-950/70" />
                            
                            {/* Dynamic segments */}
                            {(() => {
                              let accum = 0;
                              return marketSegments.map((seg) => {
                                const width = (seg.value / 100) * circumference;
                                const offset = circumference - width;
                                const rotation = accum * 360;
                                accum += seg.value / 100;
                                const isSelected = hoveredMarketSeg?.label === seg.label;

                                return (
                                  <circle
                                    key={seg.label}
                                    cx="80"
                                    cy="80"
                                    r="40"
                                    fill="transparent"
                                    stroke={seg.color}
                                    strokeWidth={isSelected ? 16 : 12}
                                    strokeDasharray={circumference}
                                    strokeDashoffset={offset}
                                    transform={`rotate(${rotation - 90} 80 80)`}
                                    className="transition-all duration-300 cursor-pointer"
                                    onMouseEnter={() => setHoveredMarketSeg(seg)}
                                    onMouseLeave={() => setHoveredMarketSeg(null)}
                                  />
                                );
                              });
                            })()}
                          </svg>

                          {/* Central Label */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                              {hoveredMarketSeg ? 'Sector Share' : 'Total Market'}
                            </span>
                            <span className="text-xl font-heading font-bold text-white text-glow-sm mt-0.5">
                              {hoveredMarketSeg ? `${hoveredMarketSeg.value}%` : '100%'}
                            </span>
                          </div>
                        </div>

                        {/* Donut Legend */}
                        <div className="space-y-2">
                          {marketSegments.map((seg) => (
                            <div
                              key={seg.label}
                              className={`flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg transition-colors cursor-default ${
                                hoveredMarketSeg?.label === seg.label ? 'bg-white/5' : ''
                              }`}
                              onMouseEnter={() => setHoveredMarketSeg(seg)}
                              onMouseLeave={() => setHoveredMarketSeg(null)}
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                                <span className="text-white/70 font-body">{seg.label}</span>
                              </div>
                              <span className="font-mono font-bold text-white">{seg.value}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <hr className="border-white/5" />

                    {/* Donut 2: Revenue Streams */}
                    <div>
                      <h4 className="font-heading text-white text-sm tracking-wider uppercase mb-1">
                        Projected Revenue Streams
                      </h4>
                      <p className="text-xs text-white/40 mb-6">
                        Illustrative revenue mix for Ragas Aerospace autonomous systems business.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                        {/* SVG Donut */}
                        <div className="relative flex justify-center">
                          <svg width="160" height="160" viewBox="0 0 160 160" className="select-none">
                            {/* Inner hole */}
                            <circle cx="80" cy="80" r="40" className="fill-navy-950/70" />

                            {/* Dynamic segments */}
                            {(() => {
                              let accum = 0;
                              return revenueSegments.map((seg) => {
                                const width = (seg.value / 100) * circumference;
                                const offset = circumference - width;
                                const rotation = accum * 360;
                                accum += seg.value / 100;
                                const isSelected = hoveredRevenueSeg?.label === seg.label;

                                return (
                                  <circle
                                    key={seg.label}
                                    cx="80"
                                    cy="80"
                                    r="40"
                                    fill="transparent"
                                    stroke={seg.color}
                                    strokeWidth={isSelected ? 16 : 12}
                                    strokeDasharray={circumference}
                                    strokeDashoffset={offset}
                                    transform={`rotate(${rotation - 90} 80 80)`}
                                    className="transition-all duration-300 cursor-pointer"
                                    onMouseEnter={() => setHoveredRevenueSeg(seg)}
                                    onMouseLeave={() => setHoveredRevenueSeg(null)}
                                  />
                                );
                              });
                            })()}
                          </svg>

                          {/* Central Label */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                              {hoveredRevenueSeg ? 'Revenue Share' : 'Total Revenue'}
                            </span>
                            <span className="text-xl font-heading font-bold text-white text-glow-sm mt-0.5">
                              {hoveredRevenueSeg ? `${hoveredRevenueSeg.value}%` : '100%'}
                            </span>
                          </div>
                        </div>

                        {/* Donut Legend */}
                        <div className="space-y-2">
                          {revenueSegments.map((seg) => (
                            <div
                              key={seg.label}
                              className={`flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg transition-colors cursor-default ${
                                hoveredRevenueSeg?.label === seg.label ? 'bg-white/5' : ''
                              }`}
                              onMouseEnter={() => setHoveredRevenueSeg(seg)}
                              onMouseLeave={() => setHoveredRevenueSeg(null)}
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                                <span className="text-white/70 font-body">{seg.label}</span>
                              </div>
                              <span className="font-mono font-bold text-white">{seg.value}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="performance-charts"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {/* Operational Improvements Bar Chart */}
                    <div>
                      <h4 className="font-heading text-white text-sm tracking-wider uppercase mb-1">
                        Estimated Operational Improvements
                      </h4>
                      <p className="text-xs text-white/40 mb-6">
                        Illustrative estimates based on autonomous drone adoption across industries.
                      </p>

                      <div className="space-y-4">
                        {operationalImprovements.map((item) => (
                          <div key={item.label} className="group">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-white/80 font-medium group-hover:text-electric transition-colors">{item.label}</span>
                              <span className="font-mono font-bold text-white group-hover:text-glow-sm">{item.value}%</span>
                            </div>
                            <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.value}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="h-full bg-gradient-to-r from-electric-600 to-electric rounded-full"
                              />
                            </div>
                            <span className="text-[10px] text-white/30 block mt-0.5 ml-1">{item.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <hr className="border-white/5" />

                    {/* Competitor Analysis Bar Chart */}
                    <div>
                      <h4 className="font-heading text-white text-sm tracking-wider uppercase mb-1">
                        Technology Capability Comparison
                      </h4>
                      <p className="text-xs text-white/40 mb-6">
                        Illustrative capability score comparison between leading drone systems and the RAIC ecosystem.
                      </p>

                      <div className="space-y-4.5">
                        {techCapabilities.map((item) => {
                          const isRAIC = item.label === 'RAIC Ecosystem';
                          return (
                            <div key={item.label}>
                              <div className="flex justify-between text-xs mb-1.5">
                                <span className={`font-semibold ${isRAIC ? 'text-electric text-glow-sm' : 'text-white/60'}`}>
                                  {item.label}
                                </span>
                                <span className={`font-mono font-bold ${isRAIC ? 'text-electric text-glow-sm' : 'text-white/70'}`}>
                                  {item.value}/100
                                </span>
                              </div>
                              <div className={`relative h-3 w-full bg-white/5 rounded-full overflow-hidden border ${isRAIC ? 'border-electric/30' : 'border-white/5'}`}>
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${item.value}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, ease: 'easeOut' }}
                                  className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

          {/* ══════════════════════════════════════════════
              RIGHT COLUMN: Detailed Pitch Report
              ══════════════════════════════════════════════ */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between p-1 glass rounded-xl border border-white/5">
              <button
                onClick={() => setActiveReportTab('problems')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg font-heading text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeReportTab === 'problems'
                    ? 'bg-electric text-navy-950 font-bold shadow-glow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Activity size={14} />
                Real-World Problems
              </button>
              <button
                onClick={() => setActiveReportTab('employment')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg font-heading text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeReportTab === 'employment'
                    ? 'bg-electric text-navy-950 font-bold shadow-glow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Users size={14} />
                Employment & Markets
              </button>
              <button
                onClick={() => setActiveReportTab('strategic')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg font-heading text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeReportTab === 'strategic'
                    ? 'bg-electric text-navy-950 font-bold shadow-glow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Award size={14} />
                Strategic Vision
              </button>
            </div>

            <div className="glass border border-white/5 rounded-2xl p-6 md:p-8 space-y-8 min-h-[500px]">
              <AnimatePresence mode="wait">
                {activeReportTab === 'problems' && (
                  <motion.div
                    key="problems-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-heading text-lg text-white mb-2 tracking-wider">
                        Real-World Problems Addressed
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed font-body">
                        The RAIC ecosystem addresses critical operational bottlenecks by enabling fully autonomous, collaborative, and self-optimizing swarm drone fleets with minimal human intervention.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Problem 1 */}
                      <div className="border border-white/5 bg-white/5 rounded-xl p-4.5 space-y-2">
                        <div className="flex items-center gap-2 text-electric">
                          <Zap size={16} />
                          <h4 className="font-heading text-sm uppercase tracking-wider">Disaster Response Delays</h4>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed">
                          Faced with blocked roads, disrupted cellular signals, and dangerous manual ground surveys.
                        </p>
                        <div className="text-xs text-white/70">
                          <strong>RAIC Impact:</strong> Rapid thermal search, autonomous pathfinder grids, and instant situational mapping.
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                          Benefit: ~60–70% reduction in disaster assessment time
                        </div>
                      </div>

                      {/* Problem 2 */}
                      <div className="border border-white/5 bg-white/5 rounded-xl p-4.5 space-y-2">
                        <div className="flex items-center gap-2 text-electric">
                          <Zap size={16} />
                          <h4 className="font-heading text-sm uppercase tracking-wider">High Cost of Inspection</h4>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed">
                          Manual checking of miles of power transmission grids, solar panels, and oil refineries poses safety risks and high labor overhead.
                        </p>
                        <div className="text-xs text-white/70">
                          <strong>RAIC Impact:</strong> Continuous automated drone patrol routines with real-time AI anomaly and defect identification.
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                          Benefit: 40–50% reduction in operational inspection costs
                        </div>
                      </div>

                      {/* Problem 3 */}
                      <div className="border border-white/5 bg-white/5 rounded-xl p-4.5 space-y-2">
                        <div className="flex items-center gap-2 text-electric">
                          <Zap size={16} />
                          <h4 className="font-heading text-sm uppercase tracking-wider">Border & Infrastructure Surveillance</h4>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed">
                          Broad regional boundaries and deep perimeters are hard to inspect persistently with finite human guards.
                        </p>
                        <div className="text-xs text-white/70">
                          <strong>RAIC Impact:</strong> Day/night thermal scanning, target lock-on trackers, and non-stop swarm relay patrol loops.
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                          Benefit: Continuous coverage with minimized manpower dependency
                        </div>
                      </div>

                      {/* Problem 4 */}
                      <div className="border border-white/5 bg-white/5 rounded-xl p-4.5 space-y-2">
                        <div className="flex items-center gap-2 text-electric">
                          <Zap size={16} />
                          <h4 className="font-heading text-sm uppercase tracking-wider">Agricultural Productivity</h4>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed">
                          Traditional manual monitoring of crops is slow, preventing early stress detection and target pesticide mapping.
                        </p>
                        <div className="text-xs text-white/70">
                          <strong>RAIC Impact:</strong> Smart multispectral scanning, precision crop hydration maps, and automated target spray lists.
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                          Benefit: 15–20% potential increase in agricultural yield
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeReportTab === 'employment' && (
                  <motion.div
                    key="employment-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Employment Generation */}
                    <div>
                      <div className="flex items-center gap-2 text-electric mb-2">
                        <Users size={18} />
                        <h3 className="font-heading text-lg text-white tracking-wider">
                          Employment Generation
                        </h3>
                      </div>
                      <p className="text-sm text-white/60 leading-relaxed mb-4">
                        Developing deep-tech aerospace solutions locally creates high-skill career pathways across several technical, production, and field engineering disciplines.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                          <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase block">Phase I</span>
                          <span className="text-lg font-heading font-black text-electric block mt-1">10–15</span>
                          <span className="text-[10px] text-white/50 block mt-0.5">Direct Aerospace & AI R&D roles</span>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                          <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase block">Phase II</span>
                          <span className="text-lg font-heading font-black text-electric block mt-1">25–50</span>
                          <span className="text-[10px] text-white/50 block mt-0.5">Hardware & Embedded Assembly</span>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                          <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase block">Phase III</span>
                          <span className="text-lg font-heading font-black text-electric block mt-1">100+</span>
                          <span className="text-[10px] text-white/50 block mt-0.5">Direct + Indirect Fleet Services</span>
                        </div>
                      </div>
                    </div>

                    <hr className="border-white/5" />

                    {/* Market Opportunity */}
                    <div>
                      <h3 className="font-heading text-md text-white mb-3 uppercase tracking-wider">
                        Target Customer Segments
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                          <strong className="text-xs text-white/80 block mb-1">Government Sectors</strong>
                          <ul className="text-[11px] text-white/50 space-y-1">
                            <li>• Defence Organizations (Swarm UAVs)</li>
                            <li>• National Disaster Response Forces</li>
                            <li>• State Police & Forest Departments</li>
                          </ul>
                        </div>
                        <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                          <strong className="text-xs text-white/80 block mb-1">Industrial Sectors</strong>
                          <ul className="text-[11px] text-white/50 space-y-1">
                            <li>• Oil, Gas, and Pipeline Operators</li>
                            <li>• Solar/Wind Energy Infrastructure</li>
                            <li>• Smart City perimeter control</li>
                          </ul>
                        </div>
                        <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                          <strong className="text-xs text-white/80 block mb-1">Agriculture</strong>
                          <ul className="text-[11px] text-white/50 space-y-1">
                            <li>• Large farms & Agri-tech firms</li>
                            <li>• Drone spraying service providers</li>
                          </ul>
                        </div>
                        <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                          <strong className="text-xs text-white/80 block mb-1">Research & Academic</strong>
                          <ul className="text-[11px] text-white/50 space-y-1">
                            <li>• Universities & AI Laboratories</li>
                            <li>• National Aerospace Research Centers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeReportTab === 'strategic' && (
                  <motion.div
                    key="strategic-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Economic Impact & Substitution */}
                    <div>
                      <h3 className="font-heading text-lg text-white mb-2 tracking-wider">
                        Economic & National Impact
                      </h3>
                      <p className="text-xs text-white/50 leading-relaxed mb-4">
                        Indigenous deep-tech development decreases reliance on imported UAV platforms, boosting local manufacturing and retaining intellectual property within domestic borders.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-2 text-white/70">
                          <CheckCircle2 size={14} className="text-electric shrink-0" />
                          <span>Import Substitution</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <CheckCircle2 size={14} className="text-electric shrink-0" />
                          <span>Aerospace Patent Creation</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <CheckCircle2 size={14} className="text-electric shrink-0" />
                          <span>Digital India & Startup India Link</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <CheckCircle2 size={14} className="text-electric shrink-0" />
                          <span>Atmanirbhar Bharat Alignment</span>
                        </div>
                      </div>
                    </div>

                    <hr className="border-white/5" />

                    {/* Social & National Alignment */}
                    <div>
                      <h3 className="font-heading text-md text-white mb-2 uppercase tracking-wider">
                        Social Contributions
                      </h3>
                      <p className="text-xs text-white/60 leading-relaxed font-body">
                        The RAIC ecosystem aids civilian welfare directly by accelerating emergency searches during floods, protecting inspection workers from fatal heights or high-voltage risks, and raising regional agricultural crop yields.
                      </p>
                    </div>

                    <hr className="border-white/5" />

                    {/* Vision */}
                    <div className="bg-electric/5 border border-electric/10 rounded-xl p-4.5">
                      <h3 className="font-heading text-sm text-electric uppercase tracking-wider mb-1.5">
                        Long-Term Vision
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed font-body">
                        To position Ragas Aerospace as a leading Indian deep-technology company, establishing a global, highly scalable autonomous robotics ecosystem capable of supporting multiple industries through intelligent robotic platforms.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
