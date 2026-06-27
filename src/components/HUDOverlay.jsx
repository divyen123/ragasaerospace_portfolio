/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — HUD Overlay Component
   Decorative heads-up display overlay with corner brackets,
   radar ring, scan line, and ambient data readouts.
   Purely cosmetic — pointer-events-none.
   ══════════════════════════════════════════════════════ */

export default function HUDOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* ── Corner Brackets ── */}
      <div className="hud-corner hud-corner-tl" />
      <div className="hud-corner hud-corner-tr" />
      <div className="hud-corner hud-corner-bl" />
      <div className="hud-corner hud-corner-br" />

      {/* ── Radar Circle (top-right) ── */}
      <div
        className="radar-ring opacity-30"
        style={{
          width: '80px',
          height: '80px',
          top: '40px',
          right: '40px',
        }}
      >
        {/* Inner concentric ring */}
        <div
          className="absolute inset-0 m-auto rounded-full border border-electric/10"
          style={{ width: '50px', height: '50px' }}
        />
        {/* Center dot */}
        <div
          className="absolute rounded-full bg-electric/40"
          style={{
            width: '4px',
            height: '4px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* ── Horizontal Scan Line ── */}
      <div className="scan-line opacity-40" />

      {/* ── Data Readouts ── */}
      {/* Top-left readout */}
      <div className="absolute top-10 left-10 font-mono text-[10px] text-electric/30 space-y-1 select-none">
        <p>SYS: ONLINE</p>
        <p>MODE: AUTONOMOUS</p>
        <p>UPLINK: ACTIVE</p>
      </div>

      {/* Bottom-left readout */}
      <div className="absolute bottom-10 left-10 font-mono text-[10px] text-electric/30 space-y-1 select-none">
        <p>LAT: 28.6139°N</p>
        <p>LNG: 77.2090°E</p>
        <p>ALT: 120m AGL</p>
      </div>

      {/* Bottom-right readout */}
      <div className="absolute bottom-10 right-10 font-mono text-[10px] text-electric/30 space-y-1 text-right select-none">
        <p>FREQ: 2.4GHz</p>
        <p>SIGNAL: -42dBm</p>
        <p>FPS: 60</p>
      </div>

      {/* Top-left status indicator — small blinking dot */}
      <div className="absolute top-12 left-[140px] flex items-center gap-1.5 opacity-30">
        <div className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
        <span className="font-mono text-[9px] text-cyber-green/60">LIVE</span>
      </div>
    </div>
  );
}
