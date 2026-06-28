/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Business Impact Section
   High-Tech Interactive Investment Dashboard & Pitch Report.
   Proportion: 60% Dashboard (Left) | 40% Pitch Report (Right).
   Spacious design with custom SVG Pie, Line, and Column charts.
   Uses font-body font-bold for clean modern headers.
   ══════════════════════════════════════════════════════ */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Activity,
  Users,
  Award,
  Zap,
  CheckCircle2,
  Cpu,
  Joystick,
  Globe,
  Mail,
  MapPin,
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

/* ── Data Structures ── */
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

const benefitsData = [
  { label: 'Disaster Assessment', value: 70, color: '#3b82f6', desc: '60-70% time reduction' },
  { label: 'Industrial Inspection', value: 50, color: '#10b981', desc: '40-50% cost reduction' },
  { label: 'Surveillance Dependency', value: 80, color: '#f97316', desc: '80% manpower reduction' },
  { label: 'Agricultural Yield', value: 20, color: '#eab308', desc: '15-20% efficiency increase' },
];

const employmentData = [
  { phase: 'Phase I', jobs: 15, desc: '10-15 direct R&D roles' },
  { phase: 'Phase II', jobs: 50, desc: '25-50 production roles' },
  { phase: 'Phase III', jobs: 100, desc: '100+ direct/indirect' },
];

