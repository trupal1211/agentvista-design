/** Partner & Vendor Use Case Visual */
const PartnerVendorVisual = () => (
  <div className="w-full h-full flex flex-col gap-3 p-4 overflow-hidden" style={{ background: "#F7FBFE" }}>
    {/* Top: Partnership journey */}
    <div className="flex gap-2 h-14 items-center">
      {[
        { emoji: "🤝", label: "Onboard", color: "#0981B5" },
        { emoji: "📚", label: "Enable", color: "#27A8E0" },
        { emoji: "✓", label: "Check-in", color: "#39B44A" }
      ].map((stage, i) => (
        <div key={i} className="flex-1 flex flex-col items-center justify-center gap-1 p-2 rounded-lg border"
          style={{ 
            background: i === 1 ? "rgba(39,168,224,0.1)" : "rgba(9,129,181,0.05)",
            borderColor: `${stage.color}40`
          }}>
          <div className="text-xl">{stage.emoji}</div>
          <div className="text-[6px] font-bold uppercase tracking-[0.06em]" style={{ color: stage.color }}>{stage.label}</div>
        </div>
      ))}
    </div>

    {/* Middle: Channel satisfaction */}
    <div className="flex gap-2 flex-1 min-h-0">
      {/* Partner satisfaction */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Satisfaction</span>
        <div className="text-2xl font-extrabold" style={{ color: "#0981B5" }}>87%</div>
        <div className="h-1.5 rounded-full bg-gray-200" style={{ background: "rgba(9,129,181,0.1)" }}>
          <div className="h-full rounded-full" style={{ width: "87%", background: "linear-gradient(to right,#0981B5,#39B44A)" }} />
        </div>
      </div>

      {/* Friction reports */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Issues Found</span>
        <div className="flex items-center gap-2">
          <div className="text-2xl font-extrabold" style={{ color: "#005C90" }}>3</div>
          <span className="text-[6.5px] font-semibold" style={{ color: "#39B44A" }}>auto-detected</span>
        </div>
      </div>
    </div>

    {/* Bottom: Query result */}
    <div className="bg-white border rounded-lg p-2.5 flex items-start gap-2" 
      style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
      <span className="text-lg shrink-0">🔍</span>
      <div className="flex-1 min-w-0">
        <div className="text-[6.5px] font-semibold" style={{ color: "#002649" }}>2 partners reported friction</div>
        <div className="text-[6px]" style={{ color: "#0981B5" }}>in Q3 2024</div>
      </div>
    </div>
  </div>
);

export default PartnerVendorVisual;