export default function BusinessImpact() {
  const [activeReportTab, setActiveReportTab] = useState('problems');
  const [hoveredMarketSeg, setHoveredMarketSeg] = useState(null);
  const [hoveredRevenueSeg, setHoveredRevenueSeg] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredJob, setHoveredJob] = useState(null);

  const circumference = 2 * Math.PI * 30; // 188.5

  return (
    <section id="business-impact" className="relative py-28 md:py-36 overflow-hidden bg-navy-950">
      {/* Sleek background overlays */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/70 to-navy-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        {/* ── Section Header ── */}
        <div className="text-left mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric/30 bg-electric/5 text-electric text-[11px] font-mono tracking-widest uppercase mb-4"
          >
            <TrendingUp size={12} />
            Commercial Potential & Viability
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-body font-bold text-white tracking-wider"
          >
            Business Impact
          </motion.h2>
        </div>

        {/* ─── Grid: 60% Left Dashboard | 40% Right Pitch Report ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ══════════════════════════════════════════════
              LEFT SIDE (60% Width): Interactive Dashboard
              ══════════════════════════════════════════════ */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            
            {/* Top Charts Grid: Donut Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Chart 1: Market Distribution */}
              <GlassCard className="p-6 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <h4 className="font-body font-bold text-base text-white mb-1">
                    Potential Market Distribution
                  </h4>
                  <p className="text-xs text-white/40 mb-6">Illustrative distribution of customer sectors</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                  <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                    <svg width="120" height="120" viewBox="0 0 120 120" className="select-none">
                      <circle cx="60" cy="60" r="30" className="fill-navy-950/60" />
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
                              cx="60"
                              cy="60"
                              r="30"
                              fill="transparent"
                              stroke={seg.color}
                              strokeWidth={isSelected ? 14 : 10}
                              strokeDasharray={circumference}
                              strokeDashoffset={offset}
                              transform={`rotate(${rotation - 90} 60 60)`}
                              className="transition-all duration-300 cursor-pointer"
                              onMouseEnter={() => setHoveredMarketSeg(seg)}
                              onMouseLeave={() => setHoveredMarketSeg(null)}
                            />
                          );
                        });
                      })()}
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase">
                        {hoveredMarketSeg ? 'Share' : 'Total'}
                      </span>
                      <span className="text-lg font-body font-bold text-white text-glow-sm mt-0.5">
                        {hoveredMarketSeg ? `${hoveredMarketSeg.value}%` : '100%'}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1 w-full">
                    {marketSegments.map((seg) => (
                      <div
                        key={seg.label}
                        className={`flex items-center justify-between text-xs px-2 py-1 rounded-lg transition-colors cursor-default ${
                          hoveredMarketSeg?.label === seg.label ? 'bg-white/5' : ''
                        }`}
                        onMouseEnter={() => setHoveredMarketSeg(seg)}
                        onMouseLeave={() => setHoveredMarketSeg(null)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                          <span className="text-white/60 font-body">{seg.label}</span>
                        </div>
                        <span className="font-mono font-bold text-white">{seg.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>

              {/* Chart 2: Projected Revenue Streams */}
              <GlassCard className="p-6 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <h4 className="font-body font-bold text-base text-white mb-1">
                    Projected Revenue Streams
                  </h4>
                  <p className="text-xs text-white/40 mb-6">Illustrative mix for autonomous systems</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                  <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                    <svg width="120" height="120" viewBox="0 0 120 120" className="select-none">
                      <circle cx="60" cy="60" r="30" className="fill-navy-950/60" />
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
                              cx="60"
                              cy="60"
                              r="30"
                              fill="transparent"
                              stroke={seg.color}
                              strokeWidth={isSelected ? 14 : 10}
                              strokeDasharray={circumference}
                              strokeDashoffset={offset}
                              transform={`rotate(${rotation - 90} 60 60)`}
                              className="transition-all duration-300 cursor-pointer"
                              onMouseEnter={() => setHoveredRevenueSeg(seg)}
                              onMouseLeave={() => setHoveredRevenueSeg(null)}
                            />
                          );
                        });
                      })()}
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase">
                        {hoveredRevenueSeg ? 'Share' : 'Total'}
                      </span>
                      <span className="text-lg font-body font-bold text-white text-glow-sm mt-0.5">
                        {hoveredRevenueSeg ? `${hoveredRevenueSeg.value}%` : '100%'}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1 w-full">
                    {revenueSegments.map((seg) => (
                      <div
                        key={seg.label}
                        className={`flex items-center justify-between text-xs px-2 py-1 rounded-lg transition-colors cursor-default ${
                          hoveredRevenueSeg?.label === seg.label ? 'bg-white/5' : ''
                        }`}
                        onMouseEnter={() => setHoveredRevenueSeg(seg)}
                        onMouseLeave={() => setHoveredRevenueSeg(null)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                          <span className="text-white/60 font-body">{seg.label}</span>
                        </div>
                        <span className="font-mono font-bold text-white">{seg.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Bottom Charts Grid: Area Chart & Column Chart */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Chart 3: Employment Growth Trend (SVG Area Chart) */}
              <GlassCard className="p-6 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <h4 className="font-body font-bold text-base text-white mb-1">
                    Employment Projections Trend
                  </h4>
                  <p className="text-xs text-white/40 mb-6">Direct & indirect workforce scaling</p>
                </div>

                <div className="relative">
                  {/* SVG Area Chart */}
                  <svg viewBox="0 0 240 110" className="w-full h-auto overflow-visible select-none">
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00b4ff" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#00b4ff" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid lines */}
                    <line x1="30" y1="20" x2="220" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                    <line x1="30" y1="55" x2="220" y2="55" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                    <line x1="30" y1="90" x2="220" y2="90" stroke="rgba(255,255,255,0.08)" />

                    {/* Fills & Lines */}
                    <path
                      d="M 30,90 Q 75,85 120,55 T 210,20 L 210,90 Z"
                      fill="url(#areaGrad)"
                    />
                    <path
                      d="M 30,90 Q 75,85 120,55 T 210,20"
                      fill="none"
                      stroke="#00b4ff"
                      strokeWidth="2.5"
                    />

                    {/* Nodes */}
                    {[
                      { x: 30, y: 90, val: '15 Jobs', label: 'Phase I' },
                      { x: 120, y: 55, val: '50 Jobs', label: 'Phase II' },
                      { x: 210, y: 20, val: '100+ Jobs', label: 'Phase III' },
                    ].map((node, i) => (
                      <g key={i} className="cursor-pointer" onMouseEnter={() => setHoveredJob(node)} onMouseLeave={() => setHoveredJob(null)}>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={hoveredJob?.label === node.label ? 6 : 4}
                          className="fill-navy-950 stroke-electric"
                          strokeWidth="2.5"
                        />
                        <text x={node.x} y="104" textAnchor="middle" className="fill-white/40 text-[9px] font-mono">
                          {node.label}
                        </text>
                      </g>
                    ))}
                  </svg>

                  {/* Dynamic Tooltip inside card */}
                  <div className="h-6 flex items-center justify-center mt-3">
                    <AnimatePresence mode="wait">
                      {hoveredJob ? (
                        <motion.span
                          key={hoveredJob.label}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-[11px] font-mono text-electric text-glow-sm"
                        >
                          {hoveredJob.label} Target: <strong>{hoveredJob.val}</strong>
                        </motion.span>
                      ) : (
                        <span className="text-[11px] font-mono text-white/30">Hover nodes to view targets</span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </GlassCard>

              {/* Chart 4: Expected Benefits (SVG Column Chart) */}
              <GlassCard className="p-6 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <h4 className="font-body font-bold text-base text-white mb-1">
                    Expected Benefits Rating
                  </h4>
                  <p className="text-xs text-white/40 mb-6">Efficiency scaling vs. conventional methods</p>
                </div>

                <div className="relative">
                  <svg viewBox="0 0 240 100" className="w-full h-auto overflow-visible select-none">
                    <line x1="10" y1="85" x2="230" y2="85" stroke="rgba(255,255,255,0.08)" />
                    {benefitsData.map((benefit, i) => {
                      const barWidth = 24;
                      const x = 30 + i * 50;
                      const barHeight = (benefit.value / 100) * 70;
                      const y = 85 - barHeight;
                      const isHovered = hoveredBenefit?.label === benefit.label;

                      return (
                        <g key={benefit.label} className="cursor-pointer" onMouseEnter={() => setHoveredBenefit(benefit)} onMouseLeave={() => setHoveredBenefit(null)}>
                          {/* Bar background track */}
                          <rect x={x} y="15" width={barWidth} height="70" rx="3" className="fill-white/[0.03]" />
                          {/* Filled bar */}
                          <rect
                            x={x}
                            y={y}
                            width={barWidth}
                            height={barHeight}
                            rx="3"
                            fill={benefit.color}
                            className="transition-all duration-300 opacity-80 hover:opacity-100"
                            style={{
                              filter: isHovered ? 'drop-shadow(0 0 8px rgba(0,180,255,0.5))' : 'none',
                            }}
                          />
                          {/* Value label */}
                          <text x={x + barWidth / 2} y={y - 4} textAnchor="middle" className="fill-white/80 font-mono text-[9px] font-bold">
                            {benefit.value}%
                          </text>
                        </g>
                      );
                    })}
                  </svg>

                  <div className="h-6 flex items-center justify-center mt-3 text-center">
                    <AnimatePresence mode="wait">
                      {hoveredBenefit ? (
                        <motion.span
                          key={hoveredBenefit.label}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-[11px] font-mono text-white/70"
                        >
                          <strong className="text-electric">{hoveredBenefit.label}:</strong> {hoveredBenefit.desc}
                        </motion.span>
                      ) : (
                        <span className="text-[11px] font-mono text-white/30">Hover columns to view descriptions</span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </GlassCard>

            </div>
          </div>

          {/* ══════════════════════════════════════════════
              RIGHT SIDE (40% Width): Pitch Report Contents
              ══════════════════════════════════════════════ */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            
            {/* Tabs for content categorization */}
            <div className="flex items-center justify-between p-1 glass rounded-xl border border-white/5">
              <button
                onClick={() => setActiveReportTab('problems')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg font-heading text-[10px] uppercase tracking-wider transition-all duration-300 ${
                  activeReportTab === 'problems'
                    ? 'bg-electric text-navy-950 font-bold shadow-glow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Problems
              </button>
              <button
                onClick={() => setActiveReportTab('employment')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg font-heading text-[10px] uppercase tracking-wider transition-all duration-300 ${
                  activeReportTab === 'employment'
                    ? 'bg-electric text-navy-950 font-bold shadow-glow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Sectors
              </button>
              <button
                onClick={() => setActiveReportTab('strategic')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg font-heading text-[10px] uppercase tracking-wider transition-all duration-300 ${
                  activeReportTab === 'strategic'
                    ? 'bg-electric text-navy-950 font-bold shadow-glow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Strategy
              </button>
            </div>

            <div className="glass border border-white/5 rounded-2xl p-6 md:p-8 space-y-6 min-h-[500px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {activeReportTab === 'problems' && (
                  <motion.div
                    key="problems-content"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-body font-bold text-lg text-white mb-2 tracking-wider">
                        Problems Addressed
                      </h3>
                      <p className="text-xs text-white/50 leading-relaxed">
                        Traditional drone systems require continuous pilot controls and lack intelligent swarm collaboration. RAIC addresses:
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Prob 1 */}
                      <div className="flex items-start gap-3">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                        <div>
                          <strong className="text-xs text-white/80 block">Disaster Delays</strong>
                          <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">
                            Slow assessment due to destroyed ground routes. RAIC automates victim search.
                          </p>
                        </div>
                      </div>

                      {/* Prob 2 */}
                      <div className="flex items-start gap-3">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                        <div>
                          <strong className="text-xs text-white/80 block">High Inspection Costs</strong>
                          <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">
                            Manual checks of lines/refineries are risky. RAIC cuts inspection costs by 40-50%.
                          </p>
                        </div>
                      </div>

                      {/* Prob 3 */}
                      <div className="flex items-start gap-3">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                        <div>
                          <strong className="text-xs text-white/80 block">Perimeter Security</strong>
                          <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">
                            Continuous surveillance of large perimeters with non-stop autonomous swarm patrol cycles.
                          </p>
                        </div>
                      </div>

                      {/* Prob 4 */}
                      <div className="flex items-start gap-3">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                        <div>
                          <strong className="text-xs text-white/80 block">Agricultural Yield</strong>
                          <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">
                            Autonomous multispectral scanning spots early crop stress, raising productivity by 15-20%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeReportTab === 'employment' && (
                  <motion.div
                    key="employment-content"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-body font-bold text-lg text-white mb-2 tracking-wider">
                        Markets & Job Growth
                      </h3>
                      <p className="text-xs text-white/50 leading-relaxed">
                        High-skill jobs generated locally in software, aerospace design, manufacturing, and payload testing.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Market segment detail */}
                      <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                        <strong className="text-xs text-white/80 block mb-1">Target Segments</strong>
                        <p className="text-[11px] text-white/50 leading-relaxed">
                          Defence organizations, NDRF authorities, police forces, refinery operators, smart cities, and precision agri-tech operators.
                        </p>
                      </div>

                      <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                        <strong className="text-xs text-white/80 block mb-1">Revenue Opportunities</strong>
                        <p className="text-[11px] text-white/50 leading-relaxed">
                          Hardware sales of swarm fleets, RAIC autonomy software licensing, Annual Maintenance Contracts (AMC), and Mission-as-a-Service (MaaS).
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeReportTab === 'strategic' && (
                  <motion.div
                    key="strategic-content"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-body font-bold text-lg text-white mb-2 tracking-wider">
                        Strategic Alignment
                      </h3>
                      <p className="text-xs text-white/50 leading-relaxed">
                        Aligned with national industrial and deep-tech missions:
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-white/70">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-electric" />
                        Atmanirbhar Bharat
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-electric" />
                        Make in India
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-electric" />
                        Digital India
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-electric" />
                        Drone Shakti
                      </div>
                    </div>

                    <div className="p-3.5 bg-electric/5 border border-electric/10 rounded-xl mt-4">
                      <strong className="text-xs text-electric block mb-1">Long-Term Vision</strong>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        To build a scalable robotics ecosystem, positioning Ragas Aerospace as a leading Indian deep-technology provider specializing in intelligent aerospace systems.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Bottom tag line */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/30 uppercase tracking-widest">
                <span>Ragas Aerospace R&D</span>
                <span>Investor Report</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
